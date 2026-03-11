import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useData } from '../context/DataContext'
import './Gallery.css'

const tabs = ['all','weddings','birthdays','corporate','cultural']

export default function Gallery() {
  const { siteData } = useData()
  const { photos } = siteData
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
