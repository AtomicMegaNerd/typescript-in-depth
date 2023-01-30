import { Book, DamageLogger, Author, Librarian } from "./interfaces";

// Public is the default :-)
class UniversityLibrarian implements Librarian {
  static description: string = "A source of knowledge";

  constructor(
    public name: string,
    public email: string,
    public department: string
  ) {}

  assistCustomer(custName: string): void {
    console.log(this.name + " is assisting " + custName);
  }
}

export { UniversityLibrarian };
