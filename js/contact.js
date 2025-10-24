document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const feedback = document.getElementById("formMessage");

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (name === "" || email === "" || message === "") {
    feedback.textContent = "All fields are required!";
    feedback.style.color = "red";
  } else if (!email.match(emailPattern)) {
    feedback.textContent = "Please enter a valid email!";
    feedback.style.color = "red";
  } else {
    feedback.textContent = "Thank you! Your message has been sent.";
    feedback.style.color = "green";
    document.getElementById("contactForm").reset();
  }
});
