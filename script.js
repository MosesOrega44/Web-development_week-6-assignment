// ===============================
// Part 1: Event Handling - Dark Mode
// ===============================
const toggleModeBtn = document.getElementById("toggleModeBtn");
toggleModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// ===============================
// Part 2: Interactive Elements
// ===============================

// Counter Game
let count = 0;
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const countDisplay = document.getElementById("countDisplay");

increaseBtn.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  countDisplay.textContent = count;
});

// Collapsible FAQ
const questions = document.querySelectorAll(".faq-question");
questions.forEach((q) => {
  q.addEventListener("click", () => {
    q.nextElementSibling.classList.toggle("hidden");
  });
});

// ===============================
// Part 3: Form Validation
// ===============================
const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // get form values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // error elements
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const formSuccess = document.getElementById("formSuccess");

  // clear errors
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  formSuccess.textContent = "";

  let valid = true;

  // Validate Name
  if (name === "") {
    nameError.textContent = "Name is required";
    valid = false;
  }

  // Validate Email (basic regex)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/i;
  if (!emailPattern.test(email)) {
    emailError.textContent = "Enter a valid email";
    valid = false;
  }

  // Validate Password
  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    valid = false;
  }

  // If all valid, show success
  if (valid) {
    formSuccess.textContent = "Form submitted successfully!";
    signupForm.reset();
  }
});
