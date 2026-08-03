import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO.jsx';
import './pages.css';

const AMOUNT_PAISE = 149900; // ₹1,499

function generateOrderId() {
  const timestamp = Date.now().toString().slice(-6);
  const random = Math.floor(10 + Math.random() * 90);
  return `CB-IN-${timestamp}${random}`;
}

export default function Checkout() {
  const navigate = useNavigate();
  const formRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    const form = formRef.current;
    const name = form.fullName.value.trim();
    const email = form.email.value.trim();
    const mobile = form.mobile.value.trim();
    const address = form.address.value.trim();
    const customOrderId = generateOrderId();

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID || 'rzp_test_YOUR_RAZORPAY_KEY',
      amount: AMOUNT_PAISE,
      currency: 'INR',
      name: 'CricBeat Games',
      description: `Core Board Pack — Order #${customOrderId}`,
      handler(response) {
        navigate(
          `/success?order_id=${customOrderId}&payment_id=${response.razorpay_payment_id}&email=${encodeURIComponent(email)}`
        );
      },
      prefill: { name, email, contact: mobile },
      notes: { custom_order_id: customOrderId, shipping_address: address },
      theme: { color: '#ffd166' },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  }

  return (
    <>
      <SEO
        title="Checkout — Order Your Game Box"
        description="Complete your CRICBEATGAME order. Secure payment via Razorpay."
        path="/checkout"
      />

      <section style={{ paddingTop: 60, paddingBottom: 80 }}>
        <div className="container" style={{ maxWidth: 520 }}>
          <div style={{ textAlign: 'center', marginBottom: 28 }}>
            <span className="eyebrow">Secure Checkout</span>
            <h1 style={{ fontSize: 'var(--step-h2)', marginTop: 8 }}>CRICBEATGAME Game Box</h1>
          </div>

          {/* Order summary */}
          <div className="checkout-summary">
            <div>
              <div style={{ fontWeight: 700, color: 'var(--chalk)' }}>Core Board Pack</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--steel)', marginTop: 2 }}>
                Collector's Set · 78 Player Cards · Free Shipping
              </div>
            </div>
            <div className="product-price" style={{ margin: 0 }}>₹1,499</div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="checkout-form">
            <div className="form-field">
              <label htmlFor="fullName">Full Name</label>
              <input id="fullName" name="fullName" type="text" placeholder="Rahul Sharma" required />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email Address</label>
              <input id="email" name="email" type="email" placeholder="rahul@example.com" required />
            </div>
            <div className="form-field">
              <label htmlFor="mobile">Mobile Number</label>
              <input
                id="mobile"
                name="mobile"
                type="tel"
                pattern="[0-9]{10}"
                placeholder="9876543210"
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="address">Delivery Address</label>
              <textarea id="address" name="address" rows={3} placeholder="House No., Area, City, Pincode" required />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Pay &amp; Place Order
            </button>
          </form>

          <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--steel)', marginTop: 16 }}>
            Payments secured by Razorpay · UPI · Cards · NetBanking
          </p>
        </div>
      </section>
    </>
  );
}
