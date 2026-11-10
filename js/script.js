// Mobile navigation logic

const menuToggle = document.querySelector(".menu-toggle");
const navList = document.querySelector("ul");

// open and close the mobile menu
menuToggle.addEventListener("click", () => {
  navList.classList.toggle("active");

  const isOpen = navList.classList.contains("active");

  menuToggle.setAttribute("aria-expanded", isOpen);

  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu",
  );
});

// close menu when navigation link is clicked
const navLinks = navList.querySelectorAll("a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navList.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  });
});

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
    name: "Banana Bread ",
    price: 15,
    days: ["Thursday", "Saturday"],
  },
  {
    name: "Meat Pies ",
    price: 12,
    days: ["Wednesday", "Friday"],
  },
];

const timestamp = Date.now();
const currentDayIndex = new Date(timestamp).getDay();
const currentDay = daysOfWeek[currentDayIndex];
console.log(currentDay);

const availableProducts = products.filter((pro) => {
  return pro.days.includes(currentDay);
});

console.log(availableProducts);

// dispaly the available prodcut
const availabilityList = document.querySelector(".availability-list");

const availabilityDate = document.querySelector("#availability-date");
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

    productCard.classList.add("availability-card");
    productName.classList.add("availability-name");
    productPrice.classList.add("availability-price");
    productStatus.classList.add("availability-status");

    productCard.appendChild(productName)
    productCard.appendChild(productPrice)
    productCard.appendChild(productStatus)


    availabilityList.appendChild(productCard)
  });
} else {
    availabilityList.textContent = "No scheduled bakes today. Please check back tomorrow"
}

// === SECTION 1: Pre-order FAQ accordion ===
// Each .faq-trigger should expand and collapse its paired .faq-body when clicked.

const faqTriggers = document.querySelectorAll(".faq-trigger");
faqTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
        const answerId = trigger.getAttribute("aria-controls");

        // find answer element
        const answer = document.getElementById(answerId);

        // check whether answer is currently open
        const isExpanded = trigger.getAttribute("aria-expanded") === "true";

        // toggle answer visibility
        answer.hidden = isExpanded;

        trigger.setAttribute("aria-expanded", !isExpanded);
    })
})

// === SECTION 2: Pre-order tracker ===
// When the pre-order form is submitted, add the customer's name and order
// to the list below the form. Prevent the page from refreshing on submit.

const preOrder = document.querySelector(".preorder-form");
preOrder.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("customer-name").value
    const orderDetails = document.getElementById("order-details").value

    const parentContainer = document.createElement("div")
    const customerName = document.createElement("p")
    const customerOrderDetaisl = document.createElement("p");

    parentContainer.appendChild(customerName)
    parentContainer.appendChild(customerOrderDetaisl)
    parentContainer.classList.add("order-card");

    customerName.textContent = name;
    customerOrderDetaisl.textContent = orderDetails;


    const preorderList = document.getElementById("preorder-list");
    preorderList.appendChild(parentContainer);

    preOrder.reset()

    
   
})

// === SECTION 3: Contact form ===
// Validate the contact form before submission.
// Show a success message when all fields are correctly filled in.
// If a required field is missing, tell the user what needs to be fixed.

const contactForm = document.querySelector(".contact-form")
const contactFeedback = document.querySelector(".contact-feedback");
contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const contactName = document.getElementById("contact-name").value.trim();

    const contactEmail = document.getElementById("contact-email").value.trim();

    const contactMessage = document.getElementById("contact-message").value.trim();

    if (!contactName || !contactEmail || !contactMessage) {
        contactFeedback.textContent = "Please fill in required fields";

        contactFeedback.style.color = "red";

        return
    }

    // display success message
    contactFeedback.textContent = "Thank you! Your message has been sent successfully.";
    contactFeedback.style.color = "green";

    contactForm.reset();
})