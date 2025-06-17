import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home'
import Menu from './pages/Menu'
import Register from './pages/Register'
import AdminPanel from './pages/AdminPanel'
import Cart from './pages/Cart'
import Login from './pages/Login'

import Footer from './components/Footer'
import Navbar from './components/Navbar'

import JuicesPage from './pages/JuicesSoda'
import MainDishes from './pages/MainDishes'
import SnacksPage from './pages/SnacksPage'
import TeasPage from './pages/TeasPage'
import CoffeePage from './pages/CoffeePage'
import AccompanimentPage from './pages/AccompanimentPage'
import SidesPage from './pages/SidesPage'
import OrderPage from './pages/orderPage';
import Services from './pages/Services';
import Reservation from './pages/services/Reservations';
import OffSiteCatering from './pages/services/OffsiteCatering';
import MealPackages from './pages/services/MealPackages';
import CorporateCatering from './pages/services/CorporateCatering';
import CopCateringForm from './pages/services/CopCateringForm';
import OffsiteCateringForm from './pages/services/OffsiteCateringForm';
import ReservationForm from './pages/services/ReservationForm';
import EventsPage from './pages/EventsPage';
import CheckoutPage from './pages/CheckoutPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/Contact'




function App() {
    const [cart, setCart] = useState([]);

  const handleAddToCart = (item, quantity) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, { ...item, quantity }]);
    }

    console.log(`${item.name} added to cart x${quantity}`);
  };

  return (
      <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/menu" element={ <Menu />} />
      <Route path="/cart" element={ <Cart />} />
      <Route path="/login" element={ <Login />} />
      <Route path="/register" element={ <Register />} />
      <Route path="/admin" element={ <AdminPanel />} />
      <Route path="*" element={ <h1>404 Not Found</h1>} />
      <Route path="/accompaniments" element={ <AccompanimentPage addToCart={handleAddToCart} /> } />
      <Route path="/sides" element={ <SidesPage addToCart={handleAddToCart} /> } />
      <Route path="/coffees" element={ <CoffeePage addToCart={handleAddToCart} /> } />
      <Route path="/juices" element={ <JuicesPage  addToCart={handleAddToCart}/> } />
      <Route path="/mains" element={ <MainDishes addToCart={handleAddToCart} /> } />
      <Route path="/snacks" element={ <SnacksPage  addToCart={handleAddToCart} /> } />
      <Route path="/teas" element={ <TeasPage addToCart={handleAddToCart} /> } />
      <Route path="/order" element={ <OrderPage addToCart={handleAddToCart} /> } />
      <Route path="/services" element={ <Services /> } />
      <Route path="/services/reservations" element={<Reservation />} />
      <Route path="/services/offsite-catering" element={<OffSiteCatering />} />
      <Route path="/services/meal-packages" element={<MealPackages />} />
      <Route path="/services/corporate-catering" element={<CorporateCatering />} />
      <Route path="/services/corporate-catering-form" element={<CopCateringForm />} />
      <Route path="/services/offsite-catering-form" element={<OffsiteCateringForm />} />
      <Route path="/services/reservation-form" element={<ReservationForm />} />
      <Route path="/events" element={ <EventsPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/contact" element={<ContactPage />} />



      </Routes>
      <Footer />
      </Router>
  )
}

export default App
