export { CalculateLateFee, MaxBooksAllowed, Purge };

function CalculateLateFee(daysLate: number): number {
  return daysLate * 0.25;
}

function MaxBooksAllowed(age: number): number {
  if (age < 12) {
    return 3;
  } else {
    return 10;
  }
}

function Purge<T>(inventory: Array<T>): Array<T> {
  // In the real world we'd have some business logic
  return inventory.splice(2, inventory.length);
}

function privateFunc(): void {
  console.log("Not exported!");
}
