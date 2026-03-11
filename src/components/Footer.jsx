import { NavLink } from 'react-router-dom'
import { Sparkles, Phone, Mail, MapPin, Instagram, Facebook, Youtube, Clock } from 'lucide-react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top container">
        {/* Brand */}
        <div className="footer__brand">
          <div className="footer__logo">
            <Sparkles size={20} />
            <span>New SS Events</span>
          </div>
          <p>Crafting extraordinary moments that become timeless memories. Your dream event, our masterpiece.</p>
          <div className="footer__social">
            <a href="https://www.instagram.com/new_ss_evnts_shiva_nalgonda?utm_source=qr&igsh=MWdybzIydmM1bGdsMA==" target="_blank" rel="noreferrer" aria-label="Instagram New SS Events Shiva Nalgonda"><Instagram size={20} /></a>
            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
            <a href="#" aria-label="Youtube"><Youtube size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer__col">
          <h4>Quick Links</h4>
          <ul>
            {[['/', 'Home'], ['/about', 'About Us'], ['/services', 'Services'], ['/gallery', 'Gallery'], ['/contact', 'Contact']].map(([to, label]) => (
              <li key={to}><NavLink to={to} end={to === '/'}>{label}</NavLink></li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="footer__col">
          <h4>Services</h4>
          <ul>
            {['Weddings & Celebrations', 'Birthday Parties', 'Corporate Events', 'Cultural Ceremonies', 'Baby Showers', 'Anniversary Galas'].map(s => (
              <li key={s}><NavLink to="/services">{s}</NavLink></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer__col">
          <h4>Get In Touch</h4>
          <ul className="footer__contact-list">
            <li><Phone size={16} /><a href="tel:+919502071899">+91 95020 71899</a></li>
            <li><Mail size={16} /><a href="mailto:shivakumarb@gmail.com">shivakumarb@gmail.com</a></li>
            <li><MapPin size={16} /><span>Clock tower, Nalgonda</span></li>
            <li><Clock size={16} /><span>mon to sat 9am to 5pm sun closed</span></li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} New SS Events. All rights reserved. Crafted with ♥ for unforgettable celebrations.</p>
        </div>
      </div>
    </footer>
  )
}
