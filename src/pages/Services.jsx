import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Heart, Cake, Building2, Flower2, Check, ArrowRight } from 'lucide-react'
import { useData } from '../context/DataContext'
import './Services.css'

const IconMap = { Heart, Cake, Building2, Flower2, Check, ArrowRight }

export default function Services() {
  const { siteData } = useData()
  const { services, packages } = siteData
  return (
    <div className="page-wrapper">
      {/* Page Hero */}
      <section className="page-hero page-hero--services">
        <div className="page-hero__overlay" />
        <motion.div className="container page-hero__content"
          initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{duration:0.8}}>
          <span className="tag">What We Offer</span>
          <h1>Services Crafted<br /><em>For Every Occasion</em></h1>
        </motion.div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container">
          {services.map((svc, i) => (
            <motion.div key={svc.title} className={`svc-item ${i % 2 !== 0 ? 'svc-item--reverse' : ''}`}
              initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}}
              viewport={{once:true}} transition={{duration:0.75}}>
              <div className="svc-item__img">
                <img src={svc.img} alt={svc.title} />
                <div className="svc-item__icon">
                  {IconMap[svc.icon] ? (IconMap[svc.icon])({size: 36}) : <Heart size={36} />}
                </div>
              </div>
              <div className="svc-item__body">
                <h2>{svc.title}</h2>
                <div className="divider" style={{margin:'0.75rem 0'}} />
                <p>{svc.desc}</p>
                <ul className="svc-item__features">
                  {svc.features.map(f => (
                    <li key={f}><Check size={16} />{f}</li>
                  ))}
                </ul>
                <Link to="/contact" className="btn btn-plum" style={{marginTop:'1.5rem'}}>
                  Enquire Now <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Packages */}
      <section className="section packages-section">
        <div className="container">
          <div className="section-header">
            <span className="tag">Pricing</span>
            <h2 style={{marginTop:'1rem'}}>Choose Your Package</h2>
            <div className="divider" />
            <p>Flexible plans designed to fit every budget without compromising on quality.</p>
          </div>
          <div className="packages-grid">
            {packages.map((pkg, i) => (
              <motion.div key={pkg.name}
                className={`pkg-card ${pkg.highlight ? 'pkg-card--highlight' : ''}`}
                initial={{opacity:0, y:30}} whileInView={{opacity:1,y:0}}
                viewport={{once:true}} transition={{delay:i*0.1, duration:0.6}}>
                {pkg.highlight && <div className="pkg-card__badge">Most Popular</div>}
                <h3>{pkg.name}</h3>
                <div className="pkg-card__price">{pkg.price}</div>
                <ul>
                  {pkg.features.map(f => <li key={f}><Check size={15} />{f}</li>)}
                </ul>
                <Link to="/contact" className={`btn ${pkg.highlight ? 'btn-primary' : 'btn-plum'}`}>
                  Book This Plan
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
