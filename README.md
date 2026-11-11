The Corner Loaf Website Redesign

A responsive website redesign for The Corner Loaf, a local bakery based in East Legon, Accra.

This project was developed for the EE01 – From Client Brief to Web Page module. It focuses on improving mobile usability, product discovery, accessibility and the overall customer experience.

Project Overview

The redesign aims to make it easier for customers to:

Find important bakery information quickly.
View products scheduled for the current day.
Explore the weekly bakery menu.
Submit pre-order requests.
Find contact information and send enquiries.
Learn about the bakery and its services.

The visual design also aims to reflect The Corner Loaf's warm, welcoming and community-focused identity.

Business Problem

Marcus, the owner of The Corner Loaf, identified several problems with the original website:

Customers struggled to determine which products were available.
Important information was difficult to find.
The website appeared cluttered and outdated.
The design did not reflect the bakery's friendly identity.
Fixed-width elements and a missing viewport meta tag affected mobile usability.

Since many customers access the website while commuting or travelling, the redesign prioritises clear information, accessible navigation and responsive layouts.

Project Objectives

The project addresses the following objectives:

Understand the client brief and plan an appropriate page structure.
Diagnose existing website problems and identify their root causes.
Build a responsive website using semantic HTML, CSS and JavaScript.
Improve accessibility and visual consistency.
Evaluate the redesigned website against the identified requirements.
Implement an additional improvement that provides value to customers and the business.
Project Deliverables
Stage	Deliverables
Understand	Original website sketch and structure note
Analyse	Website diagnosis and root-cause analysis
Apply	Responsive rebuild, semantic HTML and consistent styling
Evaluate	Website audit and design evaluation
Create	Dynamic scheduled product availability board and business justification
Key Features
Responsive Layout
Flexible layouts using Flexbox and CSS Grid.
Responsive adjustments using CSS media queries.
Viewport configuration for mobile devices.
Daily Product Availability

A dynamic Today's Scheduled Bakes board displays products according to the current day of the week.

The board uses JavaScript to compare the current day against the bakery's weekly baking schedule.

Note: Product availability is based on the baking schedule and does not represent real-time stock levels. Customers are encouraged to contact the bakery to confirm availability.

Interactive FAQ

An accessible accordion allows customers to expand and collapse frequently asked questions about pre-orders, collections, cancellations and delivery.

Pre-Order Form

Customers can enter their names and order details. JavaScript validates the required fields and displays submitted requests on the webpage.

Contact Form

The contact form validates required fields and provides submission feedback.

Form limitation: Both forms currently provide browser-side functionality only. Submissions are not transmitted to the bakery through a server or email service.

Repository Structure
text
the-corner-loaf-redesign/
│
├── README.md
├── structure-note.md
├── diagnosis.md
├── audit.md
├── improvement.md
├── index.html
│
├── css/
│   └── styles.css
│
├── js/
│   └── script.js
│
└── assets/
    └── sketch.png

Project Documentation
File	Description
README.md	Project overview and repository information
structure-note.md	Explanation of the page structure and content hierarchy
diagnosis.md	Analysis of issues identified in the original website
audit.md	Evaluation of the redesigned website
improvement.md	Explanation and business justification of the additional improvement
index.html	Main webpage
css/styles.css	Website styling and responsive layouts
js/script.js	Product availability, FAQ and form interactions
assets/sketch.png	Original website layout sketch
Original Website Sketch

The original website sketch provides a visual reference for the planned layout and content hierarchy.

It illustrates the positioning of the navigation, hero section, product availability, weekly menu, pre-order section, FAQ and contact information.

The sketch informed the structure and organisation of the redesigned webpage.

Technologies Used
HTML5
CSS3
JavaScript
Flexbox
CSS Grid
CSS Media Queries
Responsive Web Design
Module Information

Module: EE01 – From Client Brief to Web Page

Business: The Corner Loaf

Location: East Legon, Accra, Ghana

Project: Responsive Website Redesign