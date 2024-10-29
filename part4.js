// Exercise 01
// Ggiven a leap year, report if it is a leap year

// const leapYears = (year) => year %4 === 0
// console.log(leapYears(2028));




// const leap = [2020,2021,2022,2023,2024,2026,2028,2030,2032]
// const leapYear = (year) => {

//   return (year%4===0)
// }

// const results = leap.map(leapYear)
// const leapYearsOnly = leap.filter((year,index)=> results[index])
// console.log(results);
// console.log(leapYearsOnly);



// Exercise 2
//  Write a JS program to compare two objects to determine if the first one contain the same properities as the second one (which may also have addition properities)

const object1 = {
  name : 'jamal khan',
  email: 'jamal@gmail.com',
  password: 11352
}

const object2 = {
  name : 'jamal khan',
  email : 'jamal@gmail.com',
  password: 11352
} 

const object3 = {
  name:'jamal',
  email: 'jamal@yahoo.com',
  id: 1123
}

// method one  using every 

//.every() is powerful for ensuring all items in an array meet a condition. It’s particularly useful when you need to verify that all elements of an array (or all keys in an object) satisfy a specific rule.

const equalObjects = (a,b)=>{
  return Object.keys(a).every(key=> b[key]);   // a[key] === b[key]  
}
console.log(equalObjects(object1,object2));
console.log(equalObjects(object1,object3));



// method two using for in loop
const anotherEqualObjects = (a,b)=>{

  for(const key in a){
    if(a[key]!==b[key]){
      return false
    }
  }
    return true
}

console.log(anotherEqualObjects(object1,object2));
console.log(anotherEqualObjects(object1,object3));


// method 3 


const anotherEqualObjects2 = (a, b) => {
  // Check each key and value in object `a`
  for (const key in a) {
    if (a[key] !== b[key]) {
      return false;
    }
  }

  // Check if there are any extra keys in object `b` that aren't in `a`
  for (const key in b) {
    if (!(key in a)) {
      return false;
    }
  }

  return true;
};

console.log(anotherEqualObjects2(object1, object2)); // Output: true
console.log(anotherEqualObjects2(object1, object3)); // Output: false


// method 4

const anotherEqualObjects3 = (a, b) => {
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  // Check if both objects have the same number of keys
  if (keysA.length !== keysB.length) {
    return false;
  }

  // Check if both objects have the same keys and corresponding values
  for (const key of keysA) {
    if (a[key] !== b[key]) {
      return false;
    }
  }

  return true;
};

console.log(anotherEqualObjects3(object1, object2)); // Output: true
console.log(anotherEqualObjects3(object1, object3)); // Output: false


// Exercise 3
// Write a JS program to convert a comma-seprated values (CSV) string to a 2D array . A new line indicites a new row in the array

// example 
// abc,def,ghi 
// jkl,mno,pqr
//stu,vwx,yza


const str = `abc,def,ghi
jkl,mno,pqr
stu,vwx,yza`

const parseCVS = (cvsString)=> {
  return cvsString.split('\n').map(row=> row.split(','))
}
console.log(parseCVS(str));

const str1 = 'hi guys how are you';
const newStr = str1.split(" ")
console.log(newStr);



// write a JS program to generate a random hexadecimal color code 
