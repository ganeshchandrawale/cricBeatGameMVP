import { useState } from 'react';
import SEO from '../components/SEO.jsx';
import Reveal from '../components/Reveal.jsx';
import './pages.css';

// ─── Rapid Mode steps (exact rulebook) ─────────────────────────────────────
const RAPID_STEPS = [
  {
    title: 'Match Setup',
    lines: [
      '6 overs per innings.',
      'Each player selects 6 Player Cards (2 Batters, 2 Bowlers, 2 All-Rounders) and receives 3 Wild Cards at random from the Wild Cards Deck.',
      'Player cards are placed face-up. Wild Cards are placed face-down.',
      'The toss winner chooses to Bat or Bowl and picks the first Player Card. Both players place one active card in the Duel Zone, starting with a Batter.',
    ],
  },
  {
    title: 'Rolling Each Delivery',
    lines: [
      'The Batter rolls 2d6 for every delivery.',
      'If the Batter rolls Doubles (e.g. two 3s), a Wicket Appeal is triggered — the Bowler rolls 2d6. If Bowler Roll > Batter Roll, the Batter is OUT. If not, calculate runs from the Batter\'s original roll.',
      'Exception: Double 6s are a Classic Shot — automatic 6 Runs, immune to Wicket Appeals.',
      'No NAF in Rapid Mode — read the dice total directly off the Scoring Matrix.',
    ],
  },
  {
    title: 'Scoring Matrix',
    isMatrix: true,
    rows: [
      { points: '0 – 3', result: 'Dot Ball' },
      { points: '4 – 6', result: '1 Run' },
      { points: '7 – 9', result: '2 Runs' },
      { points: '10 – 13', result: '4 Runs' },
      { points: '14+', result: '6 Runs' },
    ],
  },
  {
    title: 'Over Phases',
    isPhases: true,
    phases: [
      { icon: '⚡', label: 'Powerplay', overs: 'Overs 1–2' },
      { icon: '🛡️', label: 'Middle', overs: 'Overs 3–4' },
      { icon: '🔥', label: 'Death', overs: 'Overs 5–6' },
    ],
  },
  {
    title: 'Limits & Ties',
    lines: [
      'Bowler Limit: max 2 overs per bowler; no consecutive overs allowed.',
      'After 6 overs, roles swap. Cards return to the deck and a new lineup is selected.',
      'Super Over: if runs are tied after 12 total overs, a 1-over shootout decides — 1 Wicket ends the Super Over.',
    ],
  },
];

// ─── Pro Mode steps (exact rulebook) ───────────────────────────────────────
const PRO_STEPS = [
  {
    title: 'Match Setup',
    lines: [
      '10 overs per innings. Both players start at 5 HP (scale 0–10). HP resets at the end of each innings.',
      'Each player selects 6 Player Cards (2 Batters, 2 Bowlers, 2 All-Rounders) and receives 3 Wild Cards at random. The toss winner picks the first Player Card.',
      'Player cards are face-up. Wild Cards are face-down.',
      'The toss winner chooses to Bat or Bowl. Both players place one active card in the Duel Zone, starting with a Batter.',
    ],
  },
  {
    title: 'NAF Calculation',
    lines: [
      'At the start of each over, calculate the Net Advantage Factor (NAF). It stays fixed for all 6 deliveries of that over.',
      'NAF = (Batter QS − Bowler QS) + (Batter HP − Bowler HP) + Card Abilities',
      'NAF is strictly capped between −5 and +5.',
      'Add NAF to the Batter\'s dice total — unless a Wicket Appeal is triggered (Doubles).',
    ],
  },
  {
    title: 'Rolling Each Delivery',
    lines: [
      'The Batter rolls 2d6 for every delivery.',
      'If the Batter rolls Doubles, a Wicket Appeal is triggered — the Bowler rolls 2d6. If Bowler Roll > Batter Roll, the Batter is OUT. If not, calculate runs from the Batter\'s original roll + NAF.',
      'Exception: Double 6s are a Classic Shot — automatic 6 Runs, immune to Wicket Appeals.',
      'If no Doubles, add NAF to the dice total and read the Scoring Matrix.',
    ],
  },
  {
    title: 'Scoring Matrix',
    isMatrix: true,
    rows: [
      { points: '0 – 3', result: 'Dot Ball' },
      { points: '4 – 6', result: '1 Run' },
      { points: '7 – 9', result: '2 Runs' },
      { points: '10 – 13', result: '4 Runs' },
      { points: '14+', result: '6 Runs' },
    ],
  },
  {
    title: 'Momentum (HP) Rules',
    lines: [
      'HP Gain (+1): Batter hits a 6 · hits two consecutive 4s · scores 12+ runs in an over · Bowler takes a Wicket.',
      'HP Loss (−1): Batting team records 3 consecutive dot balls (even across different overs).',
      'Batter may swap their active card after 3 consecutive dot balls.',
      'A player may Rest an active card at any time for a cost of 1 HP.',
      'Dismissed Batters and Bowlers who have completed their allocated overs move to the Inactive Area.',
    ],
  },
  {
    title: 'Tactical HP Reset',
    lines: [
      'A player may reset their HP to 5 at the start of any over by accepting a Run Penalty deducted from their total score:',
      'Bronze / Silver Deck → −2 Runs',
      'Gold (at least 1 Gold card in squad) → −3 Runs',
      'Platinum (at least 1 Platinum card in squad) → −4 Runs',
    ],
  },
  {
    title: 'Over Phases',
    isPhases: true,
    phases: [
      { icon: '⚡', label: 'Powerplay', overs: 'Overs 1–2' },
      { icon: '🛡️', label: 'Middle', overs: 'Overs 3–4' },
      { icon: '🔥', label: 'Death', overs: 'Overs 5–6' },
    ],
  },
  {
    title: 'Limits & Ties',
    lines: [
      'Bowler Limit: max 3 overs per bowler; no consecutive overs allowed.',
      'After 10 overs, roles swap. Cards return to the deck and a new lineup is selected.',
      'Super Over: if runs are tied after 20 total overs, a 1-over shootout decides — 1 Wicket ends the Super Over.',
    ],
  },
];

// ─── FAQ ───────────────────────────────────────────────────────────────────
const FAQ = [
  {
    q: 'How long does a match take?',
    a: 'A Rapid Mode 6-over match runs about 20–25 minutes once both players know the rules. Pro Mode 10-over matches run longer and reward deeper tactical planning.',
  },
  {
    q: 'How many players can play?',
    a: 'The base game is 2 players head-to-head. 2v2 team play is supported using two starter decks.',
  },
  {
    q: 'What is NAF and does Rapid Mode use it?',
    a: 'NAF (Net Advantage Factor) is the tactical modifier calculated from card stats and Momentum HP. It is a Pro Mode mechanic only — Rapid Mode reads dice totals directly off the Scoring Matrix.',
  },
  {
    q: 'What is the Bowler Limit?',
    a: 'In Rapid Mode, each bowler may bowl a maximum of 2 overs. In Pro Mode, the limit is 3 overs. In both modes, no bowler may bowl consecutive overs.',
  },
  {
    q: 'Do I need cricket knowledge to play?',
    a: "No — the rulebook explains every term. Familiarity with cricket makes reading the matchups faster, but isn't required.",
  },
  {
    q: 'Can I mix squads from different starter decks?',
    a: "Yes. Casual play allows mixed squads; the tournament ruleset requires a single-nation squad.",
  },
];

// ─── Reusable step renderer ─────────────────────────────────────────────────
function StepContent({ step }) {
  if (step.isMatrix) {
    return (
      <table className="rules-matrix">
        <thead>
          <tr>
            <th>Total Points</th>
            <th>Match Result</th>
          </tr>
        </thead>
        <tbody>
          {step.rows.map((r) => (
            <tr key={r.points}>
              <td>{r.points}</td>
              <td>{r.result}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  if (step.isPhases) {
    return (
      <div className="phase-pills">
        {step.phases.map((p) => (
          <div key={p.label} className="phase-pill">
            <span className="phase-pill__icon">{p.icon}</span>
            <span className="phase-pill__label">{p.label}</span>
            <span className="phase-pill__overs">{p.overs}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <ul className="step-lines">
      {step.lines.map((line, i) => (
        <li key={i}>{line}</li>
      ))}
    </ul>
  );
}

// ─── Mode Toggle ───────────────────────────────────────────────────────────
function ModeToggle({ mode, onChange }) {
  return (
    <div className="mode-toggle" role="tablist" aria-label="Select game mode">
      <button
        role="tab"
        aria-selected={mode === 'rapid'}
        className={`mode-toggle__btn ${mode === 'rapid' ? 'is-active' : ''}`}
        onClick={() => onChange('rapid')}
      >
        <span className="mode-toggle__label">Rapid Mode</span>
        <span className="mode-toggle__sub">6 Overs · ~20 min · No NAF</span>
      </button>
      <button
        role="tab"
        aria-selected={mode === 'pro'}
        className={`mode-toggle__btn ${mode === 'pro' ? 'is-active' : ''}`}
        onClick={() => onChange('pro')}
      >
        <span className="mode-toggle__label">
          Pro Mode
          <span className="mode-toggle__badge">Advanced</span>
        </span>
        <span className="mode-toggle__sub">10 Overs · NAF Engine · HP Tactics</span>
      </button>
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────
export default function HowToPlay() {
  const [mode, setMode] = useState('rapid');

  const steps = mode === 'rapid' ? RAPID_STEPS : PRO_STEPS;

  return (
    <>
      <SEO
        title="How to Play"
        description="Full rulebook for CRICBEATGAME — Rapid Mode (6 overs, no NAF) and Pro Mode (10 overs, NAF engine, HP tactics, Signature Abilities)."
        path="/how-to-play"
      />

      {/* Hero */}
      <section className="hero" style={{ paddingBottom: 60 }}>
        <div className="container">
          <span className="eyebrow">Official Rulebook · 2026 Edition</span>
          <h1>Two Modes. One Engine.</h1>
          <p className="hero__lede">
            Rapid Mode: 6 overs, direct dice-to-matrix scoring, ~20-minute matches.
            Pro Mode: 10 overs, the NAF engine, Momentum tactics, and HP Resets.
          </p>
        </div>
      </section>

      {/* Video */}
      <section>
        <div className="container" style={{ maxWidth: 820 }}>
          <div className="video-frame">
            <iframe
              src="https://www.youtube.com/embed/YOUR_YOUTUBE_VIDEO_ID"
              title="How to play CRICBEATGAME — full video walkthrough"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Mode toggle + steps */}
      <section>
        <div className="container" style={{ maxWidth: 780 }}>
          <Reveal className="section-head align-left">
            <span className="eyebrow">Rules</span>
            <h2>{mode === 'rapid' ? 'Rapid Mode Rulebook' : 'Pro Mode Rulebook'}</h2>
          </Reveal>

          <ModeToggle mode={mode} onChange={setMode} />

          {mode === 'pro' && (
            <div className="mode-panel__notice">
              <span className="eyebrow" style={{ color: 'var(--gold)' }}>Pro Mode</span>
              <p style={{ margin: '4px 0 0', fontSize: '0.9rem' }}>
                Pro Mode introduces the NAF engine, Momentum (HP) tactics, and Tactical HP Resets not present in Rapid Mode.
              </p>
            </div>
          )}

          <div className="steps">
            {steps.map((s, i) => (
              <div className="step" key={`${mode}-${s.title}`}>
                <span className="step__num">{String(i + 1).padStart(2, '0')}</span>
                <div style={{ minWidth: 0 }}>
                  <h3>{s.title}</h3>
                  <StepContent step={s} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--turf)' }}>
        <div className="container" style={{ maxWidth: 780 }}>
          <Reveal className="section-head align-left">
            <span className="eyebrow">FAQ</span>
            <h2>Before You Play</h2>
          </Reveal>
          <div>
            {FAQ.map((f, i) => (
              <Reveal
                as="div"
                delay={i * 60}
                key={f.q}
                style={{ borderBottom: '1px solid var(--line)', padding: '20px 0' }}
              >
                <h3 style={{ marginBottom: 6 }}>{f.q}</h3>
                <p>{f.a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
