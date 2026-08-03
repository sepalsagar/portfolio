import { useState } from 'react'

const projects = [
  { name: 'Cloud-native task management system', description: 'A full-stack task platform with JWT authentication, role-based access, clean API boundaries, and Dockerized deployment.', stack: ['React', 'Node.js', 'MongoDB', 'Docker'], href: 'https://github.com/sepalsagar/Cloud-Native-Task-Management-System-' },
  { name: 'E-commerce backend API', description: 'Secure transactional APIs designed around pagination, indexed query paths, authorization, and reliable order handling.', stack: ['Node.js', 'Express', 'MySQL', 'JWT'], href: 'https://github.com/sepalsagar/E-Commerce-Backend-API' },
  { name: 'Real-time chat application', description: 'A low-latency messaging system with presence tracking, WebSocket communication, and persistent chat history.', stack: ['WebSockets', 'Redis', 'PostgreSQL', 'TypeScript'], href: 'https://github.com/sepalsagar/Real-Time-Chat-Application' },
]

const skills = [
  ['Languages', 'JavaScript, TypeScript, Python, SQL, C, C++'], ['Frontend', 'React, Redux Toolkit, Vite, HTML, CSS'], ['Backend', 'Node.js, Express, Flask, REST APIs, WebSockets'], ['Data', 'MongoDB, MySQL, PostgreSQL, Redis, Prisma'], ['Security', 'JWT, RBAC, bcrypt, rate limiting'], ['Delivery', 'Docker, GitHub Actions, Vercel'],
]

function ArrowUpRight() { return <svg aria-hidden="true" viewBox="0 0 16 16"><path d="M4 12 12 4M6 4h6v6" /></svg> }
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
      <section className="section projects-section" id="projects"><div className="container"><div className="section-heading projects-heading"><div><p className="section-label">03 / Selected work</p><h2>A few things I’ve built.</h2></div><p>Three projects that reflect how I approach product and platform work.</p></div><div className="projects-grid">{projects.map((project, index) => <article className="project-card" key={project.name}><div className="project-top"><span className="project-index">0{index + 1}</span><a href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} on GitHub`}><ArrowUpRight /></a></div><div><h3>{project.name}</h3><p>{project.description}</p></div><ul className="tags">{project.stack.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div></div></section>
      <section className="contact-section" id="contact"><div className="container contact-wrap"><p className="section-label">04 / Contact</p><div><h2>Have an idea that needs building?</h2><p>For internships, freelance work, or a good engineering conversation, my inbox is open.</p></div><a className="button button-light" href="mailto:sepalsagar1234@gmail.com">Start a conversation <ArrowUpRight /></a></div></section>
    </main>
    <footer className="footer container"><span>© {new Date().getFullYear()} Sepal Sagar</span><div><a href="https://github.com/sepalsagar" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/sepal-sagar-69a757231" target="_blank" rel="noreferrer">LinkedIn</a></div></footer>
  </>
}
