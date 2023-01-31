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

class ReferenceItem {
  private _publisher: string;
  static department: string = "Research";

  constructor(public title: string, private year: number) {}

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
}
export { UniversityLibrarian, ReferenceItem };
