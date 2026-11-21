# EE02 write-up: fixes and further improvement

- **My site:** https://ansfredd.github.io/the-corner-loaf-redesign/
- **Audit received from:** Elvis Fosu Owusu ([copy of the received audit](audit-received-from-elvis-fosu.md))
- **Local source reviewed:** this repository at the current working tree; changes have not been published yet.

## Fixes

### Finding 1: Weekly menu structure and product boundaries

- **Reproduced before fixing:** Yes. The received audit describes the NVDA reading order and the accessibility tree: weekly products were generic containers, product names were repeated headings, day articles had no accessible names, the availability items were announced as one status message, and Friday's photo description named a croissant that was not on Friday's menu.
- **Cause:** The day cards used generic `div` elements for product groups and product rows, the product name used an `h4`, the day articles had no label, and the one-time availability content used `role="status"` and `aria-live`.
- **What I changed:** In [`index.html`](../../index.html#L118), the availability items and each day's products are lists with list items. The seven day articles are named by their day headings, and product names are plain text instead of extra headings. The menu photos are decorative because the product names are already stated in each list; this also removes the incorrect Friday croissant description. The decorative Sunday symbol and FAQ plus/minus marks are hidden from assistive technology. In [`js/script.js`](../../js/script.js#L99), generated availability items now use the same list structure. Filtering now refreshes each visible day's bake count and leaves the Sunday closed card visible.
- **Why this fixes the cause, not just the symptom:** Assistive technology receives the relationships from native lists, list items, named day articles and the existing day headings. This gives screen-reader users a clear item boundary and day context instead of relying on visual cards or repeated product headings.
- **How I verified it:** In the local Edge preview, the accessibility tree exposed the availability list, day-labelled article groups, and a list item for each product. I selected Pastries: Wednesday, Friday and Saturday each showed one bake, other product days were filtered out, the status text reported three pastry listings, and Sunday remained marked closed. I have not repeated the NVDA review after these changes.

### Finding 2: Keyboard focus on the FAQ and hero actions

- **Reproduced before fixing:** Yes. The received audit reports that the FAQ outline was clipped by its `overflow: hidden` card and that the hero focus ring blended into the dark photo.
- **Cause:** The FAQ outline was outside its clipped parent, and the hero used a low-contrast brown focus ring on top of a photo overlay.
- **What I changed:** [`css/styles.css`](../../css/styles.css#L438) moves the FAQ focus outline inside the card. Hero links now use a light outline and a dark outer ring so the focus state is distinct over the image.
- **Why this fixes the cause, not just the symptom:** The FAQ indicator is drawn inside the clipping boundary, and the hero gets two contrasting rings rather than the old brown outline that matched the background.
- **How I verified it:** In the local Edge preview, I used Tab to focus both hero actions and an FAQ question. The hero “Place a Pre-Order” action showed a clear double ring. A focused FAQ question showed a visible outline fully inside its card.

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
- **How I verified it:** In the local Edge preview, I submitted a dummy order, then submitted both fields with spaces. The form named both missing values, focused the name field, and kept the earlier confirmation visible. I also submitted a contact form with spaces in the name and message and a valid dummy email; it identified those two fields and focused the name field. These were local interactions; no messages were sent. `node --check js/script.js` completed without errors.

### Finding 5: Text resizing and reflow

- **Reproduced before fixing:** Yes. The received audit reports brand and day-count overflow and undersized fixed pixel labels at 200% text size in 640 px and 375 px views.
- **Cause:** The brand was forced onto one line, and several labels used fixed or very small sizes that did not follow the page text scale.
- **What I changed:** [`css/styles.css`](../../css/styles.css#L99) allows the brand name to wrap. Day counts can shrink and wrap, and the day count and hero tagline use the scalable `--text-xs` size instead of fixed tiny pixel values.
- **Why this fixes the cause, not just the symptom:** The layout can use additional lines as text enlarges, and these labels scale with the root font size instead of remaining artificially small.
- **How I verified it:** I reviewed the relevant responsive and font-size rules in the local source. I have not captured a post-change 200% text-size view at 640 px or 375 px; those two manual checks remain to be completed.

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

The changes are currently local and have not been published. Before submitting, check 200% text size at 640 px and 375 px, toggle the reduced-motion preference and follow a same-page link, then publish and run WAVE/Lighthouse on the updated live page.
