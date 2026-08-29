import './about.css'

export default function About() {
  return (
    <section className="blok blok-krem" id="hakkimizda">
      <p className="blok-index">Hakkımızda</p>

      <div className="about-panel">
        <p className="about-lead">
          Kıyas Medya; sporun pasif bir izleyici deneyiminden çıkıp,
          interaktif bir tutkuya dönüşmesi gerektiğine inanan yeni nesil bir
          dijital spor ekosistemidir.
        </p>

        <dl className="about-hedefler">
          <div className="about-hedef">
            <dt>Vizyonumuz</dt>
            <dd>
              Prodüksiyon ve mobil teknolojiler ile sporu aktif bir kültüre
              dönüştürerek uluslararası dijital spor ekosistemi olmaktır.
            </dd>
          </div>

          <div className="about-hedef">
            <dt>Misyonumuz</dt>
            <dd>
              Yaratıcı oyunlar ve cesur yorumlar ile veriye dayalı içerikler
              üretmek; geliştirdiğimiz teknolojiler ile sporseverlere
              interaktif bir rekabet deneyimi, markalara ise organik ve
              yüksek etkileşimli bir topluluk sunmaktır.
            </dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
