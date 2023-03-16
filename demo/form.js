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
  //   making the input field empty after the data gets stored successfully in the local storage
  user.value = "";
  email.value = "";
  phone.value = "";
};
