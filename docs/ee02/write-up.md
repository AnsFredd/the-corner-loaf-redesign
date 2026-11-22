# EE02 write-up: fixes and further improvement

- **My site:** https://ansfredd.github.io/the-corner-loaf-redesign/
- **Audit received from:** Elvis Fosu Owusu ([copy of the received audit](audit-received-from-elvis-fosu.md))
- **Updated:** 22 November 2026
- **Implementation status:** The earlier audit fixes are published. The additional About-section layout refinement recorded below is in the current working tree and has not yet been published.

## Verification summary

The received audit contained eight findings. Independent source and browser checks confirmed seven; the required-field notice finding was partly valid as a usability concern but was not a confirmed WCAG failure because the controls already had labels and native required attributes. No original finding was classified as a false positive or left unverified. Post-fix checks are listed separately below; some still need a fresh manual retest.

| Finding | Independent verification | WCAG criterion | Action taken | Current status |
|---|---|---|---|---|
| 1. Weekly menu structure and product boundaries | Confirmed | 1.3.1 Info and Relationships (A) | Use lists, list items and day-labelled articles; make redundant menu photos decorative. | Source and browser accessibility tree checked; user reports NVDA review on the company laptop read the page content well. The hero image's empty alternative text is being corrected so it can be announced as a graphic. |
| 2. Keyboard focus on FAQ and hero actions | Confirmed | 2.4.7 Focus Visible (AA); 1.4.11 Non-text Contrast (AA) | Keep FAQ focus inside its card and use contrasting hero focus rings. | Manual keyboard focus check passed on sampled controls. |
| 3. Form boundaries and focus | Confirmed | 1.4.11 Non-text Contrast (AA) | Darken field borders and restore a visible focus outline. | Color pairs pass the measured 3:1 threshold; all form fields still need a keyboard focus walkthrough. |
| 4. Whitespace-only pre-order errors | Confirmed | 3.3.1 Error Identification (A) | Trim values, identify missing fields, mark them invalid, move focus, and preserve prior confirmations. | Dummy pre-order and contact form checks passed locally; no messages were sent. |
| 5. Text resizing | Confirmed | 1.4.4 Resize Text (AA) | Allow labels to scale and wrap; stack About content and information boxes at widths up to 768 px. | Earlier fix is deployed; About change is local and needs a visual retest before publication. |
| 6. Autofill hints | Confirmed | 1.3.5 Identify Input Purpose (AA) | Add `autocomplete="name"` and `autocomplete="email"`. | Attributes confirmed in source; saved-profile suggestions not tested. |
| 7. Required-field instructions | Partly valid | 3.3.2 Labels or Instructions (A) | Add “All fields are required.” to both forms. | Instruction is present; the original omission is not recorded as a confirmed WCAG failure. |
| 8. Placeholder contrast | Confirmed | 1.4.3 Contrast (Minimum) (AA) | Darken placeholder color while retaining visible labels. | Selected placeholder color measures 5.90:1 against the white field. |

Four further implementation concerns were found during the menu and focus review; the additional About layout issue is described under Finding 5. WAVE's small-text alerts are recorded below for manual review and are not counted as confirmed violations.

## Fixes

### Finding 1: Weekly menu structure and product boundaries

- **Reproduced before fixing:** Yes. The received audit describes the NVDA reading order and the accessibility tree: weekly products were generic containers, product names were repeated headings, day articles had no accessible names, the availability items were announced as one status message, and Friday's photo description named a croissant that was not on Friday's menu.
- **Cause:** The day cards used generic `div` elements for product groups and product rows, the product name used an `h4`, the day articles had no label, and the one-time availability content used `role="status"` and `aria-live`.
- **What I changed:** In [`index.html`](../../index.html#L118), the availability items and each day's products are lists with list items. The seven day articles are named by their day headings, and product names are plain text instead of extra headings. The menu photos are decorative because the product names are already stated in each list; this also removes the incorrect Friday croissant description. The decorative Sunday symbol and FAQ plus/minus marks are hidden from assistive technology. In [`js/script.js`](../../js/script.js#L99), generated availability items now use the same list structure. Filtering now refreshes each visible day's bake count and leaves the Sunday closed card visible.
- **Why this fixes the cause, not just the symptom:** Assistive technology receives the relationships from native lists, list items, named day articles and the existing day headings. This gives screen-reader users a clear item boundary and day context instead of relying on visual cards or repeated product headings.
- **How I verified it:** In the local Edge preview, the accessibility tree exposed the availability list, day-labelled article groups, and a list item for each product. I selected Pastries: Wednesday, Friday and Saturday each showed one bake, other product days were filtered out, the status text reported three pastry listings, and Sunday remained marked closed. The user reports that they reviewed the updated page with NVDA on the company laptop and that it read well. They can demonstrate the review during the assessment; no screenshot was available.

### Finding 2: Keyboard focus on the FAQ and hero actions

- **Reproduced before fixing:** Yes. The received audit reports that the FAQ outline was clipped by its `overflow: hidden` card and that the hero focus ring blended into the dark photo.
- **Cause:** The FAQ outline was outside its clipped parent, and the hero used a low-contrast brown focus ring on top of a photo overlay.
- **What I changed:** [`css/styles.css`](../../css/styles.css#L438) moves the FAQ focus outline inside the card. Hero links now use a light outline and a dark outer ring so the focus state is distinct over the image.
- **Why this fixes the cause, not just the symptom:** The FAQ indicator is drawn inside the clipping boundary, and the hero gets two contrasting rings rather than the old brown outline that matched the background.
- **How I verified it:** In the local Edge preview, I used Tab to focus both hero actions and an FAQ question. The hero “Place a Pre-Order” action showed a clear double ring. A focused FAQ question showed a visible outline fully inside its card. On 22 November, the user also checked keyboard focus on the deployed page and supplied captures for the brand link, a navigation link, a hero action, product filters, an FAQ question, the pre-order name field and submit button. The user reports that links, buttons and form controls across the page were reachable by keyboard. I independently confirmed that Tab reaches the brand link and “Explore Our Menu” on the live page and that both show visible focus. Evidence: [brand](../../screenshots/keyboard-focus-brand.png), [navigation link](../../screenshots/keyboard-focus-menu-link.png), [hero action](../../screenshots/keyboard-focus-hero-cta.png), [filters](../../screenshots/keyboard-focus-filter-all.png) and [Snacks filter](../../screenshots/keyboard-focus-filter-snacks.png), [FAQ](../../screenshots/keyboard-focus-faq.png), [pre-order name](../../screenshots/keyboard-focus-preorder-name.png), and [pre-order submit](../../screenshots/keyboard-focus-preorder-submit.png).

### Finding 3: Form control boundaries and focus

- **Reproduced before fixing:** Yes. The received audit measured the old field border at 1.33:1 against white and 1.09:1 against cream, and described focus being removed.
- **Cause:** The fields used the very light `--color-border` as their only boundary and removed the browser outline on focus.
- **What I changed:** [`css/styles.css`](../../css/styles.css#L725) uses the darker muted text color for field borders and restores a visible focus outline.
- **Why this fixes the cause, not just the symptom:** The boundary color itself now separates each field from its background, and keyboard users also get a distinct focus indicator.
- **How I verified it:** I recalculated the selected CSS color pairs: `#6f6257` against white is 5.90:1 and against cream `#f1e7d8` is 4.82:1. Both exceed 3:1 for non-text boundaries. The form focus rule is present in the stylesheet; I have not manually tabbed through every form field after the change.

### Finding 4: Whitespace-only pre-order errors

- **Reproduced before fixing:** Yes. The received audit reproduces a valid request followed by fields containing only spaces; the old handler replaced the prior confirmation with a generic error.
- **Cause:** The submit handler wrote validation errors into the same element that held successful order confirmations and did not identify or mark the empty-after-trimming fields.
- **What I changed:** [`index.html`](../../index.html#L589) adds visible required-field instructions and a separate alert for errors. [`js/script.js`](../../js/script.js#L237) checks trimmed values, marks invalid fields, names missing fields, focuses the first invalid field and keeps errors separate from the confirmation list. The contact form gets matching whitespace checks and field-specific feedback.
- **Why this fixes the cause, not just the symptom:** Error text no longer replaces a previous confirmation, and the user is told which field needs attention and moved to it.
- **How I verified it:** In the local Edge preview, I submitted a dummy order, then submitted both fields with spaces. The form named both missing values, focused the name field, and kept the earlier confirmation visible. I also submitted a contact form with spaces in the name and message and a valid dummy email; it identified those two fields and focused the name field. On 22 November, I repeated the pre-order spaces-only check on the deployed page: the alert named both missing fields and focus returned to “Your Name.” The user supplied the [live pre-order error screenshot](../../screenshots/whitespace-preorder-live.png). The user also checked the live contact form with a valid email and spaces-only name and message; the displayed error named the two missing fields, and focus was on the name field. The [contact validation evidence](../../screenshots/contact-validation-redacted.png) masks the email address from the supplied screenshot. These interactions were browser-side; no messages were sent. `node --check js/script.js` completed without errors.

### Finding 5: Text resizing and reflow

- **Reproduced before fixing:** Yes. The received audit reports brand and day-count overflow and undersized fixed pixel labels at 200% text size in 640 px and 375 px views.
- **Cause:** The brand was forced onto one line, and several labels used fixed or very small sizes that did not follow the page text scale. A further 640 px check showed the About section also kept a two-column layout while text was enlarged to 200%, leaving a narrow text column and pushing the image lower in the section.
- **What I changed:** [`css/styles.css`](../../css/styles.css) allows the brand name to wrap. Day counts can shrink and wrap, and the day count and hero tagline use the scalable `--text-xs` size instead of fixed tiny pixel values. The About image and copy now stack at viewport widths up to 768 px, and the About information boxes stack into one column at the same breakpoint.
- **Why this fixes the cause, not just the symptom:** The layout can use additional lines as text enlarges, and these labels scale with the root font size instead of remaining artificially small. Stacking the About content at tablet widths gives enlarged text more width and prevents the image and narrow copy from competing side by side.
- **How I verified it:** The supplied 640 px screenshot shows `font-size: 200%`; the supplied About screenshots show the long, narrow text column and image lower in the section before this refinement. The user reports that the About section is fine at 375 px. The new 768 px stacking rule is present in the local stylesheet; the updated layout still needs a fresh local visual check and a live check after publication. Evidence: [640 px setting](../../screenshots/text-size-200-640-settings.png), [About text](../../screenshots/text-size-200-640-about-text.png), and [About image](../../screenshots/text-size-200-640-about-image.png).

### WAVE review of the deployed site

- **Page checked:** [The Corner Loaf redesign](https://ansfredd.github.io/the-corner-loaf-redesign/).
- **Observed result:** The supplied WAVE summary showed 0 errors, 0 contrast errors, 16 alerts labelled “Very small text,” 14 features, 40 structure items, 42 ARIA items, and an AIM score of 9.7/10. The summary also showed one Alternative text feature.
- **Interpretation:** WAVE did not report automated errors in this scan. The 16 small-text alerts still need manual review; a zero-error result is not proof of full WCAG conformance. The About image has non-empty alternative text in the source. The prominent hero bread photo currently has empty alternative text and is being given a concise description so screen-reader users can identify it.
- **Evidence:** [WAVE summary screenshot](../../screenshots/wave-live-summary.png).

### Screen-reader image follow-up

The user reports completing an NVDA review on the company laptop and says the page content read well. They can demonstrate this manual review during the assessment; no screenshot was available. Separately, source review found that the prominent hero bread photo used `alt=""`, which excludes it from the accessibility tree and graphic navigation. The About photo already has `alt="Baker preparing fresh dough in a bakery"` in [`index.html`](../../index.html), and the browser accessibility tree exposed that accessible name. The hero photo is being given a concise text alternative so it is announced as a graphic. The specific post-change proof point is that NVDA's graphics navigation reaches the hero photo and announces its description, then reaches the About photo and announces its description.

### Finding 6: Autofill hints

- **Reproduced before fixing:** Yes. The received audit found that name and email fields had no autocomplete tokens.
- **Cause:** The fields did not identify their standard data purpose to browsers.
- **What I changed:** The name fields now use `autocomplete="name"`; the email field uses `autocomplete="email"` in [`index.html`](../../index.html#L594).
- **Why this fixes the cause, not just the symptom:** Browsers and assistive input tools can recognize common personal-data fields and offer the appropriate saved value.
- **How I verified it:** I checked the attributes in the source. I have not tested browser autofill suggestions.

### Finding 7: Required-field instructions

- **Reproduced before fixing:** The audit noted that the forms did not say all fields were required.
- **Cause:** Although visible labels and native `required` attributes were present, the page had no visible instruction explaining that every field was mandatory.
- **What I changed:** Both forms now show “All fields are required.” before their fields in [`index.html`](../../index.html#L589) and [`index.html`](../../index.html#L722).
- **Why this fixes the cause, not just the symptom:** Users can learn the requirement before attempting to submit. This is recorded as a usability improvement; the previous labels and native required attributes mean I am not treating it as a confirmed WCAG failure.
- **How I verified it:** The instruction is visible in the local page and appears in the browser accessibility tree before each form's fields.

### Finding 8: Placeholder contrast

- **Reproduced before fixing:** Yes. The received audit measured the old placeholder at 2.85:1.
- **Cause:** `--color-placeholder` used a pale gray-brown on white fields.
- **What I changed:** [`css/styles.css`](../../css/styles.css#L21) now sets it to `#6f6257`.
- **Why this fixes the cause, not just the symptom:** The replacement color provides substantially more contrast while retaining the existing palette. Placeholder text remains supplementary; the visible labels remain the field names.
- **How I verified it:** `#6f6257` measures 5.90:1 against the white field background, above the 4.5:1 normal-text requirement.

## Issues I found myself

- The received audit noted that the day-count labels became stale when filtering. I updated each day's count from the visible product rows and preserved “Closed” for Sunday.
- The Sunday decorative character and the FAQ plus/minus indicators could be included in assistive output. They are now marked decorative, while their controls retain their question text and expanded state.
- The audit's Friday image alternative incorrectly described a croissant. The menu photos are now decorative because the adjacent text already names the products.
- The hero's background fallback now uses the dark brand color. The focus-ring colors were also adjusted as described in Finding 2.
- At 640 px with text enlarged to 200%, the About section remained in two columns and made the copy unusually narrow. The layout now stacks below 768 px; its visual retest is pending.

## Findings I did not fix, or disagree with

- A visual line break in the hero title does not create two headings; it remains one `h1`, so I did not change it.
- I added the all-fields-required instruction for clarity, but I do not classify its absence as a confirmed WCAG violation because the fields already had visible labels and native `required` attributes.

## Further improvement

- **Who it helps:** Visitors who experience vestibular discomfort or distraction from animated scrolling.
- **The barrier they faced:** The page enabled smooth scrolling for everyone, including people who have asked their device to reduce motion.
- **What I built:** [`css/styles.css`](../../css/styles.css#L1254) disables smooth scrolling when `prefers-reduced-motion: reduce` is set.
- **Why it is worth doing for the business:** It respects a browser accessibility preference without changing the page for other visitors, making navigation more comfortable for customers who are sensitive to motion.
- **How I tested it:** I confirmed the preference-specific CSS rule is present and that the page's only smooth-scroll behavior is overridden by that rule. I have not toggled the operating-system/browser reduced-motion preference to verify the rendered behavior.

## Retesting before submission

The earlier audit fixes are published, but the new About layout refinement is still local. Next, review the 640 px / 200% About layout in the local preview, publish the CSS change, and recheck that layout on the live site. After the hero image text alternative is updated, demonstrate NVDA graphics navigation for the hero and About photos during the assessment; then run WAVE again and compare the small-text alerts. The 375 px About layout is reported as fine by the user; reduced-motion behavior still needs a manual preference toggle and same-page link check.
