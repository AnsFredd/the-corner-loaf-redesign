# Accessibility audit: The Corner Loaf site by Elvis Fosu Owusu

- **Site audited:** [The Corner Loaf](https://esfokom-a.github.io/the-corner-loaf/)
- **Source reviewed:** [`the-corner-loaf` at commit `8a80c538`](https://github.com/esfokom-a/the-corner-loaf/tree/8a80c538ebcd044fb17a0be37dc45e672a803d69)
- **Date:** 21 November 2026
- **Audited by:** Frederick Ansah
- **Standard:** [WCAG 2.2 Level AA](https://www.w3.org/TR/WCAG22/)

## How I tested

- **Automated tools:** WAVE in Edge and the saved mobile and desktop Lighthouse results.
- **Keyboard:** Tabbed from the page top through the page controls, tested product and FAQ disclosures, and checked visible focus, including the skip link at the page top.
- **Text size and reflow:** Checked the page at 320 CSS px at default text, at 200% browser page zoom, and with the DevTools body font size set to 200% at 640 px and 375 px.
- **Screen reader and structure:** Reviewed the supplied screen-reader narration and accessibility information for landmarks, headings, product groupings, link names, image alternatives, disclosure states and opening hours.
- **Contrast:** Compared rendered color pairs using the WCAG contrast formula and checked WAVE's contrast panel.
- **Target size:** Measured the rendered CSS-pixel bounds of the visible links, buttons and disclosure summaries in the browser.

The testing log gives the test results, measurement values, evidence screenshots and source references.

## Summary

No WCAG 2.2 Level AA violation was confirmed in the checks recorded here. The WAVE heading alerts were on product prices, and the peer source confirms that those prices are paragraphs rather than headings. The measured text and focus colors meet the relevant contrast thresholds in the combinations checked. The 27 measured interactive targets were each at least 24 × 24 CSS px. Keyboard focus and disclosure operation were observed, and the supplied screen-reader information reported useful structure and product-specific order link names.

## Automated results

| Tool | Result | Evidence |
|---|---|---|
| WAVE, peer site | 0 errors, 0 contrast errors, 6 possible-heading alerts, 8 features, 22 structure items, 40 ARIA items, AIM score 9.9/10. The six alerts are reviewed below. | [WAVE result](screenshots/wave-result.png), [product cards](screenshots/wave-possible-headings-product-cards.png), [opening hours](screenshots/wave-possible-headings-hours.png), [FAQs](screenshots/wave-possible-headings-faq.png) |
| Lighthouse, mobile | Accessibility 100; report lists 10 manual checks. | [Mobile result](screenshots/lighthouse-mobile-result.png) |
| Lighthouse, desktop | Accessibility 100; report lists 10 manual checks. | [Desktop result](screenshots/lighthouse-desktop-result.png) |

Automated scores are screening results; the manual checks below provide the audit evidence.

## Highest-priority findings

No confirmed WCAG violations were found. There are no violations to rank by impact.

## Findings, in priority order

### WAVE possible-heading alerts — reviewed, not a heading failure

WAVE showed six possible-heading alerts at the six menu prices: GH₵35.00, GH₵28.00, GH₵20.00, GH₵18.00, GH₵15.00 and GH₵12.00. The peer source marks product names as `<h3>` headings and each price as a `<p>` paragraph. The alert is a visual heuristic; it did not identify a missing or incorrectly coded heading. The product list and price markup can be checked in the [source](https://github.com/esfokom-a/the-corner-loaf/blob/8a80c538ebcd044fb17a0be37dc45e672a803d69/index.html#L68-L114).

### Other observations

- **Opening-hours wording:** the opening panel says “Open today” until 5 p.m.; the weekly schedule lists Saturday as 7 a.m.–2 p.m. The same wording appears in the [page source](https://github.com/esfokom-a/the-corner-loaf/blob/8a80c538ebcd044fb17a0be37dc45e672a803d69/index.html#L53-L59) and [weekly schedule](https://github.com/esfokom-a/the-corner-loaf/blob/8a80c538ebcd044fb17a0be37dc45e672a803d69/index.html#L160-L164). This is a content-accuracy concern, not a confirmed WCAG failure.
- **Skip-link/title overlap:** at the page top, keyboard focus makes the skip link visible with an orange outline, and the focused link overlaps the page title. The link itself remains visible and readable; this is recorded as a visual observation, not a confirmed WCAG failure. The source places the skip link at the top of the page and reveals it on focus: [markup](https://github.com/esfokom-a/the-corner-loaf/blob/8a80c538ebcd044fb17a0be37dc45e672a803d69/index.html#L19-L25), [focus and skip-link styles](https://github.com/esfokom-a/the-corner-loaf/blob/8a80c538ebcd044fb17a0be37dc45e672a803d69/css/styles.css#L81-L109).

## What works well

- The product cards are list items; product names use headings and prices use paragraphs. The six repeated visible “Order now” links have product-specific accessible names in the [source](https://github.com/esfokom-a/the-corner-loaf/blob/8a80c538ebcd044fb17a0be37dc45e672a803d69/index.html#L68-L114).
- The reviewed accessibility information exposed banner, navigation, main and content-info landmarks, headings, product groupings and disclosure states.
- Keyboard testing reached 19 focus stops. Focus was visible on the sampled controls, and product and FAQ disclosures operated by keyboard.
- In the supplied screen-reader review, the links list distinguished product order links by product, and Saturday hours and closing time were announced.
- At 320 CSS px with default text there was no horizontal overflow. The supplied 200% page-zoom and text-size captures show the tested portions reflowing without visible clipping.
- All five sampled text pairs met WCAG AA contrast for normal text. The focus outline color met the 3:1 non-text contrast threshold against the four sampled page surfaces.
- All 27 measured interactive targets exceeded WCAG 2.2 SC 2.5.8's 24 × 24 CSS-pixel minimum.

## Test scope

This audit covers the single live page from navigation through footer, the automated results listed above, the recorded keyboard and screen-reader observations, the supplied responsive and text-size captures, the measured contrast pairs, and the 27 rendered interactive targets listed in the [testing log](testing-log.md). The evidence files are in `docs/ee02/screenshots/`; the source links above are pinned to the peer repository commit shown at the top of this report.

## Evidence index

### WAVE and Lighthouse

- [WAVE summary](screenshots/wave-result.png)
- [WAVE possible-heading alerts: product cards](screenshots/wave-possible-headings-product-cards.png)
- [WAVE review: opening hours](screenshots/wave-possible-headings-hours.png)
- [WAVE review: FAQs](screenshots/wave-possible-headings-faq.png)
- [Lighthouse mobile](screenshots/lighthouse-mobile-result.png)
- [Lighthouse desktop](screenshots/lighthouse-desktop-result.png)

### Keyboard focus

- [Menu navigation](screenshots/keyboard-focus-menu-today.png)
- [About Marcus](screenshots/keyboard-focus-about-marcus.png)
- [Opening-hours link](screenshots/keyboard-focus-opening-hours.png)
- [Product “Read more” control](screenshots/keyboard-focus-read-more.png)
- [Product “Order now” link](screenshots/keyboard-focus-order-now.png)
- [“Our other bakes” disclosure](screenshots/keyboard-focus-other-bakes.png)
- [Get directions](screenshots/keyboard-focus-get-directions.png)
- [FAQ question](screenshots/keyboard-focus-faq.png)
- [Preorder WhatsApp](screenshots/keyboard-focus-preorder-whatsapp.png)
- [Contact WhatsApp](screenshots/keyboard-focus-contact-whatsapp.png)
- [Email link](screenshots/keyboard-focus-email.png)
- [Back to top](screenshots/keyboard-focus-back-to-top.png)

### 200% browser page zoom

- [Top and opening-hours panel](screenshots/zoom-200-top.png)
- [Menu product card](screenshots/zoom-200-menu-product.png)
- [FAQ section](screenshots/zoom-200-faq.png)

### 200% DevTools body text size

- [640 CSS-pixel viewport](screenshots/text-size-200-640px.png)
- [375 CSS-pixel viewport](screenshots/text-size-200-375px.png)
