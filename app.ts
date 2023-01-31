import { Category } from "./enums";
import { UniversityLibrarian, ReferenceItem, Encyclopedia } from "./classes";
import { Book, DamageLogger, Author, Librarian } from "./interfaces";

import {
  GetBooksReadForCust,
  CreateCustomer,
  CreateCustomerID,
  CheckOutBooks,
  BookToString,
  PrintBook,
  GetBookTitlesByCategory,
  GetBookByID,
  GetTitles,
  GetAllBooks,
  LogFirstAvailable,
} from "./functions";

// *************************************************************************

let _x: number;
_x = 5;

let IdGenerator: (chars: string, nums: number) => string;
IdGenerator = CreateCustomerID;

let myId: string = IdGenerator("chris", 4001);
console.log(myId);

const allBooks: Book[] = GetAllBooks();
LogFirstAvailable(allBooks);

const productivityBooks: Book[] = GetBookTitlesByCategory(
  Category.Productivity
);
productivityBooks.map((val) => console.log(val.id + " = " + val.title));

console.log(GetBookByID(1).title);

// *************************************************************************

GetBooksReadForCust("Chris", 3, 4, 5, 6, 7);
CreateCustomer("Bill");
CreateCustomer("Fred", 36);
CreateCustomer("Tina", 46, "Vancouver");

let fictionBooks = GetBookTitlesByCategory();
let poetryBooks = GetBookTitlesByCategory(Category.Poetry);

LogFirstAvailable();

const checkedOut: Book[] = CheckOutBooks("Chris", 1, 3);
checkedOut.forEach((b) => console.log(BookToString(b)));

console.log("\nGetting books...");
const dunphyBooks: Book[] = GetTitles("Chris Dunphy");
dunphyBooks.forEach((b) => console.log(BookToString(b)));

console.log("\nGetting books...");
const dunphyBooksAvail: Book[] = GetTitles("Chris Dunphy", true);
dunphyBooksAvail.forEach((b) => console.log(BookToString(b)));

// *************************************************************************
let mybook: Book = {
  id: 5,
  title: "Rust for nerds",
  author: "Chris Dunphy",
  available: true,
  category: Category.Technology,
  year: 2023,
  copies: 11,
  pages: 250,
  markDamaged: (reason: string) => console.log("Damaged: " + reason),
};

// This works even though the mybook object has extra fields.
PrintBook(mybook);
mybook.markDamaged("Bent back cover");

// *************************************************************************

import { Duck } from "./interfaces";

// *************************************************************************

let probablyDuck = {
  walk: () => console.log("Walking like a duck"),
  swim: () => console.log("Swimming like a duck"),
  quack: () => console.log("Quacking like a duck"),
};

function FlyOverWater(bird: Duck) {
  bird.swim();
}

// Objects can implicitly implement an interface in Typescript
FlyOverWater(probablyDuck);

let logDamage: DamageLogger;
logDamage = (damage: string) => console.log("Damage reported" + damage);

logDamage("page torn");

let favouriteAuthor: Author = {
  name: "Fred Smith",
  numBooksPublished: 6,
  email: "fred.smith4000@notreal.lol",
};

let favouriteLibrarian: Librarian = new UniversityLibrarian(
  "Tina",
  "tina@fakelibrary.org",
  "Administration"
);
favouriteLibrarian.assistCustomer("Wilma");

// static property
console.log(UniversityLibrarian.description);

// *************************************************************************

let refBook = new Encyclopedia("WorldPedia", 1900, 3);
refBook.printItem();
refBook.printCitation();

// *************************************************************************
let NewsPaper = class extends ReferenceItem {
  printCitation(): void {
    console.log(`Newspaper: ${this.title}`);
  }
};

let myPaper = new NewsPaper("The Gazette", 2022);
myPaper.printCitation();
