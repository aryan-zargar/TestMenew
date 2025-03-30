import React, { useState, useRef } from 'react';

const SpinnableCarousel = () => {
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [rotation, setRotation] = useState(0);
  const carouselRef = useRef();

  const handleMouseDown = (e) => {
    setDragging(true);
    setStartX(e.pageX);
  };

  const handleMouseLeave = () => {
    setDragging(false);
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;

    const diffX = e.pageX - startX;
    const rotationChange = diffX * 0.3; // Adjust sensitivity here
    setRotation(rotation + rotationChange);
    setStartX(e.pageX);
  };

  return (
    <div
      ref={carouselRef}
      className="carousel"
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      style={{
        display: 'flex',
        overflow: 'hidden',
        cursor: dragging ? 'grabbing' : 'grab',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        position: 'relative',
        transformStyle: 'preserve-3d',
        transform: `rotateY(${rotation}deg)`,
        transition: 'transform 0.1s ease-out',
      }}
    >
      <div className="carousel-item" style={{ position: 'absolute', transform: 'rotateY(0deg) translateZ(150px)', transition: 'transform 0.1s' }}>
        <img src="image1.jpg" alt="Item 1" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
      </div>
      <div className="carousel-item" style={{ position: 'absolute', transform: 'rotateY(60deg) translateZ(150px)', transition: 'transform 0.1s' }}>
        <img src="image2.jpg" alt="Item 2" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
      </div>
      <div className="carousel-item" style={{ position: 'absolute', transform: 'rotateY(120deg) translateZ(150px)', transition: 'transform 0.1s' }}>
        <img src="image3.jpg" alt="Item 3" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
      </div>
      <div className="carousel-item" style={{ position: 'absolute', transform: 'rotateY(180deg) translateZ(150px)', transition: 'transform 0.1s' }}>
        <img src="image4.jpg" alt="Item 4" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
      </div>
      {/* Add more items if necessary */}
    </div>
  );
};

export default SpinnableCarousel;
