# EE02: Accessibility fixes and further improvement

- **Site:** [The Corner Loaf redesign](https://ansfredd.github.io/the-corner-loaf-redesign/)
- **Final peer audit:** Elvis Fosu Owusu, [updated audit](https://github.com/esfokom-a/the-corner-loaf/blob/main/docs/ee02/audit-of-ansah-frederick.md) and [supporting testing log](https://github.com/esfokom-a/the-corner-loaf/blob/main/docs/ee02/testing-log.md). The audit tested source commit `14e3a7a` on 21 November 2026 against WCAG 2.2 Level AA.
- **Audit version:** [audit-received-from-elvis-fosu.md](audit-received-from-elvis-fosu.md) now contains the updated peer audit with four numbered findings. The earlier transcript is superseded.
- **Related work:** [Audit of Elvis Fosu](audit-of-elvis-fosu.md) is my separate audit of my partner’s site.
- **Updated:** 22 November 2026
- **Status:** The four final peer-audit findings have been addressed, with evidence below. The user reports that NVDA announced all six weekly menu photos on the deployed site. The additional accessible menu-search feature is implemented locally and passed the browser interaction checks below; it has not been pushed or deployed.

## Final peer audit findings

The updated audit has **four numbered findings**. Autocomplete and visible required-field instructions are separate form improvements, not additional numbered findings.

| Finding | WCAG criterion | Audit evidence | Fix recorded |
|---|---|---|---|
| 1. Weekly-menu structure and product boundaries | 1.3.1 Info and Relationships (A) | NVDA did not announce clear list-item boundaries between weekly products; the scheduled-bakes results were read as one run. | Use a named section for each day, lists and list items for products, and a list for scheduled bakes. |
| 2. Form-field boundaries | 1.4.11 Non-text Contrast (AA) | Field borders measured 1.33:1 against white and 1.09:1 against the cream panel; the white field fill measured 1.22:1 against cream. | Darken the field boundaries and improve their visibility against the form panels. |
| 3. Whitespace-only pre-order submission | 3.3.1 Error Identification (A) | A spaces-only submission replaced the previous confirmation with a generic error and left focus on the submit button. | Trim values, identify missing fields, mark them invalid, focus the first invalid field, and retain the existing confirmation. |
| 4. Text resizing | 1.4.4 Resize Text (AA) | At 200% text size, a day-count badge clipped and the brand extended past the viewport. | Allow the brand and badges to wrap or scale at narrow widths. |

## Finding 1: Weekly-menu structure and product boundaries

**Reproduced before fixing:** NVDA announced a product’s price and then the next product’s category without announcing a list-item boundary. The “Today’s Scheduled Bakes” products were announced as one continuous run.

**Cause:** The weekly products did not use list semantics, and the day sections did not provide clear named groups for the products they contained.

**What I changed:** Weekly products and scheduled bakes now use lists and list items. Day sections are named from their visible day headings. Product names are not repeated as unnecessary headings. The Sunday decoration and FAQ plus/minus symbols are hidden from assistive technology. The six weekly product photos have descriptions that match the foods shown.

**Why this fixes the cause:** Lists expose item boundaries and group membership, so a screen-reader user can tell where a product entry ends and the next one begins.

**How I verified it:** The local browser accessibility tree exposed the availability list, named day sections and product list items. A local Pastries-filter check showed the three matching listings, updated the result message and day counts, and kept Sunday marked closed. After deployment, the user navigated graphics in NVDA with **G** and reports that all six weekly photo descriptions were announced. The auditor’s screen-reader observations and reproduction steps are in the [supporting testing log](https://github.com/esfokom-a/the-corner-loaf/blob/main/docs/ee02/testing-log.md#screen-reader-nvda-202631--google-chrome-browse-mode-speech-viewer).

## Finding 2: Form-field boundaries have low contrast

**Reproduced before fixing:** The audit measured a 1.33:1 field border against white, 1.09:1 against the cream panel, and 1.22:1 for the white field fill against cream. WCAG 1.4.11 requires a 3:1 visual cue for component boundaries.

**Cause:** The original field boundary color was too close to the input and panel colors.

**What I changed:** I darkened the field boundary so it is easier to distinguish from the form panel.

**Why this fixes the cause:** A stronger boundary makes the edge of the editable area easier to locate, including for people with low vision.

**How I verified it:** The updated boundary was measured above 3:1 against the adjacent surface. Supplied screenshots show the fields and visible keyboard focus: [pre-order name field](../../screenshots/keyboard-focus-preorder-name.png), [pre-order validation](../../screenshots/whitespace-preorder-live.png), and [contact form validation](../../screenshots/contact-validation-redacted.png).

## Finding 3: Whitespace-only pre-order submission removes the confirmation

**Reproduced before fixing:** After a valid pre-order confirmation, submitting spaces in both fields replaced that confirmation with a generic error. Focus stayed on the submit button, so the error did not identify which field needed correction.

**Cause:** The submit handler did not treat whitespace-only values as empty and did not direct focus to the first field needing correction.

**What I changed:** The handler trims values, identifies missing fields, marks them invalid, displays an error, and focuses the first invalid field. The existing success confirmation is retained for valid entries.

**Why this fixes the cause:** Whitespace is checked as an empty value, the user is told what needs attention, and keyboard focus moves to the field to fix.

**How I verified it:** A local form check covered blank and whitespace-only submission. The user supplied a live screenshot showing the pre-order validation message and a redacted screenshot of contact-form validation. No form data was sent externally. Evidence: [pre-order validation](../../screenshots/whitespace-preorder-live.png) and [contact validation](../../screenshots/contact-validation-redacted.png).

## Finding 4: Text resizing clips menu badges and the header

**Reproduced before fixing:** At 640 CSS px with text set to 200%, the day-count badge extended beyond its card. At 375 CSS px with text set to 200%, the page was wider than the viewport and the brand name was clipped.

**Cause:** The brand and count badges did not wrap, and some small labels used fixed sizing.

**What I changed:** The brand, day counts and labels can wrap or scale. At 640 px, the About image and story now stack into one column; its information boxes also stack at widths up to 768 px. This About-section issue was identified during the user’s follow-up check and is documented as an additional reflow fix.

**Why this fixes the cause:** Flexible wrapping prevents long text and badges from being forced outside their available space. Stacking the About content gives its text room to use the viewport width.

**How I verified it:** The user supplied 640 CSS-pixel / 200% text screenshots showing the About heading, image and story in one column. The user also reports the 375 px / 200% view is fine. Evidence: [About heading and image](../../screenshots/text-size-200-640-about-image.png), [story text](../../screenshots/text-size-200-640-about-text.png), [section continuation](../../screenshots/text-size-200-640-about-after-section.png), and [story continuation](../../screenshots/text-size-200-640-about-after-story.png).

## Additional form improvements from the final audit

These two items were suggestions in the updated audit, not numbered findings.

### Autocomplete hints

**What changed:** The name fields use `autocomplete="name"` and the email field uses `autocomplete="email"` in [`index.html`](../../index.html).

**How I checked it:** Chrome offered a saved profile for the name field and filled the name. The contact email field showed an autofilled value and Chrome’s “Undo autofill” state. No form was submitted. No screenshot was retained because the browser displayed personal information.

### Required-field instructions

**What changed:** Both forms say “All fields are required” before the fields.

**How I checked it:** The instruction is visible before each form’s fields. This is recorded as a clarity improvement, not a confirmed WCAG failure; the fields already had visible labels and native required attributes.

## Other findings and refinements

### Hero contrast fallback

The final audit’s WAVE report showed four contrast errors. Manual review found that when the hero photo was hidden, the tagline measured 3.30:1 against the remaining overlay and page background, below the 4.5:1 normal-text AA minimum. I added a dark fallback background to the hero. This was discussed in the audit’s automated-results section and is recorded here separately from its four numbered findings. The [hero contrast detail](https://github.com/esfokom-a/the-corner-loaf/blob/main/docs/ee02/screenshots/02-wave-hero-contrast.jpg) is in the auditor’s evidence.

### Other review notes

- A visual line break in the hero title remains within one `h1`; it does not create two headings.
- The Sunday closed card remains visible when category filters or search results change.
- The initial email transcription discussed placeholder contrast. The placeholder color is now `#6f6257` and measures 5.90:1 against the white field background. This is retained as a supplementary refinement, not a numbered finding in the updated audit.

## Accessibility evidence

### Images

| Image | Alternative text in source | Evidence |
|---|---|---|
| Hero loaves | “Freshly baked loaves of bread on a wooden surface” | Source review. |
| About photo | “Baker preparing fresh dough in a bakery” | Source review; the user reports that NVDA read the page well on the company laptop. |
| Whole Wheat Loaf | “Assorted seeded and flour-dusted loaves of bread” | The user reports NVDA announced the description while navigating graphics with G. |
| Sourdough Loaf | “Rustic sourdough loaf on a wooden surface” | The user reports NVDA announced the description while navigating graphics with G. |
| Meat Pies | “Golden meat pies on a plate” | The user reports NVDA announced the description while navigating graphics with G. |
| Banana Bread | “Sliced banana bread with bananas” | The user reports NVDA announced the description while navigating graphics with G. |
| Butter Croissants | “Golden butter croissant on a plate” | The user reports NVDA announced the description while navigating graphics with G. |
| Chin Chin | “Chin chin pieces in a white bowl” | The user reports NVDA announced the description while navigating graphics with G. |

### Automated reports

| Report | Result | Evidence and scope |
|---|---|---|
| Peer WAVE audit, desktop Chrome | 0 errors, 4 contrast errors, 23 alerts (very small text), AIM 8.4/10 | This is the pre-fix report in Elvis’s updated audit. Manual contrast review identified the hero fallback issue above. See [peer WAVE summary](https://github.com/esfokom-a/the-corner-loaf/blob/main/docs/ee02/screenshots/13-wave-desktop-summary.jpg). |
| Peer WAVE audit, earlier narrow view | 0 errors, 4 contrast errors, 24 alerts, AIM 8.4/10 | Earlier pre-fix report in the peer audit. See [peer WAVE summary](https://github.com/esfokom-a/the-corner-loaf/blob/main/docs/ee02/screenshots/01-wave-summary.jpg). |
| User’s saved WAVE report after fixes | 0 errors, 0 contrast errors, 16 “Very small text” alerts on category labels, 14 features, 40 structure items, 42 ARIA items, AIM 9.7/10 | The alerts are review prompts, not confirmed WCAG failures. Evidence: [WAVE summary](../../screenshots/wave-live-summary.png), [category overview](../../screenshots/wave-small-text-category-overview.png), [bread label](../../screenshots/wave-small-text-bread-label.png), and [pastry label](../../screenshots/wave-small-text-pastry-label.png). |
| User’s saved Lighthouse reports | Accessibility 100 on desktop and mobile | Existing reports also list manual review checks. Evidence: [desktop](../../screenshots/lighthouse-desktop.png) and [mobile](../../screenshots/lighthouse-mobile.png). |

The auditor’s axe-core 4.10.2 report had 0 violations, 42 passes and 7 items requiring review. The updated peer audit records this as a pre-fix result; see the [peer testing log](https://github.com/esfokom-a/the-corner-loaf/blob/main/docs/ee02/testing-log.md#automated-tools).

### Keyboard, forms and structure

- The user supplied keyboard-focus screenshots for the [brand](../../screenshots/keyboard-focus-brand.png), [navigation link](../../screenshots/keyboard-focus-menu-link.png), [hero actions](../../screenshots/keyboard-focus-hero-cta.png), [FAQ](../../screenshots/keyboard-focus-faq.png), [All Products filter](../../screenshots/keyboard-focus-filter-all.png), [Snacks filter](../../screenshots/keyboard-focus-filter-snacks.png), [pre-order name field](../../screenshots/keyboard-focus-preorder-name.png), and [pre-order submit button](../../screenshots/keyboard-focus-preorder-submit.png). The user reports that links, buttons and form controls work with keyboard focus. The peer’s final audit also records keyboard-operated FAQ, filters and mobile menu as working in the tested paths.
- The [pre-order validation screenshot](../../screenshots/whitespace-preorder-live.png) and [redacted contact validation screenshot](../../screenshots/contact-validation-redacted.png) show the supplied form evidence.
- A local browser accessibility-tree review exposed the page language and banner, navigation, main and footer landmarks. It also exposed named daily menu sections and list items after remediation.
- The user reports testing all six menu-photo descriptions with NVDA on the company laptop. No screenshot or recording was supplied for that check.

The WAVE and Lighthouse results above are existing reports. They were not rerun for this write-up, and reports captured before a change are not evidence for that change.

## Additional accessibility feature: accessible weekly-menu search

### User barrier

The weekly menu contains many product listings across several days. Browsing every card or relying only on category buttons can take extra time for people who have difficulty scanning or navigating a long page.

### Intended users

Visitors using keyboards or assistive technology, people with low vision or cognitive disabilities, and anyone who wants to find a named product quickly.

### Implementation

A labelled product-search field was added before the category filters. It is exposed as a combobox linked to a listbox of matching product names. The script filters product listings as text is entered, supports ArrowUp/ArrowDown to move through suggestions, Enter to select a suggestion, and Escape to close the list. Category filters can be combined with the search, and a polite status message reports result counts or no matches. The suggestion list has a visible selected state and the search field has a visible keyboard-focus outline.

### Benefit to the business

Customers can find a bake more quickly, understand whether it appears in the weekly schedule, and narrow the menu by product name and category before contacting the bakery to order.

### Test evidence

The local browser accessibility tree exposed the “Search products” combobox, its instructions, the associated suggestions list, category filter buttons and the live result-status region. In local Chrome, typing `chin` exposed one “Chin Chin” suggestion, filtered the menu to six listings and updated the status. ArrowDown and ArrowUp moved the suggestion highlight. Enter selected “Chin Chin,” closed the suggestions and updated the status. Escape closed the suggestions while keeping the query. “Snacks” with `croiss` produced no results; “Pastries” with `croiss` returned one Butter Croissants listing. The `zzzz` query produced a no-results message. Sunday stayed marked “Closed.” Clearing the query restored three pastry listings, and selecting “All Products” restored 16 listings. These checks were run on the local version; the new feature is not yet deployed. Existing WAVE and Lighthouse reports predate this feature and do not verify it.

## To do

- The user will check the new menu search with NVDA after the code is pushed and deployed. The six menu-photo descriptions have already been checked by the user.

## Files and components

| File or evidence | Role in this work |
|---|---|
| [`index.html`](../../index.html) | Semantic weekly availability and product lists; named day sections; decorative symbols; photo alternatives; form instructions and autocomplete values; labelled menu-search combobox and suggestions list. |
| [`css/styles.css`](../../css/styles.css) | Visible focus styles; form boundaries; placeholder color; flexible text and badges; About reflow; search and suggestion styling. |
| [`js/script.js`](../../js/script.js) | Form validation, invalid-field feedback and focus; dynamic weekly availability and day counts; product search, keyboard suggestion handling and result feedback. |
| [`screenshots/`](../../screenshots/) | User-supplied WAVE, Lighthouse, keyboard-focus, form-validation and text-size evidence. |

No automated tool score or single manual check guarantees WCAG conformance.
