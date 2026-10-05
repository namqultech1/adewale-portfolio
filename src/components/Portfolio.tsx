import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  Braces,
  BriefcaseBusiness,
  Building2,
  Check,
  Code2,
  ExternalLink,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MonitorSmartphone,
  Phone,
  Send,
  Sparkles,
  Wrench,
  X,
} from "lucide-react";

import portraitAsset from "@/assets/adeniyi-portrait.jpg.asset.json";

const portrait = portraitAsset.url;

const navItems = ["Home", "About", "Skills", "Services", "Projects", "Experience", "Contact"];

const skillGroups = [
  {
    index: "01",
    title: "Frontend development",
    icon: Code2,
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "JSX", "React Hooks", "API Integration", "Responsive Web Design"],
  },
  {
    index: "02",
    title: "Tools & technologies",
    icon: Wrench,
    skills: ["Git", "GitHub", "Vite", "Framer Motion", "Tailwind CSS"],
  },
  {
    index: "03",
    title: "Development strengths",
    icon: Sparkles,
    skills: ["UI Implementation", "Responsive Design", "Problem Solving", "Team Collaboration", "Debugging", "User-focused Development"],
  },
];

const services = [
  { icon: Code2, title: "Frontend Web Development", text: "Modern, responsive websites and applications built with HTML, CSS, JavaScript, and React.js." },
  { icon: MonitorSmartphone, title: "Responsive Website Development", text: "Seamless experiences thoughtfully adapted for desktop, tablet, and mobile devices." },
  { icon: Braces, title: "React.js Development", text: "Interactive, component-based applications built with clear, maintainable development practices." },
  { icon: Layers3, title: "UI Implementation & Maintenance", text: "Accurate design-to-code builds, plus practical improvements for existing websites." },
];

const projects = [
  {
    number: "01",
    name: "AWWJA E-Commerce",
    label: "Collaborative commerce experience",
    description: "A responsive e-commerce interface developed as part of a collaborative frontend project. I contributed to the UI and built the Product Cart Page, focusing on usability, interaction, and a smooth shopping experience.",
    role: "Frontend Developer / Product Cart Page",
    tech: ["React.js", "JavaScript", "HTML", "CSS", "Git"],
    preview: "commerce",
  },
  {
    number: "02",
    name: "React Developer Portfolio",
    label: "Personal brand platform",
    description: "A modern portfolio built with React.js to present frontend skills, selected work, services, and professional information through an interactive UI.",
    role: "Design & Frontend Development",
    tech: ["React.js", "JavaScript", "CSS3", "Framer Motion"],
    preview: "portfolio",
  },
  {
    number: "03",
    name: "React Recipe Application",
    label: "Interactive recipe discovery",
    description: "An interactive React application focused on recipe content while practicing reusable components, props, state management, and thoughtful user interactions.",
    role: "Frontend Developer",
    tech: ["React.js", "JavaScript", "CSS3"],
    preview: "recipe",
  },
  {
    number: "04",
    name: "Responsive Web Interfaces",
    label: "Curated UI experiments",
    description: "A collection of responsive practice projects created to sharpen UI implementation, CSS layouts, device adaptability, and attention to visual detail.",
    role: "UI Developer",
    tech: ["HTML5", "CSS3", "JavaScript"],
    preview: "interfaces",
  },
];

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="section-heading reveal">
      <span className="eyebrow"><span aria-hidden="true">//</span> {eyebrow}</span>
      <div className="heading-row">
        <h2>{title}</h2>
        {copy ? <p>{copy}</p> : null}
      </div>
    </div>
  );
}

function ProjectPreview({ type }: { type: string }) {
  return (
    <div className={`project-preview preview-${type}`} aria-hidden="true">
      <div className="browser-bar"><i /><i /><i /><span>localhost:5173</span></div>
      {type === "commerce" && <><div className="shop-nav">AWWJA <span>Shop&nbsp;&nbsp; New&nbsp;&nbsp; Collections</span></div><div className="shop-grid"><div className="product-art">A</div><div className="cart-panel"><small>SHOPPING CART</small><b>Complete your order.</b><div className="cart-line" /><div className="cart-line short" /><button type="button">Checkout →</button></div></div></>}
      {type === "portfolio" && <div className="mini-portfolio"><small>FRONTEND DEVELOPER</small><strong>I turn ideas into<br />digital experiences.</strong><div><span>View projects</span><span>Let’s talk</span></div></div>}
      {type === "recipe" && <><div className="recipe-head">savor<span>Search recipes…</span></div><div className="recipe-grid"><div className="dish dish-one">Bowl</div><div className="dish dish-two">Pasta</div><div className="dish dish-three">Fresh</div></div></>}
      {type === "interfaces" && <div className="ui-grid"><div><small>DASHBOARD</small><b>12.4k</b><span className="sparkline" /></div><div><small>TASKS</small><b>24</b><span className="progress" /></div><div><small>ACTIVITY</small><b>+18%</b><span className="bars" /></div></div>}
    </div>
  );
}

export function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const submitContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(String(data.get("subject") ?? "Portfolio enquiry"));
    const body = encodeURIComponent(`Hi Adeniyi,\n\n${String(data.get("message") ?? "")}\n\nFrom: ${String(data.get("name") ?? "")} (${String(data.get("email") ?? "")})`);
    window.location.href = `mailto:Adewale_adeniyi20@yahoo.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="site-shell">
      <header className="navbar">
        <a href="#home" className="brand" aria-label="Adeniyi Adewale home"><span>AA</span><b>Adeniyi.</b></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}
        </nav>
        <a href="#contact" className="nav-cta">Start a conversation <ArrowDownRight size={17} /></a>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen}>
          {menuOpen ? <X /> : <Menu />}
        </button>
        {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}<ArrowRight size={16} /></a>)}</nav>}
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-aurora" aria-hidden="true"><span className="aurora-one" /><span className="aurora-two" /></div>
          <div className="hero-code code-a" aria-hidden="true">{"<div>"}</div>
          <div className="hero-code code-b" aria-hidden="true">{"{ }"}</div>
          <div className="hero-copy reveal is-visible">
            <div className="availability"><span className="beacon" /> Available for internships &amp; roles</div>
            <p className="intro">Hello, I’m Adeniyi Adewale</p>
            <h1>Building digital<br />experiences that <em>work.</em></h1>
            <p className="hero-text">I’m a Frontend Developer passionate about turning ideas and designs into fast, responsive, and user-friendly web applications using modern web technologies.</p>
            <div className="stack-ribbon">
              <span>React.js</span><i />
              <span>JavaScript</span><i />
              <span>Modern UI</span>
            </div>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore projects <ArrowDownRight size={18} /></a>
              <a className="button button-secondary" href="#contact">Get in touch</a>
            </div>
            <div className="hero-stats">
              <div><strong>Frontend</strong><span>React specialist</span></div>
              <div><strong>100%</strong><span>Responsive focus</span></div>
              <div><strong>Clean</strong><span>Component architecture</span></div>
            </div>
            <div className="social-row">
              <span>Find me online</span><i />
              <a href="https://github.com/namqultech" target="_blank" rel="noreferrer" aria-label="Adeniyi on GitHub"><Github size={19} /></a>
              <a href="https://www.linkedin.com/in/luqman-adeniyi-069591229" target="_blank" rel="noreferrer" aria-label="Adeniyi on LinkedIn"><Linkedin size={19} /></a>
            </div>
          </div>
          <div className="hero-visual reveal is-visible">
            <div className="portrait-ring" />
            <div className="portrait-frame"><img src={portrait} alt="Adeniyi Adewale" width={900} height={1120} /></div>
            <div className="floating-chip chip-react"><span>R</span> React.js</div>
            <div className="floating-chip chip-location"><MapPin size={15} /> Ikeja, Lagos</div>
            <div className="floating-chip chip-code"><code>{"<Portfolio />"}</code></div>
            <div className="experience-note"><strong>Frontend</strong><span>Developer</span></div>
          </div>
          <div className="scroll-cue"><span>Scroll to explore</span><i /></div>
        </section>

        <section id="about" className="section about-section">
          <SectionHeading eyebrow="About me" title="Engineering mindset. Creative execution." />
          <div className="about-grid">
            <div className="about-copy reveal">
              <p className="lead">My journey into web development combines an engineering mindset with creativity and technology.</p>
              <p>I’m focused on building responsive, interactive, and user-friendly experiences with HTML, CSS, JavaScript, and React.js. I enjoy turning thoughtful designs into clear, functional interfaces.</p>
              <p>My background in Civil Engineering shaped how I approach software: understand the structure, solve the right problem, and pay attention to every detail.</p>
              <a href="#contact" className="text-link">More about my journey <ArrowRight size={17} /></a>
            </div>
            <div className="about-aside reveal">
              <div className="education-card">
                <GraduationCap />
                <small>Education · 2021</small>
                <h3>Higher National Diploma</h3>
                <p>Civil Engineering</p>
                <span>Moshood Abiola Polytechnic</span>
              </div>
              <div className="strength-list">
                {["Analytical thinking", "Project coordination", "Team collaboration", "Attention to detail"].map((item) => <span key={item}><Check size={14} />{item}</span>)}
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <SectionHeading eyebrow="Skills & toolkit" title="Tools I use to bring ideas to life." copy="A practical toolkit grounded in strong fundamentals, continuous learning, and a sharp eye for the user experience." />
          <div className="skills-grid">
            {skillGroups.map(({ index, title, icon: Icon, skills }) => (
              <article className="skill-card reveal" key={title}>
                <div className="card-top"><span>{index}</span><Icon /></div><h3>{title}</h3>
                <div className="skill-tags">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section id="services" className="section services-section">
          <SectionHeading eyebrow="What I do" title="Focused frontend services." />
          <div className="services-list">
            {services.map(({ icon: Icon, title, text }, index) => <article className="service-row reveal" key={title}><span className="service-number">0{index + 1}</span><span className="service-icon"><Icon /></span><h3>{title}</h3><p>{text}</p><ArrowDownRight className="service-arrow" /></article>)}
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <SectionHeading eyebrow="Selected projects" title="Ideas, built into real interfaces." copy="A selection of projects that reflect my progress, technical foundations, and focus on useful digital experiences." />
          <div className="projects-list">
            {projects.map((project, index) => <article className="project-card reveal" key={project.name}>
              <div className="project-visual"><ProjectPreview type={project.preview} /><span className="project-index">{project.number} / 04</span></div>
              <div className="project-copy"><span className="project-label">{project.label}</span><h3>{project.name}</h3><p>{project.description}</p><div className="role"><b>Role</b><span>{project.role}</span></div><div className="tech-list">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div><div className="project-links"><a href="#contact">Live demo <ExternalLink size={16} /></a><a href="https://github.com/namqultech" target="_blank" rel="noreferrer">View code <Github size={16} /></a></div></div>
            </article>)}
          </div>
        </section>

        <section id="experience" className="section experience-section">
          <SectionHeading eyebrow="Experience" title="Experience that shaped how I work." />
          <div className="experience-grid">
            <div className="job-heading reveal"><span className="date">Previous experience</span><BriefcaseBusiness /><h3>Construction Site Supervisor</h3><p>Constromental Engineering Ltd.</p></div>
            <div className="job-details reveal"><p>Before transitioning into technology, I coordinated people, progress, and quality across active construction sites—experience that continues to inform how I approach collaborative development work.</p><ul>{["Supervised daily construction activities", "Coordinated workers and project activities", "Monitored work progress and quality", "Solved on-site problems", "Maintained specifications and deadlines"].map((item) => <li key={item}><Check size={15} />{item}</li>)}</ul></div>
          </div>
          <div className="transferable reveal"><span>Transferable strengths</span>{["Leadership", "Teamwork", "Problem solving", "Communication", "Organization", "Attention to detail"].map((item) => <b key={item}>{item}</b>)}</div>
          <div className="journey reveal">
            <span className="eyebrow"><span>//</span> Career journey</span>
            <div className="journey-track">{["Civil Engineering", "Site Supervision", "Web Development", "Frontend Developer"].map((item, index) => <div className="journey-step" key={item}><i>{index + 1}</i><span>{item}</span>{index < 3 ? <ArrowRight /> : null}</div>)}</div>
            <p>Built on continuous learning, practical projects, and the drive to grow into an exceptional developer.</p>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-intro reveal"><span className="eyebrow"><span>//</span> Contact</span><h2>Let’s build something<br /><em>great together.</em></h2><p>I’m open to frontend opportunities, internships, collaborations, and projects where I can contribute, learn, and grow.</p><div className="contact-details"><a href="mailto:Adewale_adeniyi20@yahoo.com"><Mail /> <span><small>Email</small>Adewale_adeniyi20@yahoo.com</span></a><a href="tel:+2348166519439"><Phone /> <span><small>Phone</small>0816 651 9439</span></a><div><MapPin /><span><small>Location</small>Ikeja, Lagos, Nigeria</span></div></div></div>
          <form className="contact-form reveal" onSubmit={submitContact}><div className="field-row"><label>Name<input name="name" placeholder="Your name" required /></label><label>Email<input name="email" type="email" placeholder="you@email.com" required /></label></div><label>Subject<input name="subject" placeholder="What would you like to discuss?" required /></label><label>Message<textarea name="message" rows={5} placeholder="Tell me a little about your project or opportunity…" required /></label><button type="submit" className="button button-primary">Send message <Send size={17} /></button><small>This opens your default email app.</small></form>
        </section>
      </main>

      <footer><a href="#home" className="brand"><span>AA</span><b>Adeniyi.</b></a><p>Adeniyi Adewale — Frontend Developer</p><div><a href="https://github.com/namqultech" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a><a href="https://www.linkedin.com/in/luqman-adeniyi-069591229" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a></div><small>© 2026 Adeniyi Adewale. All rights reserved.</small></footer>
    </div>
  );
}