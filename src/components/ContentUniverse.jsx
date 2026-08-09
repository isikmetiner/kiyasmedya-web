import './content-universe.css'

export default function ContentUniverse() {
  return (
    <section className="section" id="icerikler">
      <div className="container">
        <div className="section-head">
          <span className="section-title">
            <span className="dot" />
            İçerikler
          </span>
        </div>

        <div className="universe-grid">
          <article className="universe-card card-clips">
            <span className="badge">Klipler &amp; Shorts</span>
            <div className="universe-visual">
              <span className="visual-emoji" aria-hidden="true">
                🎬
              </span>
              <span className="clips-title">
                Klipler &amp;
                <br />
                Shorts
              </span>
            </div>
            <p>
              En iyi anlar, hızlı yorumlar ve gündeme dair kısa içerikler.
            </p>
          </article>

          <article className="universe-card card-podcast">
            <span className="badge">Kıyas Podcast</span>
            <div className="universe-visual">
              <span className="visual-emoji" aria-hidden="true">
                🎙️
              </span>
              <span className="podcast-logo">
                Kıyas
                <br />
                Podca<em>⚡</em>t
              </span>
            </div>
            <p>
              Derin analizler, cesur yorumlar, konuklar ve gündemin dışından
              konular.
            </p>
          </article>

          <article className="universe-card card-lig">
            <span className="badge badge-green">Yakında</span>
            <div className="universe-visual">
              <span className="visual-emoji" aria-hidden="true">
                🏆
              </span>
              <span className="lig-title">
                Kıyasl<em>i</em>g
              </span>
            </div>
            <p>Rekabeti yeni seviyeye taşıyan futbol oyunları.</p>
          </article>
        </div>
      </div>
    </section>
  )
}
