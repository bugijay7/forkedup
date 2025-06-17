import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import gastronomy from '../../assets/highlights/gastronomy.jpeg';
import ambience from '../../assets/highlights/ambience.jpeg';
import culture from '../../assets/highlights/culture.jpeg';

function Highlights() {
  useEffect(() => {
    const container = document.querySelector('.scroll-container');
    const sections = document.querySelectorAll('.scroll-section');
    const dots = document.querySelectorAll('.dot');
    let isScrolling = false;

    function scrollToSection(index) {
      if (!isScrolling) {
        isScrolling = true;
        sections[index].scrollIntoView({ behavior: 'smooth' });
        updateDots(index);
        setTimeout(() => {
          isScrolling = false;
        }, 1000);
      }
    }

    function updateDots(index) {
      dots.forEach((dot, i) => {
        dot.className = `dot w-3 h-3 rounded-full transition-all duration-300 ${
          i === index ? 'bg-white scale-150' : 'bg-white/20 hover:bg-white hover:scale-150'
        }`;
      });
    }

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => scrollToSection(index));
    });

    container.addEventListener('scroll', () => {
      const index = Math.round(container.scrollTop / window.innerHeight);
      updateDots(index);
    });

    updateDots(0);
  }, []);

  return (
    <div className="scroll-container h-screen overflow-y-auto overflow-x-hidden bg-neutral-950 text-white scroll-smooth">
      {/* Section 1 - Gastronomy */}
      <section className="scroll-section h-screen flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden group">
          <img
            src={gastronomy}
            alt="Gastronomy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 group-hover:opacity-0 transition-opacity duration-500"></div>
        </div>
        <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center p-8 bg-neutral-950">
          <div className="max-w-lg animate-float">
            <span className="text-neutral-400 text-sm tracking-wide font-mono">01 / GASTRONOMY</span>
            <h2 className="mt-4 text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
              Bold Kenyan Flavors
            </h2>
            <p className="mt-6 text-neutral-400 text-lg">
              Gourmet reinventions of Kenyan staples like Ugali, Nyama Choma, and Coconut Sukuma.
            </p>
            <button className="mt-8 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full text-sm font-medium transition-all hover:tracking-wide">
             <Link to="/menu" className="hover:underline">
              Taste the Menu →
              </Link>
            </button>
          </div>
        </div>
      </section>

      {/* Section 2 - Ambience */}
      <section className="scroll-section h-screen flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center p-8 bg-neutral-900">
          <div className="max-w-lg animate-float">
            <span className="text-neutral-400 text-sm tracking-wide font-mono">02 / AMBIENCE</span>
            <h2 className="mt-4 text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
              Nairobi Nights
            </h2>
            <p className="mt-6 text-neutral-400 text-lg">
              Modern Afro-contemporary design meets cozy lighting with rooftop city views.
            </p>
             <button className="mt-8 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full text-sm font-medium transition-all hover:tracking-wide">
             <Link to="/gallery" className="hover:underline">
              See The Space  →
              </Link>
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden group">
          <img
            src={ambience}
            alt="Ambience"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/70 to-black/40 group-hover:opacity-0 transition-opacity duration-500"></div>
        </div>
      </section>

      {/* Section 3 - Culture */}
      <section className="scroll-section h-screen flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden group">
          <img
            src={culture}
            alt="Culture"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 group-hover:opacity-0 transition-opacity duration-500"></div>
        </div>
        <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center p-8 bg-neutral-950">
          <div className="max-w-lg animate-float">
            <span className="text-neutral-400 text-sm tracking-wide font-mono">03 / CULTURE</span>
            <h2 className="mt-4 text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
              Rooted in Heritage
            </h2>
            <p className="mt-6 text-neutral-400 text-lg">
              Forked Up celebrates Kenya’s diverse traditions through storytelling, cuisine, and hospitality.
            </p>
           <Link to="/events">
  <button className="mt-8 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full text-sm font-medium transition-all hover:tracking-wide">
    Experience More →
  </button>
</Link>

          </div>
        </div>
      </section>

      {/* Scroll Navigation Dots */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
        {[0, 1, 2].map((_, index) => (
          <button
            key={index}
            className="dot w-3 h-3 rounded-full bg-white/20 hover:bg-white hover:scale-150 transition"
            title={`Section ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Highlights;
