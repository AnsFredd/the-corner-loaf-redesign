# Audit

## Overview

The redesign was evaluated against the problems identified during the diagnosis phase and the business goals described in the brief. The primary goal was not simply to modernise the website, but to help customers quickly answer a key question identified by Marcus: whether there are products scheduled for baking today.

The evaluation therefore focuses on how effectively the redesign supports customer decision-making, improves mobile usability, increases accessibility and reflects the character of a small, local bakery.

## Prioritisation Decisions

Several improvements were possible, but not all issues were equally important.

The highest priority was helping customers find product availability information quickly. The diagnosis found that customers had to scan the weekly menu to determine which products were scheduled for a particular day. This directly affected customer convenience and potentially reduced visits and sales opportunities.

The second priority was mobile usability. The brief described customers checking information while commuting, making responsive design essential.

Accessibility improvements were prioritised next because they affect the ability of many users to successfully navigate and interact with the website.

Lower-priority enhancements, such as additional visual decoration and advanced styling effects, were deferred because they did not contribute directly to the business goals identified in the brief.

---

## Evaluation of Key Improvements

### 1. Product Availability

#### Original Problem

Customers could not immediately identify which products were scheduled for a particular day.

#### Implemented Solution

A "Today's Scheduled Bakes" board was introduced near the top of the page. JavaScript automatically displays products scheduled for the current day.

The weekly menu was also organised into individual day cards, making the products and their prices easier to scan.

#### Evaluation

This was the most important improvement implemented in the redesign because it directly addresses the primary customer problem identified by Marcus.

Customers no longer need to read through the entire weekly menu before deciding whether the bakery has products scheduled for that day. This reduces the effort involved for commuters making quick decisions while travelling.

The solution also supports the business goal of making product information easier to discover.

#### Limitation

The feature displays scheduled products rather than real-time stock availability. Customers are advised to contact the bakery to confirm stock before visiting.

---

### 2. Mobile Experience

#### Original Problem

The starter website used fixed-width layouts which created usability problems on smaller screens.

#### Implemented Solution

The redesign introduces responsive layouts using flexible widths, Flexbox, CSS Grid and mobile breakpoints.

A collapsible hamburger navigation menu was also introduced for smaller screens.

#### Evaluation

This improvement was prioritised because many visitors are likely to access the site on mobile devices.

The redesigned layout adapts to smaller screens, keeps the navigation accessible and allows important information to remain visible without horizontal scrolling.

The product cards, forms and other content sections also adjust to smaller screen sizes.

This supports the commuter use case described in the brief.

---

### 3. Semantic Structure and Accessibility

#### Original Problem

The starter site relied heavily on generic elements and contained several accessibility issues.

#### Implemented Solution

The redesign uses semantic HTML elements, labelled form controls, visible focus indicators and button-based FAQ controls with ARIA attributes.

#### Evaluation

These changes improve the experience for keyboard users and users of assistive technology while creating a more meaningful page structure.

Basic keyboard testing confirmed that:

- Navigation links can receive keyboard focus.
- FAQ controls can be operated using keyboard input.
- Form fields remain accessible through keyboard navigation.
- Focus indicators remain visible during interaction.

The page also includes an appropriate language attribute and semantic landmarks that help assistive technologies understand the page structure.

#### Limitation

During the earlier EE01 redesign phase, formal accessibility tools and screen-reader testing were not available. That limitation applies to the EE01 evaluation documented here. EE02 accessibility testing is documented separately in [`docs/ee02/`](ee02/), including its own methods and evidence; those later results should not be read as tests performed during EE01.

---

### 4. Interactive Features

#### Original Problem

The FAQ accordion, pre-order functionality and contact form interactions were not implemented in the starter project.

#### Implemented Solution

JavaScript functionality was added for FAQ expansion, product filtering, basic pre-order tracking and form validation.

#### Evaluation

These features improve usability by allowing customers to interact with the website and receive immediate feedback without unnecessary page reloads.

The FAQ section allows customers to expand and collapse answers, while the product filters make it easier to find products by category. Form validation also helps prevent incomplete submissions.

#### Limitation

The forms currently operate only within the browser and do not send information to the bakery.

---

## Design Evaluation

### Alignment with the Brief

Marcus described The Corner Loaf as a small, community-focused bakery rather than a corporate brand.

The redesign supports this requirement through:

- A warm brown colour palette inspired by baked goods.
- Simple and familiar navigation.
- A product-focused menu with clear prices.
- Content that focuses on customer needs rather than excessive marketing language.
- A short introduction that tells Marcus's story without dominating the page.

The overall design was kept simple and welcoming to reflect the identity of the business.

### Colour Palette

The chosen palette uses warm browns, creams and bakery-inspired neutral colours to support the handmade identity of the business.

The colours are also organised using CSS variables, making them easier to maintain and update consistently throughout the website.

### Typography

A consistent type scale was implemented using reusable CSS variables for font families and common font sizes.

Responsive font-size adjustments help maintain a clear hierarchy while keeping text readable across different screen sizes.

### Spacing and Layout

Consistent spacing was applied throughout the interface to create a cleaner structure and improve scanability, particularly on smaller screens.

The menu cards, FAQ section and information areas were also adjusted to create a more organised layout.

---

## Deferred Improvements and Trade-Offs

Several possible improvements were intentionally left outside the project scope.

### Real-Time Inventory

The availability board uses the bakery schedule rather than real-time stock data.

Implementing live inventory would require backend systems that were outside the available project scope.

### Online Order Processing

The pre-order form does not submit information to a server or email service.

A production implementation would require backend infrastructure and order management processes.

### Additional Customer Convenience Features

Features such as WhatsApp ordering, delivery tracking, customer accounts and online payment processing could provide additional value but were not prioritised because they did not address the most important problem identified during diagnosis.

---

## Conclusion

The redesign successfully addresses the most significant issues identified during diagnosis.

The strongest outcome is the prioritisation of product availability information, helping customers quickly determine what is scheduled to be baked on a given day. Combined with the redesigned weekly menu cards, responsive layouts, accessibility improvements and interactive features, the website is substantially better aligned with both customer needs and business goals than the original starter implementation.

While some limitations remain, particularly around real-time stock information and backend integration, those limitations were accepted in favour of solving the highest-priority usability problems first.
