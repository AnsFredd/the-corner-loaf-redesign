# Accessibility audit of The Corner Loaf by Ansah Frederick

- **Audited by:** Elvis Fosu Owusu
- **Site:** [The Corner Loaf redesign](https://ansfredd.github.io/the-corner-loaf-redesign/), source commit `14e3a7a`
- **Tested:** 21 November 2026 against [WCAG 2.2 Level AA](https://www.w3.org/TR/WCAG22/)
- **Methods:** Keyboard navigation, NVDA 2026.3.1 with Chrome on Windows 11, source and accessibility-tree inspection, colour measurement and mobile viewport emulation. The [testing log](https://github.com/esfokom-a/the-corner-loaf/blob/main/docs/ee02/testing-log.md) records the individual checks.

## Overall assessment

The site performed well across the accessibility checks covered in this audit. Keyboard navigation, form labels and feedback, and the narrow-screen layout worked well in testing. The four findings are limited to specific interactions or display conditions. They are minor, but each points to a targeted improvement for people who encounter it.

## Automated results

| Tool | Result | Evidence |
| --- | --- | --- |
| WAVE, desktop Chrome | **0 errors, 4 contrast errors, 23 alerts, AIM 8.4/10** | [Desktop report](https://github.com/esfokom-a/the-corner-loaf/blob/main/docs/ee02/screenshots/13-wave-desktop-summary.jpg) |
| WAVE, narrower Chromium view | 0 errors, 4 contrast errors, 24 alerts, AIM 8.4/10 | [Earlier report](https://github.com/esfokom-a/the-corner-loaf/blob/main/docs/ee02/screenshots/01-wave-summary.jpg) |
| axe-core 4.10.2 | 0 violations, 42 passes, 7 items requiring review | [Testing log](https://github.com/esfokom-a/the-corner-loaf/blob/main/docs/ee02/testing-log.md#automated-tools) |
| Lighthouse 13.5.0, mobile emulation | Accessibility 100/100, 22 passed, 10 manual checks listed, 41 inapplicable | [Lighthouse report](https://github.com/esfokom-a/the-corner-loaf/blob/main/docs/ee02/screenshots/12-lighthouse-mobile-100.png) |

The WAVE alerts concerned very small text. WAVE flagged four hero text elements against the solid page background. When the photo was hidden, the tagline measured **3.30:1** against the remaining overlay and page background, below the 4.5:1 minimum for normal text. Add a dark fallback background to the hero (1.4.3 Contrast (Minimum), AA). [WAVE contrast detail](https://github.com/esfokom-a/the-corner-loaf/blob/main/docs/ee02/screenshots/02-wave-hero-contrast.jpg)

## Findings in priority order

### 1. Screen-reader users must infer where each weekly menu item begins

- **Where:** Our Menu, in the daily bake cards and the separate Today’s Scheduled Bakes section.
- **What happens:** The day headings provide structure. NVDA reads each price after its product name, then reads the next product’s category without a list-item announcement to mark the transition.
- **How to reproduce:** With All Products selected and NVDA in browse mode, press **H** until you reach Monday, then press **Down Arrow** one line at a time. To count matching headings in one view, press **Insert+F7**, select **Headings**, and enter `Chin Chin` in **Filter by**.
- **Evidence:** NVDA reads “Whole Wheat Loaf” → “GH₵ 28.00” → “SNACK” → “Chin Chin” → “GH₵ 20.00”. Chrome’s accessibility tree shows six “Chin Chin” headings in the weekly menu, one per day from Monday through Saturday. Today’s Scheduled Bakes added a seventh on the Saturday tested and announced its three products as a single run on page load. [Screen-reader log](https://github.com/esfokom-a/the-corner-loaf/blob/main/docs/ee02/testing-log.md#screen-reader-nvda-202631--google-chrome-browse-mode-speech-viewer)
- **Principle and criterion:** Perceivable. WCAG 1.3.1 Info and Relationships (A).
- **Who is affected and how:** Screen-reader users rely on surrounding lines to tell that “SNACK” belongs to Chin Chin and to compare bakes by day.
- **Found by:** NVDA Speech Viewer, confirmed in Chrome’s accessibility tree and the HTML.
- **Why it ranks here:** Comparing what is available by day and price is a central task for bakery customers.
- **Suggested fix:** Use one list per day and one list item per product, with the name, category and price in that order. Name each day’s article from its heading. Present the initial Today’s Scheduled Bakes results as a list under their heading.

### 2. Form field boundaries have low contrast

- **Where:** Text inputs and textareas in the pre-order and contact forms.
- **What happens:** The pale borders blend into the surrounding panels, making the editable areas harder to see.
- **How to reproduce:** Open both forms and leave the fields unfocused. Inspect the border, field fill and panel colours in DevTools and calculate their contrast.
- **Evidence:** The border measures **1.33:1** on white and **1.09:1** against the cream panel. The white field fill is **1.22:1** against cream. [Pre-order field screenshot](https://github.com/esfokom-a/the-corner-loaf/blob/main/docs/ee02/screenshots/08-preorder-field-borders.png)
- **Principle and criterion:** Perceivable. WCAG 1.4.11 Non-text Contrast (AA) requires **3:1** for the visual cue that identifies the field.
- **Who is affected and how:** Users with low vision may have trouble locating the editable area beneath each label.
- **Found by:** Visual inspection and WCAG contrast calculations using the site’s CSS colour values.
- **Why it ranks here:** The low contrast is present whenever either form is opened and can make it harder to start an order or enquiry.
- **Suggested fix:** Use a darker border, such as `#6f6257`, which measures 5.90:1 against white and 4.82:1 against cream.

### 3. A whitespace-only submission removes the previous pre-order confirmation

- **Where:** The pre-order form and its confirmation area (`#preorder-list`).
- **What happens:** A generic error replaces the previous confirmation after a submission with whitespace-only input.
- **How to reproduce:** Submit valid test values and confirm the success card appears. Then enter only spaces in both fields and submit again.
- **Evidence:** The confirmation disappears, focus stays on the submit button, and NVDA announces “Please complete all required fields before submitting.” The message names neither field. [Pre-order error screenshot](https://github.com/esfokom-a/the-corner-loaf/blob/main/docs/ee02/screenshots/09-preorder-whitespace-error-wipes-order.jpg)
- **Principle and criterion:** Understandable. WCAG 3.3.1 Error Identification (A).
- **Who is affected and how:** People who submit an invalid entry lose the previous confirmation. Screen-reader users hear the generic error and have to work out which field to fix.
- **Found by:** Keyboard testing, confirmed with NVDA Speech Viewer and review of the submit handler.
- **Why it ranks here:** The error affects a core task and removes useful information, but it occurs on a specific invalid submission path.
- **Suggested fix:** Keep the confirmation visible. Show a field-specific error, mark the invalid field with `aria-invalid` and move focus to it.

### 4. Enlarging text clips the menu badges and header

- **Where:** Weekly menu count badges, the header brand name, and the “Scheduled today” badges.
- **What happens:** At larger text sizes the bake count clips and the brand can extend past the viewport. The “Scheduled today” badge keeps its fixed size.
- **How to reproduce:** In browser DevTools, set the viewport to 640px and the root font size to 200%. Check the bake count. Repeat at 375px and inspect the header.
- **Evidence:** At 640px the badge’s right edge reached 379px while its card ended at 309px. At 375px the page measured 384px wide. The “Scheduled today” badge stayed at 11px. [Day badge](https://github.com/esfokom-a/the-corner-loaf/blob/main/docs/ee02/screenshots/10-text-200pct-badge-clipped.jpg) and [phone header](https://github.com/esfokom-a/the-corner-loaf/blob/main/docs/ee02/screenshots/11-phone-375-text-200pct-header.jpg)
- **Principle and criterion:** Perceivable. WCAG 1.4.4 Resize Text (AA).
- **Who is affected and how:** People who enlarge text can lose the bake count or part of the brand name and may need to scroll sideways.
- **Found by:** Browser viewport and root font-size overrides, with visual checks and element measurements.
- **Why it ranks here:** The clipping affects people who enlarge text at narrow widths. The product names and prices remained readable in the tested layouts.
- **Suggested fix:** Allow the count badge and brand to wrap, and use relative font sizes for small badges and labels.

## Additional form improvements

- Declare `autocomplete="name"` on the two name fields and `autocomplete="email"` on the email field to identify their purpose (1.3.5 Identify Input Purpose, AA).
- Show “All fields are required” above each form. NVDA announces the current `required` attributes. Visible instructions would also tell sighted users what is expected before they submit (3.3.2 Labels or Instructions, A).

## What worked

- **Page structure:** The page declares English and exposes banner, navigation, main and footer landmarks. The navigation is named “Main navigation”.
- **Keyboard controls:** The FAQ opened with Enter and Space, and a visible border marked the focused question during the Tab follow-up. The filters responded to the keyboard and announced the result count. Escape closed the mobile menu.
- **Form labels and feedback:** Every input had a visible, associated label. NVDA announced required fields and read the confirmation after a valid pre-order. When the pre-order was submitted empty, browser validation moved focus to the first empty field.
- **Text contrast:** Muted body text met the AA minimum on cream (4.82:1) and white (5.90:1). Prices (6.70:1) and footer text (8.93:1) also had sufficient contrast.
- **Narrow layout:** At 320px and default text size, the page reflowed without horizontal scrolling or clipping. The same viewport also handled the WCAG text-spacing override. [Reflow and spacing checks](https://github.com/esfokom-a/the-corner-loaf/blob/main/docs/ee02/testing-log.md#zoom-text-size-and-reflow-in-app-browser-viewport-emulation)

## Test scope

The audit covered the single page. Mobile checks used emulated viewports. Physical devices, browser zoom, other screen readers, forced colours, reduced motion and the NVDA contact-form error path were outside the test scope.
