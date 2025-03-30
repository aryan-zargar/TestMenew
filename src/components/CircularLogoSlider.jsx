import React, { useState } from "react";
import { motion, useDragControls } from "framer-motion";
import SteakHouseIcon from "../assets/SteakHouseLogo.png";
import RamenIcon from "../assets/ramenLogo.png";
import LobsterIcon from "../assets/lobsterLogo.png";

const logos = [
  { id: 1, src: SteakHouseIcon, alt: "SteakHouse Icon" },
  { id: 2, src: RamenIcon, alt: "Ramen Icon" },
  { id: 3, src: LobsterIcon, alt: "Lobster Icon" },
];

const CircularLogoC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const radius = 120; // Circle size
  const controls = useDragControls();

  const handleDragEnd = (_, info) => {
    if (info.offset.x > 50 || info.offset.y < -50) {
      setActiveIndex((prev) => (prev + 1) % logos.length);
    } else if (info.offset.x < -50 || info.offset.y > 50) {
      setActiveIndex((prev) => (prev - 1 + logos.length) % logos.length);
    }
  };

  return (
    <div className="relative w-full h-[200px] overflow-hidden" style={{ clipPath: "inset(0 0 50% 0)" }}>
      <div className="absolute w-full h-full top-[50px] flex justify-center items-center">
        {logos.map((logo, index) => {
          const angle = ((index - activeIndex) / logos.length) * Math.PI * 2;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          return (
            <motion.div
              key={logo.id}
              drag
              dragControls={controls}
              onDragEnd={handleDragEnd}
              className="absolute"
              animate={{ x, y }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className={`w-[60px] h-[60px] cursor-pointer transition-all duration-300 ${
                  index === activeIndex ? "scale-125 ring-4 ring-white" : "opacity-60"
                }`}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default CircularLogoCarousel;