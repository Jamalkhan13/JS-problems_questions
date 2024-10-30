// // Exercise 1
// // Write JS Function that returns a passed string with letters in alphabetical order
// // example string : webmaster
// // expected output : abbemrstw 

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
//console.log(people);


// Exercise 2 
//Write a JS function that accept a string as a parameter and counts the number of vowels within the string 

const vowels = ['a','e','i','o','u']

const countLetters = (str,letters)=>{
  const count = str
  .split('')
  .filter(s => letters.includes(s) ) // return true or false 
  .length;
  return count

}
//console.log(countLetters('abcdefghi',vowels));



 
const letterCounts = (str,letter =['a','e','i','o','u'])=>
   str
        .split('')
        .filter(s=> letter.indexOf(s) > -1)
        .length

console.log(letterCounts('abcdef'));


// Exercise 3 

//  write a JS function to convert an amount of coins
//  example input: 46 and possible  coins 25,10,5,2,1
// output: 25,10,10,1


const countCoins = (money, coins = [25,10,5,2,1])=>{
  const totalCoins = []
  for(let i =0; i<coins.length; i+=1){
    
    const thisCoinNum = Math.floor(money / coins[i]) 
  
    for(let y = 0; y<thisCoinNum; y+=1){
      totalCoins.push(coins[i])
    }
    money -= coins[i] * thisCoinNum
  }  
  return totalCoins
}
console.log(countCoins(89));


const countCoins2 = (money,coins = [15,10,10,5,4,2,1]) => { 
    const totalCoins =[]
    for(let i =0; i<coins.length; i+=1){
      const newCoins = Math.floor(money/coins[i])
      for(let j =0; j<newCoins;j+=1){
        totalCoins.push(coins[i])
      }
      money -= coins[i] * newCoins
    }
    return totalCoins
}

console.log(countCoins2(56));


// Exercise 4 
// write a JS  function to extract unique character from a string 

const getUniqueChar = (str) =>
    str.split('').filter(
        (item,index,arr)=> 
          arr.slice(index + 1).indexOf(item) === - 1
    );
console.log(getUniqueChar('aaabbbccs'));
    

const getUniqueChar2 = (str) =>
  [... new Set(str.split(''))];   // The Set automatically removes duplicate values, leaving only unique characters.
console.log(getUniqueChar2('aaabbbcccdssds'));

// Exercise  5
//write a JS Function to find the first not repeated character 
// example string: 'abcdefghi'
// expected outcome : 'e'


const getNonRepeatedChar = (str) =>
  str.split('')
      .filter((item,index,arr)=> 
        arr.filter(arrItem => arrItem === item).length === 1
)
console.log(getNonRepeatedChar('aaabbbcccvdvdfghghgh'));