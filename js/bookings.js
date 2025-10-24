document.addEventListener("DOMContentLoaded", () => {
  const bookingList = document.getElementById("bookingList");

  const bookings = JSON.parse(localStorage.getItem("bookings")) || [
    {
      name: "Ocean View Resort",
      location: "New South Wales, Australia",
      date: "12 Oct 2025 - 15 Oct 2025",
      price: "$120/night",
      guests: "2 Guests"
    },
    {
      name: "Mountain Retreat",
      location: "Kathmandu, Nepal",
      date: "20 Nov 2025 - 25 Nov 2025",
      price: "$150/night",
      guests: "3 Guests"
    }
  ];

  function renderBookings() {
    bookingList.innerHTML = "";

    if (bookings.length === 0) {
      bookingList.innerHTML = `<p class="empty-message">You have no bookings yet. Explore our listings to book your next stay!</p>`;
      return;
    }

    bookings.forEach((b) => {
      const div = document.createElement("div");
      div.classList.add("booking-card");
      div.innerHTML = `
        <h3>${b.name}</h3>
        <p><strong>📍 Location:</strong> ${b.location}</p>
        <p><strong>📅 Dates:</strong> ${b.date}</p>
        <p><strong>👥 Guests:</strong> ${b.guests}</p>
        <p class="price">${b.price}</p>
      `;
      bookingList.appendChild(div);
    });
  }

  renderBookings();
});

