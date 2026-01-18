export interface Comic {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  description: string;
  tags: string[];
  pages: string[];
}

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

export type SectionType = "comics" | "podcasts" | "games";
