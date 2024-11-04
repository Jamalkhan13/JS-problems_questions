const orders = [
  {orderId: '123', customerId: '123', deliveryDate: '01-01-2020', delivered: true, items: [
    {productId: '123', price: 55},
    {productId: '234', price: 30},
  ]},

  {orderId: '234', customerId: '234', deliveryDate: '01-02-2020', delivered: false, items: [
    {productId: '234', price: 30},
  ]},

  {orderId: '345', customerId: '234', deliveryDate: '05-01-2020', delivered: true, items: [
    {productId: '567', price: 55},
    {productId: '678', price: 80},
  ]},

  {orderId: '456', customerId: '345', deliveryDate: '12-01-2020', delivered: true, items: [
    {productId: '789', price: 12},
    {productId: '890', price: 90},
  ]},

  {orderId: '578', customerId: '456', deliveryDate: '12-01-2020', delivered: true, items: [
    {productId: '901', price: 43},
    {productId: '123', price: 55},
  ]},
  
]

// Exercise 1
// Get the list of the orders for the customer with the ID 234 that have not been delivered 

//  const getOutput = orders.filter(order=> order.customerId=== '234' & !order.delivered)
// console.log(getOutput);


// const getOutput2 = orders.filter((order)=>{
//   return order.customerId === '234' && !order.delivered
// })
// console.log(getOutput2);

// const getOutput3 = orders.filter((order)=>{
//   if(order.customerId === '234' && order.delivered === false){
//     return true;
//   }
//   return false
// })
// console.log(getOutput3);


/*------------------------------------------------------------------------------------------------------------------------------------------------*/

// Exercise 2
// Create a new properity on each order with the total price of items order.
// const addNewProperity = orders.map(order => ({...order,orderTotal: order.items.reduce((accum,item) => accum + item.price,0)}))
// console.log(addNewProperity);



/*null: No filtering or transformation is applied; all properties are included in the output.
2: The output JSON string is formatted with 2 spaces of indentation for readability.*/

// const addNewProperity2 = orders.map((order)=> ({
//   ...order, orderTotal: order.items.reduce((accum,item)=>accum+item.price,0)
// }))
// console.log(JSON.stringify(addNewProperity2,null,1)); // to show that items in terminal we have to Use JSON.stringify(null,2)  will the items also



/*-----------------------------------------------------------------------------------------------------------------------------------------------*/

/*  Exercise 3

Have all the orders been delivered 
*/ 

const orderDelivered = orders.every((order)=> order.delivered)
console.log(orderDelivered);


// on for of loop 

let orderDelivered1 = true  // Assume all are delivered
for(let order of orders){
  if(!order.delivered){
    orderDelivered1 = false // Update to false if any order is not delivered
    
  }

}
console.log(orderDelivered1);


/*-----------------------------------------------------------------------------------------------------------------------------------------------*/

/*  Exercise 4 
    Has the customer with ID '123' made any order 
*/

const orderCheckingForId = orders.some((order)=> order.customerId === '123')
console.log(orderCheckingForId);


/*-----------------------------------------------------------------------------------------------------------------------------------------------*/

/* Exwrcise 5
  Have any products with an id of 123 been sold 
*/

const anyOrder = orders.reduce((accum,order)=> accum + order.items.reduce((acc,item)=>acc + (item.productId=== '123'),0),0);
console.log(anyOrder);
