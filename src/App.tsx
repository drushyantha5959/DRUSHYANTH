import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

const projects = [
  {
    number: '01',
    name: 'Namma Icons',
    category: 'Brand / E-commerce / Development',
    description: 'A Kannada culture-first wall collection shaped from identity, curation and a focused shopping experience.',
    accent: 'ನಮ್ಮ',
  },
  {
    number: '02',
    name: 'RX KARUNADU',
    category: 'Community / Branding / Content',
    description: 'A visual community for Yamaha RX culture, rides and stories with a distinctly Kannada point of view.',
    accent: 'RIDE',
  },
  {
    number: '03',
    name: '3BBQ',
    category: 'Brand / Content / Marketing',
    description: 'A local food brand growth system connecting short-form content, creators, offers and conversion.',
    accent: 'BBQ',
  },
  {
    number: '04',
    name: 'Influencers Growth Doctor',
    category: 'Creator Growth / Strategy',
    description: 'A growth-focused brand built to help creators turn attention into a consistent digital presence.',
    accent: 'IGD',
  },
]

const capabilities = [
  'Creative Direction',
  'Branding',
  'Content',
  'Social Media',
  'Web Development',
  'Creator Growth',
  'E-commerce',
  'SEO',
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const close = () => setMenuOpen(false)

  return (
    <main>
      <header className="header">
        <a className="logo" href="#top" onClick={close}>DRUSHYANTH<span>®</span></a>
        <nav className={menuOpen ? 'nav open' : 'nav'}>
          <a href="#work" onClick={close}>Work</a>
          <a href="#about" onClick={close}>About</a>
          <a href="#capabilities" onClick={close}>Capabilities</a>
          <a href="#contact" onClick={close}>Contact</a>
        </nav>
        <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      <section className="hero wrap" id="top">
        <div className="hero-index">01 — INTRO</div>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="kicker">DIGITAL CREATOR · DEVELOPER · BRAND BUILDER</p>
            <h1>Ideas<br /><span>into</span><br />impact.</h1>
            <p className="hero-lead">I build brands, digital experiences and stories that feel clear, human and memorable.</p>
            <a className="text-link" href="#work">Explore selected work <ArrowUpRight size={17} /></a>
          </div>

          <div className="portrait">
            <div className="portrait-frame">
              <img src="/avatar.jpg" alt="Drushyanth 3D avatar" />
            </div>
            <div className="portrait-meta">
              <span>DRUSHYA / 3D STUDY</span>
              <span>ಸೃಷ್ಟಿ</span>
            </div>
          </div>
        </div>
        <div className="hero-foot">
          <span>BASED IN KARNATAKA, INDIA</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </section>

      <section className="statement wrap">
        <div className="section-head"><span>02</span><span>WHAT I DO</span></div>
        <div className="statement-grid">
          <h2>I make ideas<br /><i>feel real.</i></h2>
          <p>From the first thought to the final screen, I work across creative direction, branding, content, development and growth — bringing the pieces into one coherent experience.</p>
        </div>
      </section>

      <section className="numbers wrap">
        <div className="metric"><strong>9M+</strong><span>VIDEO VIEWS</span></div>
        <div className="metric"><strong>1M+</strong><span>LIKES</span></div>
        <div className="metric"><strong>20K+</strong><span>FOLLOWERS</span></div>
        <div className="metric"><strong>10+</strong><span>COLLABORATIONS</span></div>
      </section>

      <section className="work wrap" id="work">
        <div className="section-head"><span>03</span><span>SELECTED WORK</span></div>
        <div className="work-intro">
          <h2>Built with<br /><i>purpose.</i></h2>
          <p>A selection of brands, communities and digital projects across culture, food, creators and technology.</p>
        </div>
        <div className="projects">
          {projects.map((project) => (
            <motion.article
              className="project"
              key={project.name}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
            >
              <div className="project-top">
                <span>{project.number}</span>
                <span>{project.category}</span>
              </div>
              <div className="project-main">
                <div>
                  <div className="project-accent">{project.accent}</div>
                  <h3>{project.name}</h3>
                </div>
                <ArrowUpRight className="project-icon" size={24} />
              </div>
              <p>{project.description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="about wrap" id="about">
        <div className="section-head"><span>04</span><span>ABOUT</span></div>
        <div className="about-grid">
          <p className="about-big">Not just a creator.<br /><i>A builder.</i></p>
          <div className="about-copy">
            <p>I’m Drushyanth — a multidisciplinary digital creator and builder working between creativity and technology.</p>
            <p>I enjoy taking something that exists only as an idea and giving it a visual identity, a system and a place in the real world.</p>
            <div className="signature">DRUSHYA / ಸೃಷ್ಟಿಕರ್ತ</div>
          </div>
        </div>
      </section>

      <section className="capabilities wrap" id="capabilities">
        <div className="section-head"><span>05</span><span>CAPABILITIES</span></div>
        <div className="capability-grid">
          <h2>Many crafts.<br /><i>One direction.</i></h2>
          <div className="capability-list">
            {capabilities.map((item, index) => (
              <div className="capability" key={item}>
                <span>0{index + 1}</span>
                <strong>{item}</strong>
                <ArrowUpRight size={17} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact wrap" id="contact">
        <div className="contact-inner">
          <p className="kicker">HAVE AN IDEA?</p>
          <h2>Let's build<br /><i>something good.</i></h2>
          <a className="contact-link" href="mailto:hello@drushyanth.com">hello@drushyanth.com <ArrowUpRight size={20} /></a>
        </div>
      </section>

      <footer className="footer wrap">
        <span>© {new Date().getFullYear()} DRUSHYANTH</span>
        <span>CREATE / ಸೃಷ್ಟಿ</span>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </main>
  )
}

export default App
