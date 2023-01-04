enum Category {
  Biography,
  Poetry,
  Fiction,
  Productivity,
  History,
  Sports,
  Children,
  Technology,
}

interface Book {
  id: number;
  title: string;
  author: string;
  category: Category;
  available: boolean;
}

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

// *************************************************************************

let x: number;
x = 5;

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

// Module 6: Interfaces
// *************************************************************************

interface Duck {
  walk: () => void;
  swim: () => void;
  quack: () => void;
}

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
