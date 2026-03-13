import { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X, Sparkles } from 'lucide-react'
import './Navbar.css'

const links = [
  { to: '/',        label: 'Home'     },
  { to: '/about',   label: 'About Us' },
  { to: '/services',label: 'Services' },
  { to: '/gallery', label: 'Gallery'  },
  { to: '/contact', label: 'Contact'  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [menuOpen])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} ref={menuRef}>
      <div className="navbar__inner container">
        {/* Logo */}
        <NavLink to="/" className="navbar__logo" onClick={() => setMenuOpen(false)}>
          <Sparkles size={20} className="navbar__logo-icon" />
          <span>New SS Events</span>
        </NavLink>

        {/* Desktop Links */}
        <ul className="navbar__links">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                }
                end={to === '/'}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <NavLink to="/contact" className="btn btn-primary navbar__cta" onClick={() => setMenuOpen(false)}>
          Book Now
        </NavLink>

        {/* Hamburger */}
        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`navbar__drawer ${menuOpen ? 'navbar__drawer--open' : ''}`}>
        <ul>
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `navbar__drawer-link ${isActive ? 'navbar__drawer-link--active' : ''}`
                }
                end={to === '/'}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <NavLink to="/contact" className="btn btn-primary" onClick={() => setMenuOpen(false)}>
          Book Now
        </NavLink>
      </div>
    </nav>
  )
}
