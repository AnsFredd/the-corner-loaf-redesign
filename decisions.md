
# Decision Log – The Corner Loaf

This decision log records the design and development choices made during the redesign of The Corner Loaf website. Each decision was made to improve the experience for the bakery's customers and support the client's business needs.

## 1. Colour Palette

I chose a warm brown, orange and cream colour palette using CSS variables. Brown represents the traditional, handmade identity of the bakery, while the lighter colours create a welcoming appearance. This helps communicate the client's friendly bakery atmosphere and makes the website visually consistent.

## 2. Typography

I selected Verdana as the main font because it is simple and easy to read. I also created a consistent type scale using CSS variables for headings and body text. This helps customers read product descriptions, prices and important information easily.

## 3. Page Layout

I chose a centred content layout with a maximum width of 1200px. This prevents content from stretching too widely on larger screens while allowing the website to use the available screen space. The decision improves readability for customers using different devices.

## 4. Navigation

I placed the navigation bar at the top of the page and included links to Home, Menu, Pre-Orders, About and Contact. This allows customers to find important information quickly without having to search through the entire page.

## 5. Hero Section

I placed the bakery name and location directly below the navigation bar. I chose a strong brown background with white text to make the bakery identity immediately noticeable to visitors.

## 6. Section Order

I arranged the page so that customers see the bakery introduction and product information before the ordering and contact sections. The FAQ appears before the pre-order form so customers can understand the ordering process before making a request. This reduces confusion and supports the client's goal of making ordering easier.

## 7. Daily Product Availability Board

I added a daily availability board near the beginning of the menu section. This decision addresses the client's problem of customers struggling to identify which products are available on a particular day. JavaScript checks the current day and displays the products scheduled for that day, helping customers find relevant information quickly.

## 8. Weekly Menu Table

I chose a table to display product names, descriptions, prices and availability. This presents the bakery's full weekly menu in an organised format, allowing customers to compare products and check prices easily.

## 9. Availability Status Colours

I used different background colours for availability statuses: green for available, yellow for low availability and red for sold-out products. These colours help customers recognise availability information quickly. The daily board currently displays scheduled products rather than real-time stock levels.

## 10. FAQ Accordion

I chose an accordion layout for frequently asked questions. Customers can select individual questions to reveal their answers. This keeps the page organised while making important information about pre-orders, collection, cancellations and delivery accessible.

## 11. Pre-Order Form

I added a pre-order form with a name field and an order-details field. I chose these fields because the bakery needs to know who is making the request and what products they want. JavaScript checks that the required information has been entered and displays the request on the webpage.

## 12. Contact Form

I included a separate contact form with name, email and message fields. This gives customers another way to ask questions or make special requests. Required-field validation and feedback messages help users understand whether they have completed the form correctly.

## 13. Form Feedback

I chose to display clear confirmation and error messages after form interactions. This helps customers understand what has happened after submitting information and reduces uncertainty when using the website.

## 14. Responsive Design – Tablet Breakpoint

I introduced a media query at 768px to adjust the hero heading, content padding and information box spacing. This helps maintain a comfortable layout on tablet-sized screens.

## 15. Responsive Design – Mobile Breakpoint

I introduced a breakpoint at 600px to adjust the navigation text, heading sizes, content spacing and information boxes. I also changed the daily availability board from two columns to one column. This makes the information easier to read on mobile phones, which are important to the client's commuting customers.

## 16. Responsive Design – Small Mobile Breakpoint

I added a further breakpoint at 400px to reduce heading sizes and content padding on smaller phones. This prevents the layout from feeling cramped on narrow screens.

## 17. Flexible Information Boxes

I used Flexbox and wrapping for the location, opening hours and contact information boxes. This allows the boxes to sit alongside one another when space permits and stack vertically on smaller screens. Customers can therefore access important business information more easily.

## 18. Table Responsiveness

I placed the weekly menu table inside a container with horizontal overflow enabled. This allows customers using smaller screens to access the full table without forcing the entire webpage to become wider than the device screen.

## 19. Accessibility and Keyboard Focus

I added visible focus styles to interactive elements such as buttons, FAQ controls and form fields. This helps customers who use a keyboard to navigate the website identify which element they are interacting with.

## 20. Smooth Scrolling

I enabled smooth scrolling for navigation between page sections. This creates a more comfortable browsing experience when customers move between different parts of the website.

## 21. Location and Business Information

I placed the bakery's location, opening hours and contact details in separate information boxes. This makes essential information easy to identify, particularly for customers planning a visit.

## 22. Footer

I chose a simple footer with the bakery name and copyright information. The dark brown background maintains the website's colour consistency and provides a clear ending to the page.

## Conclusion

The decisions made throughout the redesign were guided by the needs of The Corner Loaf and its customers. The main priorities were improving mobile usability, making product availability easier to understand, presenting information clearly and making it easier for customers to place pre-orders or contact the bakery.
