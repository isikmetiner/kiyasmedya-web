# Kıyas Medya — kurumsal site

Tek sayfalık tanıtım sitesi. React 19 + Vite 8, ek bağımlılık yok:
yönlendirme, durum yönetimi ve UI kütüphanesi kullanılmıyor.

## Çalıştırma

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # dist/
npm run preview  # dist/ önizlemesi
npm run lint     # oxlint
```

## Yapı

Sayfa, arka arkaya gelen **tam genişlikte renk bloklarından** oluşuyor.
Ortalanmış bir kolon yok; her bölüm ekranın iki kenarına da değiyor ve
yatay nefesini `--pad-x` jetonundan alıyor.

| Bölüm | Bileşen | Tema |
| --- | --- | --- |
| Ana Sayfa | `Hero.jsx` | lacivert |
| Kıyas Podcast | `KiyasPodcast.jsx` | krem |
| Kıyas Lig | `KiyasLig.jsx` | lacivert |
| Hakkımızda | `About.jsx` | krem |
| İletişim | `Contact.jsx` | lacivert |

Ana Sayfa dışındaki blokların yüksekliği `main` üzerindeki ızgarayla
eşitleniyor (`grid-auto-rows: 1fr`), bölüm sayısından bağımsız olarak.

### Blok teması nasıl çalışıyor

`index.css`'teki `.blok-krem` gibi sınıflar `--text`, `--muted`, `--line`
jetonlarını **kendi içinde yeniden tanımlıyor**. Bileşenler hangi zeminde
olduklarını bilmek zorunda değil; `var(--text)` okuyan her şey doğru
renge dönüyor.

Bir tuzak var: `color` kalıtımla iner ve `var(--text)`'i yeniden çözmez.
Bu yüzden `.blok` kendi mürekkebini `color: var(--text)` ile yeniden
bağlıyor. Bu satır silinirse krem bloklarda, rengini açıkça yazmayan her
metin gövdeden gelen beyazı miras alır ve zeminde kaybolur.

## Veri

Sosyal medya sayıları `KiyasPodcast.jsx` içindeki `PLATFORMLAR` dizisinde,
elle güncelleniyor. Sayfada başka bir yerde tekrar etmiyorlar.

## Yayın dosyaları

`public/` içindekiler `dist/`e olduğu gibi kopyalanır:

| Dosya | İşi |
| --- | --- |
| `favicon.svg` | Tarayıcı sekmesi ikonu |
| `og.png` | Bağlantı önizleme kapağı (1200×630) |
| `robots.txt` | Tarayıcı botlarına izin + sitemap adresi |
| `sitemap.xml` | Tek sayfalık site haritası |

Önizleme kapağını yeniden üretmek için (kaynak: `og-kapak.svg`):

```bash
npx --yes sharp-cli -i og-kapak.svg -o public/ -f png resize 1200 630
mv public/og-kapak.png public/og.png
```

`og:image` **mutlak adres** olmak zorunda; `index.html`'de `https://kiyasmedya.com/og.png`
yazılı. Alan adı değişirse orayı da güncelleyin.

## Yayın

Site 922 API'siyle aynı sunucuda (92.205.19.254, ssh adı `kiyas`), nginx
ile durağan dosya olarak sunuluyor. 25 Ekim 2026'ya kadar GitHub Pages'teydi.

```bash
bash dagitim/yayinla.sh
```

Betik `npm run lint` → `npm run build` çalıştırır, `dist/`i sunucuda
`/var/www/kiyasmedya-web`'e tek hamlede koyar. Önceki sürüm
`/var/www/kiyasmedya-web.onceki`'de kalır; geri almak için iki klasörün
adını değiştirmek yeter. `main`'e push etmek artık yayınlamaz.

- **nginx:** `dagitim/nginx-kiyasmedya.conf` (sunucuda
  `/etc/nginx/sites-available/kiyasmedya`). Elle yazılmış; http'nin tamamı
  ve `www` → `https://kiyasmedya.com`.
- **Sertifika:** Let's Encrypt, **webroot** (`/var/www/letsencrypt`) ile;
  certbot nginx dosyasına dokunmuyor, yenilemede nginx'i yeniden yüklüyor.
- **DNS (GoDaddy):** `A @ → 92.205.19.254`, `CNAME www → @`. E-posta
  kayıtlarına dokunmayın.
- `.github/workflows/deploy.yml` Pages döneminden kalma ve **kapatıldı**
  (Actions'ta "disabled"). Silinmesi GitHub arayüzünden yapılmalı; gh jetonunun
  iş akışı dosyalarını değiştirme izni yok.

Alan adı değişirse `index.html`'deki mutlak adresleri, `robots.txt`'yi,
`sitemap.xml`'i ve nginx dosyasını birlikte güncelleyin.
