import { MailIcon } from './Icons.jsx'
import './contact.css'

export default function Contact() {
  return (
    <section className="section" id="iletisim">
      <div className="container">
        <div className="section-head">
          <span className="section-title">
            <span className="dot" />
            İletişim
          </span>
        </div>

        <div className="contact-simple">
          <h2>Bize ulaşın.</h2>
          <p>Öneri ve iş birlikleri için bize e-posta gönderebilirsiniz.</p>
          <a href="mailto:contact@kiyasmedya.com" className="contact-mail">
            <MailIcon size={18} />
            contact@kiyasmedya.com
          </a>
        </div>
      </div>
    </section>
  )
}
