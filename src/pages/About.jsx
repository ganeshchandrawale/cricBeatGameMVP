import SEO from '../components/SEO.jsx';
import Reveal from '../components/Reveal.jsx';
import './pages.css';

export default function About() {
  return (

    <><SEO
      title="About Us"
      description="CRICBEATGAME was built by cricket fans and game designers who wanted a strategy card game that captures the tactics of real cricket. Here's our story."
      path="/about" /><div className="about-us-page">
        {/* HERO SECTION */}
        <section className="hero" style={{ paddingBottom: 60 }}>
          <div className="container">
            <span className="eyebrow">Our Story</span>
            <h1>Outwit. Outlast. Own the Game.</h1>
            <p className="hero__lede">
              CRICBEATGAME was born from a single observation: real cricket isn't won by random luck.
              It’s won in the tension between deliveries—the captain’s field change, the bowler’s execution,
              and the batter’s willingness to risk it all under pressure.
            </p>
          </div>
        </section>

        {/* WHY WE BUILT CBG */}
        <section>
          <div className="container" style={{ maxWidth: 780 }}>
            <Reveal>
              <h2>Why We Built CRICBEATGAME</h2>
              <p>
                Most cricket games boil down to simple dice rolls or button-mashing. We wanted a tabletop
                trading card experience that captures the high-stakes chess match of real cricket.
                Whether you're playing a fast-paced <strong>Rapid 6-Over</strong> showdown or a deep <strong>Pro 10-Over</strong> tactical clash,
                CRICBEATGAME puts you directly in the captain's shoes.
              </p>
              <p style={{ marginTop: 16 }}>
                Every delivery relies on our core engine: the <strong>Net Advantage Factor (NAF)</strong> and dynamic <strong>Momentum (HP)</strong> mechanics.
                Match your player's stat profiles against your opponent's vulnerabilities, deploy game-changing Wild Cards, and out-think the player across the table.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <h2>Who We Are</h2>
              <p>
                We are a team of cricket diehards, game designers, and illustrators.
                From scorebook purists to modern T20 strategists, we built CRICBEATGAME for fans who crave deep tactical duels—a game that takes three minutes to learn, but offers endless strategic matchups to master.
              </p>
            </Reveal>
          </div>
        </section>

        {/* MILESTONES */}
        <section style={{ background: 'var(--turf, #0A1628)', color: '#FFFFFF' }}>
          <div className="container" style={{ maxWidth: 720 }}>
            <Reveal className="section-head align-left">
              <span className="eyebrow">Milestones</span>
              <h2>From Paper Prototypes to the Pitch</h2>
            </Reveal>
            <div className="timeline" style={{ marginTop: 32 }}>
              <Reveal as="div" className="timeline-item">
                <span className="eyebrow">The Spark</span>
                <h3>The NAF Engine is Born</h3>
                <p>Hand-drawn cards and a raw rulebook focused on eliminating mindless randomness in favour of genuine tactical matchups.</p>
              </Reveal>

              <Reveal as="div" className="timeline-item" delay={100}>
                <span className="eyebrow">Master Sets</span>
                <h3>Archetypes & Tier Evolution</h3>
                <p>Establishing our core card tiers—Bronze, Silver, Gold, and Platinum—with distinct Strength, Weakness, and Pro Mode Signature abilities across 35+ player archetypes.</p>
              </Reveal>

              <Reveal as="div" className="timeline-item" delay={200}>
                <span className="eyebrow">Global Launch</span>
                <h3>The Official Collector's Decks</h3>
                <p>Bringing international rivalries to life with full physical card decks, precision dice, and custom stadium playing boards across India, Australia, and England.</p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* THREE PILLARS */}
        <section>
          <div className="container" style={{ maxWidth: 780 }}>
            <Reveal>
              <h2>What We Believe</h2>
              <div className="pillars" style={{ marginTop: 24, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
                <div className="pillar">
                  <h3>Tactical Advantage</h3>
                  <p>Dice bring tension, but NAF calculations, momentum management, and matchup choices decide who wins.</p>
                </div>

                <div className="pillar">
                  <h3>Easy In, Deep Out</h3>
                  <p>Pick up Rapid Mode in 3 minutes. Step into Pro Mode for deep Signature abilities, wild card plays, and tournament mastery.</p>
                </div>

                <div className="pillar">
                  <h3>Built for Collectors</h3>
                  <p>Distinctive card layouts, tier-based visual finishes, and authentic player archetypes crafted with premium durability.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </div></>
  );
}