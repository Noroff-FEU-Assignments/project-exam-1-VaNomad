const form = document.querySelector("#contact-form");
const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");

function validateForm() {
  event.preventDefault();

  if (checkLength(name.value, 2)) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  if (checkLength(subject.value, 0)) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  if (validateEmail(email.value)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkLength(message.value, 9)) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  }
  else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const matches = regEx.test(email);
  return matches;
}

console.log(validateEmail);


// form.onsubmit = function () {
//   event.preventDefault();
  
//   console.log(event);

//   const name = document.querySelector("#name");

//   console.log(name.value);
  
  
  
// }


// const regEx = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;