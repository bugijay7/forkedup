import React from 'react';

// Import event images from assets folder
import karaokeImg from '../assets/events/karaoke.jpeg';
import tacoNightImg from '../assets/events/taco-night.jpeg';
import ninetiesNightImg from '../assets/events/90s-night.jpeg';
import jazzNightImg from '../assets/events/jazz-night.jpeg';

const events = [
  {
    id: 1,
    title: 'Karaoke Night',
    date: 'Every Thursday · 8 PM',
    description:
      'Bring out your inner star! Enjoy food, drinks, and an open mic for all music lovers.',
    image: karaokeImg,
    tag: 'WEEKLY',
  },
  {
    id: 2,
    title: 'Taco Tuesdays',
    date: 'Every Tuesday · All Day',
    description:
      'Delicious tacos at discounted prices. Bring friends for a tasty Tuesday!',
    image: tacoNightImg,
    tag: 'SPECIAL',
  },
  {
    id: 3,
    title: '90s Theme Night',
    date: '1st Saturday of the Month · 7 PM',
    description:
      'Relive the 90s with retro music, costumes, and themed drinks. Dress to impress!',
    image: ninetiesNightImg,
    tag: 'MONTHLY',
  },
  {
    id: 4,
    title: 'Jazz & Wine Evening',
    date: 'Fridays · 6 PM to Late',
    description:
      'Smooth live jazz and curated wine pairings for a classy, relaxing evening.',
    image: jazzNightImg,
    tag: 'WEEKEND',
  },
];

function EventsPage() {
  return (
    <div className="min-h-screen px-6 py-20 max-w-7xl mx-auto mt-20">
      <h1 className="text-4xl font-bold text-center text-white mb-12">Upcoming Events</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col"
          >
            <div className="h-56 w-full overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4 flex flex-col justify-between h-full">
              <div>
                <span className="text-xs bg-rose-600 text-white px-2 py-1 rounded-full shadow-sm">
                  {event.tag}
                </span>
                <h2 className="text-xl text-white font-semibold mt-3">{event.title}</h2>
                <p className="text-sm text-gray-400 mt-1">{event.date}</p>
                <p className="text-sm text-gray-300 mt-2">{event.description}</p>
              </div>

             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventsPage;
