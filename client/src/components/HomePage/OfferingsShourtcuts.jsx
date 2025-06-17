import React from 'react';
import { Link } from 'react-router-dom';
import { FaCoffee, FaGlassWhiskey, FaHamburger, FaCookieBite, FaLeaf, FaUtensils, FaConciergeBell } from 'react-icons/fa';

function OfferingsShourtcuts() {
  return (
    <div className="flex flex-wrap justify-center gap-8 p-8 px-6 py-16 bg-orange-600 rounded-xl shadow-md">
      <Link to="/juices" className="flex flex-col items-center text-center hover:text-black transition">
        <FaGlassWhiskey size={40} />
        <span className="mt-2 text-xs font-medium">Juices & Soda</span>
      </Link>

      <Link to="/main-dishes" className="flex flex-col items-center text-center hover:text-black transition">
        <FaUtensils size={40} />
        <span className="mt-2 text-xs font-medium">Main Dishes</span>
      </Link>

      <Link to="/snacks" className="flex flex-col items-center text-center hover:text-black  transition">
        <FaCookieBite size={40} />
        <span className="mt-2 text-xs font-medium">Snacks</span>
      </Link>

      <Link to="/teas" className="flex flex-col items-center text-center hover:text-black  transition">
        <FaLeaf size={40} />
        <span className="mt-2 text-xs font-medium">Teas</span>
      </Link>

      <Link to="/coffee" className="flex flex-col items-center text-center hover:text-black  transition">
        <FaCoffee size={40} />
        <span className="mt-2 text-xs font-medium">Coffee</span>
      </Link>

      <Link to="/accompaniments" className="flex flex-col items-center text-center hover:text-black transition">
        <FaConciergeBell size={40} />
        <span className="mt-2 text-xs font-medium">Accompaniments</span>
      </Link>

      <Link to="/sides" className="flex flex-col items-center text-center hover:text-black transition">
        <FaHamburger size={40} />
        <span className="mt-2 text-xs font-medium">Sides</span>
      </Link>
    </div>
  );
}

export default OfferingsShourtcuts;
