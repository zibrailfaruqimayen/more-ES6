const numbers = [12, 5, 23, 45, 67, 22, 11, 65, 9, 7, 4];
const bigNumbs = numbers.filter((n) => n > 20);
const tiny = numbers.filter((n) => n < 20);
const even = numbers.filter((n) => n % 2 === 0);
const odd = numbers.filter((n) => n % 2 === 1);
// console.log(odd);

const products = [
  { id: 1, name: "laptop", price: 45000 },
  { id: 2, name: "mobile", price: 80000 },
  { id: 3, name: "watch", price: 35000 },
  { id: 4, name: "tablet", price: 25000 },
];
const expensive = products.filter((p) => p.price < 30000);
console.log(expensive);
