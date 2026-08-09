import { PlayIcon, HeadphonesIcon } from './Icons.jsx'
import './episodes.css'

const EPISODES = [
  {
    no: 167,
    title: 'Transfer Penceresi Açıldı!',
    desc: 'Kazananlar, Kaybedenler ve Sürpriz İsimler',
    date: '12 Mayıs 2026',
    plays: '50K+ dinleme',
    duration: '01:28:36',
    theme: 'ep-blue',
  },
  {
    no: 166,
    title: 'Şampiyonluk Denklemi',
    desc: 'Bitime 4 Hafta Kala Tüm Senaryolar',
    date: '5 Mayıs 2026',
    plays: '42K dinleme',
    duration: '01:02:16',
    theme: 'ep-green',
  },
  {
    no: 165,
    title: 'Derbi Öncesi Özel',
    desc: 'Taktik Savaşları ve Kritik Eşleşmeler',
    date: '28 Nisan 2026',
    plays: '47K dinleme',
    duration: '01:15:44',
    theme: 'ep-red',
  },
  {
    no: 164,
    title: 'NBA Play-Off Analizi',
    desc: 'Favoriler, Sürprizler ve Eşleşmeler',
    date: '21 Nisan 2026',
    plays: '38K dinleme',
    duration: '59:31',
    theme: 'ep-purple',
  },
]

export default function Episodes() {
  return (
    <section className="section" id="bolumler">
      <div className="container">
        <div className="section-head">
          <span className="section-title">
            <span className="dot" />
            Bölümler
          </span>
        </div>

        <div className="episodes-grid">
          {EPISODES.map((ep) => (
            <article className="ep-card" key={ep.no}>
              <div className={`ep-thumb ${ep.theme}`}>
                <span className="ep-no">#{ep.no}</span>
                <span className="ep-duration">{ep.duration}</span>
                <span className="ep-watermark" aria-hidden="true">
                  {ep.no}
                </span>
                <button className="ep-play" aria-label={`${ep.title} bölümünü oynat`}>
                  <PlayIcon size={16} />
                </button>
              </div>
              <div className="ep-body">
                <h3>{ep.title}</h3>
                <p>{ep.desc}</p>
                <div className="ep-meta">
                  <span>{ep.date}</span>
                  <span className="ep-plays">
                    <HeadphonesIcon size={13} /> {ep.plays}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
