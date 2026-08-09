import { useState } from 'react'
import Logo from './Logo.jsx'
import './navbar.css'

const LINKS = [
  { label: 'Ana Sayfa', href: '#ana-sayfa', active: true },
  { label: 'İçerikler', href: '#icerikler' },
  { label: 'Bölümler', href: '#bolumler' },
  { label: 'İş Birlikleri', href: '#is-birlikleri' },
  { label: 'Hakkımızda', href: '#hakkimizda' },
  { label: 'İletişim', href: '#iletisim' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#ana-sayfa" className="brand" aria-label="Kıyas Medya ana sayfa">
          <Logo />
        </a>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={link.active ? 'active' : ''}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="nav-burger"
          aria-label="Menüyü aç/kapat"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
