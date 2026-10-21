# Bee Flower Shop — Yeni İnternet Sitesi

Bu depo, Bee Flower Shop'un ikas üzerindeki sitesinin yeniden tasarımı içindir. Bu dosyayı her oturumun başında oku; burada yazan kararlar önceki konuşmalarda alındı.

## Çalışma kuralları (Emre ARI'nın isteği)

- **Sormadan kurma, yazma, gönderme.** Paket kurmak (yarn, npm), yeni proje iskeleti oluşturmak, ikas'a tema yüklemek, push etmek gibi adımlardan önce ne yapacağını söyle ve onay bekle. Okuma ve araştırma serbest.
- Önce konuşup planla, sonra uygula. Kullanıcı "dur, direkt yazmayalım" dediğinde iş durur.
- Yanıtlar Türkçe, sade ve kısa olsun. Teknik terimleri açıkla.
- Mağaza erişim bilgileri (ikas `config.json`, API anahtarları) asla depoya girmez, sohbete yazılmaz.
- Kullanıcı hem bilgisayardan (Claude Code masaüstü) hem telefondan (Claude Code bulut) bu depoyla çalışır. İşe başlamadan `git pull`, iş bitince commit + push (onayla).

## İşletme özeti

- **Ürün:** El yapımı **şönil (chenille) çiçekler** ve **kendin yap (DIY) kitleri**. Taze çiçekçi değil; aynı gün teslimat, teslim saati gibi çiçekçi özellikleri gerekmez.
  - Hazır ürünler: tekli çiçek (lale, lilyum ~350 TL), mini saksı (~450 TL), buket, sepet, vazo, çanta aranjman.
  - Kitler: lilyum buket kiti (65 şönil, QR video anlatım, ~399 TL, eski 449), papatya kiti (~239 TL), iki kişilik "Sevgilinle Yap" / "Arkadaşınla Yap" (130 şönil), taç kitleri. Fiyatlar Ekim 2026 sitesinden; güncelini ikas'tan al.
- **Müşteri:** Bireysel, hediye alan kişiler. Satışların büyük kısmı mobilden.
- **Teslimat:** Tüm Türkiye. Kullanıcı "ertesi gün kargo" dedi; eski sitede "2–3 iş günü hazırlanır" yazıyordu. **Bu tutarsızlık henüz netleşmedi** — siteye yazmadan önce kullanıcıya teyit ettir.
- 1.500 TL üzeri ücretsiz kargo, 14 gün iade. WhatsApp: 0551 096 56 14.
- Mevcut site: https://www.beeflowershop.com (ikas). Ana satış kanalı Trendyol; kendi site Buybox bağımlılığını azaltmak için önemli.

## Marka kiti

| Rol | Renk |
|---|---|
| Krem zemin (%60) | `#F6F1E8` |
| Birincil pembe (%25) | `#EB90A5` |
| İkincil gül (buton) | `#AC6174` |
| Adaçayı yeşili | `#C5C89B` |
| Zeytin | `#8C846A` |
| Bal sarısı (vurgu, %5) | `#EAC26C` |
| Yazı | `#0E0C0B` |

- Fontlar: başlık **Playfair Display**, gövde **Montserrat**, imza/logo dokunuşu **Allura** (az kullan).
- Motto: "Bugün Sürpriz, Hep Hatıra". Ton: zarif, sıcak, güven veren; sitede "siz" dili.
- Logo: "Bee Flowers – Handmade Floral Design" (marka adı "Bee Flower Shop" — isim birliği açık soru). Logo etrafında boşluk, efekt/gölge yok, üstüne yazı yok.
- Ürün görsellerinde **gerçek ürüne sadakat** kuralı: çiçek ekleme/çıkarma, doku pürüzsüzleştirme, etiket silme yok. Ayrıntı: [docs/TASARIM_DILI.md](docs/TASARIM_DILI.md).
- Eski sitedeki yeşil butonlar ve Poppins fontu marka kitine aykırı; kullanılmayacak.

## Mevcut sitede bulunan sorunlar (Ekim 2026 analizi)

- Marka kitiyle uyumsuz renk ve font.
- Ürün görseli olarak yazılı Trendyol kapakları kullanılıyor; sitede yazısız fotoğraf olmalı.
- Ana sayfada aynı ürünler iki kez listeleniyor; hero yok.
- Pazaryeri tarzı çok uzun ürün başlıkları.
- Her renk ayrı ürün; varyant yapısına geçilmeli.
- Yorum yok; mobilde ürün görseli geç yükleniyor (~8,5 sn tam yükleme).
- Ürün açıklamasında "Trendyol'un en trend…" ifadesi var — kaldırılmalı.

## Yapılanlar

- [x] Marka ve mevcut site analizi.
- [x] `taslak/index.html`: mobil öncelikli, tıklanabilir ana sayfa + ürün sayfası taslağı (vanilla HTML/CSS/JS). Yayınlanan önizleme: https://claude.ai/artifact/YHEKJbY55Ckh8noMZnkXH2 (özel; paylaşım kullanıcının Share menüsünden).
  - Ana sayfa: hero, güven şeridi, "Hazır çiçek / Kendin yap" iki yol, "Kime hediye?" filtresi, kitler, "Kit nasıl çalışır" (3 adım), Birlikte Yap bandı, kategoriler, yorumlar, hikâye, SSS, bülten.
  - Ürün sayfası: galeri, renk varyantı, ücretsiz hediye notu, ücretsiz kargo çubuğu, kutu içeriği, akordeonlar, mobil yapışkan "Sepete ekle".
  - Sepet çekmecesi, menü çalışır. "Tasarım notları" anahtarı her bölümün gerekçesini gösterir.
  - **Yorumlar örnek** (gerçek Trendyol yorumlarıyla değişecek). "Sevgilinle Yap" fiyatı bilinmiyor.
- [x] ikas partner hesabı açıldı (kullanıcı, 19 Ekim 2026).
- [x] Taslak revizyonu 1 (20 Ekim 2026): ana sayfa yeni sırası, setler, özel günler, çapraz satış, sepette öneri, Atölye dokunuşları (arı, şönil ayraç, rozetler).

## Alınan kararlar (20 Ekim 2026)

- **Satış stratejisi: "kitle çek, hazıra yönlendir."** Satışların çoğu kitten, kârın çoğu hazır çiçekten. Kit öne çıkar; hazır çiçek hemen ardından aynı güçte durur. Kit ↔ hazır köprüleri (ürün sayfası kutusu, sepette öneri, ücretsiz kargo eşiği, setler, özel gün sayfaları) bu yüzden var.
- **Tema yönü: "Atölye".** Sıcak el işi atölyesi hissi; kit sitelerinin samimiyeti tüm siteye. Arı motifi, şönil tel gibi kıvrımlı ayraç, "El yapımı / Solmaz / QR video" rozetleri, Allura sadece 1–2 yerde. Fotoğraf dili: hazır ürün ev ortamında, kit kutu içeriği ve eller.
- **Site yapısı:** Ana sayfa uzun ve bölümlü (menü bölümlere kaydırır); ürün, kategori, sepet ayrı adreslerde (Google, paylaşım, reklam için).
- **Görseller:** Kullanıcı ürün fotoğraflarını elden geçirip kendisi yükleyecek. Yeni bölümlerde ürün fotoğrafı eklenmez; "Görsel gelecek" kutusu ve ne çekileceği notu konur.
- **Bee Bahçem oyunu** (21 Ekim 2026): Ayrı bir Claude Code penceresinde geliştiriliyor. Ad değişebilir (taslakta tek yerde: `GAME` sabiti). Büyük ihtimalle tarayıcıda oynanır (kesin değil). Henüz yayında değil, tarih belli değil. Oyundaki çiçekler ürünlerle aynı. Sitede: menü, footer, kit adımlarının 4. adımı + oyun bandı, ürün sayfasında tek satır, "Bee Bahçem" sayfası ("Yakında" + e-posta ile haber + ürün önerileri). Kit kutusundaki QR doğrudan oyuna değil, sitedeki oyun sayfasına gider. İleride: üyelikle giriş, kutudaki kodla çiçeği oyuna ekleme, oyundan ürüne link.
- **"Kendi buketinizi tasarlayın"** (21 Ekim 2026): İçeriği henüz kurgulanmadı (içinde araçlar olacak). Şimdilik "Çok yakında". Bilerek belirgin: sitede bal sarısı yalnız bu alanda; hero'da bağlantı, güven şeridinin altında bant, menüde sarı satır.
- Örnek ilham siteleri: The Woobles, LEGO Botanicals, Hawthorn Handmade, Bloom & Wild, Afloral. Kullanıcı en çok kit sitelerini sevdi.

## Sıradaki adımlar

1. Kullanıcı taslağı inceleyip revizyon söyleyecek (eşiyle de paylaşacak).
2. ikas partner panelinde **geliştirme (test) mağazası** ve **tema** oluşturulacak; Theme Config alınacak (depoya girmez).
3. Kurulum kararları (her biri onayla):
   - Yarn kurulu değil (`npm install -g yarn`).
   - Tema iskeleti: `npx create-ikas-theme@latest` en son Nisan 2023'te güncellenmiş ve `@ikas/storefront ^4` istiyor; npm'de güncel sürüm 5.x. Kurmadan önce hangi sürümün doğru olduğu ikas.dev'den teyit edilmeli. ikas "ikas Studio" adlı yeni bir tema ortamı duyuracağını yazıyor.
   - ikas tema geliştirme **beta**; canlıya geçmeden her şey test mağazasında denenir, eski tema yedek kalır.
4. Taslaktaki bölümler ikas bileşenlerine (Next.js + TypeScript + MobX) dönüştürülecek: önce ana sayfa, sonra ürün, kategori, sepet.
5. Açık işler: yazısız "bitmiş buket" fotoğrafları, gerçek yorumlar, kargo süresi teyidi, renkleri varyanta toplama (ikas Admin API ile mümkün).
6. Taslaktaki örnekler teyit bekliyor: set içerikleri ve set fiyatı, hazır ürünlerde "~2 saat el emeği" süresi, öne çıkacak özel günler.

## Klasörler

- `taslak/` — onaylanacak HTML taslak ve kullandığı küçültülmüş görseller (`taslak/img/`).
- `docs/TASARIM_DILI.md` — ürün görseli ve ambalaj tasarım kuralları.
- `.claude/launch.json` — taslağı yerelde `python -m http.server` ile 5173 portunda açar.
- Orijinal görseller ve marka dosyaları kullanıcının Google Drive'ında (`BEE - Tasarım`), depoda değil.

## Kaynaklar

- ikas tema dokümanı: https://ikas.dev/docs/theme/getting-started/introduction
- ikas.dev hakkında: https://support.ikas.com/what-is-ikas.dev
