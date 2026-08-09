import './brands.css'

const SERVICES = [
  {
    emoji: '🤝',
    title: 'Sponsorluk',
    desc: 'Uzun vadeli görünürlük ve entegre sponsorluk çözümleri.',
  },
  {
    emoji: '🎨',
    title: 'Branded İçerik',
    desc: 'Markanıza özel içerik üretimi ve hikaye anlatımı.',
  },
  {
    emoji: '🎥',
    title: 'Prodüksiyon',
    desc: 'Profesyonel video, podcast ve canlı yayın prodüksiyonları.',
  },
  {
    emoji: '📡',
    title: 'Sosyal Dağıtım',
    desc: 'Tüm platformlarda etkili dağıtım ve performans raporlaması.',
  },
]

export default function Brands() {
  return (
    <section className="section" id="is-birlikleri">
      <div className="container">
        <div className="brands-grid">
          <div className="brands-copy">
            <span className="section-title">
              <span className="dot" />
              İş Birlikleri
            </span>
            <p className="brands-lead">
              KıyasMedya, markalara sporseverlerle gerçek bağ kurabilecekleri
              yaratıcı çözümler sunar.
            </p>
          </div>

          <div className="services-grid">
            {SERVICES.map((s) => (
              <article className="service-card" key={s.title}>
                <span className="service-icon" aria-hidden="true">
                  {s.emoji}
                </span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
