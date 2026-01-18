import { create } from "zustand";
import { Comic, Podcast, Game } from "./types";

// =====================
// INITIAL DATA
// =====================

const initialComics: Comic[] = [
  {
    id: "1",
    title: "Neon Drift",
    author: "Alex V.",
    coverImage: "https://picsum.photos/seed/comic1/600/900",
    description:
      "In a city where rain never stops, a courier delivers secrets that could topple the government.",
    tags: ["Cyberpunk", "Noir"],
    pages: [
      "https://picsum.photos/seed/page1/800/1200",
      "https://picsum.photos/seed/page2/800/1200",
      "https://picsum.photos/seed/page3/800/1200",
      "https://picsum.photos/seed/page4/800/1200",
    ],
  },
  {
    id: "2",
    title: "Ethereal Echoes",
    author: "Sarah K.",
    coverImage: "https://picsum.photos/seed/comic2/600/900",
    description:
      "Ghost hunters in the Victorian era discover that ghosts are just time travelers stuck in a loop.",
    tags: ["Fantasy", "Mystery"],
    pages: [
      "https://picsum.photos/seed/page10/800/1200",
      "https://picsum.photos/seed/page11/800/1200",
    ],
  },
  {
    id: "3",
    title: "Void Runners",
    author: "Team Horizon",
    coverImage: "https://picsum.photos/seed/comic3/600/900",
    description:
      "Racing ships through black holes requires madness, skill, and a death wish.",
    tags: ["Sci-Fi", "Action"],
    pages: Array(5).fill("https://picsum.photos/seed/space/800/1200"),
  },
  {
    id: "4",
    title: "The Silent Signal",
    author: "D. Lynch",
    coverImage: "https://picsum.photos/seed/comicHorror/600/900",
    description:
      "A radio host receives a broadcast from a station that burned down 20 years ago. Something is listening.",
    tags: ["Horror", "Thriller"],
    pages: Array(4).fill("https://picsum.photos/seed/horror/800/1200"),
  },
];

const initialPodcasts: Podcast[] = [
  {
    id: "1",
    title: "Creative Block",
    episode: 42,
    duration: "45m",
    coverImage: "https://picsum.photos/seed/pod1/500/500",
    description:
      "Discussing the future of indie art with special guest: The Glitch Artist.",
    hosts: ["Sarah Jenkins", "Mike Chen"],
    fullDescription:
      "In this episode, we sit down with the enigmatic digital creator known as 'The Glitch Artist'. We discuss the philosophy of breaking systems to create art, the rise of AI in creative workflows, and why imperfection is the new perfection. Plus, a deep dive into the latest synth-wave trends dominating the underground scene.",
  },
  {
    id: "2",
    title: "Soundscapes",
    episode: 12,
    duration: "32m",
    coverImage: "https://picsum.photos/seed/pod2/500/500",
    description: "Ambient noise and lo-fi beats for deep work sessions.",
    hosts: ["ALT F5 Audio Team"],
    fullDescription:
      "A curated session of binaural beats, rain sounds recorded in Tokyo, and subtle analog synth pads. Designed to help you enter a flow state for coding, drawing, or writing. No talking, just vibes.",
  },
  {
    id: "3",
    title: "Dev Diaries",
    episode: 8,
    duration: "58m",
    coverImage: "https://picsum.photos/seed/pod3/500/500",
    description: 'Post-mortem on our latest game launch: "Cyber Squirrels".',
    hosts: ["Lead Dev Tom", "Designer Jess"],
    fullDescription:
      "We pull back the curtain on the chaotic launch of 'Cyber Squirrels'. From server crashes on day one to the viral bug that turned the main character into a giant pixelated acorn. Learn what went wrong, what went right, and how we patched it in 48 hours without sleeping.",
  },
];

const initialGames: Game[] = [
  {
    id: "1",
    title: "Chroma Core",
    developer: "Neon Collective",
    coverImage: "https://picsum.photos/seed/game1/800/450",
    price: "$19.99",
    description:
      "A rhythm-based roguelike where the music dictates the dungeon layout.",
    rating: 4.8,
    isOriginal: true,
    marketUrl: "https://store.steampowered.com",
    screenshots: [
      "https://picsum.photos/seed/screen1/1920/1080",
      "https://picsum.photos/seed/screen2/1920/1080",
      "https://picsum.photos/seed/screen3/1920/1080",
    ],
    specs: {
      os: "Windows 10 / 11",
      processor: "Intel Core i5-8400 or AMD Ryzen 5 2600",
      memory: "8 GB RAM",
      graphics: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
      storage: "15 GB available space",
    },
  },
  {
    id: "2",
    title: "Starbound Drifter",
    developer: "Indie Friends",
    coverImage: "https://picsum.photos/seed/game2/800/450",
    price: "$14.99",
    discountedPrice: "$9.99",
    description: "Explore procedural galaxies in a cardboard spaceship.",
    rating: 4.5,
    isOriginal: false,
    marketUrl: "https://store.steampowered.com",
    screenshots: [
      "https://picsum.photos/seed/screen4/1920/1080",
      "https://picsum.photos/seed/screen5/1920/1080",
    ],
    specs: {
      os: "Windows 7+",
      processor: "Dual Core 2.0 GHz",
      memory: "4 GB RAM",
      graphics: "Integrated Graphics",
      storage: "2 GB available space",
    },
  },
  {
    id: "3",
    title: "Glitch Garden",
    developer: "Neon Collective",
    coverImage: "https://picsum.photos/seed/game3/800/450",
    price: "$4.99",
    description:
      "Grow digital plants that eat your desktop files. Tamagotchi meets malware.",
    rating: 4.9,
    isOriginal: true,
    marketUrl: "https://store.steampowered.com",
    screenshots: [
      "https://picsum.photos/seed/screen6/1920/1080",
      "https://picsum.photos/seed/screen7/1920/1080",
      "https://picsum.photos/seed/screen8/1920/1080",
    ],
    specs: {
      os: "Any",
      processor: "Potato",
      memory: "512 MB RAM",
      graphics: "Basic Display",
      storage: "100 MB available space",
    },
  },
];

// =====================
// STORE INTERFACES
// =====================

interface DataState {
  comics: Comic[];
  podcasts: Podcast[];
  games: Game[];

  // Selectors
  getComicById: (id: string) => Comic | undefined;
  getPodcastById: (id: string) => Podcast | undefined;
  getGameById: (id: string) => Game | undefined;
  getComicsByTag: (tag: string) => Comic[];
}

// =====================
// ZUSTAND STORE
// =====================

export const useDataStore = create<DataState>((set, get) => ({
  comics: initialComics,
  podcasts: initialPodcasts,
  games: initialGames,

  getComicById: (id: string) => {
    return get().comics.find((c) => c.id === id);
  },

  getPodcastById: (id: string) => {
    return get().podcasts.find((p) => p.id === id);
  },

  getGameById: (id: string) => {
    return get().games.find((g) => g.id === id);
  },

  getComicsByTag: (tag: string) => {
    if (tag === "All") return get().comics;
    return get().comics.filter((c) => c.tags.includes(tag));
  },
}));
