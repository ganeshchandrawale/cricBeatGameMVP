import { Link } from 'react-router-dom';
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <div className="nav__logo">CRIC<span>BEATGAME</span></div>
          <p>A premium offline cricket strategy game. Outwit. Outlast. Own the game.</p>
        </div>

        <div>
          <span className="eyebrow">Play</span>
          <ul>
            <li><Link to="/how-to-play">How to Play</Link></li>
            <li><Link to="/product">Get the Game Box</Link></li>
          </ul>
        </div>

        <div>
          <span className="eyebrow">Company</span>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <span className="eyebrow">Reach Us</span>
          <ul>
            <li><a href="mailto:support@cricbeatgame.com">support@cricbeatgame.com</a></li>
            <li><a href="https://wa.me/1234567890" target="_blank" rel="noreferrer">WhatsApp</a></li>
          </ul>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} CRICBEATGAME. India / United Kingdom.</span>
      </div>
    </footer>
  );
}
