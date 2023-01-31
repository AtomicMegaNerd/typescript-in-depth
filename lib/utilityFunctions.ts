export { CalculateLateFee, MaxBooksAllowed };

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

function privateFunc(): void {
  console.log("Not exported!");
}
