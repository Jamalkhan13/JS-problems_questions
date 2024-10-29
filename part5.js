// Exercise 1
// Write JS Function that returns a passed string with letters in alphabetical order
// example string : webmaster
// expected output : abbemrstw 

const alphabeticalOrder = (str) =>
  str.split('').sort((a,b)=> a > b ? 1: -1).join('')
console.log(alphabeticalOrder('webmaster'));
console.log(alphabeticalOrder('javascript'));


const fruits = ['banana','orange','mango','apple','peach']
fruits.sort();
console.log(fruits);

const numbers = [40,100,1,5,25,10] // incorrect for numeric sorting 
numbers.sort()
console.log(numbers);


numbers.sort((a,b)=> a-b)
console.log(numbers);

//Descending  

numbers.sort((a,b)=>b-a)
console.log(numbers);

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 20 }
];

// Sort by age (ascending)
people.sort((a, b) => a.age - b.age);
console.log(people);



