function updatemenu() {
  const checkbox = document.getElementById("responsive-menu");
  const menu = document.getElementById("menu");

  if (checkbox.checked) {
    menu.classList.add("show");
  } else {
    menu.classList.remove("show");
  }
}

// Add smooth scrolling to anchor links (improves user experience)
const links = document.querySelectorAll("a");

links.forEach((link) => {
  link.addEventListener("click", function (event) {
    if (link.hash !== "") {
      event.preventDefault();
      const target = document.querySelector(link.hash);
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Simple form validation (improves user experience and prevents errors)
const form = document.getElementById("myForm"); // Assuming you have a form with this ID

if (form) {
  form.addEventListener("submit", function (event) {
    const email = document.getElementById("emailInput"); // Assuming you have an email input with this ID
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email validation

    if (!email.value.match(emailRegex)) {
      event.preventDefault();
      alert("Please enter a valid email address.");
    }
  });
}
/*Explanation of additions:

Smooth Scrolling:

This section uses querySelectorAll to find all anchor links (<a>) in the document.
It loops through each link and adds a click event listener.
When a link is clicked, the preventDefault method stops the default behavior of jumping to the linked section abruptly.
It then finds the target element using querySelector based on the link's hash attribute (assuming internal links point to elements within the page).
Finally, it uses scrollIntoView with the behavior: "smooth" option to animate the scrolling to the target element.
Simple Form Validation:

This section checks if a form element with the ID "myForm" exists.
If the form exists, it adds a submit event listener.
Inside the listener, it retrieves the email input element using document.getElementById (assuming you have an email input with the ID "emailInput").
A regular expression (emailRegex) is used to check if the email format is valid.
If the email doesn't match the pattern, the preventDefault method stops the form submission, and an alert message is displayed.
Note:

Remember to replace "myForm" and "emailInput" with the actual IDs of your form and email input element in the HTML file.
You can further customize the validation logic and error messages based on your specific form requirements.
This script provides a basic foundation for enhancing the user experience of your webpage. You can extend it further by adding functionalities like:

Animations and interactive elements using JavaScript libraries like jQuery.
More complex form validation and error handling.
AJAX functionality for asynchronous data communication.
Remember to adjust your HTML file to include the form elements and link the JavaScript file as mentioned previously.*/
