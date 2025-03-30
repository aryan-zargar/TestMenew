import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SteakHouseIcon from "../assets/SteakHouseLogo.png";
import RamenIcon from "../assets/ramenLogo.png";
import LobsterIcon from "../assets/lobsterLogo.png";
import BurgerIcon from "../assets/burgerlogo.png";
import PizzaLogo from "../assets/pizzaLogo.png";

const logos = [
  { id: 1, src: SteakHouseIcon, alt: "SteakHouse Icon" },
  { id: 2, src: RamenIcon, alt: "Ramen Icon" },
  { id: 3, src: LobsterIcon, alt: "Lobster Icon" },
  { id: 4, src: BurgerIcon, alt: "Burger Icon" },
  { id: 5, src: PizzaLogo, alt: "Pizza Icon" },
];

const LogoCarousel = ({ activeIndex, setActiveIndex, sliderRef }) => {
  const internalSliderRef = useRef(null);
  const slidesToShow = logos.length < 5 ? 3 : 5;

  useEffect(() => {
    if (internalSliderRef.current) {
      internalSliderRef.current.slickGoTo(activeIndex);
    }
  }, [activeIndex]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
    afterChange: setActiveIndex,
  };

  return (
    <div className={slidesToShow === 5 ? "w-[125dvw] -mb-34" : "w-[75dvw] -mb-22"}>
      <Slider
        {...settings}
        ref={(el) => {
          internalSliderRef.current = el;
          if (sliderRef) sliderRef.current = el;
        }}
      >
        {logos.map((logo, index) => {
          const distance = Math.min(
            Math.abs(activeIndex - index),
            logos.length - Math.abs(activeIndex - index)
          );

          let heightOffset = "";
          if (distance === 0) heightOffset = slidesToShow === 5 ? "-mt-12" : "-mt-15";
          else if (distance === 1) heightOffset = "-mt-8";
          else heightOffset = logos.length !== 4 ? "mt-7 mb-6" : "";

          return (
            <div
              key={logo.id}
              className={`w-26 my-20 p-2 ${logos.length !== 4 ? "mx-[29dvw]" : "mx-[3dvw]"} flex justify-center`}
            >
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