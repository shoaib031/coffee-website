import React, { useState } from 'react';

const Seller = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const totalImages = 4;
  const images = [
    './images/coffee1.webp',
    './images/coffee2.webp',
    './images/coffee3.webp',
    './images/coffee4.webp',
    './images/coffee5.webp',
  ];

  const handleArrowClick = (direction) => {
    if (direction === 'left') {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    } else {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  return (
    <div className='pad'>
      <div className='bests'>
        <div className='best'>
          <h2>Our best seller</h2>
          <p>Quis hendrerit dolor magna</p>
        </div>
        <div className='all'>
          <button>See All</button>
        </div>
      </div>
      <div className='carts'>
        <div className='arrow left' onClick={() => handleArrowClick('left')}>&lt;</div>
        {images.slice(currentImageIndex, currentImageIndex + totalImages).map((image, index) => (
          <div key={index} className={`cart cart${index + 1}`}>
            <img src={image} alt={`Coffee ${currentImageIndex + index + 1}`} />
            <span className='kc'>185Kcal</span>
            <h3>Cras sed</h3>
            <p>Feugiat nibh sed pulvinar proin</p>
            <span className='spans'>$ 12.99</span>
          </div>
        ))}
        <div className='arrow right' onClick={() => handleArrowClick('right')}>&gt;</div>
      </div>
    </div>
  );
};

export default Seller;
