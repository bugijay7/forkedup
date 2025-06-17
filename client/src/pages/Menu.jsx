import React from 'react';
import { Link } from 'react-router-dom';

import accompanimentsImg from '../assets/menu/accompaniments.jpeg';
import sidesImg from '../assets/menu/sides.jpeg';
import coffeesImg from '../assets/menu/coffees.jpeg';
import juicesImg from '../assets/menu/juices.jpeg';
import mainsImg from '../assets/menu/mains.jpeg';
import snacksImg from '../assets/menu/snacks.jpeg';
import teasImg from '../assets/menu/teas.jpeg';

const menuItems = [
  { name: 'Accompaniments', path: '/accompaniments', img: accompanimentsImg },
  { name: 'Sides', path: '/sides', img: sidesImg },
  { name: 'Coffees', path: '/coffees', img: coffeesImg },
  { name: 'Juices', path: '/juices', img: juicesImg },
  { name: 'Main Dishes', path: '/mains', img: mainsImg },
  { name: 'Snacks', path: '/snacks', img: snacksImg },
  { name: 'Teas', path: '/teas', img: teasImg },
];

function Menu() {
  const mainDish = menuItems.find((item) => item.name === 'Main Dishes');
  const otherItems = menuItems.filter((item) => item.name !== 'Main Dishes');

  return (
    <div className="min-h-screen p-4 sm:p-6 max-w-[1400px] mx-auto mt-20">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-white">
        Our Menu
      </h1>

      <div className="flex flex-col lg:flex-row gap-6 items-stretch">
        {/* Main Dish card */}
        <Link
          to={mainDish.path}
          className="w-full lg:w-1/3 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition duration-300 flex flex-col"
        >
          <div className="h-64 sm:h-[380px] overflow-hidden rounded-t-md">
            <img
              src={mainDish.img}
              alt={mainDish.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 flex flex-col gap-2">
            <div className="w-fit rounded-full bg-rose-600 text-white text-xs px-3 py-1 shadow-sm">
              POPULAR
            </div>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
              {mainDish.name}
            </h2>
            <p className="text-gray-600 text-sm">
              Click to explore our delicious {mainDish.name.toLowerCase()} options.
            </p>
          </div>
        </Link>

        {/* Other menu items grid */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherItems.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition duration-300 flex flex-col"
            >
              <div className="h-40 sm:h-44 overflow-hidden rounded-t-md">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3 flex flex-col gap-1">
                <div className="w-fit rounded-full bg-rose-600 text-white text-[10px] px-2 py-[2px] shadow-sm">
                  POPULAR
                </div>
                <h3 className="text-sm font-semibold text-gray-800">{item.name}</h3>
                <p className="text-gray-500 text-xs">
                  Click to explore our {item.name.toLowerCase()}.
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
