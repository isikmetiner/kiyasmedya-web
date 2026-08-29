import './hero.css'

/* Logodaki topun büyütülmüş hâli — zemin dokusu olarak kullanılıyor.
   Logo.jsx'teki BallMark'tan ayrı duruyor çünkü burada rengi yok:
   currentColor ile tek renge iniyor, filigran olarak öyle doğru. */
function WatermarkBall() {
  return (
    <svg viewBox="0 0 74 44" aria-hidden="true" fill="currentColor">
      <rect x="0" y="7" width="22" height="5.5" rx="2.75" />
      <rect x="6" y="19" width="16" height="5.5" rx="2.75" />
      <rect x="0" y="31" width="22" height="5.5" rx="2.75" />
      <circle cx="51" cy="22" r="20" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="hero bleed" id="ana-sayfa">
      <div className="hero-watermark" style={{ color: 'var(--cream)' }}>
        <WatermarkBall />
      </div>

      <div className="hero-copy">
        <h1>
          Sporu sadece konuşmuyoruz.
          <br />
          <em>Kıyaslıyoruz</em> ve oynatıyoruz.
        </h1>

        <p className="hero-lead">
          Kıyas Medya, Kıyas Podcast içeriklerini Kıyas Lig rekabetiyle
          buluşturarak sporseverlere interaktif bir deneyim, markalara ise
          dinamik dijital ekosistemin gücünü sunar.
        </p>
      </div>
    </section>
  )
}
