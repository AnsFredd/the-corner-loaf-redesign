# Accessibility audit: The Corner Loaf site by Elvis Fosu Owusu

- Site audited: https://esfokom-a.github.io/the-corner-loaf/
- Date and time tested: 21 November 2026; exact times for manual checks were not recorded
- Audited by: Frederick Ansah
- Standard: WCAG 2.2, level AA
- Audit status: Complete for the checks described below; limitations are recorded in this report

## How I tested

- **Automated tools:** WAVE and Lighthouse. WAVE reported 0 errors, 0 contrast errors, 6 possible-heading alerts, 8 features, 22 structure items, 40 ARIA items and an AIM score of 9.9/10. Lighthouse reported Accessibility 100 in the saved mobile and desktop results, with 10 manual checks listed in each. These automated results do not establish conformance. The WAVE possible-heading alerts are prompts for human review, not confirmed failures.
- **Keyboard:** Chrome on Windows. I tabbed through 19 focus stops from “Skip to main content” to “Back to top,” and checked the navigation, product disclosures, FAQ questions, directions, preorder/contact links and footer link. The product and FAQ disclosures responded to keyboard input. The saved focus captures show visible focus on the sampled controls. The skip link was reached but its focused state was not captured.
- **Zoom, text size and reflow:** At a 320 CSS-pixel-wide viewport with default text, I observed no horizontal overflow. At 200% Chrome page zoom, the supplied screenshots cover the top/opening-hours panel, a menu product card and the FAQ section. Content reflows in those views; no horizontal scrollbar or clipped content is visible in the captures. This was browser page zoom, not text-only enlargement.
- **Screen reader:** I reviewed the narration transcript supplied by the auditor and the browser accessibility tree. The transcript reported landmarks, headings, product lists, image alternatives, product details, links and expanded/collapsed states. The auditor confirmed that the screen reader’s links list distinguished the product links by product, although each has the same visible “Order now” text. Saturday’s hours and closing time were announced. The exact screen reader, browser version and reading mode were not recorded.
- **Colour contrast:** WAVE reported no contrast errors. I did not measure every text, control, focus indicator and state colour manually.
- **Pages and journeys covered:** The live single-page site from header through footer: navigation, opening information, staple bakes, additional bakes, visit details, FAQs, preorder, about and contact.

### Evidence attribution

The screenshots linked in this report are saved in `docs/eeo2/screenshots/` and show the peer site, `esfokom-a.github.io/the-corner-loaf/`. The Lighthouse screenshots in the repository-root `screenshots/` folder show my redesign at `ansfredd.github.io/the-corner-loaf-redesign/`; they are not evidence for this audit.

## Summary

No WCAG 2.2 Level AA violation was confirmed in the checks completed. WAVE reported no errors or contrast errors, and Lighthouse returned Accessibility 100 on both saved runs, while still listing manual checks that the score does not cover. Keyboard focus was visible on the sampled controls, the tested disclosures worked by keyboard, and the supplied screen-reader results distinguished the product order links and announced the weekly hours. At the tested narrow viewport and in the supplied 200% page-zoom captures, the content reflowed without visible horizontal scrolling or clipping. The main limitations are that text-only resizing, 400% zoom, a complete manual contrast review and all Lighthouse manual checks were not completed.

## Findings, in priority order

No confirmed WCAG violations were identified in the tested scope, so there are no violations to rank. WAVE’s six “possible heading” alerts were treated as alerts requiring human judgement; an alert count alone does not establish a WCAG failure. The available WAVE captures show examples around product cards, opening hours and the FAQ, but do not document a complete review of every alert’s exact element. No finding is reported without a reproduced barrier and supporting evidence.

## What works well

- **Automated checks:** WAVE reported 0 errors and 0 contrast errors. Lighthouse reported Accessibility 100 on both saved runs. These results are useful screening evidence, not proof of conformance.
- **Structure:** The browser accessibility tree and supplied narration reported banner, navigation, main and content-info landmarks, named sections, headings and product groupings.
- **Product links:** Although each product card displays “Order now,” the auditor confirmed that the screen reader’s links list distinguished the links by product. The accessible link names therefore provided context in that navigation view.
- **Keyboard:** The navigation sequence reached the page controls, the sampled controls had visible focus, and product and FAQ disclosures operated from the keyboard.
- **Zoom and narrow view:** The page showed no horizontal overflow at the tested 320 CSS-pixel viewport. The 200% captures show the header/opening-hours area, product card and FAQ reflowing without visible clipping or horizontal scrolling in those views.
- **Images:** The supplied screen-reader transcript reported product image alternatives. WAVE listed some empty alternatives; empty `alt` is appropriate for decorative images, and the available evidence does not establish that these are missing descriptions for informative images.

## Observations that are not confirmed WCAG findings

- **Opening-hours content mismatch:** The opening panel says “Open today” until 5 p.m., while the published Saturday schedule says 7 a.m.–2 p.m. This may give customers inaccurate opening information. It is a content-accuracy concern; the evidence does not establish a WCAG failure.
- **Skip-link outline overlap:** An earlier keyboard check noted that the visible skip-link outline overlapped the site title at the tested viewport. The link remained visible, and no screenshot of this state was saved. This is recorded as an observation, not a confirmed WCAG failure.
- **WAVE possible-heading alerts:** WAVE showed 6 alerts. The supplied captures show some alert markers near product prices and page content. These alerts need element-by-element review before drawing a conclusion; they are not findings by themselves.

## Not tested, and limits of this audit

- The exact screen reader, browser version, reading mode and screen-reader transcript/audio recording were not recorded in the repository. The narration was supplied by the auditor.
- Text-only enlargement to 200% using browser or operating-system font-size settings was not tested. The saved 200% evidence is browser page zoom.
- 400% page zoom and a dedicated reflow check at the equivalent 320 CSS-pixel width at 400% zoom were not recorded.
- A full manual contrast review of all text, controls, focus indicators and interactive states was not completed. The WAVE result alone cannot establish that every contrast requirement passes.
- Lighthouse listed 10 manual checks on each saved run; these were not all completed and documented.
- The exact target-size measurements for controls were not recorded.
- The six WAVE possible-heading alerts were not each mapped to and verified against the exact element and its semantics.
- A separate axe run, forced-colors check, physical-device test and additional browser/assistive-technology combinations were not recorded.
- This report covers the single live page and the specific checks described above. It is not a claim of full WCAG conformance across all users, technologies or conditions.

## Evidence index

### Automated results

- [WAVE summary](screenshots/wave-result.png)
- [WAVE possible-heading alerts: product cards](screenshots/wave-possible-headings-product-cards.png)
- [WAVE possible-heading alerts: opening hours](screenshots/wave-possible-headings-hours.png)
- [WAVE possible-heading alerts: FAQ](screenshots/wave-possible-headings-faq.png)
- [Lighthouse mobile](screenshots/lighthouse-mobile-result.png)
- [Lighthouse desktop](screenshots/lighthouse-desktop-result.png)

### Keyboard focus

- [Menu navigation](screenshots/keyboard-focus-menu-today.png)
- [About Marcus navigation](screenshots/keyboard-focus-about-marcus.png)
- [Opening-hours link](screenshots/keyboard-focus-opening-hours.png)
- [Product “Read more” control](screenshots/keyboard-focus-read-more.png)
- [Product “Order now” link](screenshots/keyboard-focus-order-now.png)
- [“Our other bakes” disclosure](screenshots/keyboard-focus-other-bakes.png)
- [Get directions link](screenshots/keyboard-focus-get-directions.png)
- [FAQ question](screenshots/keyboard-focus-faq.png)
- [Preorder WhatsApp link](screenshots/keyboard-focus-preorder-whatsapp.png)
- [Contact WhatsApp link](screenshots/keyboard-focus-contact-whatsapp.png)
- [Email link](screenshots/keyboard-focus-email.png)
- [Back to top link](screenshots/keyboard-focus-back-to-top.png)

### 200% browser page zoom

- [Top section and opening-hours panel](screenshots/zoom-200-top.png)
- [Menu product card](screenshots/zoom-200-menu-product.png)
- [FAQ section](screenshots/zoom-200-faq.png)
