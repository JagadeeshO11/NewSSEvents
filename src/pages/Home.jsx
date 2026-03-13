import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Users, Calendar, Award, Heart, Building2, Flower2, Cake } from 'lucide-react'
import { useData } from '../context/DataContext'
import './Home.css'

const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.7, ease: 'easeOut' } }),
}

const IconMap = { ArrowRight, Star, Users, Calendar, Award, Heart, Building2, Flower2, Cake }

export default function Home() {
  const { siteData } = useData()
  const { categories, stats } = siteData
  return (
    <div className="page-wrapper">
      {/* ── Hero ──────────────────────────────────────── */}
      <section className="hero">
        <div className="hero__bg" style={{ backgroundImage: 'url(/hero.png)' }} />
        <div className="hero__overlay" />
        <div className="hero__content container">
          <motion.div className="hero__text" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.15 } } }}>
            <motion.span className="tag" variants={fadeUp} custom={0}>Premium Event Management</motion.span>
            <motion.h1 variants={fadeUp} custom={1}>
              We Create<br />
              <em>Magical Moments</em>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2}>
              From intimate gatherings to grand celebrations — Eventique turns your vision into an extraordinary, once-in-a-lifetime experience.
            </motion.p>
            <motion.div className="hero__actions" variants={fadeUp} custom={3}>
              <Link to="/contact" className="btn btn-primary">Plan My Event <ArrowRight size={18} /></Link>
              <Link to="/gallery" className="btn btn-outline">View Gallery</Link>
            </motion.div>
          </motion.div>
        </div>
        <div className="hero__scroll">
          <span />
        </div>
      </section>

      {/* ── Stats Bar ─────────────────────────────────── */}
      <section className="stats-bar">
        <div className="container stats-bar__grid">
          {stats.map((s, i) => (
            <motion.div key={s.label} className="stats-bar__item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <div className="stats-bar__icon">
                {(() => {
                  const Icon = IconMap[s.icon] || Award
                  return (
                    <span className="icon-wrapper" style={{color: 'var(--color-gold)'}}>
                      <Icon size={24} />
                    </span>
                  )
                })()}
              </div>
              <div>
                <div className="stats-bar__value">{s.value}</div>
                <div className="stats-bar__label">{s.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Welcome / Intro ───────────────────────────── */}
      <section className="section intro">
        <div className="container intro__inner">
          <motion.div className="intro__text"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="tag">Welcome to New SS Events</span>
            <h2>Every Celebration Deserves to Be Extraordinary</h2>
            <div className="divider" style={{ margin: '1rem 0' }} />
            <p>At New SS Events, we believe that events are more than gatherings — they're stories waiting to be told. Our passionate team of designers, planners, and coordinators work in harmony to turn your dreams into breathtaking realities.</p>
            <p style={{ marginTop: '1rem' }}>Bringing precision, creativity, and warmth to every single celebration we touch in Nalgonda and beyond.</p>
            <Link to="/about" className="btn btn-plum" style={{ marginTop: '2rem' }}>
              Discover Our Story <ArrowRight size={18} />
            </Link>
          </motion.div>
          <motion.div className="intro__image"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src="/hero.png" alt="Elegant wedding setup by New SS Events" />
            <div className="intro__badge">
              <Star size={16} fill="currentColor" />
              <span>Rated #1 Event Planner in Nalgonda</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Event Categories ──────────────────────────── */}
      <section className="section categories">
        <div className="container">
          <div className="section-header">
            <span className="tag">What We Do</span>
            <h2 style={{ marginTop: '1rem' }}>Events We Specialize In</h2>
            <div className="divider" />
            <p>Each event type comes with tailored planning, bespoke design, and white-glove execution.</p>
          </div>
          <div className="categories__grid">
            {categories.map((cat, i) => (
              <motion.div key={cat.label} className="cat-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
              >
                <div className="cat-card__img">
                  <img src={cat.img} alt={cat.label} />
                  <div className="cat-card__overlay" />
                </div>
                <div className="cat-card__body">
                  <div className="cat-card__icon">
                    {(() => {
                      const Icon = IconMap[cat.icon] || Heart
                      return <Icon size={32} />
                    })()}
                  </div>
                  <h3>{cat.label}</h3>
                  <p>{cat.desc}</p>
                  <Link to="/services" className="cat-card__link">Learn More <ArrowRight size={16} /></Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Cards ─────────────────────────────────── */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-section__grid">
            <motion.div className="cta-card cta-card--gallery"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
            >
              <h3>See Our Work</h3>
              <p>Browse 200+ photos from real events we've crafted.</p>
              <Link to="/gallery" className="btn btn-outline">View Gallery <ArrowRight size={16} /></Link>
            </motion.div>
            <motion.div className="cta-card cta-card--services"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3>Explore Services</h3>
              <p>Find the perfect package for your celebration.</p>
              <Link to="/services" className="btn btn-outline">Our Services <ArrowRight size={16} /></Link>
            </motion.div>
            <motion.div className="cta-card cta-card--contact"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3>Start Planning</h3>
              <p>Book a free consultation with our expert team today.</p>
              <Link to="/contact" className="btn btn-primary">Book Now <ArrowRight size={16} /></Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
