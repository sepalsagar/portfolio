import { useState } from 'react'

const projects = [
  { name: 'BizNet', description: 'A full-stack business operations workspace for managing sales, inventory, customers, suppliers, purchasing, analytics, pricing decisions, and AI-assisted business insights.', stack: ['React 19', 'TypeScript', 'Express.js', 'Gemini API', 'Tailwind CSS', 'Recharts'], liveHref: 'https://biznet-nine.vercel.app/', githubHref: 'https://github.com/sepalsagar/BizNet' },
  { name: 'DocuMind', description: 'Semantic document intelligence platform: a full-stack application that turns PDFs into searchable, evidence-backed knowledge. It covers page-aware PDF ingestion, overlapping document chunking, semantic vector embeddings, cosine similarity retrieval, and grounded answers with source and page citations, plus JWT HttpOnly authentication, user-scoped ownership, rename and delete management, and a responsive document workspace.', stack: ['Next.js', 'TypeScript', 'MongoDB', 'Mongoose', 'JWT', 'bcrypt', 'Gemini API', 'Tailwind CSS'], liveHref: 'http://documind-git-main-sagar-e85d.vercel.app/', githubHref: 'https://github.com/sepalsagar/Documind' },
]

const skills = [
  ['Languages', 'JavaScript, TypeScript, Python, SQL, C, C++'], ['Frontend', 'React, Redux Toolkit, Vite, HTML, CSS'], ['Backend', 'Node.js, Express, Flask, REST APIs, WebSockets'], ['Data', 'MongoDB, MySQL, PostgreSQL, Redis, Prisma'], ['Security', 'JWT, RBAC, bcrypt, rate limiting'], ['Delivery', 'Docker, GitHub Actions, Vercel'],
]

function ArrowUpRight() { return <svg aria-hidden="true" viewBox="0 0 16 16"><path d="M4 12 12 4M6 4h6v6" /></svg> }
function GitHubIcon() { return <svg aria-hidden="true" viewBox="0 0 16 16"><path d="M8 1.5a6.5 6.5 0 0 0-2.06 12.66c.33.06.45-.14.45-.32v-1.26c-1.83.4-2.22-.78-2.22-.78-.3-.76-.74-.96-.74-.96-.6-.41.05-.4.05-.4.67.05 1.03.7 1.03.7.6 1.02 1.56.73 1.94.56.06-.43.23-.73.43-.9-1.46-.17-3-.73-3-3.26 0-.72.26-1.31.68-1.77-.07-.17-.3-.84.07-1.75 0 0 .56-.18 1.79.68A6.2 6.2 0 0 1 8 4.78c.55 0 1.1.07 1.62.22 1.24-.86 1.79-.68 1.79-.68.37.91.14 1.58.07 1.75.42.46.68 1.05.68 1.77 0 2.54-1.55 3.09-3.02 3.25.24.2.45.57.45 1.15v1.7c0 .18.12.39.45.32A6.5 6.5 0 0 0 8 1.5Z" /></svg> }
function MenuIcon({ open }) { return <span aria-hidden="true" className={`menu-icon ${open ? 'is-open' : ''}`}><i /><i /></span> }

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  return <>
    <a className="skip-link" href="#top">Skip to content</a>
    <header className="site-header"><nav className="nav container" aria-label="Main navigation">
      <a className="brand" href="#top" onClick={closeMenu}><span className="mark">▲</span> sepal.sagar</a>
      <button className="menu-button" type="button" aria-expanded={menuOpen} aria-controls="navigation" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}><MenuIcon open={menuOpen} /></button>
      <div id="navigation" className={`nav-links ${menuOpen ? 'open' : ''}`}>{['About', 'Skills', 'Projects', 'Contact'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}</div>
      <a className="nav-cta" href="mailto:sepalsagar1234@gmail.com">Let’s talk <ArrowUpRight /></a>
    </nav></header>
    <main id="top">
      <section className="hero"><div className="hero-glow" aria-hidden="true" /><div className="container hero-content"><p className="kicker"><span /> Available for internships &amp; collaborations</p><h1>I build software that holds up <em>in the real world.</em></h1><p className="hero-copy">I’m Sepal Sagar, a computer science student and backend-focused developer. I enjoy turning product ideas into reliable APIs, real-time systems, and clear user experiences.</p><div className="hero-actions"><a className="button button-dark" href="#projects">See selected work <ArrowUpRight /></a><a className="text-link" href="mailto:sepalsagar1234@gmail.com">sepalsagar1234@gmail.com</a></div></div><div className="container signal-row" aria-label="Areas of focus"><span>01 — Backend systems</span><span>02 — Product engineering</span><span>03 — Clean APIs</span></div></section>
      <section className="section about-section" id="about"><div className="container two-column"><p className="section-label">01 / About</p><div><h2>Practical engineering, with the details cared for.</h2><p className="body-copy">My work is grounded in the parts of software that make a product dependable: thoughtful data flow, well-defined APIs, security, and the small decisions that make a system easier to maintain.</p><a className="inline-link" href="https://github.com/sepalsagar" target="_blank" rel="noreferrer">More on GitHub <ArrowUpRight /></a></div></div></section>
      <section className="section skills-section" id="skills"><div className="container"><div className="section-heading"><p className="section-label">02 / Toolkit</p><h2>Tools I reach for.</h2></div><div className="skills-grid">{skills.map(([title, items], index) => <article className="skill-card" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{items}</p></article>)}</div></div></section>
      <section className="section projects-section" id="projects"><div className="container"><div className="section-heading projects-heading"><div><p className="section-label">03 / Selected work</p><h2>Products I’ve built.</h2></div><p>Two full-stack products, each built end to end — a business operations workspace and a semantic document intelligence platform.</p></div><div className="projects-grid">{projects.map((project, index) => <article className="project-card" key={project.name}><div className="project-top"><span className="project-index">0{index + 1}</span></div><div><h3>{project.name}</h3><p>{project.description}</p></div><ul className="tags">{project.stack.map((item) => <li key={item}>{item}</li>)}</ul><div className="project-actions"><a className="project-link project-link-primary" href={project.liveHref} target="_blank" rel="noreferrer">Live Demo <ArrowUpRight /></a><a className="project-link" href={project.githubHref} target="_blank" rel="noreferrer"><GitHubIcon /> GitHub</a></div></article>)}</div></div></section>
      <section className="contact-section" id="contact"><div className="container contact-wrap"><p className="section-label">04 / Contact</p><div><h2>Have an idea that needs building?</h2><p>For internships, freelance work, or a good engineering conversation, my inbox is open.</p></div><a className="button button-light" href="mailto:sepalsagar1234@gmail.com">Start a conversation <ArrowUpRight /></a></div></section>
    </main>
    <footer className="footer container"><span>© {new Date().getFullYear()} Sepal Sagar</span><div><a href="https://github.com/sepalsagar" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/sepal-sagar-69a757231" target="_blank" rel="noreferrer">LinkedIn</a></div></footer>
  </>
}
