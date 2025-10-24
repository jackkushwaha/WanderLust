document.addEventListener("DOMContentLoaded", () => {
  console.log("Home page loaded successfully");

  window.viewProperty = function(id) {
    localStorage.setItem("selectedProperty", id);
    window.location.href = "property.html";
  };

  document.getElementById("searchBtn").addEventListener("click", () => {
    const dest = document.getElementById("destination").value;
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;
    const guests = document.getElementById("guests").value;

    if (!dest || !checkin || !checkout || !guests) {
      alert("Please fill out all search fields!");
      return;
    }

    alert(`Searching stays in ${dest} for ${guests} from ${checkin} to ${checkout}`);
    window.location.href = "listings.html";
  });
});
