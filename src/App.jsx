import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import ScoreTicker from './components/ScoreTicker.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import HowToPlay from './pages/HowToPlay.jsx';
import Product from './pages/Product.jsx';
import Contact from './pages/Contact.jsx';
import Checkout from './pages/Checkout.jsx';
import Success from './pages/Success.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <Nav />
      <ScoreTicker />
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-to-play" element={<HowToPlay />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
