import React from 'react';
import img1 from '../assets/gallery/image1.jpeg';
import img2 from '../assets/gallery/image2.jpeg';
import img3 from '../assets/gallery/image3.jpeg';
import img4 from '../assets/gallery/image4.jpeg';
import img5 from '../assets/gallery/image5.jpeg';
import img6 from '../assets/gallery/image6.jpeg';
import img7 from '../assets/gallery/image7.jpeg';
import img8 from '../assets/gallery/image8.jpeg';
import img9 from '../assets/gallery/image9.jpeg';
import img10 from '../assets/gallery/image10.jpeg';
import img11 from '../assets/gallery/image11.jpeg';
import img12 from '../assets/gallery/image12.jpeg';

function GalleryPage() {
  const images = [
    img1, img2, img3,
    img4, img5, img6,
    img7, img8, img9,
    img10, img11, img12,
  ];

  const chunkedImages = [0, 3, 6, 9].map(start => images.slice(start, start + 3));

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto mt-20">
      <h1 className="text-3xl font-bold text-center mb-10 text-white">Gallery</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {chunkedImages.map((group, groupIndex) => (
          <div key={groupIndex} className="grid gap-4">
            {group.map((src, i) => (
              <div key={i}>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={src}
                  alt={`Gallery ${groupIndex * 3 + i + 1}`}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GalleryPage;
