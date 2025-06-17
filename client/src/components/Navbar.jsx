import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineMenu, HiX } from 'react-icons/hi';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="bg-zinc-900 fixed top-0 left-0 right-0 w-full z-50 px-4 py-4 shadow-lg max-w-[1200px] mx-auto">
      <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between">
        {/* Logo and Toggle */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link to="/" className="text-2xl font-bold text-white">
            ForkedUp
          </Link>
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiOutlineMenu />}
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`flex flex-col md:flex-row gap-4 md:gap-6 mt-4 md:mt-0 text-white text-base font-medium ${
            menuOpen ? 'block' : 'hidden md:flex'
          }`}
        >

        <Link to="/services">Services</Link>
          <li><Link to="/menu" className="hover:underline"> Menu</Link></li>
           <li><Link to="/order" className="hover:underline"> Order</Link></li>
        
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
