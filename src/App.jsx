import { useState } from 'react'

const projects = [
  {
    name: 'DocuMind',
    description: 'Problem: PDFs can be difficult to search and answer from with reliable evidence. Built: a full-stack semantic document intelligence platform with page-aware PDF extraction, overlapping chunking, vector embeddings, cosine-similarity retrieval, and source/page citations, plus JWT authentication with HttpOnly cookies, bcrypt, user-scoped MongoDB documents, and ownership-protected REST APIs. Stack: Next.js, TypeScript, MongoDB, Mongoose, JWT, bcrypt, Gemini API, vector embeddings, semantic retrieval, and RAG. Result: [ADD: result/number].',
    stack: ['Next.js', 'TypeScript', 'MongoDB', 'Mongoose', 'JWT', 'bcrypt', 'Gemini API', 'Vector Embeddings', 'Semantic Retrieval', 'RAG'],
    liveHref: 'https://documind-zeta-fawn.vercel.app/',
    githubHref: 'https://github.com/sepalsagar/Documind',
  },
  {
    name: 'BizNet',
    description: 'Problem: business operations need one workspace for day-to-day decisions. Built: a business operations workspace covering sales, inventory, customers, suppliers, purchasing, analytics, pricing simulation, and discount analysis, with Demo and Client workspaces, Express APIs, Gemini integration, validation, rate limiting, deterministic fallbacks, a React and TypeScript UI, data visualizations, and Vitest and Testing Library tests. Stack: React, TypeScript, Express.js, Gemini API, Vitest, and Testing Library. Result: [ADD: result/number].',
    stack: ['React', 'TypeScript', 'Express.js', 'Gemini API', 'Vitest', 'Testing Library'],
    liveHref: 'https://biznet-nine.vercel.app/',
    githubHref: 'https://github.com/sepalsagar/BizNet',
  },
]

const skills = [
  ['Languages', 'TypeScript, JavaScript, Java, C++'],
  ['Frontend', 'React, Tailwind CSS, HTML, CSS, Next.js'],
  ['Backend', 'Node.js, Express.js, REST APIs, JWT, bcrypt'],
  ['Database', 'MongoDB, Mongoose, MySQL'],
  ['AI / Retrieval', 'Gemini API, Vector Embeddings, Semantic Retrieval, RAG'],
  ['Tools', 'Git, GitHub, Postman, Vercel, Vitest'],
  ['Core CS', 'DSA, OOP, DBMS, OS, Networks'],
]

const linkedInHref = '{{LINKEDIN_URL}}'

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
      <div id="navigation" className={`nav-links ${menuOpen ? 'open' : ''}`}>{['About', 'Skills', 'Projects', 'Education', 'Experience', 'Leadership', 'Certifications', 'Contact'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}</div>
      <a className="nav-cta" href="/resume.pdf">Resume <ArrowUpRight /></a>
    </nav></header>
    <main id="top">
      <section className="hero"><div className="hero-glow" aria-hidden="true" /><div className="container hero-content"><p className="kicker"><span /> Available for internships</p><h1>Backend-focused full-stack developer building <em>secure APIs and AI-powered apps.</em></h1><p className="hero-copy">I’m Sepal Sagar, strongest in TypeScript and JavaScript with Node.js, Express, secure REST APIs, MongoDB, React, and applied AI. I’m currently graduating in 2027 and seeking internships.</p><div className="hero-actions"><a className="button button-dark" href="#projects">See selected work <ArrowUpRight /></a><a className="text-link" href="/resume.pdf">View resume</a></div></div><div className="container signal-row" aria-label="Areas of focus"><span>01 — Secure APIs</span><span>02 — Applied AI</span><span>03 — Full-stack products</span></div></section>
      <section className="section about-section" id="about"><div className="container two-column"><p className="section-label">01 / About</p><div><h2>Secure APIs and AI-powered apps.</h2><p className="body-copy">I build backend-focused full-stack products with TypeScript and JavaScript, Node.js and Express, secure REST APIs, MongoDB, React, and applied AI using semantic retrieval, vector embeddings, RAG, and the Gemini API.</p><a className="inline-link" href="https://github.com/sepalsagar" target="_blank" rel="noreferrer">More on GitHub <ArrowUpRight /></a></div></div></section>
      <section className="section skills-section" id="skills"><div className="container"><div className="section-heading"><p className="section-label">02 / Toolkit</p><h2>Skills, strongest first.</h2></div><div className="skills-grid">{skills.map(([title, items], index) => <article className="skill-card" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{items}</p></article>)}</div></div></section>
      <section className="section projects-section" id="projects"><div className="container"><div className="section-heading projects-heading"><div><p className="section-label">03 / Selected work</p><h2>Proof in products.</h2></div><p>DocuMind and BizNet show my focus on secure APIs, applied AI, and full-stack product engineering.</p></div><div className="projects-grid">{projects.map((project, index) => <article className="project-card" key={project.name}><div className="project-top"><span className="project-index">0{index + 1}</span></div><div><h3>{project.name}</h3><p>{project.description}</p></div><ul className="tags">{project.stack.map((item) => <li key={item}>{item}</li>)}</ul><div className="project-actions"><a className="project-link project-link-primary" href={project.liveHref} target="_blank" rel="noreferrer">Live Demo <ArrowUpRight /></a><a className="project-link" href={project.githubHref} target="_blank" rel="noreferrer"><GitHubIcon /> GitHub</a></div></article>)}</div></div></section>
      <section className="section details-section" id="education"><div className="container"><div className="section-heading"><p className="section-label">04 / Education</p><h2>Education.</h2></div><article className="detail-card"><h3>B.Tech in Computer Science and Engineering</h3><p>Bengal College of Engineering and Technology</p><p>2023–2027 · CGPA 8.63/10</p></article></div></section>
      <section className="section details-section" id="experience"><div className="container"><div className="section-heading"><p className="section-label">05 / Experience</p><h2>Experience.</h2></div><article className="detail-card"><h3>Web Developer Intern</h3><p>CSIB (AICTE Internship) · Mar 2026–Apr 2026</p><p>Built frontend modules for an internal task management dashboard with REST API integration; designed task-tracking workflows with status transitions and user assignment.</p></article></div></section>
      <section className="section details-section" id="leadership"><div className="container"><div className="section-heading"><p className="section-label">06 / Leadership</p><h2>Leadership.</h2></div><div className="details-grid"><article className="detail-card"><h3>Governor</h3><p>Code Vision (college tech club) · 2025–Present</p></article><article className="detail-card"><h3>Organizer</h3><p>Cybercell (college tech club) · 2024–2025</p></article></div></div></section>
      <section className="section details-section" id="certifications"><div className="container"><div className="section-heading"><p className="section-label">07 / Certifications</p><h2>Certifications.</h2></div><div className="details-grid"><article className="detail-card"><h3>Scrimba</h3><p>The Fullstack Developer Path · 108.4 hours</p></article><article className="detail-card"><h3>IBM SkillsBuild</h3><p>Data Analytics with AI Internship Program</p></article></div></div></section>
      <section className="contact-section" id="contact"><div className="container contact-wrap"><p className="section-label">08 / Contact</p><div><h2>Looking for an internship.</h2><p>For internship opportunities or a good engineering conversation, my inbox is open.</p></div><a className="button button-light" href="mailto:sepalsagar1234@gmail.com">Get in touch <ArrowUpRight /></a></div></section>
    </main>
    <footer className="footer container"><span>© {new Date().getFullYear()} Sepal Sagar</span><div><a href="https://github.com/sepalsagar" target="_blank" rel="noreferrer">GitHub</a><a href="/resume.pdf">Resume</a>{linkedInHref !== '{{LINKEDIN_URL}}' && <a href={linkedInHref} target="_blank" rel="noreferrer">LinkedIn</a>}</div></footer>
  </>
}
