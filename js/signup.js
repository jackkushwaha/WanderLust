document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signupForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    if (!fullname || !email || !password || !confirmPassword) {
      alert("❌ Please fill in all fields!");
      return;
    }

    if (password.length < 6) {
      alert("⚠️ Password must be at least 6 characters long!");
      return;
    }

    if (password !== confirmPassword) {
      alert("❌ Passwords do not match!");
      return;
    }

    alert("✅ Sign Up Successful!");
    window.location.href = "login.html";
  });
});
