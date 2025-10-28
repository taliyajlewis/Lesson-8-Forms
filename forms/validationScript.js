    // JavaScript code for form validation
document.addEventListener("DOMContentLoaded", () => {
  // Prevent form from submitting
  const form = document.getElementById("myForm");
  const input = document.getElementById("inputField");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Retrieve the input field value
    const value = input.value.trim();

    // Regular expression pattern for alphanumeric input
    const alphaNumPattern = /^[a-zA-Z0-9]+$/;

    // Check if the input value matches the pattern
    if (alphaNumPattern.test(value)) {
      // Valid input: display confirmation and submit the form
      alert("Form submitted!");
    } else {
      // Invalid input: display error message
      alert("Invalid Input! Numbers and Letters only.");
    }
  });
});