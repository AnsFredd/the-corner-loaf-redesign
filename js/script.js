
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
      const productCard = document.createElement("li");
      const productDetails = document.createElement("div");
      const productName = document.createElement("p");
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
    const emptyMessage = document.createElement("li");
    emptyMessage.classList.add("availability-empty");
    emptyMessage.textContent =
      "No scheduled bakes today. Please check back tomorrow.";
    availabilityList.appendChild(emptyMessage);
  }
}


// Product Filtering

const filterButtons = document.querySelectorAll(".filter-button");
const menuProducts = document.querySelectorAll(".menu-product");
const menuDayCards = document.querySelectorAll(".menu-day-card");
const filterFeedback = document.querySelector("#filter-feedback");
const menuSearchInput = document.querySelector("#menu-search-input");
const menuSearchSuggestions = document.querySelector("#menu-search-suggestions");
let selectedCategory = "all";
let activeSuggestionIndex = -1;

function getMatchingProductNames() {
  if (!menuSearchInput) {
    return [];
  }

  const query = menuSearchInput.value.trim().toLocaleLowerCase();

  if (!query) {
    return [];
  }

  const names = Array.from(menuProducts)
    .filter((product) => {
      return (
        selectedCategory === "all" ||
        product.dataset.category === selectedCategory
      );
    })
    .map((product) => product.querySelector(".product-name")?.textContent.trim())
    .filter(Boolean);

  return [...new Set(names)].filter((name) =>
    name.toLocaleLowerCase().includes(query)
  );
}

function closeMenuSearchSuggestions() {
  if (!menuSearchInput || !menuSearchSuggestions) {
    return;
  }

  menuSearchSuggestions.hidden = true;
  menuSearchInput.setAttribute("aria-expanded", "false");
  menuSearchInput.removeAttribute("aria-activedescendant");
  activeSuggestionIndex = -1;

  menuSearchSuggestions
    .querySelectorAll('[role="option"]')
    .forEach((option) => option.setAttribute("aria-selected", "false"));
}

function setActiveMenuSuggestion(index) {
  if (!menuSearchInput || !menuSearchSuggestions) {
    return;
  }

  const options = Array.from(
    menuSearchSuggestions.querySelectorAll('[role="option"]')
  );

  if (options.length === 0) {
    return;
  }

  activeSuggestionIndex = (index + options.length) % options.length;

  options.forEach((option, optionIndex) => {
    option.setAttribute(
      "aria-selected",
      String(optionIndex === activeSuggestionIndex)
    );
  });

  const activeOption = options[activeSuggestionIndex];
  menuSearchInput.setAttribute("aria-activedescendant", activeOption.id);
  activeOption.scrollIntoView({ block: "nearest" });
}

function updateMenuSearchSuggestions() {
  if (!menuSearchInput || !menuSearchSuggestions) {
    return;
  }

  menuSearchSuggestions.replaceChildren();
  activeSuggestionIndex = -1;
  menuSearchInput.removeAttribute("aria-activedescendant");

  const suggestions = getMatchingProductNames();

  if (suggestions.length === 0) {
    closeMenuSearchSuggestions();
    return;
  }

  suggestions.forEach((name, index) => {
    const option = document.createElement("li");
    option.id = `menu-search-option-${index}`;
    option.className = "menu-search-suggestion";
    option.setAttribute("role", "option");
    option.setAttribute("aria-selected", "false");
    option.textContent = name;

    option.addEventListener("pointerdown", (event) => {
      event.preventDefault();
    });
    option.addEventListener("click", () => {
      chooseMenuSearchSuggestion(name);
    });

    menuSearchSuggestions.appendChild(option);
  });

  menuSearchSuggestions.hidden = false;
  menuSearchInput.setAttribute("aria-expanded", "true");
}

function chooseMenuSearchSuggestion(name) {
  if (!menuSearchInput) {
    return;
  }

  menuSearchInput.value = name;
  closeMenuSearchSuggestions();
  updateMenuView();
  menuSearchInput.focus();
}

function updateMenuView() {
  let visibleProducts = 0;
  const query = menuSearchInput?.value.trim() ?? "";
  const normalizedQuery = query.toLocaleLowerCase();
  const categoryButton = Array.from(filterButtons).find(
    (button) => button.dataset.filter === selectedCategory
  );
  const categoryLabel = categoryButton?.textContent.trim() ?? "All Products";

  menuProducts.forEach((product) => {
    const productName =
      product.querySelector(".product-name")?.textContent.trim() ?? "";
    const matchesCategory =
      selectedCategory === "all" ||
      product.dataset.category === selectedCategory;
    const matchesSearch =
      !normalizedQuery || productName.toLocaleLowerCase().includes(normalizedQuery);
    const isVisible = matchesCategory && matchesSearch;

    product.hidden = !isVisible;

    if (isVisible) {
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

    const visibleCount = Array.from(
      dayCard.querySelectorAll(".menu-product")
    ).filter((product) => !product.hidden).length;
    const dayCount = dayCard.querySelector(".day-count");

    if (dayCount) {
      dayCount.textContent = `${visibleCount} ${visibleCount === 1 ? "Bake" : "Bakes"}`;
    }

    dayCard.hidden = !hasVisibleProducts;
  });

  if (filterFeedback) {
    if (visibleProducts === 0 && query) {
      filterFeedback.textContent = `No products found for ${query}${selectedCategory === "all" ? "" : ` in ${categoryLabel.toLocaleLowerCase()}`}.`;
    } else if (visibleProducts === 0) {
      filterFeedback.textContent = `No ${categoryLabel.toLocaleLowerCase()} products are available in the weekly menu.`;
    } else if (query) {
      filterFeedback.textContent = `Showing ${visibleProducts} menu ${visibleProducts === 1 ? "listing" : "listings"} for ${query}${selectedCategory === "all" ? "" : ` in ${categoryLabel.toLocaleLowerCase()}`}.`;
    } else if (selectedCategory === "all") {
      filterFeedback.textContent =
        `Showing all ${visibleProducts} scheduled product listings in the weekly menu.`;
    } else {
      filterFeedback.textContent =
        `Showing ${visibleProducts} ${categoryLabel.toLocaleLowerCase()} product listings in the weekly menu.`;
    }
  }
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedCategory = button.dataset.filter;

    filterButtons.forEach((filterButton) => {
      filterButton.classList.remove("active");
      filterButton.setAttribute("aria-pressed", "false");
    });

    button.classList.add("active");
    button.setAttribute("aria-pressed", "true");

    updateMenuSearchSuggestions();
    updateMenuView();
  });
});

if (menuSearchInput && menuSearchSuggestions) {
  menuSearchInput.addEventListener("input", () => {
    updateMenuSearchSuggestions();
    updateMenuView();
  });

  menuSearchInput.addEventListener("keydown", (event) => {
    const options = menuSearchSuggestions.querySelectorAll('[role="option"]');

    if (event.key === "ArrowDown" && options.length > 0) {
      event.preventDefault();
      setActiveMenuSuggestion(activeSuggestionIndex + 1);
    } else if (event.key === "ArrowUp" && options.length > 0) {
      event.preventDefault();
      setActiveMenuSuggestion(
        activeSuggestionIndex < 0 ? options.length - 1 : activeSuggestionIndex - 1
      );
    } else if (
      event.key === "Enter" &&
      activeSuggestionIndex >= 0 &&
      options[activeSuggestionIndex]
    ) {
      event.preventDefault();
      chooseMenuSearchSuggestion(options[activeSuggestionIndex].textContent);
    } else if (event.key === "Escape" && !menuSearchSuggestions.hidden) {
      event.preventDefault();
      closeMenuSearchSuggestions();
    }
  });

  menuSearchInput.addEventListener("blur", () => {
    closeMenuSearchSuggestions();
  });
}


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
const preorderFeedback = document.querySelector("#preorder-feedback");
const customerNameInput = document.querySelector("#customer-name");
const orderDetailsInput = document.querySelector("#order-details");

if (
  preOrderForm &&
  preorderList &&
  preorderFeedback &&
  customerNameInput &&
  orderDetailsInput
) {
  [customerNameInput, orderDetailsInput].forEach((field) => {
    field.addEventListener("input", () => {
      if (field.value.trim()) {
        field.removeAttribute("aria-invalid");
      }

      if (customerNameInput.value.trim() && orderDetailsInput.value.trim()) {
        preorderFeedback.textContent = "";
        preorderFeedback.hidden = true;
      }
    });
  });

  preOrderForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const customerName = customerNameInput.value.trim();
    const orderDetails = orderDetailsInput.value.trim();
    const missingFields = [];

    customerNameInput.toggleAttribute("aria-invalid", !customerName);
    orderDetailsInput.toggleAttribute("aria-invalid", !orderDetails);

    if (!customerName) {
      missingFields.push("your name");
    }

    if (!orderDetails) {
      missingFields.push("what you would like to order");
    }

    if (missingFields.length > 0) {
      preorderFeedback.textContent = `Please enter ${missingFields.join(" and ")}.`;
      preorderFeedback.hidden = false;
      (customerName ? orderDetailsInput : customerNameInput).focus();
      return;
    }

    preorderFeedback.textContent = "";
    preorderFeedback.hidden = true;

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
const contactError = document.querySelector("#contact-error");
const contactNameInput = document.querySelector("#contact-name");
const contactEmailInput = document.querySelector("#contact-email");
const contactMessageInput = document.querySelector("#contact-message");

if (
  contactForm &&
  contactFeedback &&
  contactError &&
  contactNameInput &&
  contactEmailInput &&
  contactMessageInput
) {
  const contactFields = [
    contactNameInput,
    contactEmailInput,
    contactMessageInput,
  ];

  contactFields.forEach((field) => {
    field.addEventListener("input", () => {
      if (field.value.trim()) {
        field.removeAttribute("aria-invalid");
      }

      if (contactFields.every((contactField) => contactField.value.trim())) {
        contactError.textContent = "";
        contactError.hidden = true;
      }
    });
  });

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const contactName = contactNameInput.value.trim();
    const contactEmail = contactEmailInput.value.trim();
    const contactMessage = contactMessageInput.value.trim();
    const missingFields = [];

    contactNameInput.toggleAttribute("aria-invalid", !contactName);
    contactEmailInput.toggleAttribute("aria-invalid", !contactEmail);
    contactMessageInput.toggleAttribute("aria-invalid", !contactMessage);

    if (!contactName) {
      missingFields.push("your name");
    }

    if (!contactEmail) {
      missingFields.push("your email address");
    }

    if (!contactMessage) {
      missingFields.push("your message");
    }

    contactFeedback.classList.remove("success", "error", "form-feedback");

    if (missingFields.length > 0) {
      contactError.textContent = `Please enter ${missingFields.join(", ").replace(/, ([^,]+)$/, " and $1")}.`;
      contactError.hidden = false;
      const firstInvalidField = contactFields.find(
        (field) => !field.value.trim()
      );
      firstInvalidField.focus();
      return;
    }

    contactError.textContent = "";
    contactError.hidden = true;
    contactFeedback.textContent =
      "Thank you! Your message has been submitted successfully.";
    contactFeedback.classList.add("form-feedback", "success");

    contactForm.reset();
  });
}
