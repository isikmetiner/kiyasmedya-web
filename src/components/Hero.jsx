import {
  YoutubeIcon,
  InstagramIcon,
  TiktokIcon,
  UsersIcon,
  TrendUpIcon,
  ScreensIcon,
  CalendarIcon,
  SparkIcon,
} from './Icons.jsx'
import { LATEST_INSTAGRAM_REEL } from '../config.js'
import './hero.css'

const STATS = [
  { icon: <UsersIcon />, value: '50K+', label: 'Topluluk' },
  { icon: <TrendUpIcon />, value: '100M+', label: 'Aylık Erişim' },
  { icon: <ScreensIcon />, value: '3', label: 'Platform' },
  { icon: <CalendarIcon />, value: 'Her Gün', label: 'Yeni Video' },
  { icon: <SparkIcon />, value: 'Markalı', label: 'İçerik' },
]

export default function Hero() {
  return (
    <section className="hero" id="ana-sayfa">
      <div className="hero-glow hero-glow-green" />
      <div className="hero-glow hero-glow-blue" />

      <div className="container hero-inner">
        <div className="hero-copy">
          <h1>
            Sporu sadece
            <br />
            konuşmuyoruz.
            <br />
            <em>Kıyaslıyoruz.</em>
          </h1>

          <p className="hero-lead">
            Kıyas Podcast ve özgün içeriklerimizle futbolu, basketbolu ve sporu
            farklı bir gözle ele alıyoruz. Podcast, kısa formatlar, topluluk ve
            orijinal yapımlarla yeni nesil spor medyası.
          </p>

          <div className="hero-stats">
            {STATS.map((s) => (
              <div className="stat" key={s.label}>
                <span className="stat-icon">{s.icon}</span>
                <span className="stat-text">
                  <strong>{s.value}</strong>
                  <small>{s.label}</small>
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="episode-card">
          <div className="reel-embed">
            <iframe
              src={`${LATEST_INSTAGRAM_REEL}embed/`}
              title="Kıyas Podcast — en güncel bölüm"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              loading="lazy"
              scrolling="no"
            />
          </div>

          <div className="episode-body">
            <div className="episode-platforms">
              <a
                href="https://www.youtube.com/@KiyasPodcast"
                target="_blank"
                rel="noreferrer"
                className="platform"
              >
                <YoutubeIcon size={15} /> YouTube
              </a>
              <a
                href="https://www.instagram.com/kiyaspodcast/"
                target="_blank"
                rel="noreferrer"
                className="platform"
              >
                <InstagramIcon size={15} /> Instagram
              </a>
              <a
                href="https://www.tiktok.com/@kiyaspodcast"
                target="_blank"
                rel="noreferrer"
                className="platform"
              >
                <TiktokIcon size={15} /> TikTok
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
