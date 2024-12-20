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

  // const nextSlide = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  // };

  const renderCards = () => {
    const startIndex = currentIndex * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    return cards.slice(startIndex, endIndex).map((card) => (
      <div
        key={card.id}
        className="card"
        style={{
          textAlign: 'center',
          margin: '10px',
          borderRadius: '10px',
          padding: '20px',
          background: '#f0f0f0',
        }}
      >
        <img
          src={card.image}
          alt={card.title}
          className='w-64 h-64 rounded-lg'
        />
        <h3>{card.title}</h3>
      </div>
    ));
  };

  return (
    <div className='max-w-screen-xl mx-auto'>
      <div className='flex justify-around'>
        {renderCards()}
      </div>

      <div className='flex justify-center mt-4'>
        {Array.from({ length: totalPages }).map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 mx-1 rounded-full ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
