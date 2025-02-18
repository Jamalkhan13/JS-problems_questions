// write a JS program to find the numbers of even digits in a array of integers 

// const myArray2 = [1,2,3,4,5,6,7,8,9,10]
// const findOdd = (arr)=>{
//     return arr.filter((num)=> num%2 !== 0).length // when use length will hold the numbers of odd  ie here are  5 odd numbers it will return 5 only whwn we want o show odd numbers [1,3,5,7,9] then we will not use .length 
// }
// console.log(findOdd(myArray2));



// // now add all odd numbers 
// const findOdd = (arr)=>{
//   const oddNumbers = arr.filter((num)=> num%2 !==0)
//   const result = oddNumbers.reduce((acc,curr)=>{
//     acc[curr] = (acc[curr] || 0)+1;
//     acc.sum += curr
//     return acc
//   },{sum:0})
//   return{oddNumbers,result}
// }
// console.log(findOdd(myArray2));




// const myArray =  [1,2,3,4,5,6,7,8,9,10]
// const findEven = (arr)=>{
//   const evenNumbers = arr.filter(num => num % 2 === 0)
//  const result =  evenNumbers.reduce((acum,currval)=>{
//     acum[currval] = (acum[currval] || 0)+1
//     acum.sum += currval
//     return acum;
//   },{sum:0})
//   return{evenNumbers,result}
// }
// console.log(findEven(myArray))

const even = (arr)=>{
  let evenNumbers = []
  for(let i = 1;i<arr.length;i++){
    if (arr[i]%2===0) {
       evenNumbers.push(arr[i])
    }
  }
  return evenNumbers
}
console.log(even(myArray));



// Write a JS program to find the number of even values upto the given number 


const countEvenNumbers = (arr)=> {
  return arr.filter(num=> num%2===0).length
}



const createArrayOfNumbers = (num)=>{
  const getArray = []
  for(let i =1; i<=num; i++){
     getArray.push(i)
  }
  return getArray
}
console.log(countEvenNumbers(createArrayOfNumbers(5)));



// write a JS program to check weather a given array of integars is stored in ascending order

// const ascendingNumber = (arr )=> {
//   for(let i=1; i<=arr.length;i++){
//     if(arr[i+1]<arr[i]){
//       return false
//     }
//   }
//   return true
// }
// console.log(ascendingNumber([1,3,2,4,5,6,7,8,9,10]));


// const myArray = [1,2,3,4,5,6,7,8,9,10]
// const myArray2 = [1,2,3,4,8,4,5,6,7]

// const ascendingNumbers = (arr) => {
//   for(let i = 1; i<=arr.length;i+=1){
//     if(arr[i]>arr[i+1]){
//       return false
//     }
//   }
//   return true
// }
// console.log(ascendingNumbers(myArray));
// console.log(ascendingNumbers(myArray2));


//  weather descending order or not 

const descendingNumber = (arr) => {
  for(let i = 0; i<=arr.length; i+=1){
    if(arr[i]<arr[i+1]){
      return false
    }
  }
  return true
}

console.log(descendingNumber([10,9,8,11]));


// write a JS program to get the largest even number from an array of integers


const largestEvenNumber = (arr) => {
  return Math.max(...arr.filter(num => num%2===0))

}
console.log(largestEvenNumber([1,2,3,4,5,6,7,8,9,10]));
console.log(largestEvenNumber([22,31,22,45,6,,186,89,99,102,104,106,108,110,112]));


// write a JS program to replace the first digit in a string (should contain atleast digit) with $ character

const replaceFirstDigit = (str) => {
  return str.replace(/\d/, '$');
}
console.log(replaceFirstDigit('Abcd1Abcd'));
console.log(replaceFirstDigit('Abc123Abcde'));
console.log(replaceFirstDigit('A1cd1Abcd1'));

