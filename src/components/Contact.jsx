import { MailIcon } from './Icons.jsx'
import './contact.css'

export default function Contact() {
  return (
    <section className="blok blok-lacivert" id="iletisim">
      <p className="blok-index">İletişim</p>

      <div className="contact-simple">
        <h2 className="blok-baslik">
          Birlikte <em>kıyaslayalım</em>.
        </h2>
        <p>İş birlikleri ve önerileriniz için bize ulaşın.</p>
        <a href="mailto:contact@kiyasmedya.com" className="contact-mail">
          <MailIcon size={18} />
          contact@kiyasmedya.com
        </a>
      </div>
    </section>
  )
}
