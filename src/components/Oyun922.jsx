import './oyun-922.css'

/* Ekran görüntüleri oyunun kendisinden (telefon boyutunda, 2x) alındı.
   Ortadaki harita: bölümün ana görseli, iki yandakinden büyük duruyor.
   Mağaza görüntüleri hazır olunca aynı adlarla değiştirilebilir. */
const EKRANLAR = [
  {
    src: '/922/ekran/bilmece.webp',
    alt: 'İlçe Bilmece: ilçenin sınırı gösteriliyor, dört seçenekten doğru il seçiliyor',
  },
  {
    src: '/922/ekran/harita.webp',
    alt: 'Tek Nefeste 922: ilçe sınırlı Türkiye haritasında ipucu dairesiyle yakınlaşmış görünüm',
    ana: true,
  },
  {
    src: '/922/ekran/ana-ekran.webp',
    alt: '922 ana ekranı: İlçe Bilmece ve Tek Nefeste 922 oyun modları',
  },
]

export default function Oyun922() {
  return (
    <section className="blok blok-krem oyun-blok" id="922">
      <p className="blok-index">922</p>

      <div className="oyun-panel">
        <div className="oyun-metin">
          <h2 className="blok-baslik">
            Haritada kaç <em>ilçe</em> bilirsin?
          </h2>

          <p className="oyun-aciklama">
            922, Türkiye'nin 81 ilindeki 922 ilçeyi ne kadar iyi tanıdığını
            ölçen bir harita oyunu. İlçe Bilmece'de sınırından ilini bul,
            Tek Nefeste'de ilçelerin hepsini haritada tek tek işaretle;
            rekorunu kır ya da arkadaşınla düelloya gir.
          </p>

          <p className="oyun-durum">Çok yakında App Store ve Google Play'de</p>
        </div>

        <div className="oyun-ekranlar">
          {EKRANLAR.map(({ src, alt, ana }) => (
            <figure className={`oyun-telefon${ana ? ' ana' : ''}`} key={src}>
              <img src={src} alt={alt} width="780" height="1688" loading="lazy" decoding="async" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
