const ITEMS = [
  <>RAPID MODE — <strong>6 OVERS · ~20 MIN</strong></>,
  <>PRO MODE — <strong>10 OVERS · SIGNATURE ABILITIES UNLOCKED</strong></>,
  <>COLLECTOR'S EDITION — <strong>₹1,499</strong></>,
  <>FREE SHIPPING ACROSS INDIA</>,
  <>78+ CARDS — <strong>BRONZE · SILVER · GOLD · PLATINUM</strong></>,
  <>3 SQUADS — <strong>INDIA · AUSTRALIA · ENGLAND</strong></>,
  <>NAF ENGINE — <strong>BAT vs BOWL · MOMENTUM · 2d6</strong></>,
];

// Duplicated once so the CSS keyframe (translateX -50%) loops seamlessly.
export default function ScoreTicker() {
  const items = [...ITEMS, ...ITEMS];
  return (
    <div className="score-ticker" role="marquee" aria-label="Live game highlights">
      <div className="score-ticker__track">
        {items.map((item, i) => (
          <span className="score-ticker__item" key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
}
