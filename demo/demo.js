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
