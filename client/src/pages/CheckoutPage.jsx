import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext'; // ✅ import useCart

function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [formData, setFormData] = useState({
    phone: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const navigate = useNavigate();
  const { clearCart } = useCart(); // ✅ get clearCart from context

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = (e) => {
    e.preventDefault();

    if (paymentMethod === 'mpesa' && formData.phone.trim().length < 10) {
      alert('Please enter a valid phone number.');
      return;
    }

    if (
      paymentMethod === 'card' &&
      (!formData.cardNumber || !formData.expiry || !formData.cvv)
    ) {
      alert('Please fill all card details.');
      return;
    }

    // ✅ Simulate successful payment
    alert(`Payment via ${paymentMethod === 'mpesa' ? 'M-Pesa' : 'Card'} was successful!`);
    clearCart(); // ✅ Clear the cart
    navigate('/');
  };

  return (
    <div className="max-w-xl mx-auto mt-20 p-6 bg-amber-600 rounded shadow-md mb-20">
      <h2 className="text-2xl font-bold mb-6 text-center">Checkout</h2>

      <div className="mb-6">
        <label className="block font-semibold mb-2">Choose Payment Method:</label>
        <div className="flex gap-6">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="paymentMethod"
              value="mpesa"
              checked={paymentMethod === 'mpesa'}
              onChange={() => setPaymentMethod('mpesa')}
            />
            M-Pesa Paybill
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="paymentMethod"
              value="card"
              checked={paymentMethod === 'card'}
              onChange={() => setPaymentMethod('card')}
            />
            Bank Card
          </label>
        </div>
      </div>

      <form onSubmit={handlePayment}>
        {paymentMethod === 'mpesa' && (
          <div className="mb-4">
            <label className="block mb-2 font-medium">Phone Number:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
              placeholder="e.g. 0712345678"
              required
            />
          </div>
        )}

        {paymentMethod === 'card' && (
          <>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Card Number:</label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded"
                placeholder="1234 5678 9012 3456"
                required
              />
            </div>
            <div className="flex gap-4">
              <div className="mb-4 w-1/2">
                <label className="block mb-2 font-medium">Expiry Date:</label>
                <input
                  type="text"
                  name="expiry"
                  value={formData.expiry}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded"
                  placeholder="MM/YY"
                  required
                />
              </div>
              <div className="mb-4 w-1/2">
                <label className="block mb-2 font-medium">CVV:</label>
                <input
                  type="password"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded"
                  placeholder="123"
                  required
                />
              </div>
            </div>
          </>
        )}

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded font-bold mt-4 transition"
          disabled={!paymentMethod}
        >
          Pay Now
        </button>
      </form>
    </div>
  );
}

export default CheckoutPage;
