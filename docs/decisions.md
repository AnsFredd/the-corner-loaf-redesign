
# Decision Log

## 1. Colour Palette

A warm, earthy colour palette was selected to reflect the artisan bakery identity of The Corner Loaf.

The main colours include:
- Primary: `#8b4b27`
- Secondary: `#bd7745`
- Accent: `#e8b77e`
- Dark: `#382317`

Additional background, surface, border, text and status colours were defined using CSS variables. This keeps the design consistent and makes colours easier to maintain.

## 2. Typography

Two Google Fonts were selected to create a clear distinction between headings and general content.

- **Playfair Display** is used for headings and the bakery name to give the website a traditional, artisan appearance.
- **DM Sans** is used for body text, navigation, forms and general content to keep information readable.

Georgia and serif fonts are provided as fallbacks for headings, while Arial and sans-serif are used as fallbacks for body text.

CSS variables were created for both font families and commonly used text sizes. These include extra-small, small, body, large, H3, H2 and H1 sizes.

This makes typography consistent throughout the website and allows font sizes to be adjusted centrally.

## 3. Page Layout

A centred wrapper was used to control the width of the main content.

The wrapper has a maximum width of 1200px and uses automatic horizontal margins to keep the content centred on wider screens.

Padding was added around the content to prevent sections from appearing too close to the edges of the screen.

## 4. Navigation

A navigation bar was placed at the top of the website to provide access to the main sections.

It includes links to Home, Menu, Pre-Order, About and Contact.

A hamburger navigation button was introduced for smaller screens. This keeps the navigation accessible without allowing the links to take up too much space.

## 5. Hero Section

A large hero section was placed directly below the navigation.

It uses a bakery image as its background, with a dark overlay to improve the visibility of the white text.

The section includes:
- A short tagline identifying the bakery's location.
- The main heading, "Freshly Baked, Made with Love."
- A short introductory description.
- Buttons linking to the menu and pre-order sections.

This gives visitors an immediate introduction to the bakery and provides clear actions.

## 6. Section Order

The sections were arranged to support the customer's journey through the website.

The order is:
1. Home and hero section.
2. Menu and today's scheduled bakes.
3. Product filtering and weekly menu.
4. FAQ.
5. Pre-order.
6. About.
7. Contact.
8. Footer.

This places product availability and menu information before ordering and business background information.

## 7. Daily Product Availability Board

A "Today's Scheduled Bakes" board was included near the beginning of the menu section.

It displays products scheduled for baking on the current day, helping customers quickly check what is planned.

The board is intended to communicate the baking schedule rather than provide real-time stock information.

## 8. Weekly Menu Design

The weekly menu uses separate cards for each day instead of presenting the products in a traditional table.

Each day's card includes:
- The day name and a short description.
- A photograph.
- Product names.
- Product categories.
- Product prices.

Sunday has a separate closed-day message.

This card-based layout makes the weekly menu easier to browse and avoids the spreadsheet-like appearance of a traditional table.

## 9. Availability Information

Availability information is presented using a clear status label and supporting colours.

CSS variables define success and error colours, while the availability status uses a green background and green text to make the status visually distinct.

This helps customers recognise availability information more easily.

## 10. FAQ Accordion

An FAQ accordion was included to answer common customer questions without displaying all the answers at once.

Each question can be expanded or collapsed using a button.

A plus sign indicates a collapsed answer, while a minus sign indicates an expanded answer.

This keeps the section organised and reduces the amount of information displayed at one time.

## 11. Pre-Order Form

A pre-order form was included to allow customers to enter their name and order details.

The form contains:
- A required name field.
- A required order-details text area.
- A submit button.

A separate area is provided to display pre-order feedback or submitted order information.

## 12. Contact Form

A contact form was included to allow customers to send an enquiry through the website interface.

It contains:
- A required name field.
- A required email field.
- A required message text area.
- A submit button.

The form also includes an area for displaying feedback after submission.

## 13. Form Feedback

Feedback areas were included to communicate form submission results to customers.

Success and error messages use separate colours to make the outcome easier to recognise.

The pre-order and contact sections have their own feedback areas so that messages appear in the relevant section.

## 14. Responsive Design – Tablet Breakpoint

A breakpoint of 950px was used to adjust the layout for tablet-sized screens.

At this breakpoint:
- The weekly menu changes from three columns to two columns.
- The information boxes change from three columns to two columns.
- The spacing between footer columns is reduced.
- The navigation bar is allowed to wrap when necessary.

## 15. Responsive Design – Mobile Navigation

A breakpoint of 768px was used to introduce the hamburger navigation.

At this breakpoint:
- The hamburger button becomes visible.
- The navigation links are hidden by default.
- The links are displayed vertically when the menu is opened.
- Navigation links take up the full available width for easier interaction.

## 16. Responsive Design – Mobile Layout

A breakpoint of 600px was used to optimise the website for mobile screens.

At this breakpoint:
- The weekly menu changes to a single-column layout.
- The availability list changes to one column.
- The About section and information boxes use single-column layouts.
- The hero heading and section headings become smaller.
- Form fields and buttons adjust to the available width.
- Padding and spacing are reduced.
- The footer changes to a single-column layout.

## 17. Responsive Design – Very Small Screens

An additional breakpoint of 380px was introduced for very small mobile screens.

At this breakpoint:
- The hero heading is reduced in size.
- Wrapper padding is reduced.
- Product prices and day-count labels become smaller.
- FAQ spacing and padding are adjusted.
- The closed-day card layout is adjusted to fit narrow screens.

## 18. Flexible Information Boxes

The About section uses a grid layout to organise the bakery's information boxes.

The boxes display information such as the bakery's location, opening hours and contact details.

The grid changes from three columns to two columns at 950px and then to one column at 600px.

This allows the information to remain organised across different screen sizes.

## 19. Product Filtering

Interactive product filtering was added to the weekly menu.

Customers can select from the following categories:
- All Products.
- Bread.
- Pastries.
- Snacks.

The feature allows customers to view products belonging to a selected category without reloading the page.

Feedback is also provided to communicate the filtering results.

## 20. Accessibility and Keyboard Focus

Accessibility was considered when designing the website.

Semantic HTML elements were used to organise the page content.

Interactive elements such as buttons and form fields were styled to provide visible focus indicators when navigating with a keyboard.

The FAQ accordion and navigation button also use appropriate ARIA attributes to communicate their expanded or collapsed states.

## 21. Smooth Scrolling

Smooth scrolling was added to improve navigation between sections.

The `scroll-behavior: smooth` property allows the page to move smoothly when visitors select internal navigation links.

Section scroll margins were also included to provide spacing when navigating to different sections.

## 22. Location and Business Information

The About section was included to introduce the bakery and provide background information.

It contains information about the bakery, an image and details such as its location, opening hours and contact information.

This helps customers understand the business and find important information before visiting or making an enquiry.

## 23. Footer

A structured footer was included to provide useful information and a clear ending to the website.

It contains three main content areas:
- **Bakery branding:** The bakery name and a short description.
- **Quick links:** Navigation links to important website sections.
- **Footer message:** An additional message and a call-to-action button linking visitors towards the relevant section.

A separate bottom area displays the copyright information.

The dark background, light text and accent colours maintain consistency with the website's colour palette while making the footer visually distinct from the main content.

## Conclusion

The design decisions were made to improve the presentation, usability and responsiveness of The Corner Loaf website.

The daily scheduled bakes board supports customers checking the baking schedule, while the weekly menu cards make product information easier to browse.

The two additional improvements are interactive product filtering and hamburger navigation. Together, they improve product discovery and navigation, particularly on smaller screens.
