// 1. var let const
// break up with var

const numbers = [12, 546, 45, 98];
let salary = 450;
salary = 455;

// 2.default parameters
function calculateSalary(salary, tex = 0.25, bonus = 0) {
  const remaining = salary - salary * tex;
  const total = remaining + bonus;
  return total;
}

// 3. template string
const elementHTML = `
<div>
    <h3>Name:</h3>
    <p>Address:</p>
    <p>Salary: ${calculateSalary(10000, 0, 0)} </p>
    <p>Others: ${numbers[2]} </p>
</div>
`;

// 4. array function
const doubleIt = (x) => x * 2;
const calculateSalary2 = (salary, tex, bonus) => salary - salary * tex + bonus;

// 5. spread
const ages = [11, 13, 15, 14, 10, 16];
const newAge = [...ages, 90];

// destructuring
const { x, y, z, ...c } = {
  x: 45,
  y: 12,
  z: 33,
  name: "sakib al hasan",
  salary: 450000,
};
const [a, b, ...r] = [12, 14, 15, 12, 13];
