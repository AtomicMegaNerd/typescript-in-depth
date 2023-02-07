import { Category } from "./enums";
import { UniversityLibrarian, ReferenceItem } from "./classes";
import { Book, Logger, Author, Librarian } from "./interfaces";
import {
  CalculateLateFee as CalcFee,
  MaxBooksAllowed,
  Purge,
} from "./lib/utilityFunctions";

// This is using a default import
import RefBook from "./encyclopedia";

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

let logDamage: Logger;
logDamage = (damage: string) => console.log("Damage reported" + damage);

logDamage("page torn");

let favouriteAuthor: Author = {
  name: "Fred Smith",
  numBooksPublished: 6,
  email: "fred.smith4000@notreal.lol",
};
console.log(favouriteAuthor);

let favouriteLibrarian: Librarian = new UniversityLibrarian(
  "Tina",
  "tina@fakelibrary.org",
  "Administration"
);
favouriteLibrarian.assistCustomer("Wilma");

// static property
console.log(UniversityLibrarian.description);

// *************************************************************************

let refBook = new RefBook("WorldPedia", 1900, 3);
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

let fee = CalcFee(5);
let maxBooks = MaxBooksAllowed(31);

console.log(fee);
console.log(maxBooks);

// *************************************************************************
const purged: Book[] = Purge<Book>(GetAllBooks());
purged.forEach((book) => console.log(book.title));

const purgedNums: Number[] = Purge([1, 2, 3, 4, 5]);
console.log(purgedNums);
