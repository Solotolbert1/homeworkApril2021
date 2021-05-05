// create a new unordered list (ul) element
const newunorderedlist = document.createElement("ul");
document.querySelector("p").appendChild(newUnorderedList);
// remove the paragraph element in the nav-bar
document.querySelector(".nav-bar").remove("p");
// add your new ul element to the nav-bar
document.querySelector(".nav-bar").remove(paragraphElement);
// create two new list item (li) elements, and add some text to them
const listItem = document.createElement("li"); listItem.textContent ="Yay!"
const listItem2 =document.createElement("li"); listItem2.textContent = "hoorah!"
// add the li elements to the ul in the nav-bar
document.querySelector(".nav-bar >ul").appendChild(listItem);
document.querySelector(".nav-bar").appendChild(listItem);
