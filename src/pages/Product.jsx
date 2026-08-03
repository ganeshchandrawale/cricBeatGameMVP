import { Link } from 'react-router-dom';
import SEO from '../components/SEO.jsx';
import Reveal from '../components/Reveal.jsx';
import './pages.css';

const ASSETS = '/assets';

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: "CRICBEATGAME Game Box — Collector's Edition",
  image: [`${ASSETS}/mock-image.webp`],
  description:
    "Coming soon: official stadium game board, 2d6 precision dice, rulebook, and starter decks across India, Australia and England squads.",
  brand: { '@type': 'Brand', name: 'CRICBEATGAME' },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'INR',
    price: '1499',
    availability: 'https://schema.org/InStock',
    url: 'https://cricbeatgame.com/product',
  },
};

export default function Product() {
  return (
    <>
      <SEO
        title="CRICBEATGAME Game Box — Collector's Edition"
        description="Buy the CRICBEATGAME Game Box: official stadium board, precision dice, rulebook and starter decks across India, Australia and England. ₹1,499, free shipping in India."
        path="/product"
        jsonLd={productJsonLd}
      />

      <section className="hero" style={{ paddingBottom: 80 }}>
        <div className="container product-hero">
          <Reveal>
            <div className="product-hero__media media-shell">
              <img
                src={`${ASSETS}/mock-image.webp`}
                alt="CRICBEATGAME Game Box — board, dice and cards gameplay teaser"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <span className="eyebrow">Coming Soon</span>
            <h1>CRICBEATGAME Game Box</h1>
            <p className="hero__lede">
              The collector's edition is on the way. Join the preorder list now and be first in line when the first batch opens.
            </p>
            <div className="product-price">Coming Soon</div>
            <div className="hero__actions">
              <Link to="/checkout" className="btn btn-primary">Join the Preorder</Link>
              <a href="/how-to-play" className="btn btn-ghost">Learn the Rules First</a>
            </div>
            <table className="spec-table">
              <tbody>
                <tr><td>Players</td><td>2v2</td></tr>
                <tr><td>Play Modes</td><td>Rapid (6 overs) · Pro (10 overs)</td></tr>
                <tr><td>Match length</td><td>~20–25 min (Rapid)</td></tr>
                <tr><td>Ages</td><td>8+</td></tr>
                <tr><td>Cards</td><td>78+ across Bronze · Silver · Gold · Platinum</td></tr>
                <tr><td>Squads included</td><td>India · Australia · England</td></tr>
                <tr><td>Shipping</td><td>Free across India</td></tr>
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="container" style={{ maxWidth: 780 }}>
          <Reveal className="section-head align-left">
            <span className="eyebrow">In the Box</span>
            <h2>What You're Getting</h2>
          </Reveal>
          <ul className="box-contents">
            <li>1× Official Stadium Game Board</li>
            <li>2× Precision Six-Sided Dice (2d6)</li>
            <li>1× Full Illustrated Rulebook (Rapid &amp; Pro Mode)</li>
            <li>3× Starter Decks — India, Australia, England</li>
            <li>78+ Player Cards across Bronze, Silver, Gold &amp; Platinum tiers</li>
            <li>1× Scoring Track &amp; HP Momentum Tracker</li>
          </ul>
        </div>
      </section>

      <section style={{ background: 'var(--turf)' }}>
        <div className="container" style={{ maxWidth: 780 }}>
          <Reveal className="section-head align-left">
            <span className="eyebrow">Shipping &amp; Support</span>
            <h2>Good to Know Before You Order</h2>
          </Reveal>
          <div className="pillars">
            <div className="pillar">
              <h3>Free Shipping</h3>
              <p>Every Game Box ships free across India. International shipping available on request — contact us for a quote.</p>
            </div>
            <div className="pillar">
              <h3>Quality Checked</h3>
              <p>Each board, dice set and deck is inspected before it leaves the warehouse.</p>
            </div>
            <div className="pillar">
              <h3>Support That Plays Along</h3>
              <p>Stuck on a rule? Message us on WhatsApp and we'll walk you through it.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
