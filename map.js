const numbers = [2, 3, 5, 4, 8];
const output = [];
for (const number of numbers) {
  const doubled = number * 2;
  output.push(doubled);
}
// console.log(output);

function getDoubled(numbers) {
  const output = [];
  for (const number of numbers) {
    const doubled = number * 2;
    output.push(doubled);
  }
  return output;
}

const doubleIt = (num) => num * 2;

const makeDouble = numbers.map(doubleIt);

const fiveTimes = [1, 2, 3, 4, 5].map((x) => x * 5);

console.log(fiveTimes);
const result = getDoubled(numbers);
// console.log(result);
