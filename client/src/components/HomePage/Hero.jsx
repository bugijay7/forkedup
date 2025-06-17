import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../../assets/forked.jpg'; // Adjust this path if needed

function Hero() {
  return (
    <div
      className="hero min-h-screen top-0 mt-0 "
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-xl px-16 glass py-10 rounded-lg">
          <h1 className="mb-5 text-4xl font-extrabold text-white tracking-wide">
            Welcome to Forked Up
          </h1>
          <p className="mb-6 text-xs text-gray-200">
            A modern Kenyan fine-dining experience.
          </p>
          <Link to="/menu" className=" text-warning text-sm block px-4 py-2 hover:underline">Place an Order </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
