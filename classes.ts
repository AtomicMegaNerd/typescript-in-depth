// Import the whole module as an interface
import * as Interfaces from "./interfaces";
export { UniversityLibrarian, ReferenceItem };

// Public is the default :-)
class UniversityLibrarian implements Interfaces.Librarian {
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

abstract class ReferenceItem {
  static department: string = "Research";

  constructor(public title: string, protected year: number) {}

  printItem(): void {
    console.log(`${this.title} was published in ${this.year}.`);
    console.log(`Department: ${ReferenceItem.department}.`);
  }

  abstract printCitation(): void;
}
