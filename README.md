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
