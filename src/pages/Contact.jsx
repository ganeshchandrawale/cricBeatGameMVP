import SEO from '../components/SEO.jsx';
import Reveal from '../components/Reveal.jsx';
import './pages.css';

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'CRICBEATGAME',
  url: 'https://cricbeatgame.com',
  email: 'support@cricbeatgame.com',
  areaServed: ['India', 'United Kingdom'],
};

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with CRICBEATGAME — email, WhatsApp, or send us a message about orders, rules questions, or partnerships."
        path="/contact"
        jsonLd={orgJsonLd}
      />

      <section className="hero" style={{ paddingBottom: 60 }}>
        <div className="container">
          <span className="eyebrow">Get In Touch</span>
          <h1>Let's Talk Cricket &amp; Cards</h1>
          <p className="hero__lede">
            Order questions, rules disputes, bulk orders, or partnership ideas — reach us any way that suits you.
          </p>
        </div>
      </section>

      <section>
        <div className="container contact-grid">
          <Reveal>
            <div className="contact-card">
              <span className="eyebrow">Email</span>
              <h3><a href="mailto:support@cricbeatgame.com">support@cricbeatgame.com</a></h3>
              <p>Best for order issues, bulk/corporate orders, and detailed rules questions.</p>
            </div>
            <div className="contact-card">
              <span className="eyebrow">WhatsApp</span>
              <h3><a href="https://wa.me/1234567890" target="_blank" rel="noreferrer">Chat with us</a></h3>
              <p>Quick questions before you order, or help mid-match with a rule.</p>
            </div>
            <div className="contact-card">
              <span className="eyebrow">Based In</span>
              <h3>India / United Kingdom</h3>
              <p>Shipping free across India, with international shipping available on request.</p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <form
              className="contact-card"
              action="mailto:support@cricbeatgame.com"
              method="post"
              encType="text/plain"
            >
              <span className="eyebrow">Send a Message</span>
              <div className="form-field" style={{ marginTop: 16 }}>
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" required />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required />
              </div>
              <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required />
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
