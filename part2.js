const MakeNewString = (str) => {
  return str.length<3 ? str : str.slice(0,3) + str.slice(-3)
}
console.log(MakeNewString('abcdefghi'));
console.log(MakeNewString('jhi123,kjuhg789'));




//  write a js program to extract the first half of a string of even length

const firstHalf = (str) => str.slice(0,str.length/2)
console.log(firstHalf('abcdefffg'));


// write a js program to concatenate two string expect their firt characters

// const concan = (str1,str2) => str1.slice(1) + str2.slice(1)
// console.log(concan('jam','al'));


const concan = (str1, str2) => {
  // Slicing the first string: first two characters and then after the third
  const modifiedStr1 = str1.slice(0, 2) + str1.slice(3);
  
  // Slicing the second string: first two characters and then after the third
  const modifiedStr2 = str2.slice(0, 2) + str2.slice(3);
  
  // Concatenating the modified strings
  return modifiedStr1 + modifiedStr2;
}

console.log(concan('jamal', 'khan'));


const concat = (str1)=> str1.slice(0,2) + str1.slice(3) 
console.log(concat('jamal')); 
