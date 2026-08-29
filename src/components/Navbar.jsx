import { useState } from 'react'
import Logo from './Logo.jsx'
import './navbar.css'

const LINKS = [
  { label: 'Ana Sayfa', id: 'ana-sayfa' },
  { label: 'Kıyas Podcast', id: 'kiyas-podcast' },
  { label: 'Kıyas Lig', id: 'kiyas-lig' },
  { label: 'Hakkımızda', id: 'hakkimizda' },
  { label: 'İletişim', id: 'iletisim' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#ana-sayfa" className="brand" aria-label="Kıyas Medya ana sayfa">
          <Logo />
        </a>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {LINKS.map((link) => (
            <a key={link.id} href={`#${link.id}`} onClick={() => setOpen(false)}>
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
