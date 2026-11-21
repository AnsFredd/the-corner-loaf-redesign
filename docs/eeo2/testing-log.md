# EE02 testing log — partner site

- Site: https://esfokom-a.github.io/the-corner-loaf/
- Tester: Frederick Ansah
- Date: 21 November 2026; exact times for manual checks were not recorded
- Status: Complete for the checks recorded here; limitations remain as listed

| Area | What I checked and found | Evidence / method |
|---|---|---|
| WAVE automated scan | WAVE reported 0 errors, 0 contrast errors, 6 possible-heading alerts, 8 features, 22 structure items, 40 ARIA items and an AIM score of 9.9/10. Alerts require human review and are not confirmed failures by themselves. The saved captures show examples around product cards, opening hours and the FAQ; not all six were verified against exact elements. | [WAVE summary](screenshots/wave-result.png); [product cards](screenshots/wave-possible-headings-product-cards.png); [opening hours](screenshots/wave-possible-headings-hours.png); [FAQ](screenshots/wave-possible-headings-faq.png). The screenshots show the partner URL. |
| Lighthouse mobile | Accessibility score 100. The report lists 10 manual checks; they were not all completed. | [Mobile Lighthouse result](screenshots/lighthouse-mobile-result.png); partner URL shown. |
| Lighthouse desktop | Accessibility score 100. The report lists 10 manual checks; they were not all completed. | [Desktop Lighthouse result](screenshots/lighthouse-desktop-result.png); partner URL shown. |
| Keyboard focus | Tabbed through 19 focus stops from “Skip to main content” to “Back to top.” Visible focus appeared on sampled controls shown in the evidence captures. The skip link was reached, but its focused state was not saved. | [Menu](screenshots/keyboard-focus-menu-today.png), [About Marcus](screenshots/keyboard-focus-about-marcus.png), [opening hours](screenshots/keyboard-focus-opening-hours.png), [Read more](screenshots/keyboard-focus-read-more.png), [Order now](screenshots/keyboard-focus-order-now.png), [other bakes](screenshots/keyboard-focus-other-bakes.png), [directions](screenshots/keyboard-focus-get-directions.png), [FAQ](screenshots/keyboard-focus-faq.png), [preorder WhatsApp](screenshots/keyboard-focus-preorder-whatsapp.png), [contact WhatsApp](screenshots/keyboard-focus-contact-whatsapp.png), [email](screenshots/keyboard-focus-email.png), [Back to top](screenshots/keyboard-focus-back-to-top.png). |
| Keyboard operation | In-page navigation and the skip link worked. Product and FAQ disclosure controls responded to keyboard input and exposed expanded/collapsed states in the supplied accessibility information. | Manual keyboard check and supplied browser/accessibility observations. |
| Narrow viewport | At 320 CSS pixels with default text, no horizontal overflow was observed. | Manual visual check; no screenshot saved. |
| 200% browser page zoom | The supplied captures show the top/opening-hours area, a menu product card and the FAQ section reflowing. No horizontal scrollbar or clipped content is visible in these captured views. This is browser page zoom rather than text-only resizing; not every section is shown. | [Top/opening hours](screenshots/zoom-200-top.png), [menu product card](screenshots/zoom-200-menu-product.png), [FAQ](screenshots/zoom-200-faq.png). |
| Screen reader and structure | The supplied narration reported landmarks, headings, product lists, image alternatives, product information, links and disclosure states. The auditor confirmed Saturday hours and closing time were announced. The product cards share the visible text “Order now,” while the screen reader’s links list distinguished them by product. | Auditor-provided narration and browser accessibility observations. Exact screen reader, browser version, mode and recording were not documented. |
| Contrast | WAVE reported no contrast errors. No complete manual contrast measurement of all text, controls, focus indicators and states was recorded. | [WAVE summary](screenshots/wave-result.png); manual contrast review incomplete. |
| Content accuracy | The top card says “Open today” until 5 p.m.; the schedule lists Saturday as 7 a.m.–2 p.m. | Observed in the site content. Content-accuracy concern, not a confirmed WCAG finding. |
| Screen-reader external navigation artifact | A “Not found” result appeared after Enter activated an external link from a listing. It was caused by external-link navigation during the test and is excluded as a site defect. | Auditor clarification; do not count as an accessibility finding. |
| Screenshot attribution | Evidence in `docs/eeo2/screenshots/` is for the peer site. Root `screenshots/lighthouse-mobile.png` and `screenshots/lighthouse-desktop.png` are for my redesign and were excluded. | Compared URLs shown in screenshots. |

## Outcome

No WCAG 2.2 Level AA violation was confirmed in the checks recorded. The WAVE possible-heading alerts were not treated as violations without confirmation. There are no confirmed violations to rank. The opening-hours mismatch and the earlier skip-link outline overlap remain observations, not confirmed WCAG findings.

## Coverage limits

- Text-only enlargement, 400% zoom, exact target-size measurements and a complete manual contrast review were not recorded.
- The six WAVE alerts were not all mapped to exact elements and inspected.
- Lighthouse’s 10 manual checks per run were not all completed.
- The exact screen-reader/browser setup and transcript/audio file were not recorded.
- No axe run, forced-colors test, physical-device test or additional browser/assistive-technology combination was recorded.
