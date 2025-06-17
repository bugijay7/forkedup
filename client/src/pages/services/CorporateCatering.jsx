import React from 'react';
import { Link } from 'react-router-dom';
import cateringImage from '../../assets/meal-packages/corporateCatering.jpeg';

const CorporateCatering = () => {
  return (
    <section className="min-h-screen flex items-center justify-center  px-6 py-10 ">
      <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-white rounded-3xl shadow-xl overflow-hidden">
        {/* Image */}
        <div className="w-full h-96 lg:h-full">
          <img
            src={cateringImage}
            alt="Corporate Catering"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Content */}
        <div className="p-8 md:p-12 space-y-6">
          <span className="text-sm uppercase tracking-wide text-teal-600 font-semibold">
            Forked Up Restaurant
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            Corporate Catering
          </h2>

          <p className="text-gray-600 text-lg">
            Fuel your team with delicious meals crafted to boost productivity and delight the palate. Our corporate packages are designed to meet your business needs with style and flavor.
          </p>

          <ul className="space-y-3 text-gray-700 list-disc list-inside">
            <li>Recurring office lunches</li>
            <li>Boardroom meal packages</li>
            <li>Custom branded meal experiences</li>
          </ul>

          <div>
            <Link to="/services/corporate-catering-form" className="inline-block mt-4 px-6 py-3 text-white bg-teal-600 rounded-full text-lg font-medium hover:bg-teal-700 transition duration-300 shadow-lg" >
            Book a Consultation
          </Link>
            
              
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateCatering;
