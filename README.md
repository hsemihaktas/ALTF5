<div align="center">

# 🔄 ALT F5 | Digital Collective

<p align="center">
  <strong>"Refresh Reality — Dijital Hikaye Anlatımının Cyberpunk Evreni"</strong>
</p>

[![Preview](https://raw.githubusercontent.com/hsemihaktas/My-assets/main/alt-f5/preview.webp)](https://github.com/hsemihaktas/My-assets/blob/main/alt-f5/preview.webp)

<br />

[![Next.js](https://img.shields.io/badge/Next.js-16.1.3-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.3-20232a?style=for-the-badge&logo=react&logoColor=61dafb)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Zustand](https://img.shields.io/badge/Zustand-5.0.10-443e38?style=for-the-badge)](https://zustand-demo.pmnd.rs/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.27.0-ff0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

<br />

[Özellikler](#-öne-çıkan-özellikler) • [Ekran Görüntüleri](#-önizleme) • [Teknoloji Yığını](#-teknoloji-yığını) • [Proje Mimarisi](#-proje-mimarisi) • [Kurulum](#-kurulum-ve-çalıştırma) • [Sayfa Rotaları](#-sayfa-rotaları)

</div>

---

## 🌌 Proje Vizyonu

**ALT F5**, sıradanlıktan kaçmak ve dijital sanatın sınırlarını zorlamak isteyenler için geliştirilmiş yeni nesil bir dijital kolektif platformudur. 

Orijinal çizgi romanlar, atmosferik podcast yayınları ve bağımsız (indie) video oyunlarını yüksek tempolu, karanlık ve neon vurgulu bir **Cyberpunk** estetiğinde tek çatı altında buluşturur.

---

## 🖼️ Önizleme

<div align="center">
  <img src="https://raw.githubusercontent.com/hsemihaktas/My-assets/main/alt-f5/preview.webp" alt="ALT F5 Arayüz Önizlemesi" width="100%" style="border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.1);" />
  <p><em>Retro-futuristik tipografi, neon ızgara arka planları ve dinamik vitrin deneyimi.</em></p>
</div>

---

## ✨ Öne Çıkan Özellikler

### 📚 İnteraktif Çizgi Roman Okuyucu (Comic Reader Engine)
- **Çift Sayfa Simülasyonu:** Masaüstü ve geniş ekranlarda gerçek çizgi roman açılış hissi veren çift sayfa (`spread view`), mobilde ise dikey ve tek sayfa akış modu.
- **Doku & Derinlik:** Gerçek baskı hissi katan grain/noise dokusu (`bg-noise`) ve sayfa sırtı gölgelendirmeleri (`spine gradient`).
- **Okuma Kontrolleri:** Yakınlaştırma (Zoom In/Out), tam ekran (`fullscreen`), sayfa kaydırıcı (`scrubber slider`) ve klavye kısayolları (Sağ/Sol Ok, Boşluk, ESC).
- **Kategori Filtreleme:** Cyberpunk, Horror, Sci-Fi ve Fantasy kategorilerine göre anında içerik listeleme.

### 🎙️ Podcast & Audio Hub
- **Canlı Frekans Arayüzü:** Ses dalgası animasyonları, mikrofon görselleştirmeleri ve bölüm arama modülü.
- **Detaylı Bölüm Oynatıcısı:** Oynat/Durdur kontrolleri, süre göstergeleri, konuk & sunucu listesi ve kapsamlı gösterim notları (`show notes`).

### 🎮 Indie Arcade Vitrini
- **Öne Çıkan Oyun Banner'ı:** Post-apokaliptik neon temalı manşet oyun alanı ve aksiyon etiketleri.
- **Kapsamlı Oyun Kartları:** Fiyatlandırma, indirim oranları, kullanıcı puanlaması (`rating`), geliştirici bilgisi ve orijinal yapım etiketleri.
- **Teknik Özellikler & Galeri:** Sistem gereksinimleri (OS, CPU, RAM, GPU, Depolama) ve oyun içi ekran görüntüsü galerisi.

### 🔐 Kimlik Doğrulama Modalı (Auth System)
- Framer Motion yay fiziği (`spring physics`) ile açılan ve arka planı bulanıklaştıran (`backdrop blur`) modal.
- Giriş Yap (Login) ve Kolektife Katıl (Sign Up) geçişleri, siber tasarımlı form bileşenleri.

### ⚡ Performans ve Tasarım
- **Tailwind CSS v4:** `@theme` direktifi üzerinden merkezi renk, font ve animasyon token'ları.
- **Akıcı Animasyonlar:** Yatay sürükle-bırak (`drag="x"`) koleksiyon şeritleri, parallax scroll ve hover 3D kart efektleri.
- **SEO & Erişilebilirlik:** Next.js Metadata API, optimize edilmiş font yüklemesi (`next/font/google`) ve responsive tasarım.

---

## 🛠️ Teknoloji Yığını

| Alan | Teknoloji | Versiyon | Görev / Kullanım Amacı |
| :--- | :--- | :--- | :--- |
| **Framework** | [Next.js](https://nextjs.org/) | `16.1.3` | App Router mimarisi, SSR ve görsel optimizasyonu |
| **Kütüphane** | [React](https://react.dev/) | `19.2.3` | Modern reaktif UI bileşenleri |
| **Tip Güvenliği** | [TypeScript](https://www.typescriptlang.org/) | `^5.0.0` | Güçlü tip tanımlamaları ve ölçeklenebilir kod tabanı |
| **Stil / CSS** | [Tailwind CSS](https://tailwindcss.com/) | `^4.0.0` | `@theme` tabanlı CSS değişkenleri ve modern yardımcı sınıflar |
| **State Yönetimi** | [Zustand](https://zustand-demo.pmnd.rs/) | `^5.0.10` | Hızlı, seçici tabanlı (selector-based) küresel state |
| **Animasyon** | [Framer Motion](https://www.framer.com/motion/) | `^12.27.0` | Sayfa geçişleri, parallax, sürükleme ve modal animasyonları |
| **İkon Seti** | [Lucide React](https://lucide.dev/) | `^0.562.0` | Temiz ve optimize edilmiş modern SVG ikonlar |

---

## 📁 Proje Mimarisi

```text
ALTF5/
├── app/                              # Next.js App Router Dizin Yapısı
│   ├── comic/[id]/page.tsx           # Çizgi roman detay sayfası & okuyucu başlatıcı
│   ├── comics/page.tsx               # Filtrelenebilir çizgi roman kütüphanesi
│   ├── game/[id]/page.tsx            # Oyun detay sayfası (ekran görüntüleri, specs)
│   ├── games/page.tsx                # Indie oyun vitrini & Arcade merkezi
│   ├── podcast/[id]/page.tsx         # Podcast detay sayfası & ses çalar arayüzü
│   ├── podcasts/page.tsx             # Tüm ses kayıtları ve canlı frekans bölümü
│   ├── globals.css                   # Tailwind v4 tema token'ları & özel keyframe'ler
│   ├── layout.tsx                    # Kök düzen (Google Fonts, AuthProvider, Navbar, Footer)
│   └── page.tsx                      # Ana sayfa (Hero, Trending Strip, Vitrin bölümleri)
│
├── components/
│   ├── common/                       # Tekrar kullanılabilir ortak bileşenler
│   │   ├── AuthModal.tsx             # Giriş / Kayıt modalı ve form yapısı
│   │   ├── ComicCard.tsx             # 3D hover efektli çizgi roman kartı
│   │   ├── ComicCardSkeleton.tsx     # Yükleme iskelet animasyonu
│   │   ├── ComicReader.tsx           # Çift sayfa / Tek sayfa okuma motoru
│   │   ├── GameCard.tsx              # Fiyat, indirim ve puanlama içeren oyun kartı
│   │   └── PodcastCard.tsx           # Oynatma süresi ve bölüm bilgili ses kartı
│   ├── home/
│   │   └── Hero.tsx                  # Parallax efektli manşet ve interaktif aksiyonlar
│   └── layout/
│       ├── Navbar.tsx                # Scroll duyarlı, bulanık arka planlı gezinme çubuğu
│       └── Footer.tsx                # Siberpunk stilinde telif ve bağlantı altlığı
│
├── context/
│   └── AuthContext.tsx               # Modal görünürlüğü ve oturum context'i
│
├── lib/
│   ├── store.ts                      # Zustand veri mağazası, mock veriler ve selector'lar
│   └── types.ts                      # Comic, Podcast, Game TypeScript arayüzleri
│
└── public/                           # Statik görsel ve medya varlıkları
```

---

## 🎨 Tasarım Sistemi & Tema

Tailwind CSS v4 `@theme` yapısı kullanılarak hazırlanan renk paleti ve tipografi sistemi:

### Renk Paleti

```css
--color-background:        #050505;  /* Deep Void (Ana arka plan) */
--color-surface:           #121212;  /* Kart ve panel zemin rengi */
--color-surfaceHighlight:  #1e1e1e;  /* Vurgulu yüzey ve ayrıcı rengi */
--color-primary:           #ccff00;  /* Neon Volt / Cyber Lime (Ana aksan) */
--color-secondary:         #9d4edd;  /* Synth Purple / Electric Violet (İkincil aksan) */
```

### Tipografi

- **Display Font:** `Space Grotesk` – Başlıklar, logo ve vurucu sloganlar
- **Sans-Serif Font:** `Outfit` – Gövde metinleri, açıklamalar ve form arayüzleri
- **Mono Font:** `System UI Monospace` – Kod blokları, teknik veri etiketleri ve künyeler

### Özel Efektler ve Keyframe'ler

- **Grid Background:** 50px sabit ızgara deseni ile cyberpunk atmosferi
- **Noise Texture:** Çizgi roman sayfaları ve paneller için analog gren dokusu
- **Custom Scrollbar:** Neon yeşil kaydırma çubuğu ve koyu zemin rayı

---

## 🗃️ Veri Modelleri

Uygulamada kullanılan temel veri tipleri (`lib/types.ts`):

```typescript
// Çizgi Roman
export interface Comic {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  description: string;
  tags: string[];        // Örn: ["Cyberpunk", "Noir"]
  pages: string[];       // Sayfa URL dizisi
}

// Podcast
export interface Podcast {
  id: string;
  title: string;
  episode: number;
  duration: string;
  coverImage: string;
  description: string;
  audioUrl?: string;
  hosts?: string[];
  fullDescription?: string;
}

// Oyun
export interface Game {
  id: string;
  title: string;
  developer: string;
  coverImage: string;
  price: string;
  discountedPrice?: string;
  description: string;
  rating: number;
  isOriginal: boolean;
  marketUrl?: string;
  screenshots?: string[];
  specs?: {
    os: string;
    processor: string;
    memory: string;
    graphics: string;
    storage: string;
  };
}
```

---

## 🚦 Sayfa Rotaları

| Rota | Sayfa | Açıklama |
| :--- | :--- | :--- |
| `/` | **Ana Sayfa** | Hero bölümü, trending strip, öne çıkan çizgi roman, podcast ve oyunlar |
| `/comics` | **Çizgi Roman Arşivi** | Kategori etiket filtreli (All, Cyberpunk, Horror, Sci-Fi, Fantasy) koleksiyon |
| `/comic/[id]` | **Çizgi Roman Detayı** | Eser özeti, yazar bilgisi ve tam teşekküllü `ComicReader` okuma motoru |
| `/podcasts` | **Ses Kayıtları** | Canlı frekans manşeti, bölüm arama çubuğu ve yayın listesi |
| `/podcast/[id]` | **Bölüm Detayı** | Dinamik arka plan ambiyansı, oynatıcı kontrolleri ve bölüm notları |
| `/games` | **Indie Arcade** | Öne çıkan "Cyber Squirrels" manşeti ve bağımsız oyun vitrini |
| `/game/[id]` | **Oyun Detayı** | Ekran görüntüleri, mağaza bağlantısı ve donanım gereksinimleri tablosu |

---

## 🚀 Kurulum ve Çalıştırma

Projeyi yerel ortamınızda ayağa kaldırmak için aşağıdaki adımları izleyin:

### Gereksinimler
- **Node.js**: `v18.18.0` veya üzeri
- **Paket Yöneticisi**: `npm`, `pnpm` veya `yarn`

### 1. Depoyu Klonlayın
```bash
git clone https://github.com/hsemihaktas/ALTF5.git
cd ALTF5
```

### 2. Bağımlılıkları Yükleyin
```bash
npm install
```

### 3. Geliştirme Sunucusunu Başlatın
```bash
npm run dev
```

Tarayıcınızda **[http://localhost:3000](http://localhost:3000)** adresine giderek uygulamayı görüntüleyebilirsiniz.

### 4. Diğer Betikler

```bash
npm run build   # Üretim (production) derlemesini hazırlar
npm run start   # Hazırlanan derlemeyi sunar
npm run lint    # ESLint kurallarını denetler
```

---

## 🤝 Katkıda Bulunma

1. Bu depoyu çatallayın (**Fork**).
2. Yeni bir özellik dalı oluşturun:
   ```bash
   git checkout -b feature/harika-ozellik
   ```
3. Değişikliklerinizi commit edin:
   ```bash
   git commit -m 'feat: Yeni özellik eklendi'
   ```
4. Dalınızı uzak depoya gönderin:
   ```bash
   git push origin feature/harika-ozellik
   ```
5. Bir **Pull Request** açın.

---

## 📜 Lisans

Bu proje **MIT Lisansı** veya özel kullanım hakları kapsamında korunmaktadır. Detaylar için iletişime geçiniz.

<div align="center">
  <br />
  <strong>DESIGNED IN THE VOID 🕳️</strong><br />
  <sub>© 2025 - 2026 ALT F5. All rights reserved.</sub>
</div>
