/* Sayfada gerçekten kullanılan ikonlar. Hepsi 24 birimlik bir kutuya
   çizili ve rengini currentColor’dan alıyor; böylece bulundukları
   bloğun mürekkebine uyuyorlar. */

export const ArrowRightIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 12h16m0 0-6-6m6 6-6 6" />
  </svg>
)

export const MailIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
)

export const YoutubeIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M23.5 6.5a3 3 0 0 0-2.1-2.1C19.5 4 12 4 12 4s-7.5 0-9.4.4A3 3 0 0 0 .5 6.5 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.5 3 3 0 0 0 2.1 2.1C4.5 20 12 20 12 20s7.5 0 9.4-.4a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.5ZM9.6 15.6V8.4L15.8 12l-6.2 3.6Z" />
  </svg>
)

export const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
    <circle cx="12" cy="12" r="4.2" />
    <circle cx="17.4" cy="6.6" r="0.6" fill="currentColor" stroke="none" />
  </svg>
)

export const TiktokIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.6 6.7a5.04 5.04 0 0 1-3.05-2.88 5 5 0 0 1-.3-1.57H12.9v13.2a2.96 2.96 0 1 1-2.1-2.84V9.2a6.32 6.32 0 1 0 5.45 6.25V8.9a8.3 8.3 0 0 0 4.55 1.37V6.92c-.41 0-.82-.08-1.2-.22Z" />
  </svg>
)
