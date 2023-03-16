const container = document.querySelector("#container");
const btn = document.querySelector("#btn");
const user = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
btn.onclick = function () {
  // creating objects with the data entered by the user
  let obj = {
    userName: user.value,
    userEmail: email.value,
    userPhone: phone.value,
  };
  // converting the object to string in order to store it in the local storage
  let string = JSON.stringify(obj);
  // storing the string inside the local storage
  localStorage.setItem(JSON.stringify(obj.userEmail), string);
  // creating a paragraph and appending it to the container
  let para = document.createElement("p");
  container.appendChild(para);
  // getting the vlaues from the local storage
  let data = JSON.parse(localStorage.getItem(JSON.stringify(obj.userEmail)));
  if (data)
    para.innerText = `name: ${data.userName} email: ${data.userEmail} phone: ${data.userPhone}`;
  // creating delete button
  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  //   adding the delete button to the paragraph
  para.appendChild(deleteBtn);
  // adding the delete fucntionality
  deleteBtn.onclick = function (e) {
    console.log(e.target.parentElement);
    // deleting the text from the dom
    e.target.parentElement.innerText = "";
    // deleting the text from the local storage
    localStorage.removeItem(JSON.stringify(obj.userEmail));
  };

  // crearing the edit button
  const editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  //   adding the edit button to the paragraph
  para.appendChild(editBtn);
  // adding the edit fucntionality
  editBtn.onclick = function (e) {
    let editData = JSON.parse(
      localStorage.getItem(JSON.stringify(obj.userEmail))
    );
    // deleting the text from the dom
    e.target.parentElement.innerText = "";
    // deleting the text from the local storage
    localStorage.removeItem(JSON.stringify(obj.userEmail));
    // moving back to the input box so that the user can edit the data
    user.value = editData.userName;
    email.value = editData.userEmail;
    phone.value = editData.userPhone;
  };
};
