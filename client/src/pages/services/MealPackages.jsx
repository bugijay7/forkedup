import React from 'react';
import familyFeast from '../../assets/meal-packages/familyFeast.jpeg';
import lunchBox from '../../assets/meal-packages/lunchBox.jpeg';
import weeklyPlan from '../../assets/meal-packages/weeklyPlan.jpeg';
import partyTrays from '../../assets/meal-packages/partyTrays.jpeg';
import pizzaCombo from '../../assets/meal-packages/pizzaCombo.jpeg';
import corporateCatering from '../../assets/meal-packages/corporateCatering.jpeg';
import groceryBox from '../../assets/meal-packages/groceryBox.jpeg';
import chefsSpecial from '../../assets/meal-packages/chefsSpecial.jpeg';

const packages = [
  {
    title: 'Family Feast',
    description:
      'A hearty combo for 4–6 people including grilled meats, veggies, and sides. Perfect for family gatherings.',
    image: familyFeast,
  },
  {
    title: 'Lunch Box',
    description:
      'Affordable and delicious lunch options with a choice of protein, starch, and a fresh juice.',
    image: lunchBox,
  },
  {
    title: 'Weekly Meal Plan',
    description:
      'Customizable weekly meals delivered daily. Ideal for busy professionals and fitness lovers.',
    image: weeklyPlan,
  },
  {
    title: 'Party Trays',
    description:
      'Catering trays for events – choose from a variety of cuisines, from Kenyan classics to fusion bites.',
    image: partyTrays,
  },
  {
    title: 'Pizza Combo',
    description:
      'Two large wood-fired pizzas, fries, and 1.5L soda. Great for small celebrations or weekend hangouts.',
    image: pizzaCombo,
  },
  {
    title: 'Corporate Catering',
    description:
      'Professional meal service for office teams – buffet or boxed lunches available.',
    image: corporateCatering,
  },
  {
    title: 'Grocery Box',
    description:
      'Fresh produce, meats, and Forked Up spices packed weekly – cook at home with our recipes!',
    image: groceryBox,
  },
  {
    title: "Chef’s Special",
    description:
      'A premium 3-course meal curated by our head chef. Changes weekly, made with seasonal ingredients.',
    image: chefsSpecial,
  },
];

function MealPackages() {
  return (
    <section className=" py-16 px-6 sm:px-10 lg:px-20 mt-10 mb-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-white text-center mb-12">
          Our Signature Meal Packages
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-3xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-56 object-cover transform group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{pkg.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{pkg.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MealPackages;
