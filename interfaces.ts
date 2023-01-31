import { Category } from "./enums";
export { Book, Duck, DamageLogger as Logger, Author, Librarian };

interface Book {
  id: number;
  title: string;
  author: string;
  category: Category;
  available: boolean;
  pages?: number;
  copies?: number;
  year?: number;
  markDamaged?: DamageLogger;
}

interface DamageLogger {
  (reason: string): void;
}
interface Duck {
  walk: () => void;
  swim: () => void;
  quack: () => void;
}

interface Person {
  name: string;
  email: string;
}

interface Author extends Person {
  numBooksPublished: number;
}

interface Librarian extends Person {
  department: string;
  assistCustomer: (custName: string) => void;
}
