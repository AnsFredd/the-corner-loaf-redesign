# Decision Log – The Corner Loaf

This decision log records the design and development choices made during the redesign of The Corner Loaf website. Each decision was made to improve the experience for the bakery's customers and support the client's business needs.

## 1. Colour Palette

I selected a warm brown, orange and cream colour palette to reflect the traditional, handmade identity of The Corner Loaf. Rather than using general colour names, I defined specific hexadecimal colour values using CSS variables to maintain consistency throughout the website.

The primary colour is a warm brown (`#8b4b27`), which is used for important elements such as buttons and other visual features. The secondary colour (`#bd7745`) provides another warm shade, while the accent colour (`#e8b77e`) adds lighter highlights. Dark Brown (`#382317`) provides contrast for darker elements and text.

I also defined background and surface colours to keep the website light, welcoming and easy to read.

I stored these values as CSS custom properties inside the `:root` selector so that colours can be reused and changed consistently without editing individual selectors.

## 2. Typography

I selected a clear and readable font for the website because customers need to read product descriptions, prices and important business information easily.

I also created reusable CSS variables for typography, including font sizes and font-family settings. This helps maintain consistency across headings, paragraphs, buttons and other text elements.

## 3. Page Layout

I chose a centred content layout with a maximum width of 1200px. This prevents content from stretching too widely on larger screens while allowing the website to use the available screen space. The decision improves readability for customers using different devices.

## 4. Navigation

I placed the navigation bar at the top of the page and included links to Home, Menu, Pre-Orders, About and Contact. I used colours from the website's brown and cream palette to maintain consistency while making the navigation easy to identify.

I also introduced a hamburger navigation menu for smaller screens. This keeps the navigation area compact on mobile devices and allows customers to open and close the navigation links when needed.

## 5. Hero Section

I placed the bakery name and location directly below the navigation bar. I used the primary colour as the background with contrasting text to make the bakery identity immediately noticeable to visitors. The large heading and letter spacing also help establish a clear visual hierarchy.

## 6. Section Order

I arranged the page so that customers see the bakery introduction and product information before the ordering and contact sections. The FAQ appears before the pre-order form so customers can understand the ordering process before making a request. This reduces confusion and supports the client's goal of making ordering easier.

## 7. Daily Product Availability Board

I added a daily availability board near the beginning of the menu section. This decision addresses the client's problem of customers struggling to identify which products are available on a particular day. JavaScript checks the current day and displays the products scheduled for that day, helping customers find relevant information quickly.

The board displays scheduled products rather than real-time stock levels.

## 8. Weekly Menu Design

I chose a card-based layout to display the bakery's weekly menu. Each product is presented with an image, name, description and price.

The original sketch displayed the weekly menu as a small card-based layout showing only a few example bakery products. During development, I expanded this idea to present the products more clearly and make the menu easier to browse.

I chose product cards because they allow customers to identify individual bakery items visually instead of having to read through a large table of information. The images also help customers understand what the products look like before making a purchase decision.

This design supports the client's requirement of making the bakery's products easier to discover and understand.

## 9. Availability Status Colours

I used different background colours to distinguish availability statuses. These provide familiar visual indicators that help customers understand product availability quickly.

The daily board displays scheduled products rather than real-time stock levels, so the colours communicate the displayed availability information rather than live inventory quantities.

## 10. FAQ Accordion

I chose an accordion layout for frequently asked questions. Customers can select individual questions to reveal their answers. This keeps the page organised while making important information about pre-orders, collection, cancellations and delivery accessible.

## 11. Pre-Order Form

I added a pre-order form with a name field and an order-details field. I chose these fields because the bakery needs to know who is making the request and what products they want. JavaScript checks that the required information has been entered and displays the request on the webpage.

## 12. Contact Form

I included a separate contact form with name, email and message fields. This gives customers another way to ask questions or make special requests. Required-field validation and feedback messages help users understand whether they have completed the form correctly.

## 13. Form Feedback

I chose to display clear confirmation and error messages after form interactions. This helps customers understand what has happened after submitting information and reduces uncertainty when using the website.

## 14. Responsive Design – Tablet Breakpoint

I introduced a media query at 768px to adjust the layout for tablet-sized screens. This helps maintain comfortable spacing and prevents content from appearing too crowded on smaller devices.

## 15. Responsive Design – Mobile Breakpoint

I introduced a mobile breakpoint to adjust the navigation, heading sizes, content spacing and other layout elements for smaller screens.

The hamburger navigation replaces the full navigation links on smaller screens, allowing customers to access the different website sections without overcrowding the header.

The product layout also adjusts to available screen space so that customers can browse the menu more comfortably on mobile phones.

## 16. Responsive Design – Small Mobile Breakpoint

I added a further breakpoint for smaller phones to adjust heading sizes and content spacing. This prevents the layout from feeling cramped on narrow screens.

## 17. Flexible Information Boxes

I used Flexbox and wrapping for the location, opening hours and contact information boxes. This allows the boxes to sit alongside one another when space permits and stack vertically on smaller screens. Customers can therefore access important business information more easily.

## 18. Product Filtering

I added an interactive product filtering feature to the weekly menu section. This allows customers to filter products by category, including Bread, Pastry and Snacks. Customers can also select All to view the complete menu.

JavaScript updates the displayed products when a category is selected. Products that do not match the selected category are hidden, while matching products remain visible. The menu updates without requiring a page refresh.

I also included feedback showing how many matching products are displayed. This makes it easier for customers to browse the bakery's products without having to scan the entire menu.

## 19. Accessibility and Keyboard Focus

I added visible focus styles to interactive elements such as buttons, navigation controls, FAQ controls and form fields. This helps customers who use a keyboard to navigate the website identify which element they are interacting with.

## 20. Smooth Scrolling

I enabled smooth scrolling for navigation between page sections. This creates a more comfortable browsing experience when customers move between different parts of the page.

## 21. Location and Business Information

I placed the bakery's location, opening hours and contact details in separate information boxes. I used different background treatments to distinguish the three boxes. This makes essential business information easier to identify.

## 22. Footer

I chose a simple footer with the bakery name and copyright information. I used colours from the website's palette to maintain visual consistency and provide a clear ending to the page.

## Conclusion

The decisions made throughout the redesign were guided by the needs of The Corner Loaf and its customers. The main priorities were improving mobile usability, presenting products clearly, making navigation easier and helping customers place pre-orders or contact the bakery.

The use of reusable CSS variables, consistent typography and responsive layouts also helps create a recognisable and consistent visual identity for the bakery.

The interactive product filtering and hamburger navigation provide additional improvements by making it easier for customers to browse products and navigate the website, particularly on mobile devices.