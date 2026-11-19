
// Mobile Hamburger Menu

const menuToggle = document.querySelector(".menu-toggle");
const mainMenu = document.querySelector("#main-menu");

if (menuToggle && mainMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Open navigation menu" : "Close navigation menu"
    );

    mainMenu.classList.toggle("is-open", !isOpen);
  });

  // Close the menu when a navigation link is clicked.
  const menuLinks = mainMenu.querySelectorAll("a");

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mainMenu.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
  });

  // Close the menu when Escape is pressed.
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      mainMenu.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
    }
  });
}


// Product Availability

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
    category: "bread",
    days: ["Tuesday", "Friday"],
  },
  {
    name: "Chin Chin",
    price: 20,
    category: "snacks",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  },
  {
    name: "Whole Wheat Loaf",
    price: 28,
    category: "bread",
    days: ["Monday", "Wednesday", "Friday"],
  },
  {
    name: "Butter Croissants",
    price: 18,
    category: "pastry",
    days: ["Saturday"],
  },
  {
    name: "Banana Bread",
    price: 15,
    category: "bread",
    days: ["Thursday", "Saturday"],
  },
  {
    name: "Meat Pies",
    price: 12,
    category: "pastry",
    days: ["Wednesday", "Friday"],
  },
];

const currentDay = daysOfWeek[new Date().getDay()];

const availableProducts = products.filter((product) => {
  return product.days.includes(currentDay);
});

const availabilityList = document.querySelector("#availability-list");
const availabilityDate = document.querySelector("#availability-date");

if (availabilityList && availabilityDate) {
  availabilityDate.textContent = currentDay;

  if (availableProducts.length > 0) {
    availableProducts.forEach((product) => {
      const productCard = document.createElement("div");
      const productDetails = document.createElement("div");
      const productName = document.createElement("h4");
      const productPrice = document.createElement("p");
      const productStatus = document.createElement("span");

      productCard.classList.add("availability-item");
      productDetails.classList.add("availability-details");
      productName.classList.add("availability-product");
      productPrice.classList.add("availability-price");
      productStatus.classList.add("availability-status");

      productName.textContent = product.name;
      productPrice.textContent = `GH₵ ${product.price.toFixed(2)}`;
      productStatus.textContent = "Scheduled today";

      productDetails.appendChild(productName);
      productDetails.appendChild(productPrice);

      productCard.appendChild(productDetails);
      productCard.appendChild(productStatus);

      availabilityList.appendChild(productCard);
    });
  } else {
    availabilityList.textContent =
      "No scheduled bakes today. Please check back tomorrow.";
  }
}


// Product Filtering

const filterButtons = document.querySelectorAll(".filter-button");
const menuProducts = document.querySelectorAll(".menu-product");
const menuDayCards = document.querySelectorAll(".menu-day-card");
const filterFeedback = document.querySelector("#filter-feedback");

function filterMenu(selectedCategory) {
  let visibleProducts = 0;

  menuProducts.forEach((product) => {
    const matchesCategory =
      selectedCategory === "all" ||
      product.dataset.category === selectedCategory;

    product.hidden = !matchesCategory;

    if (matchesCategory) {
      visibleProducts++;
    }
  });

  menuDayCards.forEach((dayCard) => {
    // Keep the Sunday closed card visible for every filter.
    if (dayCard.classList.contains("closed-day")) {
      dayCard.hidden = false;
      return;
    }

    const hasVisibleProducts = Array.from(
      dayCard.querySelectorAll(".menu-product")
    ).some((product) => !product.hidden);

    dayCard.hidden = !hasVisibleProducts;
  });

  if (filterFeedback) {
    if (selectedCategory === "all") {
      filterFeedback.textContent =
        `Showing all ${visibleProducts} scheduled product listings in the weekly menu.`;
    } else {
      filterFeedback.textContent =
        `Showing ${visibleProducts} ${selectedCategory} product listings in the weekly menu.`;
    }
  }
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.dataset.filter;

    filterButtons.forEach((filterButton) => {
      filterButton.classList.remove("active");
      filterButton.setAttribute("aria-pressed", "false");
    });

    button.classList.add("active");
    button.setAttribute("aria-pressed", "true");

    filterMenu(selectedCategory);
  });
});


// FAQ Accordion

const faqTriggers = document.querySelectorAll(".faq-trigger");

faqTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const answerId = trigger.getAttribute("aria-controls");
    const answer = document.getElementById(answerId);

    if (!answer) {
      return;
    }

    const isExpanded =
      trigger.getAttribute("aria-expanded") === "true";

    answer.hidden = isExpanded;
    trigger.setAttribute("aria-expanded", String(!isExpanded));
  });
});


// Pre-Order Tracker

const preOrderForm = document.querySelector(".preorder-form");
const preorderList = document.querySelector("#preorder-list");

if (preOrderForm && preorderList) {
  preOrderForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const customerName = document
      .querySelector("#customer-name")
      .value.trim();

    const orderDetails = document
      .querySelector("#order-details")
      .value.trim();

    if (!customerName || !orderDetails) {
      preorderList.textContent =
        "Please complete all required fields before submitting.";
      return;
    }

    const orderCard = document.createElement("div");
    const nameParagraph = document.createElement("p");
    const orderParagraph = document.createElement("p");
    const feedback = document.createElement("p");

    orderCard.classList.add("order-card");
    feedback.classList.add("preorder-feedback", "form-feedback", "success");

    nameParagraph.textContent = customerName;
    orderParagraph.textContent = orderDetails;
    feedback.textContent =
      "Your pre-order request has been added successfully.";

    orderCard.appendChild(nameParagraph);
    orderCard.appendChild(orderParagraph);

    preorderList.appendChild(orderCard);
    preorderList.appendChild(feedback);

    preOrderForm.reset();
  });
}


// Contact Form Validation

const contactForm = document.querySelector(".contact-form");
const contactFeedback = document.querySelector(".contact-feedback");

if (contactForm && contactFeedback) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const contactName = document
      .querySelector("#contact-name")
      .value.trim();

    const contactEmail = document
      .querySelector("#contact-email")
      .value.trim();

    const contactMessage = document
      .querySelector("#contact-message")
      .value.trim();

    contactFeedback.classList.remove("success", "error", "form-feedback");

    if (!contactName || !contactEmail || !contactMessage) {
      contactFeedback.textContent =
        "Please complete all required fields.";
      contactFeedback.classList.add("form-feedback", "error");
      return;
    }

    contactFeedback.textContent =
      "Thank you! Your message has been submitted successfully.";
    contactFeedback.classList.add("form-feedback", "success");

    contactForm.reset();
  });
}