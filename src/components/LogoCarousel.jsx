import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import { sliderSettings } from "../constants/slider";

const LogoCarousel = ({ slides, activeIndex, setActiveIndex, sliderRef }) => {
  const internalSliderRef = useRef(null);
  const slidesToShow = slides.length < 5 ? 3 : 5;

  useEffect(() => {
    if (internalSliderRef.current) {
      internalSliderRef.current.slickGoTo(activeIndex);
    }
  }, [activeIndex]);

  return (
    <div
      className={slidesToShow === 5 ? "w-[125dvw] -mb-34" : "w-[75dvw] -mb-22"}
    >
      <Slider
        {...sliderSettings(slidesToShow, setActiveIndex)}
        ref={(el) => {
          internalSliderRef.current = el;
          if (sliderRef) sliderRef.current = el;
        }}
      >
        {slides.map((slide, index) => {
          console.log(slide.logo);
          const distance = Math.min(
            Math.abs(activeIndex - index),
            slides.length - Math.abs(activeIndex - index)
          );

          let heightOffset = "";
          if (distance === 0)
            heightOffset = slidesToShow === 5 ? "-mt-12" : "-mt-15";
          else if (distance === 1) heightOffset = "-mt-8";
          else heightOffset = slides.length !== 4 ? "mt-7 mb-6" : "";

          return (
            <div
              key={slide.id}
              className={`w-26 my-20 p-2 ${
                slides.length !== 4 ? "mx-[29dvw]" : "mx-[3dvw]"
              } flex justify-center`}
            >
              <img
                className={`w-[70%] rounded-4xl transition-all duration-300 ${heightOffset} 
                  ${
                    index === activeIndex
                      ? "scale-90 ring-4 ring-white bg-[#00000080]"
                      : "ring-3 ring-white bg-[#ffffff40] scale-80 opacity-60"
                  }`}
                src={slide.logo}
                alt={slide.alt}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default LogoCarousel;
