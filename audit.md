Audit
Overview

The redesigned website was reviewed against the main issues identified during the diagnosis stage. The goal was to create a website that is easier to use on mobile devices, more accessible, and better aligned with Marcus's business goals.

Issue 1: Customers Could Not Quickly Identify Available Products
Original Problem

Customers had to read through a weekly schedule table to work out which products were available on a particular day.

Solution

A "Today's Scheduled Bakes" availability board was added near the top of the page. JavaScript automatically displays products scheduled for the current day.

Result

Customers can quickly identify which products are scheduled for the day before reading the full menu, making it easier to decide whether to visit the bakery. A notice also explains that availability should be confirmed with the bakery because the board does not track real-time stock.

Issue 2: Poor Mobile Experience
Original Problem

The original website used fixed-width layouts that did not adapt well to smaller screens.

Solution

The redesign uses a responsive layout with flexible widths, Flexbox, CSS Grid, and media queries.

Result

The website is designed to adapt to different screen sizes and provide a more convenient browsing experience on phones and tablets.

Issue 3: Weak Semantic Structure
Original Problem

The original website relied heavily on generic div elements.

Solution

Semantic elements such as nav, header, main, section, and footer were introduced.

Result

The page structure is easier for browsers, search engines, and assistive technologies to understand.

Issue 4: Accessibility Problems
Original Problem

Forms lacked labels, table headings were not properly marked up, and FAQ controls were not accessible.

Solution
Labels were added to all form fields.
Table headings use th elements.
FAQ items use buttons with ARIA attributes.
Focus styles were added for keyboard users.
Result

The website provides clearer form labels, improved table structure, and more accessible FAQ controls. These changes make the website easier to navigate using assistive technologies and keyboards.

Issue 5: Missing Interaction Features
Original Problem

The FAQ accordion, pre-order tracker, and contact form validation were not implemented.

Solution

JavaScript was added to:

Toggle FAQ answers when customers select questions.
Validate pre-order form fields and display submitted order details on the webpage.
Validate contact form input and provide success or error feedback.
Result

The FAQ accordion works, and both forms provide browser-side validation and feedback. The pre-order tracker displays submitted order details on the webpage.

Form submissions are not transmitted to the bakery through a server or email service.

Design Evaluation
Colour Palette

A warm brown colour palette was chosen to reflect the bakery's welcoming and handmade identity.

Typography

A consistent type scale was introduced using CSS variables to improve readability and visual hierarchy.

Spacing

Consistent padding, margins, and spacing values were used throughout the page to improve layout and readability.

Trade-Offs

The product availability board displays products based on the bakery's schedule rather than real-time stock levels.

This approach was chosen because real-time stock data is not available within the project's scope. A notice encourages customers to contact the bakery to confirm availability before visiting.

The pre-order and contact forms also provide browser-side feedback rather than transmitting submissions to a server. A backend integration would be required to deliver actual orders and messages to the bakery.

Conclusion

The redesign addresses the main usability, accessibility, and business problems identified during the diagnosis stage. The website provides a responsive layout, improved navigation, accessible form controls, interactive FAQ functionality, and a daily scheduled availability board.

These improvements make important information easier to find and help customers make more informed decisions about visiting The Corner Loaf.