import { Link } from 'react-router-dom';
import { FaTwitter, FaYoutube, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white w-full py-10 px-4">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start gap-8">

        {/* Column 1 */}
        <div>
          <h6 className="text-lg font-semibold mb-2">Services</h6>
          <ul className="space-y-1">
            <li><Link to="/services/offsite-catering" className="hover:underline">Offsite Catering</Link></li>
            <li><Link to="/services/corporate-catering" className="hover:underline">Corporate Catering</Link></li>
            <li><Link to="/order" className="hover:underline">Orders</Link></li>
            <li><Link to="/services" className="hover:underline">All Services</Link></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h6 className="text-lg font-semibold mb-2">Forked Up</h6>
          <ul className="space-y-1">
            <li><Link to="/services/reservations" className="hover:underline">Reservations</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            <li><Link to="/events" className="hover:underline">Events</Link></li>
            <li><Link to="/gallery" className="hover:underline">Gallery</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h6 className="text-lg font-semibold mb-2">Legal</h6>
          <ul className="space-y-1">
            <li><Link to="/terms" className="hover:underline">Terms of Use</Link></li>
            <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link to="/cookies" className="hover:underline">Cookie Policy</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-[1200px] mx-auto mt-10 pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} ForkedUp. All rights reserved.</p>
        <div className="flex gap-5 text-xl">
          <a href="#"><FaTwitter className="hover:text-blue-400" /></a>
          <a href="#"><FaYoutube className="hover:text-red-500" /></a>
          <a href="#"><FaFacebookF className="hover:text-blue-500" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
