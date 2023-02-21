const numbers = [12, 56, 87, 44];
const half = numbers.map((n) => n / 2);
const thirds = numbers.map((x) => x / 3);
// console.log(half);
// console.log(thirds);

const friends = ["tom hanks", "tom cruise", "tom brady", "tom solaiman"];
const firstLetters = friends.map((friend) => friend[0]);
// console.log(firstLetters);

const nameLengths = friends.map((f) => f.length);
console.log(nameLengths);

const products = [
  { id: 1, name: "laptop", price: 45000 },
  { id: 2, name: "mobile", price: 80000 },
  { id: 3, name: "watch", price: 35000 },
  { id: 4, name: "tablet", price: 25000 },
];
// const items = products.map((p) => console.log(p.name));
const items = products.map((p) => p.name);
console.log(items);
