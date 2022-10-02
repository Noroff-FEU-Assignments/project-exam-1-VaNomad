/* —————————  Contact Page  ————————————————————————————————————————————— */

// Contact Targets
const form = document.querySelector("#contact-form");
const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const formBtn = document.querySelector(".form-btn");
const thankYou = document.querySelector(".thank-you");

// Contact validate form function
function validateForm() {
  event.preventDefault();

  if (checkLength(name.value, 5)) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  if (checkLength(subject.value, 15)) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  if (validateEmail(email.value)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkLength(message.value, 25)) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }

  if (checkLength(name.value, 5) &&
    checkLength(subject.value, 15) &&
    validateEmail(email.value) &&
    checkLength(message.value, 25)) {
    name.value = "";
    subject.value = "";
    email.value = "";
    message.value = "";
    thankYou.classList.remove("hidden");
  }

}

form.addEventListener("submit", validateForm);
form.addEventListener("submit", formSent);

// Contact validate length function
function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

// Contact validate email function
function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const matches = regEx.test(email);
  return matches;
}

console.log(validateEmail);
