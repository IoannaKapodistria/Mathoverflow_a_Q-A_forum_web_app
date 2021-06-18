const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

const username_alert = document.getElementById("username_alert");
const email_alert = document.getElementById("email_alert");
const password_alert = document.getElementById("password_alert");

username_alert.style.display = "none";
email_alert.style.display = "none";
password_alert.style.display = "none";

document.getElementById("signup_button").disabled = true;

form.addEventListener("input", () => {
  document.getElementById("signup_button").disabled = !form.checkValidity();
  if (!username.checkValidity()) {
    username_alert.style.display = "block";
  } else {
    username_alert.style.display = "none";
  }
  if (!email.checkValidity()) {
    email_alert.style.display = "block";
  } else {
    email_alert.style.display = "none";
  }
  if (!password.checkValidity()) {
    password_alert.style.display = "block";
  } else {
    password_alert.style.display = "none";
  }
});
