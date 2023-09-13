const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const btnSubmit = document.getElementById("btn-submit");
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const setErrorMessage = function (element, message) {
  const inputControl = element.parentElement;
  const errorMessage = inputControl.querySelector(".error");
  errorMessage.innerHTML = message;
  inputControl.querySelector(".error-img").style.display = "block";
  element.classList.add("error-style");
  element.placeholder = "";
};

const successSubmit = function (element, placeHolder) {
  const inputControl = element.parentElement;
  const errorMessage = inputControl.querySelector(".error");
  errorMessage.innerHTML = "";
  inputControl.querySelector(".error-img").style.display = "none";
  element.classList.remove("error-style");
  element.placeholder = placeHolder;
};

btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  let firsNameValue = firstName.value.trim();
  let lastNameValue = lastName.value.trim();
  let emailValue = email.value.trim();
  let passwordValue = password.value.trim();
  if (firsNameValue === "") {
    setErrorMessage(firstName, "First name cannot be empty");
  } else {
    successSubmit(firstName, "First Name");
  }

  if (firsNameValue === "") {
    setErrorMessage(firstName, "First name cannot be empty");
  } else {
    successSubmit(firstName, "First Name");
  }

  if (lastNameValue === "") {
    setErrorMessage(lastName, "Last name cannot be empty");
  } else {
    successSubmit(lastName, "Last Name");
  }

  if (emailValue === "") {
    setErrorMessage(email, "Email cannot be empty");
  } else {
    successSubmit(email, "Email");
  }

  if (!emailRegex.test(emailValue)) {
    setErrorMessage(email, "Looks like this is not an email");
  } else {
    successSubmit(email, "Email");
  }

  if (passwordValue === "") {
    setErrorMessage(password, "Password cannot be empty");
  } else {
    successSubmit(password, "Password");
  }
});
