function myFunction() {
  let nameValue = document.getElementById("Name").value;
  let emailValue = document.getElementById("Email").value;
  let phoneValue = document.getElementById("Phone").value;
  let timeValue = document.getElementById("Time").value;
  let dateValue = document.getElementById("Date").value;
  // storing the values in the local storage
  localStorage.setItem("Name", nameValue);
  localStorage.setItem("Email", emailValue);
  localStorage.setItem("Phone", phoneValue);
  localStorage.setItem("Time", timeValue);
  localStorage.setItem("Date", dateValue);
  nameValue = "";
  emailValue = "";
  phoneValue = "";
  timeValue = "";
  dateValue = "";
}
