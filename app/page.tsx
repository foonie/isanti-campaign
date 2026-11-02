import Image from "next/image";
import PageMotion from "./page-motion";

const RANGE_URL = "https://isantiglass.com/products/wine-bottles";
const WEBSITE_URL = "https://isantiglass.com/";
const ORDER_URL = "https://isantiglass.com/contact";
const LINKEDIN_URL =
  "https://www.linkedin.com/pulse/building-stronger-partnerships-south-africas-wine-industry-zkw8f/";
const WINELAND_URL =
  "https://www.wineland.co.za/markets-business-trade/before-the-first-sip-what-your-wine-bottle-is-already-saying";

const bottles = [
  {
    capacity: "1500ml",
    name: "Magnum Claret Glass Bottle",
    style: "Bordeaux-style · Magnum",
    image: "/images/magnum-claret-bottle.webp",
    code: "BN579",
  },
  {
    capacity: "750ml",
    name: "Sparkling Wine Bottle",
    style: "Made for sparkling wine",
    image: "/images/sparkling-wine-bottle.webp",
    code: "BN612",
  },
  {
    capacity: "750ml",
    name: "Glass Claret Bottle",
    style: "A timeless Bordeaux shape",
    image: "/images/claret-bottle.webp",
    code: "BN2165",
  },
  {
    capacity: "750ml",
    name: "Burgundy Glass Bottle",
    style: "Classic Burgundy shape",
    image: "/images/burgundy-bottle.webp",
    code: "BN602",
  },
];

const questions = [
  {
    title: "Who are we trying to reach?",
    text: "Choose a bottle that appeals to the intended consumer and reinforces the wine's place in the market.",
  },
  {
    title: "What are we communicating?",
    text: "Let the design reflect the brand's identity, price point and personality.",
  },
  {
    title: "Will it work in our cellar?",
    text: "Consider dimensions, closure compatibility, labelling, filling-line performance and handling.",
  },
  {
    title: "Have we considered the full cost?",
    text: "Look beyond purchase price to material use, transport, operational efficiency and production adjustments.",
  },
  {
    title: "Can our supplier deliver consistently?",
    text: "Quality, manufacturing capability and reliable supply matter, particularly as production volumes grow.",
  },
];

const benefits = [
  {
    number: "01",
    title: "Made closer to home",
    text: "As South Africa's only locally owned glass container manufacturer, Isanti Glass contributes to local manufacturing and works with wineries on their packaging needs.",
  },
  {
    number: "02",
    title: "Partnership that fits",
    text: "Early collaboration helps align a bottle with the wine, brand, filling process and the practical needs of the business.",
  },
  {
    number: "03",
    title: "Thoughtful by design",
    text: "The right bottle is the one that serves the wine and its intended consumer. Weight, performance, transport and material use all deserve consideration.",
  },
];

const campaignImages = [
  {
    src: "/images/claret-bottle-campaign.jpg",
    alt: "Isanti Glass campaign artwork for the 750ml Glass Claret Bottle, set among vineyard rows at sunset.",
    label: "750ml Glass Claret Bottle",
    className: "campaign-art-portrait",
  },
  {
    src: "/images/burgundy-bottle-campaign.jpg",
    alt: "Isanti Glass campaign artwork for the 750ml Burgundy Glass Bottle, featuring a wine being opened.",
    label: "750ml Burgundy Glass Bottle",
    className: "campaign-art-portrait",
  },
  {
    src: "/images/magnum-campaign-wide.png",
    alt: "Isanti Glass vineyard campaign artwork for the 1500ml Magnum Claret Glass Bottle.",
    label: "1500ml Magnum Claret Glass Bottle · Made to be remembered",
    className: "campaign-art-landscape",
  },
];

function OrderButtons({
  light = false,
  orderLabel = "Talk to Us",
}: {
  light?: boolean;
  orderLabel?: string;
}) {
  return (
    <div className="cta-row">
      <a className="button button-primary" href={RANGE_URL}>
        Explore Our Range <span aria-hidden="true">→</span>
      </a>
      <a
        className={`button ${light ? "button-outline-light" : "button-outline"}`}
        href={ORDER_URL}
      >
        {orderLabel} <span aria-hidden="true">↗</span>
      </a>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <PageMotion />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Isanti Glass — Back to top">
          <Image
            src="/images/isanti-glass-logo.png"
            alt="Isanti Glass — Excellence in Glass"
            width={523}
            height={689}
            sizes="64px"
            loading="eager"
          />
        </a>
        <nav aria-label="Campaign navigation">
          <a className="header-range" href={ORDER_URL}>
            Talk to Us
          </a>
          <a className="button button-primary header-order" href={RANGE_URL}>
            Explore Our Range <span aria-hidden="true">→</span>
          </a>
        </nav>
        <details className="mobile-menu">
          <summary aria-label="Campaign navigation menu">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </summary>
          <nav className="mobile-menu-links" aria-label="Mobile campaign navigation">
            <a className="button button-primary header-order" href={RANGE_URL}>
              Explore Our Range <span aria-hidden="true">→</span>
            </a>
            <a className="header-range" href={ORDER_URL}>
              Talk to Us
            </a>
          </nav>
        </details>
      </header>

      <main id="main-content" tabIndex={-1}>
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="page-wrap hero-copy">
            <p className="eyebrow hero-eyebrow">Good wine. Good glass.</p>
            <h1 id="hero-title">
              Great wine deserves
              <br />
              <em>exceptional partnerships.</em>
            </h1>
            <div className="hero-bottom">
              <p>
                We&apos;re strengthening relationships with South Africa&apos;s
                winemakers and championing locally manufactured glass. Together,
                we&apos;re creating opportunities for collaboration, quality and shared
                growth, one bottle at a time.
              </p>
              <OrderButtons />
            </div>
            <div className="hero-range-preview">
              <p>Magnum <span aria-hidden="true">/</span> Claret <span aria-hidden="true">/</span> Burgundy <span aria-hidden="true">/</span> Sparkling</p>
              <a className="text-link" href="#bottles">
                Find your bottle <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
          <figure className="page-wrap hero-art">
            <Image
              src="/images/first-impressions-campaign.png"
              alt="Isanti Glass campaign artwork: a Magnum Claret bottle among vineyard rows at sunset, with the message Good wine. Good glass. Excellent first impressions."
              width={1440}
              height={768}
              sizes="(max-width: 1180px) 100vw, 1180px"
              loading="eager"
              fetchPriority="high"
            />
          </figure>
        </section>

        <section
          className="campaign-section section-pad page-wrap"
          id="campaign"
          aria-labelledby="campaign-title"
        >
          <div className="campaign-heading" data-reveal>
            <p className="eyebrow">The campaign</p>
            <h2 id="campaign-title">
              A legacy of glass.
              <br />
              <em>A future built together.</em>
            </h2>
            <p className="origin-note">
              <strong>South Africa&apos;s only</strong>
              locally owned glass container manufacturer
            </p>
          </div>
          <div className="campaign-copy" data-reveal data-reveal-order="1">
            <p className="lead">
              For centuries, the Bordeaux bottle has set a global standard for wine
              packaging: elegant, timeless and synonymous with quality.
            </p>
            <p>
              Isanti Glass honours that legacy with a locally manufactured portfolio
              designed for the evolving needs of wineries. The range includes a 1500ml
              Magnum Claret, 750ml Sparkling Wine, 750ml Glass Claret and 750ml Burgundy
              bottle.
            </p>
            <p>
              Crafted with quality, consistency and reliability in mind, each bottle is
              made to complement the excellence of South African wine.
            </p>
            <p>
              This initiative is about building lasting partnerships with
              South Africa&apos;s wine industry, supporting local excellence and growing
              together so every bottle carries the quality, heritage and pride that
              South African wine is known for.
            </p>
            <a
              className="text-link"
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the campaign story <span aria-hidden="true">↗</span>
              <span className="visually-hidden">(opens in a new tab)</span>
            </a>
          </div>
        </section>

        <section className="range-section section-pad" id="bottles" aria-labelledby="range-title">
          <div className="page-wrap">
            <div className="section-heading" data-reveal>
              <div>
                <p className="eyebrow">The wine bottle range</p>
                <h2 id="range-title">
                  Find the right shape
                  <br />
                  <em>for your wine.</em>
                </h2>
              </div>
              <div className="range-intro">
                <p>
                  A locally manufactured portfolio for South African wineries, from
                  timeless Bordeaux-style bottles to Burgundy and sparkling formats.
                </p>
                <a className="button button-primary" href={RANGE_URL}>
                  Explore Our Range <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="bottle-grid">
              {bottles.map((bottle, index) => (
                <article className="bottle-card" key={bottle.name} data-reveal data-reveal-order={index}>
                  <a
                    className="bottle-product-image"
                    href={RANGE_URL}
                    aria-label={`Explore the ${bottle.capacity} ${bottle.name} in the Isanti wine range`}
                  >
                    <Image
                      src={bottle.image}
                      alt={`${bottle.capacity} ${bottle.name}, product code ${bottle.code}`}
                      width={600}
                      height={901}
                      sizes="(max-width: 680px) 90vw, (max-width: 980px) 45vw, 280px"
                    />
                    <span className="capacity-tag">{bottle.capacity}</span>
                  </a>
                  <div className="bottle-card-body">
                    <p className="bottle-style">{bottle.style}</p>
                    <h3>{bottle.name}</h3>
                    <p className="bottle-code">{bottle.code} · Flint glass</p>
                    <div className="card-links">
                      <a className="text-link" href={RANGE_URL}>
                        Explore this bottle <span aria-hidden="true">→</span>
                      </a>
                      <a className="text-link text-link-muted" href={ORDER_URL}>
                        Talk to Us
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="campaign-gallery section-pad" aria-labelledby="gallery-title">
          <div className="page-wrap">
            <div className="section-heading gallery-heading" data-reveal>
              <div>
                <p className="eyebrow">A Bottle Is More Than Just a Bottle</p>
                <h2 id="gallery-title">
                  Good wine. Good glass.
                  <br />
                  <em>Made to be remembered.</em>
                </h2>
              </div>
              <p className="range-intro">
                Every great wine has its signature. Choose glass that complements
                the character of your wine and the story of your brand.
              </p>
            </div>
            <div className="campaign-art-grid">
              {campaignImages.map((image, index) => (
                <figure className={`campaign-art ${image.className}`} key={image.src} data-reveal data-reveal-order={index % 2}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.className === "campaign-art-portrait" ? 768 : 1200}
                    height={image.className === "campaign-art-portrait" ? 960 : 628}
                    sizes={
                      image.className === "campaign-art-portrait"
                        ? "(max-width: 680px) 100vw, 580px"
                        : "(max-width: 1180px) 100vw, 1180px"
                    }
                  />
                  <figcaption>{image.label}</figcaption>
                </figure>
              ))}
            </div>
            <div className="inline-cta" data-reveal>
              <p>
                <strong>Ready to give your wine the bottle it deserves?</strong>
                Discover Magnum, Claret, Burgundy and Sparkling formats, locally made
                in South Africa.
              </p>
              <a className="button button-primary" href={RANGE_URL}>
                Explore Our Range <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

        <section
          className="first-sip section-pad"
          id="first-sip"
          aria-labelledby="first-sip-title"
        >
          <div className="page-wrap first-sip-layout">
            <div className="first-sip-intro" data-reveal>
              <p className="eyebrow">As featured in Wineland</p>
              <h2 id="first-sip-title">
                Before the first sip, your bottle is <em>already saying something.</em>
              </h2>
              <p>
                A bottle protects the wine and tells a story about its brand. Its shape,
                colour and feel can influence how people perceive it, while weight,
                material use and transport matter to the winery behind it.
              </p>
              <blockquote className="pull-quote">
                <p>
                  “The right bottle is not necessarily the most expensive or distinctive
                  one; it is the one that best serves the wine, the brand and its
                  intended consumer.”
                </p>
                <cite>Isanti Glass</cite>
              </blockquote>
              <a
                className="text-link"
                href={WINELAND_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read the full Wineland article <span aria-hidden="true">↗</span>
                <span className="visually-hidden">(opens in a new tab)</span>
              </a>
            </div>
            <div className="questions-panel" data-reveal data-reveal-order="1">
              <p className="eyebrow">A practical checklist</p>
              <h3>Before you order your next bottle, ask:</h3>
              <ol className="question-list">
                {questions.map((question) => (
                  <li key={question.title}>
                    <h4>{question.title}</h4>
                    <p>{question.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="benefits-section section-pad" aria-labelledby="benefits-title">
          <div className="page-wrap">
            <div className="section-heading" data-reveal>
              <div>
                <p className="eyebrow">The value of looking closer to home</p>
                <h2 id="benefits-title">
                  Local roots.
                  <br />
                  <em>Shared growth.</em>
                </h2>
              </div>
              <p className="range-intro">
                Choosing a bottle is not just a design decision. It&apos;s a
                manufacturing, logistical and commercial one, too.
              </p>
            </div>
            <div className="benefit-grid">
              {benefits.map((benefit, index) => (
                <article className="benefit" key={benefit.number} data-reveal data-reveal-order={index}>
                  <span className="benefit-number">{benefit.number}</span>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="order-section section-pad" id="order" aria-labelledby="order-title">
          <div className="page-wrap order-layout" data-reveal>
            <div>
              <p className="eyebrow eyebrow-light">Let&apos;s grow together, one bottle at a time</p>
              <h2 id="order-title">
                Find the bottle that
                <br />
                <em>does your wine justice.</em>
              </h2>
            </div>
            <div className="order-copy">
              <p>
                Browse the full Isanti Glass wine bottle range, locally manufactured
                for South African wineries. Already know what you need? Get in touch
                with the team to place your order.
              </p>
              <OrderButtons light orderLabel="Place Your Order" />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-wrap footer-layout">
          <a className="brand" href="#top" aria-label="Isanti Glass — Back to top">
            <Image
              src="/images/isanti-glass-logo.png"
              alt="Isanti Glass — Excellence in Glass"
              width={523}
              height={689}
              sizes="64px"
            />
          </a>
          <nav aria-label="Footer">
            <a href={WEBSITE_URL}>Isanti Glass website <span aria-hidden="true">↗</span></a>
            <a href={ORDER_URL}>Contact the team <span aria-hidden="true">↗</span></a>
          </nav>
          <p>© {new Date().getFullYear()} Isanti Glass.</p>
        </div>
      </footer>
    </>
  );
}
