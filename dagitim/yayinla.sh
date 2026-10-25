#!/usr/bin/env bash
#
# kiyasmedya.com yayını: derle, sunucuya gönder, eskisiyle yer değiştir.
# Proje kökünden çalıştırılır:  bash dagitim/yayinla.sh
#
# Sunucuda klasör tek hamlede değişir (mv), yarım kopyalanmış bir site hiç
# görünmez. Önceki sürüm /var/www/kiyasmedya-web.onceki olarak kalır; geri
# almak için iki klasörün adını değiştirmek yeter.

set -euo pipefail

SUNUCU=kiyas
HEDEF=/var/www/kiyasmedya-web

npm run lint
npm run build

tar -czf /tmp/kiyasmedya-web.tgz -C dist .
scp -q /tmp/kiyasmedya-web.tgz "$SUNUCU:/tmp/kiyasmedya-web.tgz"
rm -f /tmp/kiyasmedya-web.tgz

ssh "$SUNUCU" "set -e
  sudo rm -rf $HEDEF.yeni && sudo mkdir -p $HEDEF.yeni
  sudo tar -xzf /tmp/kiyasmedya-web.tgz -C $HEDEF.yeni
  sudo chown -R root:root $HEDEF.yeni && sudo chmod -R a+rX $HEDEF.yeni
  rm -f /tmp/kiyasmedya-web.tgz
  sudo rm -rf $HEDEF.onceki
  if [ -d $HEDEF ]; then sudo mv $HEDEF $HEDEF.onceki; fi
  sudo mv $HEDEF.yeni $HEDEF
  echo 'yayında:' \$(find $HEDEF -type f | wc -l) dosya"
