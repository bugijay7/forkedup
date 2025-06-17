import React from 'react';
import { Link } from 'react-router-dom'
import OffSiteImage from '../../assets/offsite-catering.jpeg';

const OffSiteCatering = () => {
  return (
    <section className=" text-white w-full h-full mt-20 mb-20">
      <main className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-16 py-16 px-6 md:px-12 lg:px-20">
        
        {/* Image Section */}
        <div className="w-full md:w-1/2 h-64 md:h-[480px]">
          <img 
            src={OffSiteImage} 
            alt="Off-site catering setup" 
            className="w-full h-full object-cover rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 max-w-xl">
          <p className="text-lg font-medium text-yellow-400 tracking-wide uppercase mb-4">
            Let us bring our kitchen to your event
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
            Premium Off‑Site Catering
          </h2>
          <ul className="space-y-3 text-gray-200 text-lg mb-8">
            <li>• Buffet & plated service</li>
            <li>• Setup and cleanup included</li>
            <li>• Custom menus to match your event</li>
          </ul>

          {/* CTA Button */}
          <Link to="/services/offsite-catering-form" className="inline-block mt-4 px-6 py-3 text-white bg-teal-600 rounded-full text-lg font-medium hover:bg-teal-700 transition duration-300 shadow-lg" >
            Consult Here
          </Link>
        </div>
      </main>
    </section>
  );
};

export default OffSiteCatering;
