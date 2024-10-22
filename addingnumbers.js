//  const addTwoNumbers = (num1,num2) => (num1===100 || num2===100 || num1+num2 === 100)
//  console.log(addTwoNumbers(20,80));


 const addTwoNumbers = function (num1,num2){
    if(num1 === 100){
      return true
      //console.log(true);
      
    }else if(num2===100){
      return true
      //console.log(true);
      
    }else if(num1+num2===100){
     return true
      // console.log(true);
      
    }
    
    else{
      return false
      //console.log(false);
      
    }
 }
 //console.log(addTwoNumbers(10,10)) // why it return undefined in console
 console.log(addTwoNumbers(20,80))


 // write a js program  to get the extension of a filename 
 const getFileExtension  = (str) => str.slice (str.lastIndexOf('.'));
 console.log(getFileExtension('index.html'));
 console.log(getFileExtension('webpack.config.js'));
 

//  function getFileExtension(filename) {
//   // Find the position of the last dot
//   const lastDotPosition = filename.lastIndexOf('.');

//   // If no dot is found or the dot is at the beginning (like in a hidden file), return an empty string
//   if (lastDotPosition === -1 || lastDotPosition === 0) {
//       return '';
//   }

//   // Return the extension, which is everything after the last dot
//   return filename.slice(lastDotPosition );
// }
//console.log(getFileExtension('hellohtml'));



// const getFileExtension = function (filename){
//   const lastDot = filename.lastIndexOf('.')
//   //return filename.slice(filename.lastIndexOf('.'))

//   if(lastDot === 1 ||lastDot=== 0){
//     return ''
//    }else {
//     return filename.slice(lastDot)
//    } 

// }
// console.log(getFileExtension("hi.hello.js"));



const hello = (he) => he.split()



const letters = String.fromCharCode(65)  // conver numeric to string 
console.log(letters);

const helloLetters = String.fromCharCode(72,66,102,89)
console.log(helloLetters);

const str = "hello"
const result = str.charCodeAt(0);
const result2 = str.charCodeAt(1);
console.log(result);
console.log(result2);





// write a js program to replace every character in a given string with the character following it in the alphabet
// String.fromCharCode  
// charcodeAt

const moveCharsForward = (str) => str.split('')
//.map( char=> String.fromCharCode(char.charCodeAt(0)+1))
.map((char)=>String.fromCharCode(char.charCodeAt(0)+1))
.join('');
console.log(moveCharsForward('jkl'));


// write a js program to get the current date 

const date = new Date("10-20-2024")
console.log(date.toLocaleString());

const formateDate = (date = new Date())=>{
  const days = date.getDate();
  const months = date.getMonth()+1;
  const year = date.getFullYear();
  return `${days}/${months}/${year}`
}

console.log(formateDate());



// write a js program to create a new string adding "New" in front of a given string .if the given string begins with "new " already then return the orignal string


const addNew = (str)=> str.indexOf('New!') === 0 ? str : `New! ${str}`;
console.log(addNew(' hello'));

const AddString = (str)=>{
  return str.indexOf('Hello') === 0 ? str : `Hello ${str}`
}
console.log(AddString('Hello shahan'));

const AddNewString = (str)=> {
  if(str.indexOf('Hello') !==0){
    return `Hello ${str}`
  }
  return str
}
console.log(AddNewString('khan'));





// const AddNewString = (str)=> {
//   if(!str.includes('Hello')){
//     return `Hello ${str}`
//   }
//   return str
// }
// console.log(AddNewString('jamal'));



 let arr = [1,2,3,4,5]
// const myNumber = (num1) => {
//   if(arr.indexOf(num1) !== -1 ){
//     return arr 
//   } else {
//      arr.push(num1)
//      return arr
//   }
  
//}

  //console.log(myNumber(8));

const myArray = (num1)=>{
  if(arr.includes(num1)){
    return arr
  } else if (!arr.includes(num1)){
    arr.push(num1)
    return arr
  }
}
  console.log(myArray(10));
  