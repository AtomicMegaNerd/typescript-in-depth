import { Category } from "./enums";

interface Book {
  id: number;
  title: string;
  author: string;
  category: Category;
  available: boolean;
  pages?: number;
  copies?: number;
  year?: number;
  markDamaged?: (reason: string) => void;
}

interface Duck {
  walk: () => void;
  swim: () => void;
  quack: () => void;
}

export { Book, Duck };
