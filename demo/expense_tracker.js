let expenseAmount = document.getElementById("expenseAmount");
let description = document.getElementById("description");
let expenseCategory = document.getElementById("expenseCategory");
let submit = document.getElementById("submit");
let form = document.getElementById("form");
let list = document.getElementById("list");
// creating an array from which we will fetch the data of the local storage when the body will be reloaded
let mainData = [];
form.onsubmit = function (e) {
  e.preventDefault();
  //   collecting the values of the input fields
  let expenseAmountValue = expenseAmount.value;
  let descriptionValue = description.value;
  let expenseCategoryValue = expenseCategory.value;
  //   creating an object of the input fields values
  let expenseObject = {
    expenseAmountValue,
    descriptionValue,
    expenseCategoryValue,
  };
  //   converting the object to a string in order to save it to the local storage
  let expenseString = JSON.stringify(expenseObject);
  //   saving the values to the local storage
  localStorage.setItem(expenseObject.expenseAmountValue, expenseString);
  //   getting the data from the localStorage
  let data = localStorage.getItem(expenseObject.expenseAmountValue);
  //   pushing the localStorage key to the array
  mainData.push(expenseObject.expenseAmountValue);
  // converting the data to an object again
  let dataObject = JSON.parse(data);
  //   creating a list of the input fields
  let li = document.createElement("li");
  // creating spans for each data object
  let expenseAmountSpan = document.createElement("span");
  expenseAmountSpan.innerText = `${dataObject.expenseAmountValue}  `;
  //   expenseAmountSpan.style.marginRight = "5px";
  let descriptionSpan = document.createElement("span");
  descriptionSpan.innerText = `--> ${dataObject.descriptionValue}  `;
  //   descriptionSpan.style.marginRight = "5px";
  let expenseCategorySpan = document.createElement("span");
  expenseCategorySpan.innerText = `--> ${dataObject.expenseCategoryValue}  `;
  //   expenseCategorySpan.style.marginRight = "5px";
  // adding the data to the list
  li.appendChild(expenseAmountSpan);
  li.appendChild(descriptionSpan);
  li.appendChild(expenseCategorySpan);
  // creating the edit and delete buttons
  const editButton = document.createElement("button");
  editButton.innerText = "Edit";
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  // adding the edit and the delete buttons to the list
  li.appendChild(editButton);
  li.appendChild(deleteButton);
  // adding the list to the div
  list.appendChild(li);
  // adding the delete functionality
  deleteButton.onclick = function () {
    localStorage.removeItem(expenseObject.expenseAmountValue);
    li.remove();
  };
  // adding the edit functionality
  editButton.onclick = function () {
    localStorage.removeItem(expenseObject.expenseAmountValue);
    li.remove();
    expenseAmountValue = dataObject.expenseAmountValue;
    descriptionValue = dataObject.descriptionValue;
    expenseCategoryValue = dataObject.expenseCategoryValue;
  };
};
