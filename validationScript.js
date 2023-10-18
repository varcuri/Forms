// JavaScript code for form validation
// Prevent form from submitting

// Retrieve the input field value

// Regular expression pattern for alphanumeric input

// Check if the input value matches the pattern

// Valid input: display confirmation and submit the form

// Invalid input: display error message

let alphanumeric = /^[a-zA-Z0-9]+$/
//let inputField = document.getElementById("inputField");
//inputField.setAttribute("pattern", alphanumeric.source);

let submitButton = document.querySelector('button[type="submit"]')

function validateInput() {
  let inputField = document.getElementById("inputField");
  if (!alphanumeric.test(inputField.value)) {
    inputField.setCustomValidity("Input must be alphanumeric and not empty.")
  } else {
    inputField.setCustomValidity("");
    window.alert("Submission Received.")
  }
}

submitButton.addEventListener("click", validateInput);