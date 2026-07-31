function generateSequentialOrderId() {
  const timestamp = Date.now().toString().slice(-6);
  const random = Math.floor(10 + Math.random() * 90);
  return `CB-IN-${timestamp}${random}`;
}

function initiateRazorpay(e) {
  e.preventDefault();

  const name = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const mobile = document.getElementById('mobile').value;
  const address = document.getElementById('address').value;
  const customOrderId = generateSequentialOrderId();

  const options = {
    "key": "rzp_test_YOUR_RAZORPAY_KEY", // Replace with actual Razorpay Key ID
    "amount": 149900, // Amount in paise
    "currency": "INR",
    "name": "CricBeat Games",
    "description": "Core Board Pack Order #" + customOrderId,
    "handler": function (response) {
      window.location.href = `success.html?order_id=${customOrderId}&payment_id=${response.razorpay_payment_id}&email=${encodeURIComponent(email)}`;
    },
    "prefill": {
      "name": name,
      "email": email,
      "contact": mobile
    },
    "notes": {
      "custom_order_id": customOrderId,
      "shipping_address": address
    },
    "theme": {
      "color": "#f0a500"
    }
  };

  const rzp = new Razorpay(options);
  rzp.open();
}
