# Testing log: The Corner Loaf by Elvis Fosu Owusu

- **Site:** https://esfokom-a.github.io/the-corner-loaf/
- **Source reviewed:** [peer repository at commit `8a80c538`](https://github.com/esfokom-a/the-corner-loaf/tree/8a80c538ebcd044fb17a0be37dc45e672a803d69)
- **Tester:** Frederick Ansah
- **Date:** Saturday, 21 November 2026
- **Standard:** WCAG 2.2 Level AA

## Saturday 21 November 2026

### Source review and colour measurement

The peer source confirms that product names are `<h3>` headings and menu prices are paragraph text inside product list items. That supports the WAVE review: its six possible-heading markers sit on prices, not on missing headings. See the [menu markup](https://github.com/esfokom-a/the-corner-loaf/blob/8a80c538ebcd044fb17a0be37dc45e672a803d69/index.html#L68-L114).

All six order links have product-specific accessible names, although the visible text is “Order now”; see [the order-link markup](https://github.com/esfokom-a/the-corner-loaf/blob/8a80c538ebcd044fb17a0be37dc45e672a803d69/index.html#L77-L111) and [additional bakes](https://github.com/esfokom-a/the-corner-loaf/blob/8a80c538ebcd044fb17a0be37dc45e672a803d69/index.html#L115-L147). The [skip-link markup](https://github.com/esfokom-a/the-corner-loaf/blob/8a80c538ebcd044fb17a0be37dc45e672a803d69/index.html#L19-L25) and [focus styles](https://github.com/esfokom-a/the-corner-loaf/blob/8a80c538ebcd044fb17a0be37dc45e672a803d69/css/styles.css#L81-L109) were checked against the focused browser rendering.

Contrast ratios were calculated from rendered colors and the peer's [CSS color tokens and focus outline](https://github.com/esfokom-a/the-corner-loaf/blob/8a80c538ebcd044fb17a0be37dc45e672a803d69/css/styles.css#L2-L14). WCAG AA requires 4.5:1 for normal text ([SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)); non-text visual information such as component boundaries and states needs 3:1 against adjacent colors ([SC 1.4.11](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)).

| Rendered foreground | Background | Ratio | Result |
|---|---|---:|---|
| Body muted text `#6E584B` | Page cream `#FFF8F0` | 6.31:1 | AA pass |
| Product price `#B54708` | Card `#FFFCF7` | 5.30:1 | AA pass |
| Product title `#38271E` | Card `#FFFCF7` | 13.89:1 | AA pass |
| WhatsApp text `#FFFFFF` | Button green `#0D7038` | 6.19:1 | AA pass |
| Directions link `#B54708` | Sage panel `#EDF0E5` | 4.70:1 | AA pass |
| Focus outline `#B54708` | Page cream `#FFF8F0` | 5.15:1 | 3:1 pass |
| Focus outline `#B54708` | Card `#FFFCF7` | 5.30:1 | 3:1 pass |
| Focus outline `#B54708` | Warm panel `#FBE8D4` | 4.55:1 | 3:1 pass |
| Focus outline `#B54708` | Sage panel `#EDF0E5` | 4.70:1 | 3:1 pass |

### Automated tools

| Tool | Result | Evidence |
|---|---|---|
| WAVE | 0 errors, 0 contrast errors, 6 possible-heading alerts, 8 features, 22 structure items, 40 ARIA items, AIM score 9.9/10. Each possible-heading alert pointed to one of the six product prices. | [WAVE summary](screenshots/wave-result.png); [product cards](screenshots/wave-possible-headings-product-cards.png); [hours](screenshots/wave-possible-headings-hours.png); [FAQ](screenshots/wave-possible-headings-faq.png) |
| Lighthouse mobile | Accessibility 100; 10 manual checks listed in the report. | [Mobile result](screenshots/lighthouse-mobile-result.png) |
| Lighthouse desktop | Accessibility 100; 10 manual checks listed in the report. | [Desktop result](screenshots/lighthouse-desktop-result.png) |

### Keyboard and focus

The tab sequence had 19 focus stops from “Skip to main content” through “Back to top.” Focus was visible on sampled controls. Product and FAQ disclosure controls responded to keyboard input. The focused skip link was checked at the top of the page: its orange outline was visible, but it overlapped the “The Corner Loaf” heading. The link text remained visible. Source markup and styles are linked above; the saved [keyboard focus captures](screenshots/keyboard-focus-menu-today.png) through [Back to top](screenshots/keyboard-focus-back-to-top.png) show the sampled controls.

### Zoom, text size and reflow

At a 320 CSS-pixel viewport with default text, no horizontal overflow was observed.

At 200% browser page zoom, the top/opening-hours panel, a menu card and FAQs reflowed without visible clipping or horizontal scrolling in the supplied views: [top](screenshots/zoom-200-top.png), [menu](screenshots/zoom-200-menu-product.png), [FAQ](screenshots/zoom-200-faq.png).

At 200% body font size set in DevTools, the supplied screenshots show the 640 CSS-pixel view at the top of the page and the 375 CSS-pixel view around preorder and about. No clipping or horizontal overflow is visible in the captured areas; the preorder button wraps onto two lines at 375 px and stays within its panel. This method is recorded as a DevTools body-font override, not browser page zoom: [640 px](screenshots/text-size-200-640px.png), [375 px](screenshots/text-size-200-375px.png).

### Structure and screen-reader review

The supplied narration/accessibility information reported banner, navigation, main and content-info landmarks, headings, product groupings, image alternatives, links and disclosure states. In the screen-reader links list, the order links were distinguished by product even though the visual text is shared. Saturday hours and closing time were announced. The source shows the [landmarks and navigation](https://github.com/esfokom-a/the-corner-loaf/blob/8a80c538ebcd044fb17a0be37dc45e672a803d69/index.html#L19-L50), [product groupings](https://github.com/esfokom-a/the-corner-loaf/blob/8a80c538ebcd044fb17a0be37dc45e672a803d69/index.html#L68-L114), and [weekly hours](https://github.com/esfokom-a/the-corner-loaf/blob/8a80c538ebcd044fb17a0be37dc45e672a803d69/index.html#L150-L164).

### Target size — WCAG 2.2 SC 2.5.8, Level AA

The following rendered targets were measured in the peer page frame at 100% zoom using `getBoundingClientRect()`. Each target is listed in CSS pixels. The minimum is 24 × 24 CSS px; every listed target exceeds it. [W3C target-size guidance](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum).

| Target | Width × height (CSS px) |
|---|---:|
| Skip to main content | 177 × 56 |
| Menu today | 101.8 × 45 |
| Location & hours | 139.1 × 45 |
| Preorder FAQs | 122.8 × 45 |
| Preorder (navigation) | 82.3 × 45 |
| About Marcus | 117.3 × 45 |
| Contact (navigation) | 76.1 × 45 |
| Opening hours | 129.8 × 44 |
| Read more — Sourdough Loaf | 86.3 × 44 |
| Order now — Sourdough Loaf | 299.7 × 44 |
| Read more — Whole Wheat Loaf | 86.3 × 44 |
| Order now — Whole Wheat Loaf | 299.7 × 44 |
| Read more — Chin Chin | 86.3 × 44 |
| Order now — Chin Chin | 299.7 × 44 |
| Our other bakes disclosure | 1022.3 × 44 |
| Order now — Butter Croissants | 1022.3 × 44 |
| Order now — Banana Bread | 1022.3 × 44 |
| Order now — Meat Pies | 1022.3 × 44 |
| Get directions | 133.6 × 44 |
| FAQ — How far in advance do I need to order? | 1022.3 × 44 |
| FAQ — How do I collect my order? | 1022.3 × 44 |
| FAQ — Can I cancel or change my order? | 1022.3 × 44 |
| FAQ — Do you deliver? | 1022.3 × 44 |
| Preorder on WhatsApp | 234.2 × 44 |
| Chat on WhatsApp | 203.1 × 44 |
| Email | 182.5 × 44 |
| Back to top | 80.9 × 44 |

### Content observation

The top panel says “Open today” until 5 p.m., while the schedule lists Saturday 7 a.m.–2 p.m. The [opening-panel markup](https://github.com/esfokom-a/the-corner-loaf/blob/8a80c538ebcd044fb17a0be37dc45e672a803d69/index.html#L53-L59) and [hours list](https://github.com/esfokom-a/the-corner-loaf/blob/8a80c538ebcd044fb17a0be37dc45e672a803d69/index.html#L160-L164) confirm the displayed wording. This is a content-accuracy observation, not a confirmed WCAG failure.
