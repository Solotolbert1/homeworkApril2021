// ## Pizza Place Functions

// 1. Create an array of `pizzaToppings` with at least four different toppings
let pizzaToppings = ["cheese", " pepperoni", " steak",] 
   
   
let sizeOfPizza = ["small", "medium", "large"]
 


let crustofPizza = ["thin crust", "thick crust", " pretzel crust"]
  


// // // function greetingCustomers(){
// // //   console.log(`Welcome to Pizza House, our toppings are: ${pizzaToppings}. `)
// // // };

// 2. Create a `greetCustomer` function that prints a message that welcomes a guest, then informs them of the available toppings by <em><b>looping</b></em> over `pizzaToppings` (don't worry about perfect grammar here yet, i.e. "a, b, _and_ c", see Bonus Challenge #9)
//    - i.e. "Welcome to Pizza House, our toppings are: a, b, c, ..."

greetingCustomers = () => `welcome to Pizza House our toppings are: 
${pizzaToppings}.`;
console.log(greetingCustomers());

// greetingCustomers();
// // // sayHi =(name) => `hi, ${name}!`;
// // // result = sayHi(`User`);
// // // console.log(result)
// console.log(typeof pizzaToppings)
// console.log(typeof sizeOfPizza)
// console.log(typeof crustofPizza)



// 3. Create a `getPizzaOrder` function that
//    - has the parameters size, crust, and an indefinite amount of toppings as inputs
//    - prints the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!"
//    - outputs a list with the size, crust, and toppings

getPizzaOrder = () => {
     
    console.log(`One ${sizeOfPizza[2]} ${crustofPizza[1]} pizza with ${pizzaToppings} coming up!`);
   }; 
   
   
   getPizzaOrder();


// 4. Create a `preparePizza` function that
//    - has an array as its parameter with three items: a size, a crust, and a list of toppings
//    - prints something like "...Cooking pizza..."
//    - outputs a pizza <em><b>Object</b></em> with appropriate key-value pairs for size, crust, and toppings





// 5. Create a `servePizza` function that
//    - has a parameter of a pizza Object
//    - logs a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!"
//    - outputs the same pizza Object that was passed in






// 6. Call each function and (starting with `preparePizza`) use the returned value from the previous function as its input





// 7. Add, commit, and push your JS file to your GitHub repo.






// 8. Send your TA a link to your GitHub Homework repo when finished.

// ## Bonus Challenge

// 9. Figure out how to add "and" before the last topping in a list of toppings so when we list toppings it is more grammatically correct. You could create a `listToppings` function that stores the functionality, and call the function each time we list toppings in a function.
//    - i.e. "Our toppings are a, b, and c." instead of "Our toppings are a, b, c"






// 10. In `getPizzaOrder`, if an order is placed with no toppings, print a slightly different message, like "One large thick crust cheese pizza coming up!" (Instead of "One large thick crust pizza with coming up!"). Alter `servePizza` in a similar way to fix its grammar when serving a "plain" cheese pizza.





// 11. In `getPizzaOrder`, check the toppings the customer ordered against your list of available toppings. If they order a topping you don't offer, print a message that informs them you don't offer that topping and to order again.






// function myFunction() {
//   var fruits = ["Banana", "Orange", "Apple", "Mango"];
//   var x = fruits.toString();
//   console.log(fruits[2]);
// } myFunction(myFunction());


// const arr = [1,2,3]

// console.log(`${arr[0]}`)

// let preparePizza = [
  
//   ]
// for(i = 0; i < prepare.length; i++){
//   preparePizza[i]();
// console.log(`Cooking pizza`);
// }
