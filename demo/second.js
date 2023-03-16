var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
const filterRef = document.getElementById("filter");
var searchRef = document.getElementById("search");
var filter = document.getElementById("filter");

// Form submit event
form.addEventListener("submit", addItem);
// Delete event
itemList.addEventListener("click", removeItem);
// Filter event
filterRef.addEventListener("keyup", filterItems);
searchRef.addEventListener("keyup", searchItems);

// Add item
function addItem(e) {
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById("item").value;

  // Create new li element
  var li = document.createElement("li");
  // Add class
  li.className = "list-group-item";
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement("button");

  // Add classes to del button
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";

  // Append text node
  deleteBtn.appendChild(document.createTextNode("X"));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);

  // making the input box empty after the newly entered value gets added to the items list
  document.querySelector("#item").value = "";

  // creating edit button
  const btn = document.createElement("button");
  btn.innerText = "Edit";
  btn.className = "btn btn-primary btn-sm float-right mr-2";

  // adding button to lists
  li.appendChild(btn);

  // adding description
  let searchText = searchRef.value;
  const span = document.createElement("span");
  span.innerText = searchText;
  span.style.marginLeft = "10px";
  li.appendChild(span);

  // making description box empty after the newly entered value gets added to the items list
  document.getElementById("search").value = "";
}

// Remove item
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are You Sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// filter items function
function filterItems(e) {
  // getting the value of the filter input
  let filterValue = e.target.value.toLowerCase();
  // creating an array of all the li elements
  let arr = Array.from(itemList.children);
  arr.forEach((item) => {
    if (
      item.firstChild.textContent.toLocaleLowerCase().indexOf(filterValue) != -1
    ) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

// search items function
function searchItems(e) {
  let searchValue = e.target.value.toLowerCase();
  let arr = Array.from(itemList.children);
  arr.forEach((item) => {
    if (
      item.lastChild.textContent.toLocaleLowerCase().indexOf(searchValue) != -1
    ) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
