document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("wishlistContainer");

  const wishlist = [
    {
      name: "Mountain Retreat",
      location: "Kathmandu, Nepal",
      price: "$150/night",
      image: "images/hotel2.avif"
    },
    {
      name: "City Lights Apartment",
      location: "Tokyo, Japan",
      price: "$100/night",
      image: "images/hotel3.jpg"
    }
  ];

  function renderWishlist() {
    container.innerHTML = "";

    wishlist.forEach((item) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="card-content">
          <h3>${item.name}</h3>
          <p><strong>📍 Location:</strong> ${item.location}</p>
          <p class="price">${item.price}</p>
          <button class="remove-btn" disabled>Added ❤️</button>
        </div>
      `;
      container.appendChild(card);
    });
  }

  renderWishlist();
});
