import { Book, DamageLogger, Author, Librarian } from "./interfaces";

class UniversityLibrarian implements Librarian {
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
