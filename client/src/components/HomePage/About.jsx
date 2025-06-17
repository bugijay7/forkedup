import React from 'react';
import ChefImage from '../../assets/chef-kenyan.jpeg'; // Update path if needed

function About() {
  return (
    <div>
      <section id="about" className="py-16 bg-zink-700">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center max-w-[800px] mx-auto">
            <div className="md:w-1/2 mb-8 md:mb-0">
            <figure>
              <img
                src={ChefImage}
                alt="Kenyan Chef"
                className="rounded-lg shadow-lg w-[250px] h-[370px]"
              />
              </figure><figcaption className="text-orange-400 text-xs font-thin italic mt-2">
  Victor Odhiambo <br /> Founder: Forked Up
</figcaption>
            </div>
            <div className="md:w-2/3 md:pl-12">
              <h2 className="text-3xl text-orange-600 mb-6 font-bold">
                About Forked Up
              </h2>
              <p className="text-white font-normal mb-4 text-xs">
                Welcome to <span className="text-orange-600 font-bold">Forked Up</span> – a modern twist on traditional Kenyan dining. Since opening our doors in 2015, we've been on a mission to serve authentic Kenyan dishes with bold flavors, fresh ingredients, and a vibrant spirit that celebrates our heritage.
              </p>
              <p className="text-white font-normal mb-4 text-xs">
                From our signature nyama choma and steaming plates of ugali, to hearty matoke, chapati, and local vegetable stews, every dish is a tribute to Kenya’s diverse culinary culture. Our chefs combine tradition with creativity to bring you unforgettable flavors in every bite.
              </p>
              <p className="text-white font-normal mb-6 text-xs">
                Whether you're grabbing a quick bite or enjoying a full meal with family and friends, Forked Up offers a warm, welcoming experience with a modern edge. Karibu sana!
              </p>
              <div className="flex space-x-4">
                <div className="bg-white p-4 rounded-lg shadow text-left">
                  <span className="text-5xl font-bold text-orange-600">19+</span>
                  <p className="text-gray-600 text-xs font-normal">Years Serving Kenya</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow text-left">
                  <span className="text-orange-600 text-5xl font-bold">30+</span>
                  <p className="text-gray-600 text-xs font-normal">Authentic Dishes</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow text-left">
                  <span className="text-orange-600 text-5xl font-bold">15k</span>
                  <p className="text-gray-600 text-xs font-normal">Satisfied Guests</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
