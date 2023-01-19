import { Category } from "./enums";
import { Book, Duck } from "./interfaces";

function GetAllBooks(): Book[] {
  const books: Book[] = [
    {
      id: 1,
      title: "Practical Haskell",
      author: "Fred Smith",
      category: Category.Technology,
      available: false,
    },
    {
      id: 2,
      title: "NixOS for Dummies!",
      author: "Alexandra Thompson",
      category: Category.Technology,
      available: true,
    },
    {
      id: 3,
      title: "Systems for Life",
      author: "Chris Dunphy",
      category: Category.Productivity,
      available: false,
    },
    {
      id: 4,
      title: "Systems for Fun",
      author: "Chris Dunphy",
      category: Category.Productivity,
      available: false,
    },
    {
      id: 4,
      title: "Systems for Work",
      author: "Chris Dunphy",
      category: Category.Productivity,
      available: true,
    },
  ];
  return books;
}

function BookToString(book: Book): string {
  const category: string = Category[book.category];
  return (
    `Title: ${book.title}, Author: ${book.author}, Category: ${category}, ` +
    `Available: ${book.available}`
  );
}

function PrintBook(currentBook: Book): void {
  console.log(BookToString(currentBook));
}

function GetBookTitlesByCategory(
  categeryFilter: Category = Category.Fiction
): Book[] {
  console.log(`Getting books in category ${Category[categeryFilter]}`);
  return GetAllBooks().filter((b) => b.category === categeryFilter);
}

function LogFirstAvailable(books: Book[] = GetAllBooks()): Book {
  const numberOfBooks: number = books.length;
  const firstAvailable: Book = books.filter((b) => b.available)[0];
  console.log(`Total Books: ${numberOfBooks}`);
  console.log(`First Available => ${BookToString(firstAvailable)}`);
  return firstAvailable;
}

function GetBookByID(id: number): Book {
  return GetAllBooks().filter((b) => b.id === id)[0];
}

function CreateCustomerID(name: string, id: number): string {
  return name + id;
}

function GetBooksReadForCust(name: string, ...bookIDs: number[]) {
  bookIDs.forEach((id) => {
    console.log(`Customer ${name} read book ${id}`);
  });
}

function CheckOutBooks(customer: string, ...bookIDs: number[]): Book[] {
  console.log(`Checking out books for ${customer}`);
  return GetAllBooks().filter(
    (book) => bookIDs.includes(book.id) && book.available
  );
}

function CreateCustomer(name: string, age?: number, city?: string) {
  console.log("Creating customer " + name);
  if (age) {
    console.log(`Age: ${age}`);
  }

  if (city) {
    console.log(`City: ${city}`);
  }
}

// Overloading works funny in Typescript

function GetTitles(author: string): Book[];
function GetTitles(author: string, available: boolean): Book[];
function GetTitles(author: string, available?: boolean): Book[] {
  return GetAllBooks().filter((book) => {
    if (available !== undefined) {
      return book.author === author && book.available === available;
    } else {
      return book.author === author;
    }
  });
}

export {
  GetAllBooks,
  GetTitles,
  GetBookByID,
  GetBooksReadForCust,
  GetBookTitlesByCategory,
  CheckOutBooks,
  CreateCustomer,
  CreateCustomerID,
  LogFirstAvailable,
  BookToString,
  PrintBook,
};
