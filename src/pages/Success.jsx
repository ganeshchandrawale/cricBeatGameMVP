import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO.jsx';
import './pages.css';

export default function Success() {
  const [params] = useSearchParams();
  const orderId = params.get('order_id') || 'CB-IN-SUCCESS';
  const email = params.get('email') || 'your email';

  return (
    <>
      <SEO
        title="Order Confirmed"
        description="Your CRICBEATGAME order is confirmed. Match on!"
        path="/success"
      />

      <section style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div className="container" style={{ maxWidth: 480 }}>
          <div className="success-card">
            <div className="success-icon">✓</div>
            <h1 style={{ fontSize: 'var(--step-h2)' }}>MATCH ON!</h1>
            <p style={{ color: 'var(--chalk-dim)', margin: '8px 0 20px' }}>
              Thanks for ordering the CRICBEATGAME Core Pack.
            </p>

            <div style={{ marginBottom: 8, fontSize: '0.82rem', color: 'var(--steel)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Order Reference
            </div>
            <div className="success-order-id">{orderId}</div>

            <p style={{ fontSize: '0.88rem', color: 'var(--chalk-dim)', margin: '16px 0 28px' }}>
              A receipt and dispatch notification will be sent to{' '}
              <strong style={{ color: 'var(--chalk)' }}>{decodeURIComponent(email)}</strong>.
            </p>

            <Link to="/" className="btn btn-primary">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
