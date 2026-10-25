import { useState } from 'react'
import projects from '../content/projects.json'

const skills = [
  ['Languages', ['TypeScript', 'JavaScript', 'Java', 'C++']],
  ['Frontend', ['React', 'Next.js', 'Tailwind CSS', 'HTML', 'CSS']],
  ['Backend', ['Node.js', 'Express.js', 'REST APIs', 'JWT', 'bcrypt']],
  ['Database', ['MongoDB', 'Mongoose', 'MySQL']],
  ['AI / Retrieval', ['Gemini API', 'Vector Embeddings', 'Semantic Retrieval', 'RAG']],
  ['Tools', ['Git', 'GitHub', 'Postman', 'Vercel', 'Vite', 'Recharts', 'Vitest']],
  ['Core CS', ['DSA', 'OOP', 'DBMS', 'OS', 'Networks']],
]
const resumeHref = 'https://drive.google.com/file/d/17V2OX8-c4_tUYp9qh7wAQTPa6l0r3QnG/view?usp=sharing'
const linkedInHref = 'https://www.linkedin.com/in/sepal-sagar'

function ArrowUpRight() { return <svg aria-hidden="true" viewBox="0 0 16 16"><path d="M4 12 12 4M6 4h6v6" /></svg> }
function GitHubIcon() { return <svg aria-hidden="true" viewBox="0 0 16 16"><path d="M8 1.5a6.5 6.5 0 0 0-2.06 12.66c.33.06.45-.14.45-.32v-1.26c-1.83.4-2.22-.78-2.22-.78-.3-.76-.74-.96-.74-.96-.6-.41.05-.4.05-.4.67.05 1.03.7 1.03.7.6 1.02 1.56.73 1.94.56.06-.43.23-.73.43-.9-1.46-.17-3-.73-3-3.26 0-.72.26-1.31.68-1.77-.07-.17-.3-.84.07-1.75 0 0 .56-.18 1.79.68A6.2 6.2 0 0 1 8 4.78c.55 0 1.1.07 1.62.22 1.24-.86 1.79-.68 1.79-.68.37.91.14 1.58.07 1.75.42.46.68 1.05.68 1.77 0 2.54-1.55 3.09-3.02 3.25.24.2.45.57.45 1.15v1.7c0 .18.12.39.45.32A6.5 6.5 0 0 0 8 1.5Z" /></svg> }

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const copyEmail = async () => {
    await navigator.clipboard.writeText('sepalsagar1234@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 1600)
  }
  return <>
    <a className="skip-link" href="#top">Skip to content</a>
    <header className="site-header"><nav className="nav container" aria-label="Main navigation">
      <a className="brand" href="#top"><span className="mark">▲</span> sepal.sagar</a>
      <button className="menu-button" type="button" aria-expanded={menuOpen} aria-controls="navigation" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}><span className={`menu-icon ${menuOpen ? 'is-open' : ''}`}><i /><i /></span></button>
      <div id="navigation" className={`nav-links ${menuOpen ? 'open' : ''}`}>{['About', 'Skills', 'Projects', 'Experience', 'Leadership', 'Contact'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}</div>
      <a className="nav-cta" href={resumeHref} target="_blank" rel="noreferrer">Resume <ArrowUpRight /></a>
    </nav></header>
    <main id="top">
      <section className="hero"><div className="hero-glow" aria-hidden="true" /><div className="container hero-grid"><div className="hero-content"><p className="kicker"><span /> Available for internships</p><h1>Backend-focused full-stack developer building <em>secure APIs and AI-powered apps.</em></h1><p className="hero-copy">I’m Sepal Sagar, strongest in TypeScript and JavaScript with Node.js, Express, secure REST APIs, MongoDB, React, and applied AI. I’m currently graduating in 2027 and seeking internships.</p><div className="hero-actions"><a className="button button-dark" href="#projects">View projects <ArrowUpRight /></a><a className="button button-outline" href={resumeHref} target="_blank" rel="noreferrer">Resume <ArrowUpRight /></a></div></div><div className="hero-frame"><img src="/projects/biznet/dashboard.webp" alt="BizNet dashboard" /></div></div><div className="container signal-row"><span>01 — Secure APIs</span><span>02 — Applied AI</span><span>03 — Full-stack products</span></div></section>
      <section className="section about-section" id="about"><div className="container two-column"><p className="section-label">01 / About</p><div><h2>Secure APIs and AI-powered apps.</h2><p className="body-copy">I build backend-focused full-stack products with TypeScript and JavaScript, Node.js and Express, secure REST APIs, MongoDB, React, and applied AI using semantic retrieval, vector embeddings, RAG, and the Gemini API.</p><a className="inline-link" href="https://github.com/sepalsagar" target="_blank" rel="noreferrer">More on GitHub <ArrowUpRight /></a></div></div></section>
      <section className="section skills-section" id="skills"><div className="container"><div className="section-heading"><p className="section-label">02 / Toolkit</p><h2>Skills, strongest first.</h2></div><div className="skills-grid">{skills.map(([title, items], index) => <article className="skill-card" key={title}><span>0{index + 1}</span><h3>{title}</h3><div className="chip-list">{items.map((item) => <span className="chip" key={item}>{item}</span>)}</div></article>)}</div></div></section>
      <section className="section projects-section" id="projects"><div className="container"><div className="section-heading"><div><p className="section-label">03 / Selected work</p><h2>Proof in products.</h2></div></div><div className="projects-grid">{projects.map((project, index) => <article className="project-card" key={project.slug}><a className="project-card-link" href={`/projects/${project.slug}/`}><img className="project-thumb" src={project.screenshots[0]?.src || '/og-image.png'} alt={project.screenshots[0]?.alt || `${project.name} project`} /><span className="project-index">0{index + 1}</span><h3>{project.name}</h3><p>{project.homeDescription}</p></a><div className="project-card-footer"><span className="tags">{(project.slug === 'biznet' ? ['React', 'TypeScript', 'Express', 'Gemini'] : ['Next.js', 'MongoDB', 'Embeddings', 'JWT']).map((item) => <span className="chip" key={item}>{item}</span>)}</span><span className="project-actions"><a href={project.liveUrl} target="_blank" rel="noreferrer">Live demo <ArrowUpRight /></a><a href={project.githubUrl} target="_blank" rel="noreferrer"><GitHubIcon /> GitHub</a></span></div></article>)}</div></div></section>
      <section className="section details-section" id="experience"><div className="container two-column"><p className="section-label">04 / Experience</p><div className="timeline"><article><span>Mar 2026–Apr 2026</span><h3>Web Developer Intern</h3><p>CSIB (AICTE Internship)</p><p>Built frontend modules for an internal task management dashboard with REST API integration; designed task-tracking workflows with status transitions and user assignment.</p></article></div></div></section>
      <section className="section details-section" id="leadership"><div className="container two-column"><p className="section-label">05 / Leadership</p><div className="timeline"><article><span>2025–Present</span><h3>Governor</h3><p>Code Vision (college tech club)</p></article><article><span>2024–2025</span><h3>Organizer</h3><p>Cybercell (college tech club)</p></article></div></div></section>
      <section className="section details-section"><div className="container two-column"><p className="section-label">06 / Education</p><div className="timeline"><article><span>2023–2027 · CGPA 8.63/10</span><h3>B.Tech in Computer Science and Engineering</h3><p>Bengal College of Engineering and Technology</p></article></div></div></section>
      <section className="contact-section" id="contact"><div className="container contact-wrap"><p className="section-label">07 / Contact</p><div><h2>Looking for an internship.</h2><p>For internship opportunities or a good engineering conversation, my inbox is open.</p><div className="contact-actions"><a href="mailto:sepalsagar1234@gmail.com?subject=Hello%20Sepal">sepalsagar1234@gmail.com</a><button className="copy-button" type="button" onClick={copyEmail}>{copied ? 'Copied!' : 'Copy email'}</button></div></div><a className="button button-light" href="mailto:sepalsagar1234@gmail.com?subject=Hello%20Sepal">Get in touch <ArrowUpRight /></a></div></section>
    </main>
    <footer className="footer container"><span>© {new Date().getFullYear()} Sepal Sagar</span><div><a href="https://github.com/sepalsagar" target="_blank" rel="noreferrer">GitHub</a><a href="mailto:sepalsagar1234@gmail.com">Email</a><a href={resumeHref} target="_blank" rel="noreferrer">Resume</a><a href={linkedInHref} target="_blank" rel="noreferrer">LinkedIn</a></div></footer>
  </>
}
