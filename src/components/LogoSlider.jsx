import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const LogoSlider = ({ logos }) => {
  const settings = {
    showThumbs: false,
    showStatus: false,
    infiniteLoop: true,
    autoPlay: true,
    interval: 2000,
    swipeable: true,
    emulateTouch: true,
    centerMode: true, // Enable center mode
    centerSlidePercentage: 33.33, // Adjust percentage for 3 logos
    slidesToShow: 3, // Display 3 logos at a time
    slidesToScroll: 1, // Scroll one logo at a time
    className: "max-w-3xl mx-auto", // Adjust max-width as needed
  };

  return (
    <Carousel {...settings}>
      {logos.map((logo, index) => (
        <div key={index} className="flex items-center justify-center">
          <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center bg-gray-200">
            <img src={logo} alt={`Logo ${index + 1}`} className="max-w-full max-h-full object-contain" />
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default LogoSlider;