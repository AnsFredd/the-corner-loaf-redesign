# Audit

## Overview

The redesigned website was reviewed against the main issues identified during the diagnosis stage. The goal was to create a website that is easier to use on mobile devices, more accessible, and better aligned with Marcus's business goals.

---

## Issue 1: Customers Could Not Quickly Identify Available Products

### Original Problem

Customers had to read through a weekly schedule table to work out which products were available on a particular day.

### Solution

A "Fresh from the Oven Today" section was added near the top of the page. JavaScript automatically displays products scheduled for the current day.

### Result

Customers can immediately see what is available before reading the full menu, making it easier to decide whether to visit the bakery.

---

## Issue 2: Poor Mobile Experience

### Original Problem

The original website used fixed-width layouts that did not adapt well to smaller screens.

### Solution

The redesign uses a responsive layout with flexible widths, Flexbox, CSS Grid, and media queries.

### Result

The website adapts to different screen sizes and is easier to use on phones and tablets.

---

## Issue 3: Weak Semantic Structure

### Original Problem

The original website relied heavily on generic div elements.

### Solution

Semantic elements such as `nav`, `header`, `main`, `section`, and `footer` were introduced.

### Result

The page structure is easier for browsers, search engines, and assistive technologies to understand.

---

## Issue 4: Accessibility Problems

### Original Problem

Forms lacked labels, table headings were not properly marked up, and FAQ controls were not accessible.

### Solution

- Labels were added to all form fields.
- Table headings use `th` elements.
- FAQ items use buttons with ARIA attributes.
- Focus styles were added for keyboard users.

### Result

The website is easier to navigate and interact with using assistive technologies and keyboards.

---

## Issue 5: Missing Interaction Features

### Original Problem

The FAQ accordion, pre-order tracker, and contact form validation were not implemented.

### Solution

JavaScript was added to:
- Toggle FAQ answers.
- Display submitted pre-orders.
- Validate contact form input and provide feedback.

### Result

Important customer interactions now work as intended.

---

## Design Evaluation

### Colour Palette

A warm brown colour palette was chosen to reflect the bakery's welcoming and handmade identity.

### Typography

A consistent type scale was introduced using CSS variables to improve readability and visual hierarchy.

### Spacing

Consistent padding, margins, and spacing values were used throughout the page to improve layout and readability.

---

## Trade-Offs

The product availability board displays products based on the bakery's schedule rather than real-time stock levels.

This approach was chosen because real-time stock data is not available within the project's scope. However, it still provides customers with more useful information than the original website.

---

## Conclusion

The redesign successfully addresses the most important usability, accessibility, and business problems identified during the diagnosis stage. The website is now responsive, more accessible, easier to navigate, and better supports Marcus's goal of helping customers quickly decide whether to visit the bakery.