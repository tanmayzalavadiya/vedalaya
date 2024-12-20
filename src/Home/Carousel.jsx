import React, { useState } from 'react';
import one from '../images/photos/one.png';
import two from '../images/photos/two.png';
import three from '../images/photos/three.png';
import four from '../images/photos/four.png';
import five from '../images/photos/five.png';
// import six from '../images/photos/six.png';
// import seven from '../images/photos/seven.png';
// import eight from '../images/photos/eight.png';

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    { id: 1, image: one, title: 'Card 1' },
    { id: 2, image: two, title: 'Card 2' },
    { id: 3, image: three, title: 'Card 3' },
    { id: 4, image: four, title: 'Card 4' },
    { id: 5, image: five, title: 'Card 5' },
    // { id: 6, image: six, title: 'Card 6' },
    // { id: 7, image: seven, title: 'Card 7' },
    // { id: 8, image: eight, title: 'Card 8' },
  ];

  const cardsPerPage = 4;
  const totalPages = Math.ceil(cards.length / cardsPerPage);

  const renderCards = () => {
    const startIndex = currentIndex * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    return cards.slice(startIndex, endIndex).map((card) => (
      <div
        key={card.id}
        className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md"
      >
        <img
          src={card.image}
          alt={card.title}
          className="w-48 h-48 rounded-lg object-cover"
        />
        <h3 className="mt-4 text-lg font-semibold">{card.title}</h3>
      </div>
    ));
  };

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      {/* Carousel */}
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {renderCards()}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? 'bg-blue-500 scale-110' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
