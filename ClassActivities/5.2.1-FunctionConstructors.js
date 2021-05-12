// create an object literal
const animal = {
  name: ""
  age: ""
  hobbies: ["Playing feth","playing keep away"]
};
console.log(animal.name);
// include a method that uses "this"
let barn = {
  age: "old"
  ageCheck(){
    return "This barn is ${this.age}"
  }
};
console.log(barn.ageCheck);
// create a function in the global scope that prints "this"
function logThis(){
  console.log("this is", this);

}
logThis();
