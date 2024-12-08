// JavaScript for interactive registration form validation and modal popup

document.addEventListener('DOMContentLoaded', function () {

  // Get references to the form elements and modal
  const formElements = document.querySelectorAll('input[type="text"], input[type="time"], input[type="date"]');
  const registerButton = document.querySelector('.glasscard-button');
  const section = document.querySelector('section');
  const modalBox = document.querySelector('.modal-box');
  const overlay = document.querySelector('.overlay');
  const closeModalButton = document.querySelector('.close-btn');

  // Function to check if all inputs are filled
  function checkInputs() {
    let allFilled = true;

    formElements.forEach(input => {
      // Check if the input field is empty
      if (!input.value) {
        input.style.border = '2px solid red';  // Add red border if empty
        allFilled = false;
      } else {
        input.style.border = '';  // Remove red border if filled
      }
    });

    return allFilled;
  }

  // Event listener for the "Register" button
  registerButton.addEventListener('click', function (event) {
    event.preventDefault();  // Prevent the form from submitting

    // Check if all inputs are filled
    if (checkInputs()) {
      // If all fields are filled, show the success modal
      section.classList.add('active');  // Add 'active' class to section to show modal and overlay
    } else {
      // If any input is empty, show an alert and highlight missing inputs
      alert('Please fill all the required fields!');
    }
  });

  // Event listener to close the modal when clicking the close button
  closeModalButton.addEventListener('click', function () {
    section.classList.remove('active');  // Remove 'active' class to hide modal and overlay
  });

  // Optional: Make inputs return to normal state after user starts typing
  formElements.forEach(input => {
    input.addEventListener('input', function () {
      if (input.value) {
        input.style.border = ''; // Remove red border once user starts typing
      }
    });
  });

});
