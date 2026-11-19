# The Corner Loaf Website Redesign

## Project Overview

This project is a responsive redesign of The Corner Loaf bakery website for the EE01 – From Client Brief to Web Page module.

The goal of the redesign is to improve the experience for customers who visit the website on their phones while commuting or on the move. The redesigned website makes it easier to browse products, navigate between sections, place pre-orders, contact the bakery, and learn more about the business.

The redesign also aims to better reflect The Corner Loaf's warm, welcoming, and community-focused identity.

## Live Website

The redesigned website can be accessed using the link below:

[https://ansfredd.github.io/the-corner-loaf-redesign/](https://ansfredd.github.io/the-corner-loaf-redesign/)

This allows my pair to access and view the finished website.

## Business Problem

Marcus, the owner of The Corner Loaf, identified several problems with the existing website:

- Customers struggle to quickly determine what products are available.
- Important information is difficult to find.
- The website feels cluttered and outdated.
- The site does not reflect the warm and friendly atmosphere of the bakery.

As identified in diagnosis.md, the original website has mobile usability problems caused by fixed-width elements of 820px and a missing viewport meta tag.

Many customers view the website while walking or commuting, so information must be easy to find and understand within a few seconds.

## Project Objectives

This project addresses the following objectives:

- Understand the client brief and plan an appropriate page structure.
- Diagnose issues in the existing website and identify their root causes.
- Build a responsive and semantic website using HTML and CSS.
- Evaluate the rebuilt website against accessibility and visual consistency principles.
- Propose and implement additional improvements that add value for customers and the business.

## Deliverables

### Understand

- Original website sketch
- Structure note explaining the layout and content hierarchy

### Analyse

- Diagnosis of the existing website
- Root-cause analysis of identified issues

### Apply

- Responsive mobile-first rebuild
- Semantic HTML structure
- Consistent colour palette
- Consistent type scale
- Consistent spacing system

### Evaluate

- Audit of the finished website

### Create

- Interactive product filtering feature
- Responsive hamburger navigation for smaller screens
- Business justification explaining the improvements' value to customers and the business

## Form Functionality

The redesigned pre-order and contact forms include input validation to help users provide the required information. Users receive feedback when required fields are missing and when forms are submitted successfully.

The pre-order form displays submitted order details on the webpage, while the contact form provides submission feedback. These improvements address the form usability problems identified during the diagnosis stage.

**Note:** Form submissions currently provide browser-side feedback and are not transmitted to the bakery through a server or email service.

## Repository Structure

```text
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