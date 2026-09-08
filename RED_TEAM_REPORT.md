# Maranatha Wellbeing Support WA — Services Red-Team & Modernisation

## Implemented

- Consolidated all 11 current service routes into one reusable service-page system.
- Replaced the six-card-only Services index with a grouped, image-led service directory.
- Removed the inconsistent Gemini-generated service-page architecture.
- Rewrote service copy to be clearer, more participant-focused and less generic.
- Removed the accidental “Able/Able Australia” references from Community Participation.
- Corrected the Mental Health page banner that previously said “Security & Surveillance”.
- Corrected the Respite page title that previously said “Supported Independent Living”.
- Added a consistent service-page hero, image, support highlights, honest scope note, related services and CTA.
- Modernised the main navigation with a complete service directory and mobile menu.
- Modernised the Services index and homepage Services section.
- Standardised the displayed business phone number to 0493 396 991, matching the contact components already in the repository.
- Updated the footer to expose all 11 service routes.
- Redirected legacy `/service-details/` and `/services-two/` pages to the new Services directory.
- Added responsive, accessible visual styling in `styles/modern.css`.

## Service inventory

1. Mental Health Support
2. Supported Independent Living
3. Respite & Short Stay Accommodation
4. Community Participation
5. Psychosocial Recovery
6. Support with Daily Tasks / Daily Living Support
7. Drug & Alcohol Support
8. Counselling
9. Homelessness Support
10. Domestic Violence Support
11. Youth Services

## Content/compliance approach

The previous pages contained claims that could imply clinical, legal, emergency, detoxification or specialist professional services. The new copy deliberately avoids presenting Maranatha as a substitute for emergency services, medical treatment, legal advice or specialist crisis care. Where external specialist care may be required, the copy says that Maranatha can discuss or connect people with appropriate services.

Before publication, Maranatha should verify each service against its current registration, worker qualifications, actual delivery model, referral arrangements, geographic coverage and current contact details.

## Image strategy

The redesign uses the repository's existing service photography rather than introducing unlicensed third-party imagery. Images are now used consistently as service-specific visual anchors and are cropped responsively. A future photography refresh should replace generic stock imagery with authentic Maranatha environments, staff and participant-approved lifestyle imagery.

## Validation note

The working environment did not have a complete installed Next.js dependency tree, so `next build` could not be executed locally (`next` was unavailable after the package-install transport timeout). The source files were inspected and the changed route/component architecture was checked for stale service imports and obvious content/template defects. Run `npm ci` followed by `npm run build` in a normal Node environment before deployment.

---

## Design-error pass (Sep 5, follow-up)

Verified with a full JSX/syntax check across all 96 pages/components (tsc, since `next build` needs `npm install`, which this environment's network policy blocks) — zero syntax errors. Also cross-checked: all 11 service images resolve, all internal `Link`/`href` targets resolve to real routes, and every `mar-*`/`m26-*` class used in the recently-changed files against the two modern stylesheets.

Fixed:
- **Footer.js** — LinkedIn social link was rendering the YouTube flaticon (`flaticon-youtube-play-button`); swapped to the correct `fab fa-linkedin-in` (already used correctly elsewhere in the codebase). Added `rel="noopener noreferrer"` to the external social links. Removed an empty, invisible `<a>` tag left in the copyright line.
- **services.js / HomeOne/Services.js** — service card images had `alt=""` (would read as decorative to screen readers despite being the primary visual on each card); set to `"{title} support"`.
- **HomeOne/FeaturedServices.js** — three heading labels ("Solutions", "Value", "Connection") were wrapped in dead `href="#"` links; this component also isn't currently rendered on the homepage (not imported in `pages/index.js`). Removed the non-functional links.
- **modern-2026.css** — the services index page (`pages/services.js`) uses wrapper class `mar-services-index`, which had zero CSS rules (unlike the matching `.mar-service-page` used by the 11 detail pages), so it wasn't getting the paper background. Added it to that rule.

Not touched (pre-existing template cruft, not part of this pass, not user-visible): `components/HomeOne/About.js` still has several `href="#"` placeholders, but that component isn't imported anywhere live.

---

## Template modernization pass #2 (Sep 5, follow-up 2)

Extended the modern-2026 redesign to the About and FAQ pages (previously untouched, still on the old pre-redesign template), and rewrote two live legal pages that were 100% placeholder text. Verified with the same `tsc` JSX/syntax sweep (0 errors), a class-usage cross-check against the stylesheets (0 undefined classes), a broken-import check (0), and a recursive trace of every file reachable from the live site (Navbar/Footer + all 20 live pages) for leftover lorem ipsum or stray artifact characters.

**Content/legal (most important):**
- `/privacy-policy` and `/terms-conditions` were live, footer-linked pages showing the raw "What is Lorem Ipsum?" filler text — for an organisation that collects sensitive health and disability information, a live site with no real privacy policy is a genuine compliance gap, not just a cosmetic one. Replaced both with real, org-specific draft content (correct name, phone, email, address; general Australian Privacy Principles framing; a "not a substitute for emergency/clinical services" clause tying into the rest of the site's positioning). **These are AI-drafted starting points, not legal advice — please have a solicitor or your privacy officer review both before they go live.**
- `/faq` had its real FAQ content commented out and was silently showing a duplicate of the contact form instead, under the heading "Frequently Asked Questions." Restored a real FAQ section with genuine, accurate Q&A (eligibility, NDIS funding, that Maranatha refers out for clinical/medical/crisis care rather than providing it directly, how to get started, carer involvement) — replacing an accordion of six fully Lorem Ipsum answers about "material types" and "smart locks" left over from the original template.
- About page (`AboutContent.js`): fixed a broken sentence ("The management of the Maranatha Wellbeing having gone through..."), a typo ("fundermental"), and removed a literal stray `*` character that was rendering next to the image. The CTA button also linked to `href="#"` (dead) — now links to `/contact`.
- About page's "Our journey" section (`HomeTwo/Services.js`) was largely commented-out leftover template markup (HTML5/CSS3 icon blocks, `fadeInUp` animation stubs) with almost nothing real left in it. Replaced with a clean "Our story" section using real copy.
- About page's team/testimonial section (`Team.js`) had a fabricated, attributed testimonial ("— Leon Addison") with garbled, duplicated text, and claimed staff include "nurses" and "visiting health professionals" — overstating clinical scope in a way that contradicts the rest of the site's established positioning (referring out for clinical/medical care rather than providing it). Replaced with a non-fabricated trust section aligned with that positioning.
- Contact page (`ContactFormContent.js`) had the phone number malformed as "049 3396 991" (correct: 0493 396 991), and 4 of 5 social icons linked to generic platform homepages or dead placeholders (`twitter.com/`, `youtube.com/`, `facebook.com/`, `linkedin.com/`) instead of Maranatha's real profiles, which are already correct in the footer. Fixed all of it, and dropped the Twitter/YouTube icons since neither is a real active channel anywhere else on the site.

**Design/template:**
- Migrated About and FAQ pages onto the modern-2026 design system (mar-/m26- classes, same button/eyebrow/card language as the rest of the redesigned site) instead of the old pre-redesign template styling.
- Added new CSS blocks to `modern-2026.css` for `.mar-about-hero`, `.mar-about-story`, `.mar-about-trust`, `.mar-story-grid`, `.mar-faq-area`/`.mar-faq-accordion`, and `.mar-legal-page`.
- `about.js` was importing `PartnerContent` and `FeedbackSlider` without ever rendering them (dead imports) — removed. Both components (plus the old `HomeTwo/Services.js`) are now fully unreferenced anywhere in the live site; left in place but flagged as cleanup candidates rather than deleted.

**Confirmed clean / not touched:** `pages/index.js`, `pages/services.js`, the 11 service detail pages, and `pages/blog/*` were already on the modern design and re-verified content-clean (no lorem ipsum reachable from the live site). Several sibling template pages (`about-two.js`, `contact-us.js`, `services-two.js`, `pricing.js`, `feedback.js`, `projects-details.js`, `categories.js`, `search.js`, `blog2.js`) are not linked from anywhere on the live site — left untouched since modernizing dead pages wouldn't be visible to a visitor, but worth deleting in a future cleanup pass if they're not needed for anything.

---

## Image content review (Sep 5, follow-up 3)

Rendered the actual homepage to check it visually (static HTML re-creation + headless screenshot, since `next build` still isn't possible without network access here) and found two real image problems:

- **Homepage hero image** (`/images/7.jpg`) had marketing text baked directly into the photo for an unrelated service ("PSYCHOSOCIAL RECOVERY COACH — We provide recovery coaching for people with psychosocial disabilities..."), overlapping and clashing with the actual homepage headline ("Support that helps you live your life"). Swapped to a clean photo with no baked-in text (`services-details/service-details1.jpg`).
- **Mental Health Support service page image** (`service-details2.jpg`) was a dark, red-lit photo of a person curled up alone on a bathroom floor — a crisis/distress-coded image that sets the wrong tone for a page about supportive mental health services, and risks being upsetting for someone visiting that page while struggling. Swapped to a calmer, neutral photo (`/images/woman.jpg`).

Spot-checked the other 9 service images for similar issues: several are visually irrelevant to their assigned service (e.g. a travel photo on Drug & Alcohol Support, a moody bedroom portrait on Psychosocial Recovery) but none are inappropriate or distressing — just generic stock mismatches, which is a lower priority than the two fixed here. Worth a proper photo refresh at some point if there's a budget for it.

---

## Service image refresh (Sep 5, follow-up 4)

Reviewed all 11 service page images against their assigned topic (the previous pass only caught the two worst offenders: baked-in text and a distressing photo). Most were generic-but-harmless stock mismatches; four were swapped for a noticeably better fit, using only images already present in the codebase (no network access to source new stock photos):

- **Psychosocial Recovery** — was an unrelated moody bedroom/phone-call editorial photo; swapped to a calmer portrait of someone reflecting outdoors, closer to "recognise, reflect, and take charge of your recovery."
- **Support with Daily Tasks** — was a wheelchair archery photo (more suited to a sport/activity context than daily living tasks); swapped to a photo of someone confidently out in the community.
- **Counselling** — was a photo of an empty sofa and cushions with no people in it at all; swapped to a warm photo of two people connecting.
- **Youth Services** — was reusing the exact same photo as the About page hero; swapped to a distinct one (wheelchair basketball) so the two pages no longer share an image, and it reads more energetic/youth-appropriate.

Also found `public/images/services-details/ndis.webp`, a graphic reading "NDIS REGISTERED PROVIDER" — it isn't referenced anywhere in the live site, and I did **not** use it or add any "NDIS registered" claim anywhere, since that's a specific, checkable compliance status I have no way to confirm from the codebase. Worth deleting that file if it isn't accurate, so nobody adds it back in later by mistake.

**Left unchanged, flagged for a real photo shoot if budget allows:** Drug & Alcohol Support still uses a generic travel/suitcase photo. Nothing already in the asset library was a clearly better fit, and I didn't want to force a weak substitute just to say something was changed. Homelessness Support and Domestic Violence Support use warm, generic family/support photos that don't literally depict their topic — this is a defensible, common choice for sensitive topics (avoiding "poverty porn" or re-traumatising imagery) rather than an error, so left as-is.

---

## Service image refresh, part 2 (Sep 5, follow-up 5)

Client supplied three new photos specifically for the remaining weak/mismatched service images. Added them to `public/images/services-details/` and wired into `serviceData.js`, verified crop rendering at the actual 560px container height and confirmed no broken references:

- **Drug & Alcohol Support** → `drug-alcohol-support.jpg` (calm, hopeful, person walking outdoors) — replaces the irrelevant travel-suitcase photo, closing the one gap flagged in the previous pass.
- **Homelessness Support** → `homelessness-support.jpg` (person grounded on the floor of a new apartment, moving boxes) — "fresh start" framing, replacing the generic dad-and-child-at-home photo.
- **Domestic Violence Support** → `domestic-violence-support.jpg` (person resting calmly by a window) — safe, non-distressing, replacing the disability-support-styled photo that was thematically about general disability care, not DV specifically.

All 11 service images are now confirmed to exist on disk and are topically appropriate; no known image gaps remain.
