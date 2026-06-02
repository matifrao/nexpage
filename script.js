console.log("script loaded");

// EmailJS init
emailjs.init("JLOehbAoWk5xJDFOx");

// Elements
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

// Safety check
if (!form) {
  console.error("Form not found");
}

// Submit handler
form.addEventListener("submit", function (e) {
  e.preventDefault();

  status.textContent = "Sending...";
  status.style.color = "#999";

  emailjs.sendForm(
    "service_4uhqudd",
    "template_3b1k0jw",
    form
  )
  .then((response) => {
    console.log("SUCCESS:", response);

    status.textContent = "Message sent successfully!";
    status.style.color = "green";

    form.reset();
  })
  .catch((error) => {
    console.log("EMAILJS ERROR:", error);

    status.textContent = "Failed to send message.";
    status.style.color = "red";
  });
});