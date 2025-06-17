import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

import ugali from '../../assets/dishes/ugali.jpeg';
import nyamaChoma from '../../assets/dishes/nyama-choma.jpeg';
import samosa from '../../assets/dishes/samosa.jpeg';
import chapati from '../../assets/dishes/chapati.jpeg';
import mandazi from '../../assets/dishes/mandazi.jpeg';
import matoke from '../../assets/dishes/matoke.jpeg';

const dishesLeft = [
  {
    id: 1,
    name: 'Ugali',
    description: 'Cornmeal staple served with veggies or stew',
    image: ugali,
  },
  {
    id: 2,
    name: 'Nyama Choma',
    description: 'Grilled meat, a Kenyan BBQ favorite',
    image: nyamaChoma,
  },
   { id: 3,
     name: 'Matoke', 
     description: 'Slow cooked Banana Stew Delight', 
     image: matoke },
  
];

const dishesRight = [
  {
    id: 4,
    name: 'Parattha',
    description: 'Soft layered flatbread, perfect with stew',
    image: chapati,
  },
  {
    id: 5,
    name: 'Mandazi',
    description: 'Kenyan doughnut, sweet and fluffy',
    image: mandazi,
  },
 
  {
    id: 6,
    name: 'Samosa',
    description: 'Crispy pastry filled with spicy meat or veggies',
    image: samosa,
  },
];

function MenuSpecialities() {
  const renderList = (dishes) =>
    dishes.map((dish, index) => (
      <li key={dish.id} className="flex items-center gap-4 p-4 border-b">
        <div className="text-3xl font-thin text-gray-400">{String(index + 1).padStart(2, '0')}</div>
        <img src={dish.image} alt={dish.name} className="w-12 h-12 rounded-lg object-cover" />
        <div className="flex-1">
          <h3 className="font-semibold">{dish.name}</h3>
          <p className="text-xs uppercase font-semibold text-gray-500">{dish.description}</p>
        </div>
        <button className="btn btn-sm btn-ghost">
         <HiArrowNarrowRight className="w-5 h-5 text-current" />

        </button>
      </li>
    ));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 py-8 max-w-[1200px] mx-auto">
      <section className="bg-tranparent rounded-lg shadow-md">
        <h2 className="p-4 pb-2 text-xs uppercase tracking-wide text-gray-500">BEST SELLING DISHES</h2>
        <ul>{renderList(dishesLeft)}</ul>
      </section>

      <section className="bg-transparent rounded-lg shadow-md">
        <h2 className="p-4 pb-2 text-xs uppercase tracking-wide text-gray-500">BEST SNACKS DISHES</h2>
        <ul>{renderList(dishesRight)}</ul>
      </section>
    </div>
  );
}

export default MenuSpecialities;
