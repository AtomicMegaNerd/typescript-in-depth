// Import the whole module as an interface
import * as Interfaces from "./interfaces";
export { UniversityLibrarian, ReferenceItem, Encyclopedia };

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
  private _publisher: string;
  static department: string = "Research";

  constructor(public title: string, protected year: number) {}

  get publisher(): string {
    return this._publisher.toUpperCase();
  }

  set publisher(newPublisher: string) {
    this._publisher = newPublisher;
  }

  printItem(): void {
    console.log(`${this.title} was published in ${this.year}.`);
    console.log(`Department: ${ReferenceItem.department}.`);
  }

  abstract printCitation(): void;
}

class Encyclopedia extends ReferenceItem {
  constructor(t: string, y: number, public edition: number) {
    super(t, y);
  }

  printItem(): void {
    super.printItem();
    console.log(`Edition: ${this.edition} - ${this.year}`);
  }

  printCitation(): void {
    console.log(`${this.title} - ${this.year}`);
  }
}
