import {
  YoutubeIcon,
  InstagramIcon,
  TiktokIcon,
  ArrowRightIcon,
} from './Icons.jsx'
import './kiyas-podcast.css'

/* Sayılar elle güncelleniyor. Platform API'lerine bağlanana kadar tek
   doğruluk kaynağı burası — sayfada başka bir yerde tekrar etmiyor.
   Veri satırları ikonun kendisini değil BİLEŞENİNİ tutuyor: böylece
   ölçü tek yerde (render'da) yazılı ve veri, görünümden bağımsız. */
const PLATFORMLAR = [
  {
    ad: 'YouTube',
    href: 'https://www.youtube.com/@KiyasPodcast',
    Ikon: YoutubeIcon,
    /* YouTube'da karşılık "abone"; diğer ikisinde "takipçi". */
    kitleEtiketi: 'abone',
    kitle: '15.1K+',
    begeni: '100K+',
    izlenme: '10M+',
  },
  {
    ad: 'Instagram',
    href: 'https://www.instagram.com/kiyaspodcast/',
    Ikon: InstagramIcon,
    kitleEtiketi: 'takipçi',
    kitle: '19.9K+',
    begeni: '100K+',
    izlenme: '10M+',
  },
  {
    ad: 'TikTok',
    href: 'https://www.tiktok.com/@kiyaspodcast',
    Ikon: TiktokIcon,
    kitleEtiketi: 'takipçi',
    kitle: '13.7K+',
    begeni: '711.4K+',
    izlenme: '10M+',
  },
]

function Sayi({ deger, etiket }) {
  return (
    <span className="podcast-sayi">
      <strong>{deger}</strong>
      <small>{etiket}</small>
    </span>
  )
}

export default function KiyasPodcast() {
  return (
    <section className="blok blok-krem" id="kiyas-podcast">
      <p className="blok-index">Kıyas Podcast</p>

      <div className="podcast-liste">
        {PLATFORMLAR.map(
          ({ ad, href, Ikon, kitle, kitleEtiketi, begeni, izlenme }) => (
            <div className="podcast-satir" key={ad}>
              <span className="podcast-ad">
                <span className="podcast-ikon">
                  <Ikon size={20} />
                </span>
                {ad}
              </span>

              <span className="podcast-sayilar">
                <Sayi deger={kitle} etiket={kitleEtiketi} />
                <Sayi deger={begeni} etiket="beğeni" />
                <Sayi deger={izlenme} etiket="izlenme" />
              </span>

              {/* Tıklanabilir olan tek öge bu. İkon aria-hidden olduğu
                  için bağlantının adını aria-label taşıyor. */}
              <a
                className="podcast-ok"
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${ad} sayfamızı aç`}
              >
                <ArrowRightIcon size={18} />
              </a>
            </div>
          ),
        )}
      </div>
    </section>
  )
}
