import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { marked } from 'marked'
import sanitizeHtml from 'sanitize-html'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const projects = JSON.parse(await fs.readFile(path.join(root, 'content', 'projects.json'), 'utf8'))
const dist = path.join(root, 'dist')
const cssAsset = (await fs.readdir(path.join(dist, 'assets'))).find((file) => file.endsWith('.css'))
const clean = (markdown) => sanitizeHtml(marked.parse(markdown), {
  allowedTags: ['p', 'strong', 'em', 'ul', 'ol', 'li', 'a', 'code', 'h3', 'h4'],
  allowedAttributes: { a: ['href', 'title'] },
  allowedSchemes: ['http', 'https'],
})
function section(readme, heading) {
  const escaped = heading.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const match = readme.match(new RegExp(`^##\\s+(?:\\d+\\.\\s+)?${escaped}\\s*$`, 'im'))
  if (!match) return ''
  const rest = readme.slice(match.index + match[0].length)
  const next = rest.search(/^##\s/m)
  return (next >= 0 ? rest.slice(0, next) : rest).trim()
}
function topIntro(readme) {
  return readme.split(/^##\s/m)[0].replace(/^#.*$/m, '').trim().split(/\n\s*\n/).filter(Boolean).slice(0, 2).join('\n\n')
}
function limitList(markdown, count) {
  const items = [...markdown.matchAll(/^- (.+)$/gm)].map((match) => `- ${match[1]}`)
  return { shown: items.slice(0, count).join('\n'), rest: items.slice(count).join('\n') }
}
function gallery(project) {
  if (!project.screenshots.length) return ''
  return `<section><h2>Screenshots</h2><div class="gallery">${project.screenshots.map((image) => `<button class="gallery-item" type="button" data-image="${image.src}" aria-label="Open ${image.alt}"><img src="${image.src}" alt="${image.alt}" width="${image.width}" height="${image.height}" loading="lazy"></button>`).join('')}</div></section>`
}
function tableToList(markdown) {
  return markdown.split('\n').filter((line) => line.trim().startsWith('|') && !line.includes('---')).map((line) => {
    const cells = line.split('|').map((cell) => cell.trim()).filter(Boolean)
    return cells.length >= 2 ? `- **${cells[0]}:** ${cells.slice(1).join(' — ')}` : ''
  }).filter(Boolean).join('\n')
}
function body(project, readme) {
  if (project.slug === 'biznet') {
    const features = limitList(section(readme, 'Key Features'), 6)
    return `<section><h2>What it does</h2><p>${project.homeDescription}</p>${clean(topIntro(readme))}${clean(section(readme, 'Why It Was Built'))}</section><section><h2>Key features</h2>${clean(features.shown)}${features.rest ? `<details><summary>More features</summary>${clean(features.rest)}</details>` : ''}</section><section><h2>How it works</h2>${clean(section(readme, 'Demo and Client Workspaces'))}</section>${gallery(project)}<section><h2>Technology</h2>${clean(section(readme, 'Technology Stack'))}</section><section class="scope"><h2>Honest scope</h2>${clean(section(readme, 'Current Limitations'))}</section>`
  }
  const steps = section(readme, 'How It Works').replace(/```[\s\S]*?```/g, '').split(/\n(?=\d+\.\s)/).filter(Boolean).slice(0, 6).join('\n')
  return `<section><h2>What it does</h2>${clean(section(readme, 'Overview'))}</section><section><h2>How it works</h2>${clean(steps)}</section><section><h2>Features</h2>${clean(tableToList(section(readme, 'Features')))}</section><section><h2>Technology</h2>${clean(tableToList(section(readme, 'Tech Stack')))}</section><section class="scope"><h2>Honest scope</h2>${clean(section(readme, 'Known Limitations').split(/\n(?=- )/).slice(0, 3).join('\n'))}</section>`
}
function page(project, readme) {
  const canonical = `https://www.sepalsagar.me/projects/${project.slug}/`
  const image = project.screenshots[0]?.src ? `https://www.sepalsagar.me${project.screenshots[0].src}` : 'https://www.sepalsagar.me/og-image.png'
  const schema = JSON.stringify({ '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: project.name, url: canonical, description: project.homeDescription, applicationCategory: 'BusinessApplication', author: { '@type': 'Person', name: 'Sepal Sagar', url: 'https://www.sepalsagar.me/' } })
  return `<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${project.name} — Sepal Sagar</title><meta name="description" content="${project.homeDescription}"><link rel="canonical" href="${canonical}"><meta property="og:type" content="article"><meta property="og:url" content="${canonical}"><meta property="og:title" content="${project.name} — Sepal Sagar"><meta property="og:description" content="${project.homeDescription}"><meta property="og:image" content="${image}"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:image" content="${image}"><link rel="stylesheet" href="/assets/${cssAsset}"><script type="application/ld+json">${schema}</script></head><body><header class="site-header"><nav class="nav container"><a class="brand" href="/"><span class="mark">▲</span> sepal.sagar</a><div class="nav-links"><a href="/">Portfolio</a><a href="${project.liveUrl}">Live demo</a><a href="${project.githubUrl}">GitHub</a></div><a class="nav-cta" href="https://drive.google.com/file/d/17V2OX8-c4_tUYp9qh7wAQTPa6l0r3QnG/view?usp=sharing">Resume</a></nav></header><main class="project-page container"><a class="back-link" href="/">← Back to portfolio</a><p class="kicker"><span></span> Project</p><h1>${project.name}</h1><p class="project-tagline">${project.tagline}</p><div class="project-page-actions"><a class="button button-dark" href="${project.liveUrl}">Live demo</a><a class="button button-outline" href="${project.githubUrl}">GitHub</a></div>${body(project, readme)}</main><footer class="footer container"><span>© ${new Date().getFullYear()} Sepal Sagar</span><div><a href="https://github.com/sepalsagar">GitHub</a><a href="mailto:sepalsagar1234@gmail.com">Email</a><a href="https://drive.google.com/file/d/17V2OX8-c4_tUYp9qh7wAQTPa6l0r3QnG/view?usp=sharing">Resume</a></div></footer><div class="lightbox" hidden><button type="button" aria-label="Close image">×</button><img alt=""></div><script>document.querySelectorAll('.gallery-item').forEach((item)=>item.addEventListener('click',()=>{const box=document.querySelector('.lightbox');box.hidden=false;box.querySelector('img').src=item.dataset.image;box.querySelector('img').alt=item.querySelector('img').alt}));document.querySelector('.lightbox button').addEventListener('click',()=>document.querySelector('.lightbox').hidden=true)</script></body></html>`
}
for (const project of projects) {
  const readme = await fs.readFile(path.join(root, 'content', 'projects', `${project.slug}.readme.md`), 'utf8')
  const outputDir = path.join(dist, 'projects', project.slug)
  await fs.mkdir(outputDir, { recursive: true })
  await fs.writeFile(path.join(outputDir, 'index.html'), page(project, readme))
}
