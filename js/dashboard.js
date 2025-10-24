document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("addPropertyForm");
  const listContainer = document.getElementById("propertyList");

  const properties = JSON.parse(localStorage.getItem("hostProperties")) || [];

  function renderProperties() {
    listContainer.innerHTML = "";

    if (properties.length === 0) {
      listContainer.innerHTML = `<p style="color:#777;">No properties listed yet. Add one above!</p>`;
      return;
    }

    properties.forEach((p, index) => {
      const card = document.createElement("div");
      card.classList.add("property-card");
      card.innerHTML = `
        <h3>${p.name}</h3>
        <p><strong>📍 Location:</strong> ${p.location}</p>
        <p class="price">${p.price}</p>
        <p>${p.desc}</p>
      `;
      listContainer.appendChild(card);
    });
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("propertyName").value.trim();
    const location = document.getElementById("propertyLocation").value.trim();
    const price = document.getElementById("propertyPrice").value.trim();
    const desc = document.getElementById("propertyDesc").value.trim();

    if (!name || !location || !price || !desc) {
      alert("Please fill in all fields!");
      return;
    }

    properties.push({ name, location, price, desc });
    localStorage.setItem("hostProperties", JSON.stringify(properties));

    renderProperties();
    form.reset();
  });

  renderProperties();
});
