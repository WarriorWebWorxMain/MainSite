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
