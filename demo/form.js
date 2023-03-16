function myFunction() {
  let nameValue = document.getElementById("Name").value;
  let emailValue = document.getElementById("Email").value;
  let phoneValue = document.getElementById("Phone").value;
  let timeValue = document.getElementById("Time").value;
  let dateValue = document.getElementById("Date").value;
  //   creating object of the values entered by the user
  let obj = {
    name: nameValue,
    email: emailValue,
    phone: phoneValue,
    time: timeValue,
    date: dateValue,
  };
  // converting the object to string in order to store it in the local storage
  const string = JSON.stringify(obj);
  // storing the values in the local storage
  localStorage.setItem("data", string);
  // making the input fields empty each time user will click the submit button
  nameValue = "";
  emailValue = "";
  phoneValue = "";
  timeValue = "";
  dateValue = "";
}
