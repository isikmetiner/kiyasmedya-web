import './about.css'

const VALUES = [
  {
    emoji: '🎙️',
    title: 'Cesur Yorum',
    desc: 'Gündemi tekrar etmeyen, kendi duruşu olan içerikler.',
  },
  {
    emoji: '📈',
    title: 'Veriye Dayalı Analiz',
    desc: 'His değil istatistik; iddia değil kıyas.',
  },
  {
    emoji: '🤝',
    title: 'Topluluk Odaklı',
    desc: 'İçeriği izleyiciyle birlikte üreten bir kültür.',
  },
]

export default function About() {
  return (
    <section className="section" id="hakkimizda">
      <div className="container">
        <div className="section-head">
          <span className="section-title">
            <span className="dot" />
            Hakkımızda
          </span>
        </div>

        <div className="about-panel">
          <div className="about-copy">
            <h2>
              "Sporu sadece konuşmayalım, <em>kıyaslayalım</em>" fikriyle yola
              çıktık.
            </h2>
            <p>
              Kıyas Medya, Kıyas Podcast'ten doğdu. Bugün futboldan basketbola
              sporun her alanında podcast, kısa format ve özgün yapımlar üreten
              yeni nesil bir medya ve prodüksiyon şirketiyiz. Amacımız aynı:
              sporu daha derin, daha dürüst ve daha eğlenceli bir gözle ele
              almak.
            </p>
          </div>

          <div className="about-values">
            {VALUES.map((v) => (
              <article className="about-value" key={v.title}>
                <span className="about-emoji" aria-hidden="true">
                  {v.emoji}
                </span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
