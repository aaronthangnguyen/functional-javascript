const numbers = [1, 2, 3, 4, 5, 6];

// Imperative
for (let i = 0; i < numbers.length; i++) {
  numbers[i];
}

// Declarative
const output = (item) => console.log(item);
forEach(output, numbers);
