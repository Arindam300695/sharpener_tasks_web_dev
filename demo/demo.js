const titleRef = document.querySelector("title");
const headerTitle = document.querySelector("#header-title");
const addItemRef = document.querySelector(".title");
const itemsRef = document.querySelector("#items");
const getElementsByClassNameBtnRef = document.querySelector(
  ".getElementsByClassName"
);
const getElementsByTagNameBtnRef = document.querySelector(
  ".getElementsByTagName"
);
titleRef.innerText = "Modified Item Listener";
headerTitle.style.borderBottom = "3px solid black";
addItemRef.style.fontWeight = "bold";
addItemRef.style.color = "green";
itemsRef.children[2].style.backgroundColor = "green";
itemsRef.style.fontWeight = "bold";
const newly_added = itemsRef.appendChild(document.createElement("li"));
newly_added.innerText = "Item 5";
newly_added.classList = "newly_added";
// console.log(document.getElementsByTagName("li")[4]);
// console.log(document.getElementsByClassName("list-group-item"));
getElementsByClassNameBtnRef.onclick = function () {
  document.getElementsByClassName("newly_added")[0].style.color = "red";
};
getElementsByTagNameBtnRef.onclick = function () {
  document.getElementsByTagName("li")[4].style.backgroundColor = "yellow";
};
// making the second list item have green background color using document.querySelectorAll()
document.querySelectorAll("li")[1].style.backgroundColor = "green";
// making the third list item invisible using document.querySelectorAll()
document.querySelectorAll("li")[2].style.display = "none";

// logging the parentElement of the ul tag in the console
console.log(document.querySelector("ul").parentElement);
// logging the last child element of the ul tag in the console
console.log(document.querySelector("ul").lastElementChild);
// logging the last child of the div element with the id main in the console
console.log(document.querySelector("#main").lastChild.previousSibling);
// creating a child element of the ul tag
const newChild = document.createElement("li");
newChild.innerText = "I am newly created child";
// appending the newly created cild element to the ul tag
document.querySelector("ul").appendChild(newChild);
// firstElementChild
console.log(document.querySelector("ul").firstElementChild);
// firstChild
console.log(document.querySelector("ul").firstChild.nextSibling);
// nextSibling
console.log(document.querySelector("#items").nextSibling.nextSibling);
// nextElementSibling
console.log(document.querySelector("#items").nextElementSibling);
// previousSibling
console.log(document.querySelector("#items").previousSibling.previousSibling);
// previousElementSibling
console.log(document.querySelector("#items").previousElementSibling);
// setAttribute
document.querySelector(".title").setAttribute("title", "This is the title");
console.log(document.querySelector(".title"));
// creating text node
const newTextNode = document.createTextNode("New Text Node");
console.log(newTextNode);
// targeting the container
const container = document.querySelector(".container");
// targeting the heading having innerText equal to "Item Lister"
const itemListerRef = document.querySelector("#main-header .container h1");
// creating word "hello" using text node
const hello = document.createTextNode("HELLO");
const hello2 = document.createTextNode("HELLO");
// adding "hello" word before Item Lister
container.insertBefore(hello, itemListerRef);
// adding "hello" word before Item 1
itemsRef.insertBefore(hello2, document.querySelector("#items").firstChild);
