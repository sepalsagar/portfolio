import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const contentDir = path.join(root, 'content')
const projectsDir = path.join(contentDir, 'projects')
const publicDir = path.join(root, 'public', 'projects')
const dataPath = path.join(contentDir, 'projects.json')
const projects = JSON.parse(await fs.readFile(dataPath, 'utf8'))

async function fetchText(url) {
  const response = await fetch(url)
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}`)
  return response.text()
}

async function fetchBuffer(url) {
  const response = await fetch(url)
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}`)
  return Buffer.from(await response.arrayBuffer())
}

function screenshotLinks(readme) {
  const start = readme.search(/^##\s+.*Screenshots/im)
  if (start < 0) return []
  const rest = readme.slice(start)
  const next = rest.search(/^##\s/m)
  const section = next > 0 ? rest.slice(0, next) : rest
  return [...section.matchAll(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g)].map((match) => ({
    alt: match[1],
    source: match[2],
    filename: path.basename(match[2]),
  }))
}

for (const project of projects) {
  const snapshotPath = path.join(projectsDir, `${project.slug}.readme.md`)
  await fs.mkdir(projectsDir, { recursive: true })
  let readme
  try {
    readme = await fetchText(project.readmeUrl)
    await fs.writeFile(snapshotPath, readme)
  } catch (error) {
    readme = await fs.readFile(snapshotPath, 'utf8')
    console.warn(`Using README snapshot for ${project.name}: ${error.message}`)
  }

  const images = screenshotLinks(readme)
  const outputDir = path.join(publicDir, project.slug)
  await fs.mkdir(outputDir, { recursive: true })
  project.screenshots = []
  for (const image of images) {
    const repo = project.slug === 'biznet' ? 'BizNet' : 'Documind'
    const sourceUrl = image.source.startsWith('http') ? image.source : `https://raw.githubusercontent.com/sepalsagar/${repo}/main/${image.source.replace(/^\/+/, '')}`
    const outputName = image.filename.replace(/\.[^.]+$/, '.webp')
    try {
      const buffer = await fetchBuffer(sourceUrl)
      const metadata = await sharp(buffer).resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 82 }).toFile(path.join(outputDir, outputName))
      project.screenshots.push({ alt: image.alt, src: `/projects/${project.slug}/${outputName}`, width: metadata.width, height: metadata.height })
    } catch (error) {
      console.warn(`Skipping ${project.name} screenshot ${image.filename}: ${error.message}`)
    }
  }
}

await fs.writeFile(dataPath, `${JSON.stringify(projects, null, 2)}\n`)
const indexPath = path.join(root, 'index.html')
const index = await fs.readFile(indexPath, 'utf8')
const projectMarkup = `<!-- PROJECTS_START --><section id="projects"><h2>Proof in products.</h2>${projects.map((project) => `<article><a href="/projects/${project.slug}/"><h3>${project.name}</h3>${project.screenshots[0] ? `<img src="${project.screenshots[0].src}" alt="${project.screenshots[0].alt}">` : ''}<p>${project.homeDescription}</p></a><a href="${project.liveUrl}">Live demo</a><a href="${project.githubUrl}">GitHub</a></article>`).join('')}<\/section><!-- PROJECTS_END -->`
await fs.writeFile(indexPath, index.replace(/<!-- PROJECTS_START -->[\s\S]*?<!-- PROJECTS_END -->/, projectMarkup))
