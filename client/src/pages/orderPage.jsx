import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function OrderPage() {
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    console.log('🧾 OrderPage loaded');
    const items = JSON.parse(localStorage.getItem('cart')) || [];
    console.log('🛒 Cart items:', items);
    setOrderItems(items);
  }, []);

  // Calculate total price
  const total = orderItems.reduce((sum, item) => {
    return sum + item.quantity * parseFloat(item.price);
  }, 0);

  return (
    <div className="text-white p-10">
      <h1 className="text-3xl font-bold mb-6">Your Order</h1>

      {orderItems.length === 0 ? (
        <p>No items in your cart yet.</p>
      ) : (
        <>
          <div className="grid gap-6">
            {orderItems.map((item) => (
              <div
                key={item.id}
                className="bg-gray-800 p-4 rounded shadow-md flex flex-col sm:flex-row items-start gap-4"
              >
                <img
                  src={`http://localhost:3000/images/${item.image_url}`}
                  alt={item.name}
                  className="w-32 h-32 object-cover rounded"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `http://localhost:3000/${item.image_url}`;
                  }}
                />
                <div>
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-300">{item.description}</p>
                  <p className="text-green-400 font-medium mt-2">
                    Price: KES {item.price}
                  </p>
                  <p className="text-white">Quantity: {item.quantity}</p>
                  <p className="text-yellow-400 mt-1 font-bold">
                    Subtotal: KES {(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-2xl font-bold text-pink-400">
            Total: KES {total.toFixed(2)}
          </p>

          <div className="mt-6">
            <Link
              to="/checkout"
              className="inline-block bg-blue-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded transition duration-300"
            >
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default OrderPage;
