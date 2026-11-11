// Product Availability Indicator

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const products = [
  {
    name: "Sourdough Loaf",
    price: 35,
    days: ["Tuesday", "Friday"],
  },
  {
    name: "Chin Chin",
    price: 20,
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  },
  {
    name: "Whole Wheat Loaf",
    price: 28,
    days: ["Monday", "Wednesday", "Friday"],
  },
  {
    name: "Butter Croissants",
    price: 18,
    days: ["Saturday"],
  },
  {
    name: "Banana Bread",
    price: 15,
    days: ["Thursday", "Saturday"],
  },
  {
    name: "Meat Pies",
    price: 12,
    days: ["Wednesday", "Friday"],
  },
];

// Get the current day
const currentDayIndex = new Date().getDay();
const currentDay = daysOfWeek[currentDayIndex];

// Find products scheduled for today
const availableProducts = products.filter((product) => {
  return product.days.includes(currentDay);
});

// Display scheduled products
const availabilityList = document.querySelector("#availability-list");
const availabilityDate = document.querySelector("#availability-date");

if (availabilityList && availabilityDate) {
  availabilityDate.textContent = currentDay;

  if (availableProducts.length > 0) {
    availableProducts.forEach((product) => {
      const productCard = document.createElement("div");
      const productName = document.createElement("h4");
      const productPrice = document.createElement("p");
      const productStatus = document.createElement("span");

      productName.textContent = product.name;
      productPrice.textContent = `GH₵ ${product.price}`;
      productStatus.textContent = "Scheduled for today";

      productCard.classList.add("availability-item");
      productName.classList.add("availability-product");
      productPrice.classList.add("availability-price");
      productStatus.classList.add(
        "availability-status",
        "status-available"
      );

      productCard.appendChild(productName);
      productCard.appendChild(productPrice);
      productCard.appendChild(productStatus);

      availabilityList.appendChild(productCard);
    });
  } else {
    availabilityList.textContent =
      "No scheduled bakes today. Please check back tomorrow.";
  }
}

// Pre-order FAQ Accordion

const faqTriggers = document.querySelectorAll(".faq-trigger");

faqTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const answerId = trigger.getAttribute("aria-controls");
    const answer = document.getElementById(answerId);

    if (!answer) return;

    const isExpanded =
      trigger.getAttribute("aria-expanded") === "true";

    answer.hidden = isExpanded;

    trigger.setAttribute("aria-expanded", String(!isExpanded));
  });
});


// Pre-order Tracker

const preOrder = document.querySelector(".preorder-form");
const preorderList = document.getElementById("preorder-list");

if (preOrder && preorderList) {
  preOrder.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document
      .getElementById("customer-name")
      .value.trim();

    const orderDetails = document
      .getElementById("order-details")
      .value.trim();

    // Validate the pre-order fields
    if (!name || !orderDetails) {
      preorderList.textContent =
        "Please complete all required fields before submitting.";

      preorderList.style.color = "red";
      return;
    }

    // Create the order card
    const parentContainer = document.createElement("div");
    const customerName = document.createElement("p");
    const customerOrderDetails = document.createElement("p");

    parentContainer.classList.add("order-card");

    customerName.textContent = name;
    customerOrderDetails.textContent = orderDetails;

    parentContainer.appendChild(customerName);
    parentContainer.appendChild(customerOrderDetails);

    preorderList.appendChild(parentContainer);

    // Display confirmation feedback
    const successMessage = document.createElement("p");

    successMessage.textContent =
      "Your pre-order request has been added successfully.";

    successMessage.classList.add("preorder-feedback");
    successMessage.style.color = "green";

    preorderList.appendChild(successMessage);

    // Clear the form
    preOrder.reset();
  });
}


// Contact Form Validation

const contactForm = document.querySelector(".contact-form");
const contactFeedback = document.querySelector(".contact-feedback");

if (contactForm && contactFeedback) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const contactName = document
      .getElementById("contact-name")
      .value.trim();

    const contactEmail = document
      .getElementById("contact-email")
      .value.trim();

    const contactMessage = document
      .getElementById("contact-message")
      .value.trim();

    // Check that all required fields are completed
    if (!contactName || !contactEmail || !contactMessage) {
      contactFeedback.textContent =
        "Please complete all required fields.";

      contactFeedback.style.color = "red";
      return;
    }

    // Display confirmation feedback
    contactFeedback.textContent =
      "Thank you! Your message has been submitted successfully.";

    contactFeedback.style.color = "green";

    // Clear the form after submission
    contactForm.reset();
  });
}
