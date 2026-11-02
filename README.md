# Isanti Glass Wine Bottle Campaign

A landing page for Isanti Glass, promoting **empty glass wine bottles to wineries
and trade buyers**. It is not a wine shop or a
marketing agency website.

The primary goal is qualified lead generation, not traffic alone. The client
brief defines proposed qualification fields, sales lifecycle, campaign-source
attribution, engagement events and quality metrics. The CRM and analytics
platforms remain undecided; none of this tracking is active in the template.

The campaign story is based on the supplied Isanti Glass article, excluding the
named spokesperson quote and the article's final sentence. The Wineland Online
article supplies the bottle-selection context. Client-facing content and asset
requirements are documented separately in
[CLIENT-CONTENT-BRIEF.md](./CLIENT-CONTENT-BRIEF.md).

Built with Next.js App Router, React, TypeScript and plain CSS.

## Motion and interaction

The hero introduces the headline and calls to action with a short, staggered
entrance. Sections, product cards and campaign artwork gently reveal once as
they enter the viewport. Desktop hover effects lift the product cards and
buttons, with subtle directional movement on CTA arrows.

Motion respects `prefers-reduced-motion`, including changes made while the page
is open. Scroll reveals use a small client component with Intersection Observer
and the Web Animations API; no animation library is required. Content remains
visible without JavaScript or those browser APIs. Keyboard focus immediately
clears an entrance animation so links remain accessible.

## Run locally

Requires Node.js 20.9 or later and npm.

```bash
npm install
NEXT_DIST_DIR=.next-3001 npm run dev -- --hostname 127.0.0.1 --port 3001
```

Open **http://127.0.0.1:3001**, not localhost:3001: another local site may listen
on the IPv6 localhost address. The separate output directory allows this
instance to run alongside another instance using `.next`.

## Page structure and content handover

| Section | Current content |
| --- | --- |
| Hero | Campaign introduction, “Explore our range” and “To order” calls to action, and supplied campaign banner |
| Campaign story | Background on the local bottle portfolio and the Wine Outreach Campaign |
| Bottle range | Four bottles named in the source article, with official packshots, product codes, and range/order links |
| Campaign artwork | Supplied promotional banners displayed at their natural proportions, without repeating the hero banner |
| Bottle selection | Wineland Online article summary, five questions for buyers and a link to the full article |
| Local partnership | Local manufacturing and bottle-selection context from the supplied articles |

The supplied banners are promotional artwork, not isolated product packshots.
The product cards use official packshots from the Isanti wine catalogue. See the
client brief for remaining content and launch requirements.

## Brand assets and destinations

- The logo is the unmodified
  [official Isanti Glass logo](https://webcms.isantiglass.com/wp-content/uploads/2026/07/Isanti-Glass-Logo.png),
  displayed on white to preserve its black, green and gold artwork.
- The campaign uses Isanti's current brand palette: lime green (`#92c145`),
  leaf green (`#3d6b1f`), clean white and soft neutral-green backgrounds.
- Headings use **Akrobat**, the font used on the official website. Regular and
  bold font files are self-hosted through `next/font/local`, with no third-party
  font requests from visitors. Akrobat is by Plamen Motev / Fontfabric and is
  [free for commercial and personal use](https://www.fontfabric.com/fonts/akrobat/).
  The files come from the [same font service used by Isanti](https://fonts.cdnfonts.com/css/akrobat).
  Body text follows the official site's system sans-serif styling.
  Campaign headings and primary calls to action use bold Akrobat with an
  oversized headline hierarchy. A subtle lime hero gradient and an on-page
  bottle-range link give the campaign a more promotional feel without changing
  the main website's header styling or approved artwork.
- Product packshots and codes come from the
  [official wine catalogue](https://isantiglass.com/products/wine-bottles):
  BN579 (Magnum Claret), BN612 (Sparkling), BN2165 (Claret), and BN602 (Burgundy).
  Local copies are resized WebP images; bottle proportions are preserved.
- All range links use that verified wine catalogue, which also includes
  sparkling bottles. Product details on the official site open within the
  catalogue, so no standalone product URLs have been invented.
- “To order” links to the verified [Isanti contact page](https://isantiglass.com/contact).
  The campaign itself does not collect or submit an order.
- Header navigation is limited to the wine catalogue and ordering link.
  Both logos return to the top of the campaign page; a separate footer text link
  opens the official website. Redundant navigation and
  the unverified privacy-page link have been removed. The header uses only the
  logo, with no campaign-name label; the hero leads directly with the headline.
  The taller, sticky white header follows the main website's logo proportions.
  Smaller screens use a native, keyboard-accessible menu for the campaign links.

## Main files

- `app/page.tsx` — campaign sections and article-derived content
- `app/globals.css` — responsive campaign design
- `public/images/` — campaign banners, official logo and optimised bottle packshots
- `public/fonts/` — locally hosted Akrobat regular and bold
- `app/layout.tsx` — template metadata and viewport
- `next.config.ts` — optional `NEXT_DIST_DIR` output directory
- `CLIENT-CONTENT-BRIEF.md` — client content and image requirements for PDF conversion

## Before a public launch

Confirm the copy, banner usage, approved product details and brand identity
before launch. Confirm that the logo and catalogue assets remain the current
approved versions.

Confirm and implement the enquiry destination, validate its submission and
error handling, and add approved privacy and consent requirements. Confirm
product details and substantiate all performance, environmental, manufacturing
and supply claims.

Confirm the order destination, privacy links, metadata, canonical URL and
social-sharing assets. Agree indexing requirements. Paid advertising, email
distribution, CRM integration and consent-based conversion tracking require
separate scoping and are not included.

Before launch, agree measurement integration as well as lead routing: engagement
does not identify an anonymous visitor or establish lead quality. Report accepted,
marketing-qualified and sales-qualified leads using agreed definitions and sales
feedback. The page does not capture enquiries or send analytics.

Run `npm run build` and `npm run lint`, then test mobile layouts, keyboard
navigation, links and the final enquiry route before deployment.
