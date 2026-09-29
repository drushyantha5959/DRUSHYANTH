import { useState } from 'react'
import { ArrowDown, ArrowUpRight, CheckCircle2, ExternalLink, Github, Instagram, Linkedin, Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { ThreeDPaper } from '@designcodeio/threeui'
import '@designcodeio/threeui/style.css'

const projects = [
  {
    number: '01',
    name: 'Namma Icons',
    type: 'Brand · E-commerce · Development',
    description: 'A Kannada culture-first poster and wall-collection brand built around curation, identity and a focused shopping experience.',
    status: 'LIVE PROJECT',
  },
  {
    number: '02',
    name: 'RX KARUNADU',
    type: 'Community · Branding · Content',
    description: 'A Yamaha RX community and content brand built around vintage-bike culture, rides and Kannada identity.',
    status: 'BRAND PROJECT',
  },
  {
    number: '03',
    name: '3BBQ',
    type: 'Brand · Content · Digital Marketing',
    description: 'A local food brand growth system combining short-form content, creator campaigns, offers and digital promotion.',
    status: 'CLIENT PROJECT',
  },
  {
    number: '04',
    name: 'Influencers Growth Doctor',
    type: 'Creator Growth · Strategy · Marketing',
    description: 'A creator-growth brand focused on helping influencers build stronger digital presence, positioning and growth systems.',
    status: 'BRAND PROJECT',
  },
]

const skills = {
  'Creative & Brand': ['Creative Direction', 'Brand Strategy', 'Branding', 'Graphic Design', 'Visual Identity', 'Content Creation'],
  'Digital & Development': ['Web Development', 'UI / UX', 'E-commerce', 'SEO', 'Social Media', 'Digital Marketing'],
  'Creator & Growth': ['Creator Growth', 'Influencer Marketing', 'Content Strategy', 'Campaigns', 'Community Building'],
}

const journey = [
  {
    number: '01',
    title: 'Digital Creator',
    period: 'CREATIVE / CONTENT',
    description: 'Building content, visual identities and digital stories across social platforms.',
  },
  {
    number: '02',
    title: 'Brand Builder',
    period: 'BRANDING / MARKETING',
    description: 'Turning ideas into brands, campaigns and real-world digital experiences.',
  },
  {
    number: '03',
    title: 'Developer',
    period: 'WEB / PRODUCT',
    description: 'Designing and developing websites and digital systems that connect the creative side with technology.',
  },
]

const credentials = [
  {
    title: 'Meta Early Access Member',
    meta: 'META · EARLY ACCESS',
    description: 'Early Access membership within Meta products and features.',
    featured: true,
  },
  {
    title: 'Meta Verified',
    meta: 'META · VERIFICATION',
    description: 'Meta verification credential.',
  },
  {
    title: 'Meta ID',
    meta: 'META · IDENTITY',
    description: 'Meta identity / account credential.',
  },
  {
    title: 'Brand & Creator Collaborations',
    meta: '15+ BRANDS',
    description: 'Collaborations across brands, creators, institutions and digital projects.',
  },
]

const profiles = [
  { label: 'Instagram', handle: '@drushyantha', href: '#', icon: Instagram },
  { label: 'LinkedIn', handle: 'Drushyanth A', href: '#', icon: Linkedin },
  { label: 'GitHub', handle: 'drushyantha5959', href: 'https://github.com/drushyantha5959/DRUSHYANTH', icon: Github },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)

  const close = () => setMenuOpen(false)

  const submitContact = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = String(form.get('name') || '')
    const email = String(form.get('email') || '')
    const message = String(form.get('message') || '')
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:hello@drushyanth.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" onClick={close}>DRUSHYANTH<span>®</span></a>

        <nav className={menuOpen ? 'site-nav is-open' : 'site-nav'} aria-label="Primary navigation">
          <a href="#about" onClick={close}>About</a>
          <a href="#experience" onClick={close}>Experience</a>
          <a href="#projects" onClick={close}>Projects</a>
          <a href="#skills" onClick={close}>Skills</a>
          <a href="#credentials" onClick={close}>Credentials</a>
          <a href="#contact" onClick={close}>Contact</a>
        </nav>

        <a className="header-cta" href="#contact">Let's Connect <ArrowUpRight size={15} /></a>

        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      <section className="hero-section section-shell" id="home">
        <div className="hero-eyebrow">
          <span>01 / INTRODUCTION</span>
          <span>KARNATAKA · INDIA</span>
        </div>

        <div className="hero-content">
          <div className="hero-copy">
            <div className="meta-status">
              <span className="status-dot" />
              META EARLY ACCESS MEMBER
            </div>

            <p className="hero-small">DIGITAL CREATOR · DEVELOPER · BRAND BUILDER</p>

            <h1>
              Drushyanth
              <span>Builds.</span>
            </h1>

            <p className="hero-description">
              I create brands, digital experiences and content — bringing creative thinking, technology and growth together.
            </p>

            <div className="hero-actions">
              <a className="primary-button" href="#projects">Explore My Work <ArrowDown size={17} /></a>
              <a className="secondary-link" href="#about">Behind the work <ArrowUpRight size={16} /></a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Interactive 3D paper scene">
            <div className="shader-frame">
              <ThreeDPaper variant="site-of-the-year" />
            </div>
            <div className="hero-glass-card">
              <span className="proof-label">01 / META</span>
              <div className="proof-icon"><CheckCircle2 size={22} /></div>
              <h2>Meta Early<br />Access Member</h2>
              <p>Early access member with Meta-related credentials and verified presence.</p>
            </div>
            <div className="hero-glass-stack">
              <div className="mini-proof"><span>02</span><strong>Meta Verified</strong><small>VERIFICATION</small></div>
              <div className="mini-proof"><span>03</span><strong>Meta ID</strong><small>IDENTITY</small></div>
              <div className="mini-proof"><span>04</span><strong>15+ Brands</strong><small>COLLABORATIONS</small></div>
            </div>
          </div>
        </div>

        <div className="hero-scroll">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown size={16} />
        </div>
      </section>

      <section className="about-section section-shell" id="about">
        <div className="section-kicker"><span>02</span><span>ABOUT ME</span></div>

        <div className="about-layout">
          <div>
            <p className="display-heading">Behind<br /><em>the work.</em></p>
          </div>

          <div className="about-copy">
            <p className="lead-copy">
              I’m Drushyanth — a multidisciplinary digital creator, developer and brand builder.
            </p>
            <p>
              My work sits between creativity and technology. I build visual identities, content systems, websites, campaigns and digital brands — from the first idea to something people can actually experience.
            </p>
            <p>
              A major part of my digital journey has been around Meta, including Meta Early Access membership, Meta verification and Meta ID.
            </p>

            <div className="about-signature">
              <span>DRUSHYA / ಸೃಷ್ಟಿಕರ್ತ</span>
              <span>CREATIVE × TECHNOLOGY</span>
            </div>
          </div>
        </div>
      </section>

      <section className="journey-section section-shell" id="experience">
        <div className="section-kicker"><span>03</span><span>EXPERIENCE</span></div>

        <div className="section-title-row">
          <h2>Professional<br /><em>Journey.</em></h2>
          <p>A multidisciplinary path across content, branding, development and creator growth.</p>
        </div>

        <div className="journey-list">
          {journey.map((item) => (
            <motion.article className="journey-item" key={item.number} whileHover={{ x: 7 }}>
              <span className="item-number">{item.number}</span>
              <div>
                <small>{item.period}</small>
                <h3>{item.title}</h3>
              </div>
              <p>{item.description}</p>
              <ArrowUpRight size={20} />
            </motion.article>
          ))}
        </div>
      </section>

      <section className="projects-section section-shell" id="projects">
        <div className="section-kicker"><span>04</span><span>PROJECTS SHOWCASE</span></div>

        <div className="section-title-row">
          <h2>What I’ve<br /><em>Built.</em></h2>
          <p>Selected work across culture, community, food, creators and digital products.</p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <motion.article
              className="project-card"
              key={project.name}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.22 }}
            >
              <div className="project-card-top">
                <span>{project.number}</span>
                <span>{project.status}</span>
              </div>
              <div className="project-placeholder">
                <span>{project.name.slice(0, 1)}</span>
                <small>PROJECT VISUAL<br />CAN BE ADDED HERE</small>
              </div>
              <div className="project-info">
                <small>{project.type}</small>
                <div className="project-title-row">
                  <h3>{project.name}</h3>
                  <ArrowUpRight size={20} />
                </div>
                <p>{project.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="skills-section section-shell" id="skills">
        <div className="section-kicker"><span>05</span><span>TECHNICAL & CREATIVE SKILLS</span></div>

        <div className="section-title-row">
          <h2>Skills &<br /><em>Tools.</em></h2>
          <p>The categories are intentionally editable so your exact skills, software and tools can be added later.</p>
        </div>

        <div className="skills-grid">
          {Object.entries(skills).map(([category, items]) => (
            <div className="skill-group" key={category}>
              <h3>{category}</h3>
              <div>
                {items.map((skill, index) => (
                  <span key={skill}>{String(index + 1).padStart(2, '0')} {skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="credentials-section section-shell" id="credentials">
        <div className="section-kicker"><span>06</span><span>CREDENTIALS & ACHIEVEMENTS</span></div>

        <div className="section-title-row">
          <h2>Proof of<br /><em>Work.</em></h2>
          <p>Certificates, screenshots, credentials and supporting proof can be added to each card later.</p>
        </div>

        <div className="credentials-grid">
          {credentials.map((credential) => (
            <motion.article
              className={credential.featured ? 'credential-card featured' : 'credential-card'}
              key={credential.title}
              whileHover={{ y: -4 }}
            >
              <div className="credential-top">
                <span>{credential.meta}</span>
                <CheckCircle2 size={18} />
              </div>
              <div className="credential-media">
                <span>ADD PHOTO / CERTIFICATE</span>
              </div>
              <h3>{credential.title}</h3>
              <p>{credential.description}</p>
              <button className="credential-link">View Credential <ExternalLink size={14} /></button>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="presence-section section-shell" id="presence">
        <div className="section-kicker"><span>07</span><span>WEB PRESENCE</span></div>

        <div className="section-title-row">
          <h2>Find me<br /><em>online.</em></h2>
          <p>Replace the placeholder links below with the profiles you want visitors to see.</p>
        </div>

        <div className="profiles-list">
          {profiles.map(({ label, handle, href, icon: Icon }, index) => (
            <a className="profile-row" href={href} key={label} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>
              <span>0{index + 1}</span>
              <Icon size={20} />
              <strong>{label}</strong>
              <small>{handle}</small>
              <ArrowUpRight size={19} />
            </a>
          ))}
        </div>
      </section>

      <section className="contact-section section-shell" id="contact">
        <div className="section-kicker"><span>08</span><span>CONTACT</span></div>

        <div className="contact-layout">
          <div>
            <h2>Let’s<br /><em>Connect.</em></h2>
            <p>Have a project, collaboration or idea? Tell me what you’re building.</p>
            <a className="email-link" href="mailto:hello@drushyanth.com">hello@drushyanth.com <ArrowUpRight size={17} /></a>
          </div>

          <form className="contact-form" onSubmit={submitContact}>
            <label>
              <span>01 / NAME</span>
              <input name="name" required placeholder="Your name" />
            </label>
            <label>
              <span>02 / EMAIL</span>
              <input name="email" type="email" required placeholder="you@example.com" />
            </label>
            <label>
              <span>03 / MESSAGE</span>
              <textarea name="message" required placeholder="Tell me about your idea..." rows={5} />
            </label>
            <button className="submit-button" type="submit">
              {sent ? 'OPENING EMAIL...' : 'SEND MESSAGE'}
              <ArrowUpRight size={17} />
            </button>
          </form>
        </div>
      </section>

      <footer className="site-footer section-shell">
        <div>
          <strong>DRUSHYANTH</strong>
          <span>Digital Creator · Developer · Brand Builder</span>
        </div>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#credentials">Credentials</a>
          <a href="#contact">Contact</a>
        </div>
        <span>© {new Date().getFullYear()} DRUSHYANTH</span>
      </footer>
    </main>
  )
}

export default App
