import { useEffect, useState } from 'react'
import { ArrowDownRight, ArrowUpRight, ExternalLink, Instagram, Linkedin, Menu, X } from 'lucide-react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const projects = [
  {
    index: '01',
    name: 'Namma Icons',
    type: 'Brand · E-commerce · Design · Development',
    description: 'A Kannada culture-first wall collection built from identity, curation and a wall-first shopping experience.',
    tag: 'NAMMA / ನಮ್ಮ',
    tone: 'warm',
  },
  {
    index: '02',
    name: 'RX KARUNADU',
    type: 'Community · Branding · Content',
    description: 'A visual community around Yamaha RX culture, rides, stories and a distinctly Kannada point of view.',
    tag: 'RIDE / ರೈಡ್',
    tone: 'cyan',
  },
  {
    index: '03',
    name: '3BBQ',
    type: 'Brand · Content · Digital Marketing',
    description: 'A food brand growth system connecting short-form content, local creators, offers and conversion.',
    tag: 'TASTE / ರುಚಿ',
    tone: 'red',
  },
  {
    index: '04',
    name: 'Influencers Growth Doctor',
    type: 'Creator Growth · Strategy · Marketing',
    description: 'A growth-focused brand helping creators turn attention into a repeatable digital presence.',
    tag: 'GROW / ಬೆಳವಣಿಗೆ',
    tone: 'violet',
  },
]

const capabilities = [
  'Brand Strategy',
  'Creative Direction',
  'Social Media',
  'Content Systems',
  'Video & Editing',
  'Web Development',
  'E-commerce',
  'Creator Growth',
  'SEO',
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  const heroY = useTransform(progress, [0, 0.35], [0, -110])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <main>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />

      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu}>DRUSHYA<span>®</span></a>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          {['work', 'about', 'capabilities', 'contact'].map((item) => (
            <a key={item} href={`#${item}`} onClick={closeMenu}>{item}</a>
          ))}
        </nav>
        <button className="menu-button" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-meta">
          <span>01 / 05</span>
          <span>INDIA · 2026</span>
        </div>
        <motion.div className="hero-copy" style={{ y: heroY }}>
          <p className="eyebrow">DIGITAL CREATOR · DEVELOPER · BRAND BUILDER</p>
          <h1>
            I BUILD
            <br />
            <span>DIGITAL</span>
            <br />
            <em>WORLDS.</em>
          </h1>
          <div className="hero-bottom">
            <p>I turn ideas into brands, experiences and stories.</p>
            <a className="circle-link" href="#work" aria-label="Explore work"><ArrowDownRight size={25} /></a>
          </div>
        </motion.div>

        <motion.div className="hero-orb" style={{ y: heroY }}>
          <div className="orb-grid" />
          <div className="orb-core">DS</div>
          <span className="orb-label">CREATE / ಸೃಷ್ಟಿ</span>
        </motion.div>

        <div className="hero-kan">
          <span>ಸೃಷ್ಟಿ</span>
          <span>BUILD</span>
        </div>
      </section>

      <section className="numbers section-shell">
        <div className="section-label"><span>IMPACT</span><span>02 / 05</span></div>
        <div className="number-grid">
          <Stat value="9M+" label="VIDEO VIEWS" />
          <Stat value="1M+" label="LIKES" />
          <Stat value="20K+" label="FOLLOWERS" />
          <Stat value="10+" label="COLLABORATIONS" />
        </div>
      </section>

      <section className="work section-shell" id="work">
        <div className="section-label"><span>SELECTED WORK</span><span>03 / 05</span></div>
        <div className="work-intro">
          <h2>IDEAS,<br /><span>MADE VISIBLE.</span></h2>
          <p>Brands, communities and digital experiences built at the intersection of culture, creativity and technology.</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>

      <section className="about section-shell" id="about">
        <div className="section-label"><span>ABOUT</span><span>04 / 05</span></div>
        <div className="about-layout">
          <div>
            <p className="eyebrow">THE PERSON BEHIND THE PROJECTS</p>
            <h2>NOT JUST A<br /><span>CREATOR.</span></h2>
          </div>
          <div className="about-copy">
            <p>I’m Drushyanth — a multidisciplinary digital creator and builder working across design, content, branding, development and growth.</p>
            <p>I like taking an idea from a rough thought to something people can see, feel, use and remember.</p>
            <div className="about-signature">DRUSHYA / ಸೃಷ್ಟಿಕರ್ತ</div>
          </div>
        </div>
      </section>

      <section className="capabilities section-shell" id="capabilities">
        <div className="section-label"><span>CAPABILITIES</span><span>05 / 05</span></div>
        <div className="capability-head">
          <h2>ONE MIND.<br /><span>MANY CRAFTS.</span></h2>
          <p>Strategy when it matters. Craft when it counts. Technology when it creates leverage.</p>
        </div>
        <div className="capability-list">
          {capabilities.map((capability, index) => (
            <motion.div key={capability} className="capability" whileHover={{ x: 14 }}>
              <span>0{index + 1}</span>
              <strong>{capability}</strong>
              <ArrowUpRight size={18} />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="contact section-shell" id="contact">
        <div className="contact-card">
          <p className="eyebrow">HAVE AN IDEA?</p>
          <h2>LET'S MAKE<br /><em>IT REAL.</em></h2>
          <a className="contact-email" href="mailto:hello@drushyanth.com">hello@drushyanth.com <ArrowUpRight size={23} /></a>
          <div className="socials">
            <a href="https://instagram.com/" target="_blank" rel="noreferrer"><Instagram size={18} /> Instagram</a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
          </div>
        </div>
      </section>

      <footer className="footer section-shell">
        <span>© {new Date().getFullYear()} DRUSHYA</span>
        <span>BUILT WITH INTENT / ಸೃಷ್ಟಿ</span>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </main>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="stat">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  )
}

function ProjectCard({ project }: { project: typeof projects[number] }) {
  return (
    <motion.article className={`project project-${project.tone}`} whileHover={{ y: -7 }}>
      <div className="project-visual">
        <div className="project-no">{project.index}</div>
        <div className="project-word">{project.tag}</div>
        <div className="project-shape" />
        <ExternalLink className="project-arrow" size={25} />
      </div>
      <div className="project-info">
        <div>
          <h3>{project.name}</h3>
          <span>{project.type}</span>
        </div>
        <p>{project.description}</p>
      </div>
    </motion.article>
  )
}

export default App
