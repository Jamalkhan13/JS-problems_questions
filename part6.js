const people = [
  {firstName : 'munawar', lastName : 'aziz',DOB: '2001/12/23', department: 'development',   salary : 100000},
  {firstName : 'shahan',  lastName : 'alam', DOB : '1986/1/20', department: 'development',   salary : 80000},
  {firstName : 'ali',     lastName : 'khan', DOB : '1980/6/5', department: 'marketing',    salary : 50000},
  {firstName : 'sohail',  lastName : 'ahmad', DOB : '2005/8/23', department: 'security',       salary : 40000},
  {firstName : 'nadeem',  lastName : 'sadiq', DOB : '1970/9/14', department: 'HR mannager', salary : 75000},
  {firstName : 'waseem',  lastName : 'fayaz', DOB : '1994/8/18', department: 'Android development', salary : 90000},
  {firstName : 'anas',    lastName : 'albaz', DOB : '2005/7/30', department: 'Marketing', salary : 30000},
  {firstName : 'anis',    lastName : 'maskara', DOB : '1993/10/6', department: 'IOS development', salary : 80000},
  {firstName : 'ikram',   lastName : 'ali', DOB : '2001/12/23', department: 'Accounts', salary : 60000},
  {firstName : 'umar',    lastName : 'zeb', DOB : '2008/12/25', department: 'security', salary : 40000},
  
]


// Exercise 1
// What is the average income of all the people in the array ?


//const result = people.reduce((accumaletor,person)=> accumaletor + parseInt(person.salary),0)// if salary is in string first covert into integer 
const result = people.reduce((accumaletor,person)=> accumaletor +  person.salary,0) / people.length // people.len will give average salary 

console.log(result);







// Exercise 2
// Who are the people who are currently older than 30

// if DOB is in string then use new Date(person.DOB).getFuller it will convert from string to Date object if not in string then simple person.DOB.getFullYear() but DOB will be in form of Date object DOB: new Date(2000, 0, 1) instead of DOB : 23/3/1999

// const getOlderThan30 = people.filter((person)=> new Date().getFullYear() - person.DOB.getFullYear() > 30 

const getOlderThan30 = people.filter((person)=> new Date().getFullYear() - new Date(person.DOB).getFullYear()>30) 
console.log(getOlderThan30)


// Exercise 3
// Get a list of the people's FullName and Last name 

const getName = people.map(person=> `${person.firstName}${person.lastName}`)
console.log(getName);

// using Destructure

const getFullName = people.map(({firstName,lastName})=> `${firstName} ${lastName}`) 
console.log(getFullName);

// using spread operator to return whole object

const getNameUsingSpread = people.map(person=> ({...person, fullName: `${person.firstName} ${person.lastName}`}))
console.log(getNameUsingSpread);


// Exercise 4
// Get a list of people in the array ordered from youngest to oldest 

// older order
 const getOlder = people.sort((personA, personB)=> new Date(personA.DOB) - new Date(personB.DOB))
 console.log(getOlder);
 

 // youngest order
 const getYoungest = people.sort((personA, personB)=> new Date(personB.DOB) - new Date(personA.DOB))
 console.log(getYoungest);


// Exercise 5
// How many people are there in each deperatment

const countOccuriences = people.reduce((accumaletor,person) => { 
    accumaletor[person.department] = (accumaletor[person.department] || 0)+1
    return accumaletor
},{})
console.log(countOccuriences);

