import React, { useEffect, useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { useCart } from '../contexts/CartContext';

function MainDishes() {
  const [mainDishes, setMainDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantities, setQuantities] = useState({});
  const [alertMessage, setAlertMessage] = useState('');

  const { addToCart } = useCart();

  useEffect(() => {
    const fetchMainDishes = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/mains');
        if (!response.ok) {
          throw new Error('Failed to fetch main dishes');
        }
        const data = await response.json();
        setMainDishes(data);

        const initialQuantities = {};
        data.forEach((item) => {
          initialQuantities[item.id] = 1;
        });
        setQuantities(initialQuantities);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMainDishes();
  }, []);

  const increaseQuantity = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] + 1,
    }));
  };

  const decreaseQuantity = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, prev[id] - 1),
    }));
  };

  const handleAddToCart = (item) => {
    const quantity = quantities[item.id] || 1;
    addToCart(item, quantity);
    setAlertMessage(`${item.name} added to cart!`);
    setTimeout(() => {
      setAlertMessage('');
    }, 3000);
  };

  if (loading)
    return <div className="text-center py-10 text-lg text-white">Loading main dishes...</div>;
  if (error)
    return <div className="text-center text-red-500 py-10">Error: {error}</div>;

  return (
    <div className="px-6 py-10 max-w-7xl mx-auto mt-20">
      <h1 className="text-3xl font-bold text-center mb-8 text-white">Our Main Dishes</h1>

      {alertMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative text-center mb-6">
          {alertMessage}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {mainDishes.map((item) => (
          <div key={item.id} className="card w-full bg-base-100 shadow-md">
            <figure>
              <img
                src={`http://localhost:3000/images/${item.image_url}`}
                alt={item.name}
                className="w-full h-64 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.name}</h2>
              <p className="text-sm">{item.description}</p>
              <p className="text-green-600 font-bold">KES {item.price}</p>

              <div className="flex items-center gap-3 mt-2">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="btn btn-sm btn-outline"
                >
                  <FiMinus />
                </button>
                <span className="text-sm">Qty: {quantities[item.id]}</span>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="btn btn-sm btn-outline"
                >
                  <FiPlus />
                </button>
              </div>

              <div className="card-actions justify-end mt-4">
                <button
                  onClick={() => handleAddToCart(item)}
                  className="btn btn-primary w-full"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainDishes;
