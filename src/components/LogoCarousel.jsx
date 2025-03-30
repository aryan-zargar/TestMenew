import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SteakHouseIcon from "../assets/SteakHouseLogo.png";
import RamenIcon from "../assets/ramenLogo.png";
import LobsterIcon from "../assets/lobsterLogo.png";
import BurgerIcon from "../assets/burgerlogo.png";
import pizzaLogo from '../assets/pizzaLogo.png';

const logos = [
  { id: 1, src: SteakHouseIcon, alt: "SteakHouse Icon" },
  { id: 2, src: RamenIcon, alt: "Ramen Icon" },
  { id: 3, src: LobsterIcon, alt: "Lobster Icon" },
  { id: 4, src: BurgerIcon, alt: "Burger Icon" },
  { id: 5, src: pizzaLogo, alt: "Pizza Icon" },
];

const LogoCarousel = ({ activeIndex, setActiveIndex, sliderRef }) => {
  const internalSliderRef = useRef(null);
  const slidesToShow = Number(logos.length < 5 ? 3 : 5)
  console.log(slidesToShow)
  useEffect(() => {
    if (internalSliderRef.current) {
      internalSliderRef.current.slickGoTo(activeIndex);
    }
  }, [activeIndex]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
    afterChange: (current) => setActiveIndex(current),
  };

  return (
    <div className={slidesToShow == 5?"w-[125dvw] -mb-34":"w-[75dvw] -mb-22"}>
      <Slider
        {...settings}
        ref={(el) => {
          internalSliderRef.current = el;
          if (sliderRef) sliderRef.current = el;
        }}
      >
        {logos.map((logo, index) => {
          // Get the shortest distance between the index and activeIndex in an infinite loop
          const distance = Math.min(
            Math.abs(activeIndex - index),
            logos.length - Math.abs(activeIndex - index)
          );

          // Define heights for a circular shape
          let heightOffset;
          if (distance === 0) heightOffset = slidesToShow === 5?"-mt-12 ":"-mt-15"; // Center logo (highest)
          else if (distance === 1) heightOffset = "-mt-8"; // Adjacent logos (lower)
          else heightOffset = logos.length !== 4?"mt-7 mb-6":""; // Farther logos (lowest)

          return (
            <div className={`w-26 my-20 p-2 ${logos.length !== 4? 'mx-[29dvw]':"mx-[3dvw]"} flex justify-center`} key={logo.id}>
              <img
                className={`w-[70%] rounded-4xl transition-all duration-300 ${heightOffset} 
                  ${index === activeIndex ? "scale-90 ring-4 ring-white bg-[#00000080]" : "ring-3 ring-white bg-[#ffffff40] scale-80 opacity-60"}`}
                src={logo.src}
                alt={logo.alt}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default LogoCarousel;
