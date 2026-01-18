# 🔄 ALT F5 | Digital Collective

<div align="center">

![ALTF5 Banner](https://img.shields.io/badge/ALT_F5-Refresh_Reality-ccff00?style=for-the-badge&labelColor=000000)

**A digital collective crafting immersive comics, audio experiences, and indie games for those who want to escape the mundane.**

[![Next.js](https://img.shields.io/badge/Next.js-16.1.3-000000?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.3-61dafb?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4-06b6d4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Zustand](https://img.shields.io/badge/Zustand-5.0.10-443e38?style=flat-square)](https://zustand-demo.pmnd.rs/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.27.0-ff0055?style=flat-square&logo=framer)](https://www.framer.com/motion/)

</div>

---

## 📖 Proje Hakkında

**ALT F5**, dijital hikaye anlatımının geleceğini inşa eden bir kolektiftir. Bu web uygulaması, orijinal çizgi romanları, podcast'leri ve indie oyunları tek bir cyberpunk estetikli platformda bir araya getirir.

### ✨ Öne Çıkan Özellikler

- 🎨 **Cyberpunk Estetik** – Neon yeşil vurgular, karanlık temalar ve retro-futuristik tasarım
- 📚 **Çizgi Roman Okuyucu** – Tam ekran, sayfa sayfa okuma deneyimi
- 🎧 **Podcast Hub** – Sesli içerikler için özel oynatıcı arayüzü
- 🎮 **Oyun Vitrini** – Indie oyunların detaylı gösterimi
- 🌊 **Akıcı Animasyonlar** – Framer Motion ile güçlendirilmiş geçişler
- 📱 **Responsive Tasarım** – Mobil öncelikli, tüm ekran boyutlarına uyumlu
- 🔐 **Kimlik Yönetimi** – Modal tabanlı auth sistemi altyapısı

---

## 🏗️ Proje Yapısı

```
ALTF5/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout (fonts, providers)
│   ├── page.tsx                  # Ana sayfa
│   ├── globals.css               # Global stiller & Tailwind v4 tema
│   ├── comic/[id]/page.tsx       # Çizgi roman detay sayfası
│   ├── comics/page.tsx           # Çizgi roman listesi (kategori filtreli)
│   ├── podcast/[id]/page.tsx     # Podcast detay sayfası
│   ├── podcasts/page.tsx         # Podcast listesi
│   ├── game/[id]/page.tsx        # Oyun detay sayfası
│   └── games/page.tsx            # Oyun listesi
│
├── components/
│   ├── common/                   # Paylaşılan bileşenler
│   │   ├── AuthModal.tsx         # Giriş/Kayıt modal'ı
│   │   ├── ComicCard.tsx         # Çizgi roman kartı
│   │   ├── ComicCardSkeleton.tsx # Yükleme iskeleti
│   │   ├── ComicReader.tsx       # Tam ekran okuyucu
│   │   ├── GameCard.tsx          # Oyun kartı
│   │   └── PodcastCard.tsx       # Podcast kartı
│   ├── home/
│   │   └── Hero.tsx              # Parallax hero bölümü
│   └── layout/
│       ├── Navbar.tsx            # Scroll-aware navbar
│       └── Footer.tsx            # Site footer'ı
│
├── context/
│   └── AuthContext.tsx           # Kimlik doğrulama context'i
│
├── lib/
│   ├── store.ts                  # Zustand global store
│   └── types.ts                  # TypeScript interface'leri
│
└── public/                       # Statik dosyalar
```

---

## 📦 Tech Stack

| Katman         | Teknoloji     | Versiyon | Açıklama                            |
| -------------- | ------------- | -------- | ----------------------------------- |
| **Framework**  | Next.js       | 16.1.3   | App Router, RSC, Image Optimization |
| **UI Library** | React         | 19.2.3   | Client Components                   |
| **Dil**        | TypeScript    | 5        | Tip güvenliği                       |
| **Styling**    | Tailwind CSS  | 4        | @theme directive ile CSS variables  |
| **State**      | Zustand       | 5.0.10   | Hafif, selector tabanlı store       |
| **Animasyon**  | Framer Motion | 12.27.0  | Parallax, geçişler, drag            |
| **İkonlar**    | Lucide React  | 0.562.0  | SVG ikon kütüphanesi                |

---

## 🎨 Tasarım Sistemi

### Renk Paleti

```css
--color-background: #050505 /* Derin siyah */ --color-surface: #121212
  /* Yüzey siyahı */ --color-surfaceHighlight: #1e1e1e /* Vurgulu yüzey */
  --color-primary: #ccff00 /* Neon yeşil (aksan) */ --color-secondary: #9d4edd
  /* Mor (ikincil aksan) */;
```

### Tipografi

- **Display Font**: Space Grotesk – Başlıklar, logolar
- **Body Font**: Outfit – Paragraflar, genel metin
- **Mono Font**: System UI Monospace – Kod görünümlü metinler

### Özel Animasyonlar

- `noise-move` – Arka plan gürültü efekti
- `pulse-slow` – Yavaş nabız atan blur efektleri
- `shimmer` – Skeleton card parlaması

---

## 🗃️ Veri Yapıları

### Comic

```typescript
interface Comic {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  description: string;
  tags: string[]; // ["Cyberpunk", "Noir"]
  pages: string[]; // Sayfa URL'leri
}
```

### Podcast

```typescript
interface Podcast {
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
```

### Game

```typescript
interface Game {
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

## 🚀 Kurulum & Çalıştırma

### Gereksinimler

- Node.js 18+
- npm veya yarn

### Adımlar

```bash
# 1. Repo'yu klonla
git clone https://github.com/your-username/altf5.git
cd altf5

# 2. Bağımlılıkları yükle
npm install

# 3. Geliştirme sunucusunu başlat
npm run dev

# 4. Tarayıcıda aç
open http://localhost:3000
```

### Diğer Komutlar

```bash
npm run build    # Production build oluştur
npm run start    # Production sunucusu başlat
npm run lint     # ESLint kontrolü
```

---

## 📄 Sayfa Rotaları

| Rota            | Sayfa          | Açıklama                            |
| --------------- | -------------- | ----------------------------------- |
| `/`             | Ana Sayfa      | Hero, trending, özet bölümler       |
| `/comics`       | Comic Library  | Filtrelenebilir çizgi roman listesi |
| `/comic/[id]`   | Comic Detail   | Detay + okuyucu mod                 |
| `/podcasts`     | Podcast Hub    | Tüm podcast bölümleri               |
| `/podcast/[id]` | Podcast Detail | Detaylı bölüm bilgisi               |
| `/games`        | Indie Arcade   | Oyun vitrini                        |
| `/game/[id]`    | Game Detail    | Screenshots, specs, satın alma      |

---

## 🔧 Zustand Store Kullanımı

```typescript
import { useDataStore } from "@/lib/store";

// Tüm verileri al
const { comics, podcasts, games } = useDataStore();

// Selector ile spesifik veri
const comic = useDataStore((state) => state.getComicById("1"));
const filtered = useDataStore((state) => state.getComicsByTag("Horror"));
```

### Store Metodları

| Metod                 | Parametre | Dönen Tip              |
| --------------------- | --------- | ---------------------- |
| `getComicById(id)`    | `string`  | `Comic \| undefined`   |
| `getPodcastById(id)`  | `string`  | `Podcast \| undefined` |
| `getGameById(id)`     | `string`  | `Game \| undefined`    |
| `getComicsByTag(tag)` | `string`  | `Comic[]`              |

---

## 🎬 Bileşen Özellikleri

### ComicReader

- Keyboard navigation (← →)
- Touch swipe desteği
- Tam ekran toggle
- Sayfa progress bar'ı

### Hero

- Parallax scroll efektleri
- Animated glow blob'ları
- Responsive tipografi (mobile → desktop ölçekleme)

### Navbar

- Scroll-aware arka plan blur'u
- Mobile hamburger menü
- Active link indicator

### ComicCard

- Skeleton loading state
- Hover tabanlı 3D transform
- Lazy image loading

---

## 🌐 SEO & Performans

- ✅ Next.js Image component ile otomatik optimizasyon
- ✅ Metadata API ile dinamik title/description
- ✅ Font preloading (Outfit, Space Grotesk)
- ✅ CSS variables ile tema tutarlılığı
- ✅ Viewport-based lazy loading

---

## 📝 Geliştirici Notları

### Tailwind CSS v4

Bu proje Tailwind CSS v4 kullanmaktadır. Tema ayarları `globals.css` içindeki `@theme` direktifi ile yapılır:

```css
@theme {
  --color-primary: #ccff00;
  --font-display: "Space Grotesk", sans-serif;
  --animate-pulse-slow: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
```

### Dark Mode

Proje varsayılan olarak dark mode'dadır. `<html>` elementi üzerindeki `dark` class'ı ile kontrol edilir.

---

## 🤝 Katkıda Bulunma

1. Fork'la
2. Feature branch oluştur (`git checkout -b feature/yeni-ozellik`)
3. Commit'le (`git commit -m 'feat: yeni özellik eklendi'`)
4. Push'la (`git push origin feature/yeni-ozellik`)
5. Pull Request aç

---

## 📜 Lisans

Bu proje özel lisans altındadır. Tüm hakları saklıdır.

---

<div align="center">

**DESIGNED IN THE VOID** 🕳️

© 2025 ALT F5. ALL RIGHTS RESERVED.

</div>
