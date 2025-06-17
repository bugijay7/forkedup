import React from 'react';
import { Link } from 'react-router-dom'
import ReservationImage from '../../assets/reservation.jpeg'; // adjust path if needed

function Reservation() {
  return (
    <section className=" py-16 px-6 md:px-12 lg:px-20 mt-20 mb-20">
      <div className="flex flex-col-reverse lg:flex-row-reverse items-center max-w-6xl mx-auto gap-12 lg:gap-20">
        
        {/* Image Section */}
        <div className="w-full lg:w-1/2 h-64 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
          <img
            src={ReservationImage}
            alt="Restaurant reservation setting"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-white">
          <p className="text-sm uppercase tracking-widest text-red-400 mb-2">
            Plan Ahead
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
            Make a Reservation
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Book your table in advance for a seamless dining experience. Choose your preferred time, party size, and let us take care of the rest.
          </p>
         <Link to="/services/reservation-form" className="inline-block mt-4 px-6 py-3 text-white bg-teal-600 rounded-full text-lg font-medium hover:bg-teal-700 transition duration-300 shadow-lg" >
            Book Now
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Reservation;
