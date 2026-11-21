# Audit received from Elvis Fosu Owusu

> Transcribed from the accessibility audit Elvis sent by email. Mail-client headers have been omitted. Screenshot attachments from that email are not copied into this file.

Accessibility audit: The Corner Loaf site by Ansah Frederick
Site audited: https://ansfredd.github.io/the-corner-loaf-redesign/ (source commit 14e3a7a, 19 Nov 2026)
Date and time tested: Saturday 21 November 2026, morning
Audited by: Elvis Fosu Owusu
Standard: WCAG 2.2, level AA
How I tested
Automated tools:
WAVE (wave.webaim.org), with the desktop result verified in Google Chrome.
axe-core 4.10.2.
Lighthouse 13.5.0 in Chrome DevTools (Chromium 157), with mobile emulation (Moto G Power, slow 4G) because most of Marcus's customers visit on their phones. Captured 21 Nov 2026, 9:04 AM GMT.
Keyboard: Chromium browser on Windows 11, Tab / Shift+Tab / Enter / Space only. I tested two journeys:
From page load, find this week's bakes and filter them by category.
Place a pre-order: submit it empty, submit it valid, then submit it with spaces only. I also opened all four FAQ questions and went through the contact form.
Zoom, text size and reflow:
320 × 720 viewport.
WCAG text-spacing override at 320px.
Page text enlarged to 150% and 200% at 640px and at 375px (phone width), the way a browser or phone text-size setting does.
Screen reader: NVDA 2026.3.1 with Google Chrome on Windows 11. I captured announcements in Speech Viewer while navigating headings, reading line by line and testing the pre-order form. I also inspected the menu and form structure in Chrome's accessibility tree.
Colour: WCAG contrast formula on the site's actual CSS colour values, plus WAVE's contrast view.
Pages and journeys covered: the whole single-page site (nav, hero, Today's Scheduled Bakes, filters, weekly menu, FAQ, pre-order form, about, contact form, footer).
Summary
The most serious barriers were in the weekly menu's screen-reader output, keyboard focus visibility, and the pre-order form. The page reflowed at 320px at default text size, and the FAQ and filters responded to the keyboard.
Automated results


Tool
Result
Evidence
WAVE, desktop Chrome
0 errors, 4 contrast errors, 23 alerts (all very small text), AIM 8.4/10
Desktop WAVE summary
WAVE, narrower in-app Chromium view
0 errors, 4 contrast errors, 24 alerts (all very small text), AIM 8.4/10
Earlier WAVE summary
axe-core 4.10.2
0 violations, 42 passes, 7 items requiring review
Testing log
Lighthouse 13.5.0, mobile emulation
Accessibility 100/100, 22 passed, 10 manual checks listed, 41 inapplicable
Lighthouse report
WAVE flagged the hero tagline, heading, description and “Place a Pre-Order” label. The four flags are reviewed under smaller issues. The automated scores cover the checks each tool can perform. The findings below also draw on keyboard, NVDA and visual testing.
Highest-priority findings
The weekly menu is harder to scan with a screen reader. NVDA reads the category, product name and price on successive lines without announcing item boundaries. The six weekly headings named "Chin Chin" have identical names from Monday through Saturday.
Keyboard users lose sight of where they are. On the FAQ, focus disappears completely, and on the two main hero buttons the focus ring is brown on dark brown.
The pre-order form, the site's main action, is hard to use for people with low vision or who make a typing mistake. The edges of the input boxes are almost invisible, and a bad submission wipes the confirmation of an earlier order and gives an error that doesn't say what went wrong.
Fixing items 1 and 2 would close the biggest gaps. They mostly need markup and CSS changes, not a redesign.
Findings, in priority order
1. Screen-reader users must infer product boundaries while reading the weekly menu
Where: Our Menu section → weekly menu cards (Monday–Sunday), each .menu-product in index.html lines 193–480.
What happens:
Each product uses a plain container for its category, name and price. The product names are headings under each day's heading. The reading order gives the category before the name and the price after it, with no list-item announcement marking where each product starts.
When reading line by line, the next product's category comes immediately after the previous price. For example, "SNACK" follows the wheat loaf's price and precedes "Chin Chin".
With All Products active, the weekly menu has six separate headings named "Chin Chin", one under each day from Monday through Saturday. The heading name alone omits the day. On the Saturday tested, the separate "Today's Scheduled Bakes" section added a seventh "Chin Chin" heading to the page.
The seven day cards are <article>s with no accessible name.
A photo sits between each day's heading and its products. On Friday, that photo is announced as "Golden butter croissant", although croissants are only baked on Saturday.
How to reproduce:
Start NVDA, open the site in Chrome and leave the menu on All Products. Focus the page and use browse mode.
Press H until NVDA announces "Monday, heading level 3". Press Down Arrow one line at a time to hear the sequence through Tuesday. Listen for "SNACK" immediately after the wheat loaf's price and before "Chin Chin".
Press Insert+F7 and select Headings. With the filter box empty, look at the day headings and the products beneath them. Enter "Chin Chin" in Filter by to count the matching headings in one view. The separate scheduled-bakes section can affect the page-wide count.
Evidence:
Chrome accessibility tree for Monday, in reading order: heading "Monday" → "Start the week fresh" → "2 Bakes" → image "Freshly baked artisan bread" → "Bread" → heading "Whole Wheat Loaf" → "GH₵ 28.00" → "Snack" → heading "Chin Chin" → "GH₵ 20.00".
The weekly products have no list or listitem roles. A separate check of Chrome's accessibility tree confirmed the six weekly "Chin Chin" heading nodes and the seventh in "Today's Scheduled Bakes" on the Saturday tested.
NVDA 2026.3.1, Down Arrow through Monday (Speech Viewer, one line per key press):
heading level 3 Monday Start the week fresh2 Bakes graphic Freshly baked artisan bread BREAD heading level 4 Whole Wheat Loaf GH₵ 28.00 SNACK heading level 4 Chin Chin GH₵ 20.00 heading level 3 Tuesday
NVDA announces the Monday and Tuesday headings and reads each price after its product name. The tagline and count run together as "fresh2 Bakes". Without an item boundary, the listener uses the surrounding lines to work out which product "SNACK" describes.
Pressing H through the menu includes the day headings. The repeated product headings have the same name:
Monday heading level 3 · Whole Wheat Loaf heading level 4 · Chin Chin heading level 4 · Tuesday heading level 3 · Sourdough Loaf heading level 4 · Chin Chin heading level 4 · Wednesday heading level 3 · Whole Wheat Loaf heading level 4 · Meat Pies heading level 4 · Chin Chin heading level 4 · Thursday …
On page load, before I pressed anything, NVDA read the "Today's Scheduled Bakes" live region as one continuous string:
Chin Chin GH₵ 20.00 Scheduled todayButter Croissants GH₵ 18.00 Scheduled todayBanana Bread GH₵ 15.00 Scheduled today
That is almost word for word the customer's "item, item, item, and no idea what was what". The region is role="status", so its whole content is spoken as one run, without the headings and without the words "Today's Scheduled Bakes" to say what it is.
Principle and criterion: Perceivable, 1.3.1 Info and Relationships (Level A). The day headings provide structure. The visual cards also mark where each product begins and ends, a relationship the accessibility tree exposes only through reading order and the product heading.
Who it affects and how:
Screen-reader and braille display users: they may need to read surrounding lines to identify a category or return to the nearest day heading to confirm which listing they reached.
Found by: screen reader (NVDA 2026.3.1 + Chrome), backed up by the Chrome accessibility tree and the source. Neither WAVE nor axe flagged it.
Why it ranks here: Checking what is available on a given day, and at what price, is a central task on this site. Clear item boundaries would make it easier to compare products by day.
Suggested fix:
Make each day's products a <ul>, with one <li> per product.
Put each product's name, category and price in the same list item, in that order.
Name each article with aria-labelledby pointing at its day heading.
Change the product <h4>s to plain text, so that the heading list shows only days.
Either make the day photos decorative (alt=""), or fix Friday's alt text.
Remove role="status" / aria-live from #availability-list. It is filled once on load, not updated, so it should be an ordinary list under its heading.
2. Keyboard users cannot see where they are on the FAQ and the hero buttons
Where:
(a) "A Few Things to Know": all four .faq-trigger buttons.
(b) Hero: "Explore Our Menu" and "Place a Pre-Order" (styles.css lines 431–437).
What happens:
(a) Tabbing onto a collapsed FAQ question shows nothing at all. The button has focus and its 2px outline is set with a 4px offset, but the parent .faq-item { overflow: hidden } clips the whole outline. When a question is open, only a thin line under it shows.
(b) On the hero buttons the outline is drawn, but in brown (#89502e) on a darkened brown photo, so it practically disappears. On "Place a Pre-Order", the white border looks the same whether or not the button has focus.
How to reproduce:
Load the page and press Tab 7 times to reach "Explore Our Menu". Compare it with the same button unfocused.
Keep tabbing past the filter buttons to "How do I collect my order?". The button has focus, but nothing on screen changes.
Evidence:
Screenshots: Collapsed FAQ focus (FAQ 2 focused, nothing visible), Expanded FAQ focus, Explore Our Menu focus, Place a Pre-Order focus.
FAQ: computed outline: 2px solid rgb(137,80,46), outline-offset: 4px, parent overflow: hidden.
Hero: #89502e against the overlay over the photo measures between 1.0:1 (light patch of bread) and 2.9:1 (darkest shadow). It never reaches 3:1.
Principle and criterion: Operable; 2.4.7 Focus Visible (AA) for the FAQ, which shows no indicator at all. Perceivable; 1.4.11 Non-text Contrast (AA) for the hero ring, which is below 3:1 against what is next to it.
Who it affects and how:
People who can't use a mouse: this includes people with tremor, RSI or paralysis, power users, and anyone with a broken trackpad. They press Tab and lose track of where they are. On the FAQ they would have to guess which question Space will open.
People with low vision: they would not notice the brown-on-brown ring even if they knew to look.
Sighted switch and keyboard users: they rely completely on the indicator.
Found by: keyboard (visual check after each Tab), confirmed with computed styles and contrast calculation. Neither scanner flagged it.
Why it ranks here: Without a visible focus indicator, the site can't be used by sighted keyboard users. It ranks below #1 because the FAQ is secondary content, and because the hero buttons are only shortcuts: the same places can be reached from the nav links, which do show focus. It ranks above the form findings because it affects every keyboard user on every visit, not only people who submit a form.
Suggested fix:
Use outline-offset: -2px (or a box-shadow inset) on .faq-trigger:focus-visible, or remove overflow:hidden from .faq-item.
For the hero buttons, use a light ring such as --color-accent #e8b77e, which already has 8.1:1 against dark brown in the nav, or use a two-colour ring.
3. People with low vision can't see where to type in the pre-order and contact forms
Where: all .form-field inputs and textareas, in the pre-order form (cream panel) and the contact form (white card).
What happens:
The only thing marking each input is a 1px #e8ded1 border. On the white contact card that border is barely visible.
In the pre-order panel the white field on the cream background is the only cue, and the box blurs into the panel.
On focus, the outline is removed (outline: none) and replaced by a 1px colour change, which is also thin.
How to reproduce: scroll to "Place Your Pre-Order" and look at the "What would you like to order?" box without clicking it. Then do the same on a phone outdoors or with screen brightness turned down.
Evidence:
Border #e8ded1 on white measures 1.33:1.
White field on cream #f1e7d8 measures 1.22:1.
Field border #e8ded1 on cream measures 1.09:1.
The visual cue used to identify the input boundary needs 3:1 against adjacent colours. Neither the border nor the field fill provides that contrast here.
Screenshot: Pre-order field borders.
Principle and criterion: Perceivable; 1.4.11 Non-text Contrast (AA). The visual edge that tells you something is a text field must have 3:1 contrast against what surrounds it.
Who it affects and how:
People with low vision or cataracts, and older customers: they can't see where the input is, or that there is a second field under the first.
Anyone on a phone in Accra sunlight: the same problem.
People with cognitive disabilities: they may not recognise the box as a place to type.
The pre-order form is the one thing the site asks visitors to do.
Found by: colour measurement from the CSS, confirmed visually. Neither scanner flagged it; axe and WAVE do not test field boundaries.
Why it ranks here: It affects the site's main conversion action and a large group of people, including everyone in bright light. It ranks below #2 because the labels above each field still say what to do, so a determined user can find the field by clicking under the label. A user who can't see focus, by contrast, has no way of finding their place.
Suggested fix:
Give the fields a darker border, such as --color-muted #6f6257, which measures 5.9:1 on white.
Bring back a proper focus outline in place of outline: none.
4. A mistaken pre-order wipes the previous confirmation and gives an error that doesn't say what's wrong
Where: pre-order form, submit handler in js/script.js lines 241–245.
What happens:
An empty submit is handled well: the browser's native "Please fill out this field" message appears and focus moves to the field.
If a field contains only spaces, though, the script writes "Please complete all required fields before submitting." into #preorder-list using textContent. That replaces everything in the list, including the confirmation of an order the user had just placed.
The message is in the normal body text colour, not the error red the site defines. It doesn't name the field, focus stays on the button, and neither field is marked aria-invalid.
How to reproduce:
Place a valid pre-order (name "Test", order "2 loaves") and see the confirmation card.
Type a few spaces in both fields and press Enter on "Send Pre-Order Request".
The confirmation card disappears and only the generic message remains.
Evidence:
Screenshot of the whitespace-only error.
Before: #preorder-list text "Test Auditor / 2 sourdough loaves / Your pre-order request has been added successfully."
After: "Please complete all required fields before submitting."
The message's computed colour is rgb(65,55,47), the body text colour.
NVDA 2026.3.1. After a valid order, NVDA announced the confirmation as one run: "Test 2 loaves Your pre-order request has been added successfully." After the spaces-only submit it said only:
Please complete all required fields before submitting.
It doesn't say which field is wrong, focus stays on the button, and nothing is announced to say the earlier confirmation has gone. A screen reader user only finds out the confirmation is missing by going back to look for it.
Principle and criterion: Understandable; 3.3.1 Error Identification (A). When an input error is detected, the item in error must be identified and described in text. This message identifies neither field. Removing the earlier confirmation also breaks the user's record of what they ordered.
Who it affects and how:
People with motor impairments or tremor: they hit the space bar by accident.
People with cognitive or memory disabilities: they need a clear message about what went wrong.
Screen reader users: they hear the generic message but not which field to fix, and they lose the confirmation they had just been read out.
Found by: keyboard journey (deliberate error testing), confirmed with NVDA and in source. Not flagged by any tool.
Why it ranks here: It only happens in a specific error path, since the common empty case is handled properly, so it affects fewer visits than #1–#3. But when it does happen it destroys information the user needed, on the site's main task, which puts it above the issues that are only inconvenient.
Suggested fix:
Put the error in its own element, styled with .form-feedback.error.
Name the field ("Please enter your name").
Set aria-invalid="true" on that field and move focus to it.
Never overwrite #preorder-list.
5. With larger text, day labels are cut off and the "Scheduled today" badge doesn't grow at all
Where:
Weekly menu day badges (.day-count).
Header brand name (.brand-name).
"Scheduled today" badge (.availability-status).
Hero tagline on phones.
What happens:
With the root font size set to 200%, the "3 Bakes"/"2 Bakes" badge runs past the card edge at 640px wide and is cut off ("2 Bak…").
On a 375px phone, "The Corner Loaf" (nowrap) runs off the screen, causing a sideways scroll, and pushes the menu button to a second row.
The "Scheduled today" badge is fixed at 11px and stays 11px when text is enlarged. The hero tagline is fixed at 10px on phones.
How to reproduce: in a 640px browser viewport, increase the root font size to 200% in DevTools. Repeat at 375px and inspect the brand and menu button.
Evidence:
Measured at 640px + 200% text: badge right edge 379px, card right edge 309px.
At 375px: page scrollWidth 384px > 375px viewport.
Screenshots: Day badge at 200% text size, Phone header at 200% text size.
Cause: white-space: nowrap inside a card with overflow: hidden, plus font-size: 11px / 10px in pixels.
Principle and criterion: Perceivable, 1.4.4 Resize Text (AA). The root-font-size test exposed clipped text at 200%. The separate 320px reflow check used default text size.
Who it affects and how:
People with low vision and older customers who keep large text switched on: they lose the badge that says how many bakes a day has, and the one label that confirms something is baked today stays tiny.
Everyone on the phone header: a small sideways scroll.
Found by: text-size testing at 150% and 200% across three widths, confirmed with element measurements.
Why it ranks here: The information lost is secondary (the products themselves still show and wrap well), and page zoom works. So it is real but lower impact than anything that blocks a task.
Suggested fix:
Allow the badge and brand to wrap (remove nowrap, or use flex-wrap: wrap on .day-heading).
Change the 11px and 10px sizes to rem.
6. Name and email fields don't tell the browser what they are, so autofill can't help
Where: #customer-name, #contact-name, #contact-email.
What happens: none of the fields has an autocomplete attribute, so the browser and password managers can't reliably offer to fill in the user's own name and email, and every character has to be typed.
How to reproduce: inspect any of the three inputs; there is no autocomplete attribute. In Chrome with a saved address, focus the contact name field and no reliable name suggestion appears.
Evidence: The autocomplete attribute is absent on the three name and email inputs. NVDA announced "has auto complete" on a name field. Inspection showed that the field had no declared input-purpose token.
Principle and criterion: Perceivable; 1.3.5 Identify Input Purpose (AA).
Who it affects and how:
People with motor impairments, and people who type with a head pointer, switch or on-screen keyboard: every keystroke costs effort.
People with memory or cognitive disabilities: they may struggle to recall or spell their email.
People with dyslexia: they are more likely to make a typo that stops Marcus from replying.
Found by: DOM inspection. Not flagged by axe, because axe only checks that autocomplete values are valid when present.
Why it ranks here: It is a clear AA failure and trivial to fix. However, the forms are short (two or three fields), so the extra effort is real but limited, and nobody is blocked.
Suggested fix: add autocomplete="name" on both name fields and autocomplete="email" on the email field.
7. Users aren't told in advance that every field is required
Where: pre-order and contact form labels.
What happens: every field has the required attribute. The visible labels give no required-field indication before submission.
How to reproduce: look at either form; the labels give no indication of required fields.
Evidence: labels read "Your Name", "What would you like to order?", "Email Address", "Your Message". All five inputs have required.
Principle and criterion: Understandable; 3.3.2 Labels or Instructions (A).
Who it affects and how:
People with cognitive disabilities and people with anxiety about forms: knowing what is expected before starting lowers the effort.
Screen reader users: NVDA does announce "required" from the attribute, so they are less affected than sighted users.
Found by: visual inspection plus source.
Why it ranks here: The browser's own validation recovers the situation immediately, and all fields are required, so the user can't really choose wrongly. It is low impact, but cheap to fix.
Suggested fix: add a line such as "All fields are required" above each form, or add "(required)" to each label.
8. Placeholder text is too faint to read
Where: all form placeholders ("Enter your name", "Tell us which breads…").
What happens: the placeholder #a3978c on white is hard to read.
How to reproduce: look at any empty form field.
Evidence: 2.85:1 measured against a minimum of 4.5:1.
Principle and criterion: Perceivable; 1.4.3 Contrast (Minimum) (AA).
Who it affects and how: people with low vision miss the example text. Little is lost, because every field also has a visible label saying the same thing.
Found by: colour measurement.
Why it ranks here: This is a genuine AA failure with low real impact, because the labels carry the meaning.
Suggested fix: darken the placeholder to --color-muted #6f6257, which measures 5.9:1.
9. Smaller issues
These issues are minor, but your pair should know about them. I did not rank them separately.
Day badge counts are wrong after filtering.
What happens: choose "Pastries" and Wednesday still says "3 Bakes", Friday "4 Bakes" and Saturday "3 Bakes", although each now shows one item. I verified the mismatch again in desktop Chrome. Filtered menu screenshot
Why it matters: this isn't a WCAG failure, but it contradicts the status message and confuses everyone, especially people who rely on the count rather than scanning.
Principle: Understandable.
The decorative "休" character is exposed to the screen reader. Hide it from assistive technology with aria-hidden="true".
NVDA output: it is merged into one line with the text around it, "Our day to restClosed休", read with the English voice.
Each FAQ question is announced twice. The "+" drawn with CSS ::after is exposed as text, so NVDA reads "heading level 3 button collapsed How far in advance do I need to order?" and then "heading level 3 button collapsed +" for every question. That is four extra stops of noise. Fix it by hiding the icon from assistive tech (use an aria-hidden span, or content: "+" / ""). Principle: Perceivable (1.3.1, minor).
NVDA announces the two lines of the h1 separately in line-by-line reading. The markup contains one h1 with a line break.
The hero has no background colour behind its light text. If the photo fails to load on a slow connection, the overlay alone leaves the tagline at 3.30:1.
WAVE reports contrast against the solid page background and does not account for the photo or gradient at those four locations. The separate image-unavailable check confirmed the tagline contrast issue above. WAVE contrast detail
Principle and criterion: Perceivable; 1.4.3 (AA).
Fix: add background-color: var(--color-dark) to .hero.
What works well
Text contrast met the minimum in these checked combinations:
Body muted text: 4.82:1 on cream, 5.90:1 on white.
Prices: 6.70:1.
White on brown headings and buttons: 6.70:1.
Success message: 6.14:1. Error message: 7.08:1.
Footer: 8.93:1. Nav: 12.89:1.
Reflow at 320px: there is no horizontal scrolling and nothing is clipped (scrollWidth = 320).
Text spacing (1.4.12): the WCAG spacing override at 320px caused no overflow.
The FAQ is built correctly: real <button>s inside headings, with aria-expanded and aria-controls that toggle on Enter and Space.
The filters are built correctly: real buttons in a labelled group, aria-pressed updates, and a polite status message reports the result ("Showing 3 pastry product listings…").
Mobile menu button: it has aria-expanded, aria-controls and a changing label, and Escape closes the menu.
Landmarks and language: nav (named "Main navigation"), banner, main and contentinfo are all present, and lang="en" is set.
Labels: every input has a programmatically linked <label>.
Form results are announced: contact form results are in a status region, and pre-order results are in aria-live="polite".
Empty submits are handled well by native validation, which moves focus to the first empty field.
Prices are spoken clearly: NVDA reads "GH₵" as "G H Ghanaian cedis", so the currency is understandable by ear.
Form fields are announced properly by NVDA, for example "Your Name, edit, required", and the pre-order confirmation is announced automatically.
Focus order: the keyboard order matches the visual order, there are no traps, and the nav, footer and filter links show a clear focus ring.
Target sizes meet 2.5.8: the nav links are 19px tall but 28px apart, so they pass on spacing.
Images: informative images have alt text. The hero photo is decorative (alt=""). Friday's misleading alt text is covered in finding 1.
Navigation: the main landmark gives assistive technology a way to jump to the main content. The page has no visible skip link.
Test scope
The audit covered the single page, with NVDA in browse mode and on the pre-order form. The NVDA contact-form error path and external hand-offs to WhatsApp and email were outside the test scope.
Mobile checks used browser emulation. Text resizing used root font-size overrides and reflow used a 320px viewport. Physical devices, browser zoom, VoiceOver, TalkBack, JAWS, forced colours and reduced motion were outside the test scope.
