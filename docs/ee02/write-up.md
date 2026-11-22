# EE02: Independent audit verification and remediation

- **Site:** [The Corner Loaf redesign](https://ansfredd.github.io/the-corner-loaf-redesign/)
- **Original audit received from:** Elvis Fosu Owusu ([received audit](audit-received-from-elvis-fosu.md))
- **Audit and remediation notes:** [Audit of Elvis Fosu](audit-of-elvis-fosu.md) is a separate audit of the partner's site; this report covers my site.
- **Updated:** 22 November 2026
- **Current implementation status:** The earlier audit fixes, About-section reflow update, and six menu-photo descriptions are deployed. The NVDA result for the six menu photos is pending the user's test. The required additional accessibility feature is still to do.

## Original audit findings: verification counts

The received audit listed eight primary findings. I compared them with the source, browser evidence, and the test evidence recorded below.

| Verification result | Count | Meaning |
|---|---:|---|
| Confirmed | 7 | The issue described in the original audit was present and was addressed. |
| Partly valid | 1 | The missing “all fields are required” instruction was a useful clarity improvement, but existing labels and native required attributes meant I did not confirm a WCAG failure. |
| False positives | 0 | None of the eight primary findings was dismissed as a false positive. |
| Unverified | 0 | Each of the eight primary findings was reviewed; some post-fix checks remain pending and are identified below. |
| Original findings reviewed | 8 | Seven confirmed plus one partly valid. |
| Additional issue independently identified | 1 | About-section reflow at 640 CSS px with text set to 200%; addressed and documented as Finding 5. |

## Required findings table

| Finding | Original Audit | Independent Verification | WCAG Criterion | Action Taken | Final Status |
|---|---|---|---|---|---|
| 1. Weekly menu structure and product boundaries | Weekly products and availability were difficult to understand with a screen reader; product image text did not reliably describe the food. | Confirmed in source and the local accessibility tree. | 1.3.1 Info and Relationships (A); 1.1.1 Non-text Content (A) | Use native lists and named day articles; remove unnecessary product headings; add concise alternatives to the six weekly photos. | Structure and filtering were checked. The live browser accessibility tree exposes all six photo descriptions; NVDA confirmation is pending the user's test. |
| 2. Keyboard focus on FAQ and hero actions | FAQ focus outline was clipped; hero focus indicator lacked sufficient contrast. | Confirmed by source review and keyboard-focus evidence. | 2.4.7 Focus Visible (AA); 1.4.11 Non-text Contrast (AA) | Keep the focus outline visible outside the FAQ card and use contrasting focus indicators. | Supplied screenshots show focus on representative FAQ and hero controls; user reports keyboard focus works across the page controls. |
| 3. Form control boundaries and focus | Form-field boundaries and focus indication were difficult to see. | Confirmed by source review, contrast measurements, and supplied keyboard-focus screenshots. | 1.4.11 Non-text Contrast (AA) | Darken field borders and provide visible focus styling. | Measured field boundaries exceed 3:1; supplied screenshots show focused fields. |
| 4. Whitespace-only form errors | Whitespace-only input could bypass the intended required-field validation. | Confirmed by local form checks and the supplied live validation screenshot. | 3.3.1 Error Identification (A) | Trim entered values, identify missing fields, mark them invalid, move focus to the first invalid field, and preserve the existing success confirmation. | Empty/whitespace submission displays a clear error; the supplied screenshot shows the pre-order error. No message was sent externally. |
| 5. Text resizing and reflow | Text enlargement caused narrow or overflowing content. | Confirmed. The About two-column layout at 640 px / 200% was additionally identified during the user's recheck. | 1.4.4 Resize Text (AA); 1.4.10 Reflow (AA) | Allow text and labels to wrap; stack About content and its information boxes at widths up to 768 px; let day counts wrap. | Supplied live screenshots show the About content stacked at 640 px / 200%; user reports the 375 px view is fine. |
| 6. Autofill hints | Name and email fields lacked autocomplete tokens. | Confirmed in source. | 1.3.5 Identify Input Purpose (AA) | Add `autocomplete="name"` and `autocomplete="email"` to the matching fields. | Attributes are present. Chrome offered and filled saved name/email details in the UI test. |
| 7. Required-field instructions | Forms did not tell users that all fields were required. | Partly valid: the instruction was absent, but visible labels and native `required` attributes were already present. | 3.3.2 Labels or Instructions (A) | Add “All fields are required.” before each form. | Instruction is present. This is recorded as a clarity improvement, not a confirmed WCAG failure. |
| 8. Placeholder contrast | Placeholder text had insufficient contrast against the field background. | Confirmed; original contrast was reported as 2.85:1. | 1.4.3 Contrast (Minimum) (AA) | Change `--color-placeholder` to `#6f6257`. | The new color measures 5.90:1 against the white field background. |

## Accessibility features and evidence

| Feature | What it does and who it helps | Evidence and status |
|---|---|---|
| Product filters | Bread, pastries, snacks, and all products can be selected to narrow the menu. This helps people who need to find an item without scanning every product. | The filters are native buttons with pressed state and an update message. The user supplied focus screenshots for All Products and Snacks: [All Products](../../screenshots/keyboard-focus-filter-all.png) and [Snacks](../../screenshots/keyboard-focus-filter-snacks.png). In a post-deployment browser check, selecting Pastries announced three pastry listings, showed three matching product rows, and kept Sunday marked closed. |
| Mobile navigation menu | The menu button opens and closes the site navigation and exposes its expanded state. This helps mobile users and people who navigate by keyboard or assistive technology. | The button has an accessible name, `aria-expanded`, and `aria-controls`; JavaScript updates the name and state. The user reports keyboard operation works for the controls. The [brand focus](../../screenshots/keyboard-focus-brand.png) and [navigation link focus](../../screenshots/keyboard-focus-menu-link.png) captures document visible focus; they are not a separate capture of every menu state. |
| Keyboard navigation and visible focus | Keyboard users can reach links, buttons, filters, and form controls and see which control is focused. This helps people who cannot use a mouse and users who need a clear visual location cue. | The user reports testing the page controls and says the links, buttons, and fields work with keyboard focus. Supplied examples include [hero actions](../../screenshots/keyboard-focus-hero-cta.png), [filters](../../screenshots/keyboard-focus-filter-all.png), [pre-order name field](../../screenshots/keyboard-focus-preorder-name.png), and [pre-order submit button](../../screenshots/keyboard-focus-preorder-submit.png). These are user-supplied captures; this report does not claim a new independent tab-through. |
| Labelled forms and validation messages | Visible labels identify each field. On an incomplete submission, the page identifies what is missing and moves focus to the first invalid field. This helps screen-reader users, keyboard users, and people who benefit from clear correction instructions. | Both forms use `<label>` elements, required fields, and an announced error message. Evidence includes the [pre-order validation screenshot](../../screenshots/whitespace-preorder-live.png) and [redacted contact validation screenshot](../../screenshots/contact-validation-redacted.png). The user also supplied an incomplete-submission screenshot for each form. |
| Saved-profile autofill | Browser autofill can place stored personal details in matching fields. This helps users avoid repeatedly typing their name and email, including users with motor or cognitive disabilities. | **Computer-use test:** Chrome offered saved profile choices in the name field. Selecting a profile filled the name; the contact email field showed an autofilled value and Chrome’s “Undo autofill” state. No form was submitted. The visible browser state contained personal details, so no screenshot was retained. |
| Contact form | The contact form lets users send their name, email, and message to ask a question. This helps users who prefer to contact the bakery in writing. | The form has visible labels, required fields, name/email autocomplete tokens, and error/status feedback. Evidence: [contact validation](../../screenshots/contact-validation-redacted.png); the source is in [`index.html`](../../index.html#L704) and [`js/script.js`](../../js/script.js#L316). |
| 200% text resizing and responsive reflow | Text and content can enlarge and reflow at narrow widths, helping people with low vision and users who magnify text. | User-supplied live-page screenshots show the About section at 640 CSS px with 200% text: [image and heading](../../screenshots/text-size-200-640-about-image.png), [story text](../../screenshots/text-size-200-640-about-text.png), and [375 px view](../../screenshots/text-size-200-375px.png). The user reports the 375 px view is fine. |
| Image descriptions | Alternative text gives screen-reader users a text description of meaningful images. | The hero and About photo descriptions are in source. Six menu-product photos have the descriptions listed below, and the live browser accessibility tree exposes all six descriptions. The NVDA result for those six photos is **pending user test**; no NVDA result is claimed yet. |
| WAVE report | WAVE provides an automated page review, including contrast alerts. | The saved report shows **0 contrast errors** (and 0 WAVE errors). It also shows 16 “Very small text” alerts on product-category labels; these alerts are documented as review prompts, not confirmed WCAG failures. Evidence: [WAVE summary](../../screenshots/wave-live-summary.png) and [category-label examples](../../screenshots/wave-small-text-category-overview.png). |
| Lighthouse report | Lighthouse provides an automated accessibility score and manual review prompts. | The saved reports show Accessibility **100 on desktop and 100 on mobile**. Evidence: [desktop](../../screenshots/lighthouse-desktop.png) and [mobile](../../screenshots/lighthouse-mobile.png). |

### Image descriptions in the current source

| Image | Alternative text in source | Status |
|---|---|---|
| Hero loaves | “Freshly baked loaves of bread on a wooden surface” | Implemented. |
| About-section photo | “Baker preparing fresh dough in a bakery” | Implemented. The user reports NVDA read the page well on the company laptop. |
| Whole Wheat Loaf | “Assorted seeded and flour-dusted loaves of bread” | Implemented; NVDA result for the six menu photos is pending user test. |
| Sourdough Loaf | “Rustic sourdough loaf on a wooden surface” | Implemented; NVDA result for the six menu photos is pending user test. |
| Meat Pies | “Golden meat pies on a plate” | Implemented; NVDA result for the six menu photos is pending user test. |
| Banana Bread | “Sliced banana bread with bananas” | Implemented; NVDA result for the six menu photos is pending user test. |
| Butter Croissants | “Golden butter croissant on a plate” | Implemented; NVDA result for the six menu photos is pending user test. |
| Chin Chin | “Chin chin pieces in a white bowl” | Implemented; NVDA result for the six menu photos is pending user test. |

## Remediation details

### Finding 1: Weekly menu structure and product boundaries

- **Cause:** Weekly products were generic containers, product names were repeated headings, day articles lacked accessible names, and availability content was grouped as a live status message. One existing photo description did not match the food shown.
- **Changes:** In [`index.html`](../../index.html#L118), availability and each day's products use lists and list items. The seven day articles are named by their day headings, and product names are plain text rather than extra headings. The Sunday decorative symbol and FAQ plus/minus marks are hidden from assistive technology. The six weekly menu photos now have concise alternative text describing the food shown. In [`js/script.js`](../../js/script.js#L99), generated availability items use the same list structure. Filtering refreshes each visible day's bake count and keeps the Sunday closed card visible.
- **Evidence and verification:** The local Edge accessibility tree exposed the availability list, named day article groups, and product list items. In the local filter check, selecting Pastries showed one bake on Wednesday, Friday, and Saturday, filtered out other product days, updated the status text to three pastry listings, and kept Sunday marked closed. After deployment, the live browser accessibility tree exposed all six photo descriptions. The user reports that NVDA on the company laptop read the page well during an earlier review. That review predates these photo alternatives; NVDA graphic navigation for the six photos remains pending.

### Finding 2: Keyboard focus on the FAQ and hero actions

- **Cause:** The FAQ card clipped its focus outline, and the hero focus ring was difficult to distinguish against the dark background.
- **Changes:** [`css/styles.css`](../../css/styles.css) allows the FAQ focus outline to remain visible and adjusts focus colors for contrast.
- **Evidence and verification:** The user supplied keyboard-focus screenshots for the FAQ and hero calls to action, along with screenshots for the brand, menu link, and product filters. The user reports that keyboard focus works for the page's links, buttons, and controls. This report records the supplied examples and user report; it does not claim a fresh agent-run tab-through of every control.

### Finding 3: Form control boundaries and focus

- **Cause:** The original field borders and focus indication did not stand out clearly enough from their backgrounds.
- **Changes:** [`css/styles.css`](../../css/styles.css) darkens the control boundaries and provides visible focus styling.
- **Evidence and verification:** The supplied screenshots show focus on the pre-order name field and submit button. The form-boundary color was measured above the 3:1 non-text contrast threshold. The user reports keyboard focus works across the form controls.

### Finding 4: Whitespace-only form errors

- **Cause:** Validation needed to treat whitespace-only values as empty and tell the user what to correct.
- **Changes:** [`js/script.js`](../../js/script.js) trims submitted values, identifies missing required fields, sets invalid state, focuses the first invalid field, and retains the success confirmation for valid input.
- **Evidence and verification:** A local form check covered blank and whitespace-only submission. The user supplied a live screenshot showing the pre-order validation message, and a redacted contact-form screenshot showing its validation message. These checks did not send a message to WhatsApp or another external service.

### Finding 5: Text resizing and reflow

- **Cause:** Some labels and day counts did not scale or wrap with enlarged text. Separately, the About section remained in two columns at 640 px / 200% text, leaving its story copy unusually narrow and moving the image down the page.
- **Changes:** [`css/styles.css`](../../css/styles.css) lets the brand name, day counts, and labels wrap or scale. About image and copy now stack at widths up to 768 px; its information boxes also stack at that breakpoint.
- **Evidence and verification:** The user supplied live-page screenshots at a 640 CSS-pixel viewport with `font-size: 200%` set on the body. The screenshots show the About heading and image in one column, followed by story text using the available width. The user reports that the 375 px view is fine. Evidence: [About heading and image](../../screenshots/text-size-200-640-about-image.png), [About story text](../../screenshots/text-size-200-640-about-text.png), [section continuation](../../screenshots/text-size-200-640-about-after-section.png), [story continuation](../../screenshots/text-size-200-640-about-after-story.png), and [375 px / 200% view](../../screenshots/text-size-200-375px.png).

### Finding 6: Autofill hints

- **Cause:** Name and email fields did not tell browsers their standard data purpose.
- **Changes:** The name fields use `autocomplete="name"`; the email field uses `autocomplete="email"` in [`index.html`](../../index.html#L594).
- **Evidence and verification:** The attributes were checked in source. Whether the browser offers saved-profile suggestions has not been tested.

### Finding 7: Required-field instructions

- **Cause:** The forms did not state before the fields that all fields were required, even though their labels and native required attributes existed.
- **Changes:** Both forms now show “All fields are required.” before their fields in [`index.html`](../../index.html#L589) and [`index.html`](../../index.html#L722).
- **Evidence and verification:** The instruction is visible in the page and precedes each form's fields in the accessibility tree. It is treated as a clarity improvement, not a confirmed WCAG failure.

### Finding 8: Placeholder contrast

- **Cause:** `--color-placeholder` used a pale gray-brown against white fields.
- **Changes:** [`css/styles.css`](../../css/styles.css#L21) sets the placeholder color to `#6f6257` while keeping visible labels as the field names.
- **Evidence and verification:** The updated placeholder color measures 5.90:1 against the white field background, above the 4.5:1 normal-text threshold.

## Other observations from the received audit

These are supporting observations and refinements from the received audit, not extra independent findings:

- Day counts could become stale after filtering. The script now recalculates counts from the visible product rows and preserves “Closed” for Sunday.
- The Sunday decorative character and FAQ plus/minus indicators could be included in assistive output. They are now decorative to assistive technology; the controls keep their question text and expanded state.
- The Friday photo alternative did not match the item shown. The six weekly menu photos now have alternatives describing the food shown.
- The hero background fallback now uses the dark brand color. The hero bread photo and About photo have descriptive alternatives in [`index.html`](../../index.html).
- A visual line break in the hero title remains within one `h1`; it does not create two headings, so no heading change was needed.
- The supplied WAVE screenshots show “Very small text” markers on uppercase product-category labels such as “BREAD,” “SNACK,” and “PASTRY.” These alerts are recorded as review prompts, not confirmed WCAG failures.

## Accessibility test evidence and scope

- **WAVE:** Existing screenshots of the deployed site show 0 errors, 0 contrast errors, 16 “Very small text” alerts, 14 features, 40 structure items, 42 ARIA items, and an AIM score of 9.7/10. The supplied detail screenshots locate the small-text markers on category labels. Evidence: [WAVE summary](../../screenshots/wave-live-summary.png), [category-label overview](../../screenshots/wave-small-text-category-overview.png), [bread label](../../screenshots/wave-small-text-bread-label.png), and [pastry label](../../screenshots/wave-small-text-pastry-label.png).
- **Lighthouse:** Existing mobile and desktop reports show an Accessibility score of 100. Each report also lists manual checks; the score does not replace keyboard and screen-reader testing. Evidence: [mobile report](../../screenshots/lighthouse-mobile.png) and [desktop report](../../screenshots/lighthouse-desktop.png).
- **Manual checks and user evidence:** The evidence set includes keyboard-focus screenshots, live form-validation screenshots, 640 px / 200% About screenshots, and the user's report of NVDA use on the company laptop. The user reports that keyboard focus works across the links, buttons, and controls. After deployment, the live browser accessibility tree exposed all six menu-photo descriptions; the live Pastries filter announced three listings, showed three matching rows, and kept Sunday closed. A blank pre-order submission triggered the browser's required-field message and focused the name field; no form data was sent.
- **Scope note:** The WAVE and Lighthouse results above are the already saved reports. No new WAVE, Lighthouse, or other automated scan was run for this write-up. Those reports predate the six photo alternatives, so they do not verify the new descriptions.

## Files and components changed

| File or evidence | Change or purpose |
|---|---|
| [`index.html`](../../index.html) | Semantic weekly availability and product lists; named day articles; decorative symbols; weekly, hero, and About photo alternatives; form instructions and autocomplete values. |
| [`css/styles.css`](../../css/styles.css) | Keyboard-focus visibility and contrast; form boundaries; placeholder color; scalable/wrapping text; About reflow at enlarged text. |
| [`js/script.js`](../../js/script.js) | Whitespace-safe form validation, invalid-field feedback and focus, dynamic weekly availability lists, and filtered day counts. |
| [`screenshots/`](../../screenshots/) | Supplied WAVE, Lighthouse, keyboard-focus, form-validation, and text-size evidence. |

## Additional accessibility feature: options to choose from

No option is selected or implemented yet. Choose one first; after that choice, document it under the five requested headings: **user barrier**, **intended users**, **implementation**, **benefit to the business**, and **test evidence**.

### Option 1: Product allergen and dietary details

- **Who it helps:** People with food allergies, intolerances, or dietary restrictions, including people who need clear written information before ordering.
- **Barrier it addresses:** The menu does not currently show verified ingredient or allergen details for each bake.
- **How it could work here:** Add a concise “Ingredients and allergens” section to each product, using clear text and semantic labels. Only publish information confirmed by the bakery.
- **Build and test effort:** Easy to moderate. The markup is straightforward; confirming accurate ingredient data is the main dependency.
- **Simple test:** Use keyboard and a screen reader to locate a product and hear its ingredient/allergen information; check that the same information is visible without relying on color or icons.
- **WCAG connection:** No single criterion requires allergen data. Structuring related product information with headings and lists can support [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html); this does not by itself guarantee conformance.

### Option 2: Text-first menu view

- **Who it helps:** People using screen magnification, people who find image-heavy cards distracting, and visitors who prefer scanning a compact list.
- **Barrier it addresses:** A visual card grid takes more scrolling and screen space than a compact text list.
- **How it could work here:** Add a “Cards / List” button to switch the menu between the current image cards and a compact text list, preserving the current category filter and product information.
- **Build and test effort:** Moderate. The toggle state and layout need to stay in sync with the existing filters.
- **Simple test:** Operate the toggle using only the keyboard, confirm its selected state is announced, then apply a product filter in each view and verify the same products and prices remain available.
- **WCAG connection:** The toggle's name, role, and state must be programmatically available under [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html). This criterion applies to the control; it does not require a list-view feature.

### Option 3: Bakery access and visit-planning information

- **Who it helps:** Visitors with mobility, sensory, or cognitive access needs who need to plan a visit before travelling.
- **Barrier it addresses:** The site gives the address and opening hours, but not practical access details such as step-free entry, seating, parking, or quieter times.
- **How it could work here:** Add a clearly headed “Access and visiting” section with only confirmed details and plain-text contact information for questions.
- **Build and test effort:** Easy once the bakery confirms the facts; moderate if information must first be collected.
- **Simple test:** Navigate to the section by keyboard and screen-reader headings, then confirm each detail is readable, clearly grouped, and matches the bakery's verified information.
- **WCAG connection:** There is no specific WCAG success criterion requiring venue-access details. Using meaningful headings and lists can support [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html).

### Option 4: Copy address and announce success

- **Who it helps:** People who have difficulty selecting text precisely or remembering/carrying the bakery address into a maps app.
- **Barrier it addresses:** Manually selecting and copying the address can require precise pointer movement or several keyboard steps.
- **How it could work here:** Add a clearly labelled “Copy address” button beside the address and announce “Address copied” in a polite status message after activation.
- **Build and test effort:** Easy to moderate. Clipboard permission/fallback behavior and an accessible success message need checking.
- **Simple test:** Activate the button by keyboard, confirm the address can be pasted into a text field, and use a screen reader to confirm the success message is announced without moving focus.
- **WCAG connection:** The success announcement can support [4.1.3 Status Messages](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html) when programmatically exposed and announced without moving focus; the criterion does not require a copy-address button.

## To do

- Choose one additional accessibility feature from the options above, implement it, test it, and complete the five requested documentation headings.
- **Pending user test, not a limitation:** The user will check with NVDA on the live deployment that graphic navigation announces each photo and its description.

## Test scope

- The WAVE and Lighthouse results cited above are the existing saved reports. No new automated scans were run for this write-up.
- The keyboard results are based on the user's supplied screenshots and report. No new keyboard test was run for this write-up.
- The saved-profile autofill check was performed in Chrome without submitting either form. Test fields were cleared afterward; saved profile data was not changed.
