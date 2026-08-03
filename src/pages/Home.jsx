import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO.jsx';
import Reveal from '../components/Reveal.jsx';
import './pages.css';

const ASSETS = '/assets';

const CARDS = [
  { name: 'Power Hitter', role: 'Batter', img: `${ASSETS}/PlayerCards/PowerHitter.webp` },
  { name: 'Googly Fox', role: 'Spinner', img: `${ASSETS}/PlayerCards/GooglyFox.webp` },
  { name: 'Six Queen', role: 'Batter', img: `${ASSETS}/PlayerCards/SixQueen.webp` },
  { name: 'Spirit of Cricket', role: 'All-Rounder', img: `${ASSETS}/PlayerCards/SpiritOfCricket.webp` },
];

export default function Home() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const restart = () => { video.currentTime = 0; video.play().catch(() => {}); };
    const handleTimeUpdate = () => { if (video.currentTime >= 15) restart(); };
    video.addEventListener('timeupdate', handleTimeUpdate);
    const timer = window.setTimeout(restart, 15000);
    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <SEO
        title="CRICBEATGAME — Premium Cricket Strategy Game"
        description="CRICBEATGAME is a premium cricket strategy board game built for fast 6-over showdowns, tactical squad building, and collector-worthy card play."
        path="/"
      />

      <section className="hero">
        <div className="hero__background" aria-hidden="true">
          <div className="hero__orb hero__orb--one" />
          <div className="hero__orb hero__orb--two" />
          <div className="hero__orb hero__orb--three" />
        </div>
        <div className="container hero__grid">
          <div className="hero__content">
            <span className="eyebrow">6-Over Tactical Showdown</span>
            <h1>OUTWIT. OUTLAST. OWN THE GAME.</h1>
            <p className="hero__lede">
              A premium cricket strategy game built for fast, tactical showdowns.
            </p>
            <p className="hero__lede hero__lede--secondary">
              Build your squad, read the field, and out-think your opponent in every over.
            </p>
            <div className="hero__actions">
              <Link to="/product" className="btn btn-primary">See the Game Box</Link>
              <Link to="/how-to-play" className="btn btn-ghost">How to Play</Link>
            </div>
          </div>
          <div className="hero__art hero__art--video">
            <div className="hero__art-card hero__video-shell media-shell">
              <video
                ref={videoRef}
                className="hero__video"
                src={`${ASSETS}/teaser.mp4`}
                autoPlay
                muted
                playsInline
                loop={false}
                preload="metadata"
                poster={`${ASSETS}/ProductTeaser.gif`}
                width="1920"
                height="1080"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Featured Player Cards</span>
            <h2>Every Card Reads Like a Scorecard</h2>
            <p>Bat, bowl and special abilities — stated up front, no guesswork.</p>
          </Reveal>

          <div className="card-grid">
            {CARDS.map((c, i) => (
              <Reveal as="div" delay={i * 80} key={c.name} className="pcard">
                <div className="pcard__media media-shell">
                  <img src={c.img} alt={`${c.name} — ${c.role} card`} loading="lazy" />
                </div>
                <div className="pcard__body">
                  <span className="eyebrow">{c.role}</span>
                  <h3>{c.name}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-surface">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Why CRICBEATGAME</span>
            <h2>Built for Fans Who Think in Overs</h2>
          </Reveal>
          <div className="pillars">
            <Reveal className="pillar" delay={0}>
              <span className="eyebrow">01 — Real Strategy</span>
              <h3>NAF Decides Every Over</h3>
              <p>The Net Advantage Factor (NAF) — driven by BAT stats, BOWL stats, and live Momentum — sets the stakes before a single die is rolled.</p>
            </Reveal>
            <Reveal className="pillar" delay={100}>
              <span className="eyebrow">02 — Collector Grade</span>
              <h3>Cards Worth Keeping</h3>
              <p>78+ cards across Bronze, Silver, Gold, and Platinum tiers — India, Australia, and England squads designed for decades of play.</p>
            </Reveal>
            <Reveal className="pillar" delay={200}>
              <span className="eyebrow">03 — Two Play Modes</span>
              <h3>Rapid or Pro — You Choose</h3>
              <p>Rapid Mode: fast 6-over showdowns in ~20 minutes. Pro Mode: 10-over tactical depth that unlocks Signature Abilities and full strategic range.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section>
        <div className="container product-hero">
          <div className="product-hero__media">
            <img src={`${ASSETS}/mock-image.webp`} alt="CRICBEATGAME Game Box gameplay teaser" />
            <div className="product-hero__glow" />
          </div>
          <div>
            <span className="eyebrow">Collector's Edition</span>
            <h2>The CRICBEATGAME Game Box</h2>
            <p>Official stadium game board, 2d6 precision dice, rulebook, and 3 starter decks — India, Australia, and England — with 78+ player cards across four tiers.</p>
            <div className="product-price">₹1,499</div>
            <Link to="/product" className="btn btn-primary">See What's Inside</Link>
          </div>
        </div>
      </section>
    </>
  );
}
