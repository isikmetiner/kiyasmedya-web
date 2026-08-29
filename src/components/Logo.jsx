import './logo.css'

/* Hız çizgili top işareti — Kıyas Podcast logosundaki topun sade hali. */
function BallMark() {
  return (
    <svg className="logo-ball" viewBox="0 0 74 44" aria-hidden="true">
      {/* hız çizgileri */}
      <rect x="0" y="7" width="22" height="5.5" rx="2.75" fill="#27e57f" />
      <rect x="6" y="19" width="16" height="5.5" rx="2.75" fill="#27e57f" />
      <rect x="0" y="31" width="22" height="5.5" rx="2.75" fill="#27e57f" />
      {/* top */}
      <circle cx="51" cy="22" r="20" fill="#f4f1e8" />
      {/* merkez beşgen */}
      <polygon points="51,12 60,19 56.5,29.5 45.5,29.5 42,19" fill="#0c1430" />
      {/* kenar yamaları */}
      <path d="M40 5.5 L47 9.5 L42 16 L34 13 Z" fill="#0c1430" />
      <path d="M62 5.5 L55 9.5 L60 16 L68 13 Z" fill="#0c1430" />
      <path d="M33.5 27 L40 32 L37 39.5 L31 35 Z" fill="#0c1430" />
      <path d="M68.5 27 L62 32 L65 39.5 L71 35 Z" fill="#0c1430" />
    </svg>
  )
}

export default function Logo() {
  return (
    <span className="logo">
      <BallMark />
      <span className="logo-word">
        {/* Aradaki boşluk {' '} ile yazılı: JSX, ayrı satırlara düşen
            ögeler arasındaki boşluğu siliyor. */}
        <span className="logo-kiyas">KIYAS</span>{' '}
        <span className="logo-medya">MEDYA</span>
      </span>
    </span>
  )
}
