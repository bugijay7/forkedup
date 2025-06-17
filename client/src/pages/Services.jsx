import { Link } from 'react-router-dom';
import { FaUtensils, FaTruckMoving, FaBoxOpen, FaBriefcase } from 'react-icons/fa';

function ServicesPage() {
  return (
    <section className="min-h-screen py-16 px-6 mt-10">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white-900">Explore Our Services</h1>
          <p className="mt-4 text-white-600 max-w-2xl mx-auto">
            Whether you're hosting an event or planning your weekly meals, Forked Up has a service designed just for you.
          </p>
        </header>

        {/* Service Cards */}
        <div className="grid gap-10 grid-cols-2 md:grid-cols-2 max-w-[800px] mx-auto" >

          {/* Reservation */}
          <Link
            to="/services/reservations"
            className="group bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition"
          >
            <div className="flex flex-col items-center text-center">
              <FaUtensils className="text-4xl text-red-600 mb-4 group-hover:scale-110 transition" />
              <h2 className="text-xl font-semibold text-zinc-800">Reservations</h2>
              <p className="text-zinc-600 mt-2 text-sm">
                Secure your table in advance for a smooth dining experience.
              </p>
            </div>
          </Link>

          {/* Off-site Catering */}
          <Link
            to="/services/offsite-catering"
            className="group bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition"
          >
            <div className="flex flex-col items-center text-center">
              <FaTruckMoving className="text-4xl text-yellow-500 mb-4 group-hover:scale-110 transition" />
              <h2 className="text-xl font-semibold text-zinc-800">Off-site Catering</h2>
              <p className="text-zinc-600 mt-2 text-sm">
                Let us bring the kitchen to your weddings, parties, or events.
              </p>
            </div>
          </Link>

          {/* Meal Packages */}
          <Link
            to="/services/meal-packages"
            className="group bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition"
          >
            <div className="flex flex-col items-center text-center">
              <FaBoxOpen className="text-4xl text-green-600 mb-4 group-hover:scale-110 transition" />
              <h2 className="text-xl font-semibold text-zinc-800">Meal Packages</h2>
              <p className="text-zinc-600 mt-2 text-sm">
                Order family combos, lunch boxes, or weekly plans — all ready to eat.
              </p>
            </div>
          </Link>

          {/* Corporate Catering */}
          <Link
            to="/services/corporate-catering"
            className="group bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition"
          >
            <div className="flex flex-col items-center text-center">
              <FaBriefcase className="text-4xl text-blue-600 mb-4 group-hover:scale-110 transition" />
              <h2 className="text-xl font-semibold text-zinc-800">Corporate Catering</h2>
              <p className="text-zinc-600 mt-2 text-sm">
                Fuel your team with custom meals and recurring office deliveries.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ServicesPage;
