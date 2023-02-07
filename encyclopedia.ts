import { ReferenceItem } from "./classes";

// Default export classes don't even need a class name
export default class extends ReferenceItem {
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
