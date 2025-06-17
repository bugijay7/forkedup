import React from 'react';
import {
  FaUtensils,
  FaMapMarkerAlt,
  FaRegClock,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';
import bgImage from '../assets/bg-contact.jpeg'; // ✅ Replace with your About-themed image if needed

function About() {
  return (
    <section
      className="min-h-screen bg-cover bg-center bg-no-repeat px-6 py-12 flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-10 w-full max-w-6xl text-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">About Forked Up Restaurant</h2>
          <p className="text-gray-200">
            A unique culinary experience where passion meets flavor. Discover what makes us Nairobi’s top food destination.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* About Info */}
          <div className="space-y-6 text-base">
            <div className="flex items-start gap-4">
              <FaUtensils className="text-xl text-yellow-300 mt-1" />
              <p>
                At <strong>Forked Up</strong>, we pride ourselves on fusing bold African ingredients with contemporary culinary artistry. Whether it’s your first visit or you’re a regular, expect creative dishes served with a smile.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <FaRegClock className="text-xl text-green-300 mt-1" />
              <p>
                Open daily from <strong>8:00 AM – 10:00 PM</strong>. Whether you're in the mood for breakfast, lunch, dinner, or a late-night snack — we’ve got you covered.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-xl text-red-300 mt-1" />
              <p>
                Located at: <strong>123 EEE Blvd, Nairobi City, KE</strong>. Right in the heart of Kingeero.
              </p>
            </div>

            {/* Social Media */}
            <div className="flex gap-6 pt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-blue-500 hover:text-blue-700"
              >
                <FaFacebook />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-pink-400 hover:text-pink-600"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-sky-400 hover:text-sky-600"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Embedded Map */}
          <div className="rounded-lg overflow-hidden shadow-lg border-2 border-white/30">
            <iframe
              title="Forked Up Restaurant Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63823.33702422492!2d36.6641152!3d-1.1894783999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f18af66ecf92b%3A0x3e2c74a0bca0e2a!2sKingeero%20juction!5e0!3m2!1sen!2ske!4v1747143446227!5m2!1sen!2ske"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
