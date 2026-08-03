import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/how-to-play', label: 'How to Play' },
  { to: '/product', label: 'Product' },
  { to: '/contact', label: 'Contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="container nav__bar">
        <NavLink to="/" className="nav__logo" onClick={() => setOpen(false)}>
          CRIC<span>BEATGAME</span>
        </NavLink>

        <button
          className="nav__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav__links ${open ? 'is-open' : ''}`}>
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
          <NavLink to="/product" className="btn btn-primary nav__cta" onClick={() => setOpen(false)}>
            Order Now
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
