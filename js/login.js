document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "jack" && password === "jack") {
      alert("✅ Login Successful! Welcome, Jack!");
      window.location.href = "index.html"; // redirect to homepage or dashboard
    } else {
      alert("❌ Invalid Username or Password.\n(Default is jack / jack)");
    }
  });
});
