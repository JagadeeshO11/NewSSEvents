import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Heart, Star, Shield, Zap, Users, ArrowRight } from 'lucide-react'
import './About.css'

const team = [
  { name: 'Priya Sharma',   role: 'Founder & Creative Director', img: '👑' },
  { name: 'Rohan Mehta',    role: 'Lead Event Coordinator',       img: '🎯' },
  { name: 'Anita Nair',     role: 'Floral & Decor Specialist',    img: '🌸' },
  { name: 'Vikram Patel',   role: 'Corporate Events Head',        img: '💼' },
]

const values = [
  { icon: <Heart size={22} />,  title: 'Passion First',       desc: 'We pour our hearts into every event we plan.' },
  { icon: <Star size={22} />,   title: 'Excellence Always',   desc: 'No detail is too small; no dream too big.' },
  { icon: <Shield size={22} />, title: 'Trust & Reliability', desc: 'On time, on budget, beyond expectations.' },
  { icon: <Zap size={22} />,    title: 'Creative Innovation', desc: 'Fresh ideas tailored uniquely to you.' },
]

const fadeUp = { hidden: { opacity:0, y:40 }, visible: { opacity:1, y:0, transition:{ duration:0.7 } } }

export default function About() {
  return (
    <div className="page-wrapper about">
      {/* Page Hero */}
      <section className="page-hero page-hero--about">
        <div className="page-hero__overlay" />
        <motion.div className="container page-hero__content" initial="hidden" animate="visible" variants={fadeUp}>
          <span className="tag">Our Story</span>
          <h1>Passionate Planners,<br /><em>Extraordinary Results</em></h1>
        </motion.div>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="container about__mission">
          <motion.div className="about__mission-text"
            initial={{opacity:0,x:-40}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.8}}>
            <span className="tag">Our Mission</span>
            <h2 style={{marginTop:'1rem'}}>Turning Visions Into Unforgettable Realities</h2>
            <div className="divider" style={{margin:'1rem 0'}} />
            <p>New SS Events was born from a simple belief: every person deserves an event that feels deeply personal, meticulously crafted, and utterly magical. We are Nalgonda's most trusted event management company.</p>
            <blockquote className="about__quote">
              "An event isn't just a party — it's a story. We make sure yours is the one everyone remembers."
              <cite>— Shivakumar, Founder</cite>
            </blockquote>
          </motion.div>
          <motion.div className="about__stats-grid"
            initial={{opacity:0,x:40}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.8}}>
            {[['Experience','Premium Quality'],['Events','Delivered With Care'],['98%','Client Satisfaction'],['Expert','Team Members']].map(([val,lbl]) => (
              <div key={lbl} className="about__stat">
                <div className="about__stat-val">{val}</div>
                <div className="about__stat-lbl">{lbl}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section about__values-section">
        <div className="container">
          <div className="section-header">
            <span className="tag">What Drives Us</span>
            <h2 style={{marginTop:'1rem'}}>Our Core Values</h2>
            <div className="divider" />
          </div>
          <div className="about__values-grid">
            {values.map((v, i) => (
              <motion.div key={v.title} className="value-card"
                initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}}
                viewport={{once:true}} transition={{delay:i*0.1, duration:0.6}}>
                <div className="value-card__icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="tag">The People Behind the Magic</span>
            <h2 style={{marginTop:'1rem'}}>Meet Our Team</h2>
            <div className="divider" />
            <p>A diverse group of creatives, planners, and perfectionists dedicated to your event.</p>
          </div>
          <div className="team-grid">
            {team.map((m, i) => (
              <motion.div key={m.name} className="team-card"
                initial={{opacity:0, y:30}} whileInView={{opacity:1,y:0}}
                viewport={{once:true}} transition={{delay:i*0.1, duration:0.6}}>
                <div className="team-card__avatar">{m.img}</div>
                <h3>{m.name}</h3>
                <p>{m.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Different */}
      <section className="section about__why-section">
        <div className="container about__why-inner">
          <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
            <span className="tag">Why Choose Us</span>
            <h2 style={{marginTop:'1rem'}}>Why We're Different</h2>
            <div className="divider" style={{margin:'1rem 0'}} />
            <ul className="about__why-list">
              {['Fully bespoke planning — no cookie-cutter events','End-to-end service: concept to clean-up','Transparent, all-inclusive pricing','24/7 on-call support during your event','Sustainability-conscious vendor partnerships','Multilingual team for diverse cultural needs'].map(item => (
                <li key={item}><Star size={16} />{item}</li>
              ))}
            </ul>
            <Link to="/contact" className="btn btn-primary" style={{marginTop:'2rem'}}>
              Get Started <ArrowRight size={18} />
            </Link>
          </motion.div>
          <motion.div className="about__why-img"
            initial={{opacity:0,scale:0.92}} whileInView={{opacity:1,scale:1}}
            viewport={{once:true}} transition={{duration:0.8}}>
            <img src="/hero.png" alt="Event planning team" />
          </motion.div>
        </div>
      </section>
    </div>
  )
}
