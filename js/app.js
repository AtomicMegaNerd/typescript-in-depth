var Category;
(function (Category) {
    Category[Category["Biography"] = 0] = "Biography";
    Category[Category["Poetry"] = 1] = "Poetry";
    Category[Category["Fiction"] = 2] = "Fiction";
    Category[Category["Productivity"] = 3] = "Productivity";
    Category[Category["History"] = 4] = "History";
    Category[Category["Sports"] = 5] = "Sports";
    Category[Category["Children"] = 6] = "Children";
    Category[Category["Technology"] = 7] = "Technology";
})(Category || (Category = {}));
function GetAllBooks() {
    const books = [
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
    ];
    return books;
}
function BookToString(book) {
    const category = Category[book.category];
    return (`Title: ${book.title}, Author: ${book.author}, Category: ${category}, ` +
        `Available: ${book.available}`);
}
function GetBookTitlesByCategory(categeryFilter = Category.Fiction) {
    console.log(`Getting books in category ${Category[categeryFilter]}`);
    return GetAllBooks().filter((b) => b.category === categeryFilter);
}
function LogFirstAvailable(books = GetAllBooks()) {
    const numberOfBooks = books.length;
    const firstAvailable = books.filter((b) => b.available)[0];
    console.log(`Total Books: ${numberOfBooks}`);
    console.log(`First Available => ${BookToString(firstAvailable)}`);
    return firstAvailable;
}
function GetAllBookByID(id) {
    return GetAllBooks().filter((b) => b.id === id)[0];
}
function CreateCustomerID(name, id) {
    return name + id;
}
// *************************************************************************
let x;
x = 5;
let IdGenerator;
IdGenerator = CreateCustomerID;
let myId = IdGenerator("chris", 4001);
console.log(myId);
const allBooks = GetAllBooks();
LogFirstAvailable(allBooks);
const productivityBooks = GetBookTitlesByCategory(Category.Productivity);
productivityBooks.map((val) => console.log(val.id + " = " + val.title));
console.log(GetAllBookByID(1).title);
function GetBooksReadForCust(name, ...bookIDs) {
    bookIDs.forEach((id) => {
        console.log(`Customer ${name} read book ${id}`);
    });
}
function CheckOutBooks(customer, ...bookIDs) {
    console.log(`Checking out books for ${customer}`);
    return GetAllBooks().filter((book) => bookIDs.includes(book.id) && book.available);
}
function CreateCustomer(name, age, city) {
    console.log("Creating customer " + name);
    if (age) {
        console.log(`Age: ${age}`);
    }
    if (city) {
        console.log(`City: ${city}`);
    }
}
// *************************************************************************
GetBooksReadForCust("Chris", 3, 4, 5, 6, 7);
CreateCustomer("Bill");
CreateCustomer("Fred", 36);
CreateCustomer("Tina", 46, "Vancouver");
let fictionBooks = GetBookTitlesByCategory();
let poetryBooks = GetBookTitlesByCategory(Category.Poetry);
LogFirstAvailable();
const checkedOut = CheckOutBooks("Chris", 1, 3);
checkedOut.forEach((b) => console.log(BookToString(b)));
