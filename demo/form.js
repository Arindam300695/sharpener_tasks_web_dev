const container = document.querySelector("#container");
const btn = document.querySelector("#btn");
const user = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
function showUser() {
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
  // making post request to crud crud api for saving user details to the cloud storage
  async function getUser() {
    try {
      const response = await axios.post(
        "https://crudcrud.com/api/89dcc0bb33e14f00b1a1031d034b43e2/employeeData",
        obj
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
  getUser();
}
window.addEventListener("DOMContentLoaded", async () => {
  const data = await axios.get(
    "https://crudcrud.com/api/89dcc0bb33e14f00b1a1031d034b43e2/employeeData"
  );
  let response = data.data;
  for (let i = 0; i < response.length; i++) {
    let para = document.createElement("p");
    let span = document.createElement("span");
    span.innerText =
      "Name: " +
      response[i].userName +
      "-> " +
      "Email: " +
      response[i].userEmail +
      "-> " +
      "Phone: " +
      response[i].userPhone;
    para.appendChild(span);
    container.appendChild(para);
  }
});
