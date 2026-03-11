import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import './Gallery.css'

const photos = [
  { id:1,  cat:'weddings',   src:'/hero.png',      title:'Royal Garden Wedding' },
  { id:2,  cat:'birthdays',  src:'/birthday.png',  title:'Golden Glow Birthday' },
  { id:3,  cat:'corporate',  src:'/corporate.png', title:'Annual Gala Night' },
  { id:4,  cat:'cultural',   src:'/cultural.png',  title:'Traditional Namkaran' },
  { id:5,  cat:'weddings',   src:'/hero.png',      title:'Palace Reception' },
  { id:6,  cat:'birthdays',  src:'/birthday.png',  title:'Surprise Party Setup' },
  { id:7,  cat:'corporate',  src:'/corporate.png', title:'Product Launch Event' },
  { id:8,  cat:'cultural',   src:'/cultural.png',  title:'Griha Pravesh Ceremony' },
  { id:9,  cat:'weddings',   src:'/hero.png',      title:'Beachside Vows' },
  { id:10, cat:'corporate',  src:'/corporate.png', title:'Tech Conference 2024' },
  { id:11, cat:'birthdays',  src:'/birthday.png',  title:'Sweet Sixteen Bash' },
  { id:12, cat:'cultural',   src:'/cultural.png',  title:'Diwali Corporate Gala' },
]

const tabs = ['all','weddings','birthdays','corporate','cultural']

export default function Gallery() {
  const [active, setActive] = useState('all')
  const [lightbox, setLightbox] = useState(null)

  const filtered = active === 'all' ? photos : photos.filter(p => p.cat === active)

  return (
    <div className="page-wrapper">
      {/* Page Hero */}
      <section className="page-hero page-hero--gallery">
        <div className="page-hero__overlay" />
        <motion.div className="container page-hero__content"
          initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{duration:0.8}}>
          <span className="tag">Portfolio</span>
          <h1>Moments We've<br /><em>Made Magical</em></h1>
        </motion.div>
      </section>

      {/* Filter tabs */}
      <section className="section gallery-section">
        <div className="container">
          <div className="gallery__tabs">
            {tabs.map(t => (
              <button key={t} className={`gallery__tab ${active===t ? 'gallery__tab--active':''}`}
                onClick={() => setActive(t)}>
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div className="gallery__grid" layout>
            <AnimatePresence>
              {filtered.map((photo, i) => (
                <motion.div key={photo.id} className="gallery__item"
                  layout
                  initial={{opacity:0, scale:0.8}}
                  animate={{opacity:1, scale:1}}
                  exit={{opacity:0, scale:0.8}}
                  transition={{duration:0.4, delay: i * 0.03}}
                  onClick={() => setLightbox(photo)}
                  whileHover={{ scale: 1.02 }}>
                  <img src={photo.src} alt={photo.title} />
                  <div className="gallery__item-overlay">
                    <span>{photo.title}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div className="lightbox"
            initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
            onClick={() => setLightbox(null)}>
            <motion.div className="lightbox__inner"
              initial={{scale:0.8, opacity:0}} animate={{scale:1, opacity:1}}
              exit={{scale:0.8, opacity:0}} transition={{type:'spring', stiffness:280, damping:25}}
              onClick={e => e.stopPropagation()}>
              <button className="lightbox__close" onClick={() => setLightbox(null)}><X size={24}/></button>
              <img src={lightbox.src} alt={lightbox.title} />
              <p className="lightbox__title">{lightbox.title}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
