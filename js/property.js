document.addEventListener("DOMContentLoaded", () => {
  const propertyId = localStorage.getItem("selectedProperty");
  const title = document.getElementById("property-title");
  const image = document.getElementById("property-image");
  const location = document.getElementById("property-location");
  const price = document.getElementById("property-price");
  const desc = document.getElementById("property-description");

  const properties = {
    hotel1: {
      name: "Ocean View Resort",
      location: "New South Wales, Australia ",
      price: "$120/night",
      description: "Relax at our beautiful beachside resort with ocean views.",
      image: "images/hotel1.jpg"
    },
    hotel2: {
      name: "Mountain Retreat",
      location: "Kathmandu, Nepal",
      price: "$150/night",
      description: "Enjoy peace and nature at our mountain retreat.",
      image: "images/hotel2.avif"
    },
    hotel3: {
      name: "City Lights Apartment",
      location: "Tokyo, Japan",
      price: "$100/night",
      description: "Modern city apartment with stunning skyline view.",
      image: "images/hotel3.jpg"
    }
  };

  const prop = properties[propertyId] || properties.hotel1;

  title.textContent = prop.name;
  image.src = prop.image;
  location.textContent = `📍 ${prop.location}`;
  price.textContent = `💲 ${prop.price}`;
  desc.textContent = prop.description;

  document.getElementById("book-btn").addEventListener("click", () => {
    alert(`Your booking for ${prop.name} has been added!`);
  });
});
