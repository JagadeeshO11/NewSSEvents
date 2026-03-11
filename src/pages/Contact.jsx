import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, Send, Clock } from 'lucide-react'
import './Contact.css'

const eventTypes = ['Wedding','Birthday','Corporate','Cultural Ceremony','Baby Shower','Anniversary','Other']

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', phone:'', eventType:'', message:'' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name:'', email:'', phone:'', eventType:'', message:'' })
  }

  return (
    <div className="page-wrapper">
      {/* Page Hero */}
      <section className="page-hero page-hero--contact">
        <div className="page-hero__overlay" />
        <motion.div className="container page-hero__content"
          initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{duration:0.8}}>
          <span className="tag">Let's Connect</span>
          <h1>Start Planning<br /><em>Your Dream Event</em></h1>
        </motion.div>
      </section>

      {/* Contact Info Bar */}
      <div className="contact-bar">
        <div className="container contact-bar__grid">
          <a href="tel:+919502071899" className="contact-bar__item">
            <Phone size={20} />
            <div><strong>Call Us</strong><span>+91 95020 71899</span></div>
          </a>
          <a href="mailto:shivakumarb@gmail.com" className="contact-bar__item">
            <Mail size={20} />
            <div><strong>Email Us</strong><span>shivakumarb@gmail.com</span></div>
          </a>
          <div className="contact-bar__item">
            <MapPin size={20} />
            <div><strong>Our Office</strong><span>Clock tower, Nalgonda</span></div>
          </div>
          <div className="contact-bar__item">
            <Clock size={20} />
            <div><strong>Working Hours</strong><span>mon to sat 9am to 5pm sun closed</span></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="section">
        <div className="container contact__grid">

          {/* Form */}
          <motion.div className="contact__form-wrap"
            initial={{opacity:0,x:-40}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.8}}>
            <h2>Send Us a Message</h2>
            <p className="contact__sub">New SS Events typically responds within 24 hours.</p>

            {sent && (
              <div className="contact__success">
                ✅ Thank you! New SS Events will be in touch shortly.
              </div>
            )}

            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input id="name" name="name" type="text" placeholder="Your name" value={form.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input id="email" name="email" type="email" placeholder="you@email.com" value={form.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input id="phone" name="phone" type="tel" placeholder="+91 00000 00000" value={form.phone} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="eventType">Event Type</label>
                  <select id="eventType" name="eventType" value={form.eventType} onChange={handleChange}>
                    <option value="">Select an event type</option>
                    {eventTypes.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Tell Us About Your Event *</label>
                <textarea id="message" name="message" rows={5} placeholder="Date, guest count, venue preferences, vision..." value={form.message} onChange={handleChange} required />
              </div>
              <button type="submit" className="btn btn-primary" style={{width:'100%', justifyContent:'center'}}>
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>

          {/* Sidebar */}
          <motion.div className="contact__sidebar"
            initial={{opacity:0,x:40}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.8}}>

            {/* Map Placeholder */}
            <div className="contact__map">
              <div className="contact__map-placeholder">
                <MapPin size={40} />
                <p>Clock tower, Nalgonda<br />Telangana</p>
                <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="btn btn-plum" style={{marginTop:'1rem'}}>
                  Open in Maps
                </a>
              </div>
            </div>

            {/* Social */}
            <div className="contact__social">
              <h4>Follow Our Journey</h4>
              <div className="contact__social-links">
                <a href="https://www.instagram.com/new_ss_evnts_shiva_nalgonda?utm_source=qr&igsh=MWdybzIydmM1bGdsMA==" target="_blank" rel="noreferrer" className="social-link social-link--ig"><Instagram size={22}/><span>New SS Events Shiva Nalgonda</span></a>
                <a href="#" className="social-link social-link--fb"><Facebook size={22}/><span>Facebook</span></a>
                <a href="#" className="social-link social-link--yt"><Youtube size={22}/><span>YouTube</span></a>
              </div>
            </div>

            {/* Assurance */}
            <div className="contact__assurance">
              <Clock size={20} />
              <div>
                <strong>Reliable Response</strong>
                <p>We value your time. Expect a response from Shivakumar and our team within one business day.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
