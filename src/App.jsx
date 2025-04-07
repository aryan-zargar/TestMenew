import { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import { sliderSettings } from "./constants/slider";
import LogoCarousel from "./components/LogoCarousel";
import SteakLogo from "./assets/SteakHouseLogo.png";
import steakBg from "./assets/steakBackground.avif";
import ramenLogo from "./assets/ramenLogo.png";
import ramenBg from "./assets/ramenBackground.avif";
import lobsterLogo from "./assets/lobsterLogo.png";
import lobsterBg from "./assets/lobsterBackground.png";
import burgerLogo from "./assets/burgerlogo.png";
import burgerBg from "./assets/burgerBg.avif";
import pizzaLogo from "./assets/pizzaLogo.png";
import pizzaBg from "./assets/pizzaBg.jpg";
function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);
  const logoSliderRef = useRef(null);

  const foodcourtList = [
    {
      id: 1,
      name: "Shean's Steak House",
      description:
        "طعمی جذاب و فضایی دلنشین را در خانه استیک با ما تجربه کنید!",
      backgroundPic: steakBg,
      logo: SteakLogo,
      alt: "SteakHouse Icon",
    },
    {
      id: 2,
      name: "Japan Ramen Lounge",
      description:
        "تو این رستوران ما بهت یاد می‌دیم که چجوری با چاپستیک نودل رو حرفه‌ای‌تر از چینی‌ها بخوری!",
      backgroundPic: ramenBg,
      logo: ramenLogo,
      alt: "Ramen Icon",
    },
    {
      id: 3,
      name: "Jack's Seafood",
      description: "ما از دریا تا سر میز شما میزبانتان هستیم.",
      backgroundPic: lobsterBg,
      logo: lobsterLogo,
      alt: "Lobster Icon",
    },
    {
      id: 4,
      name: "Burger King",
      description: "مزه‌ها را با ما تجربه کنید.",
      backgroundPic: burgerBg,
      logo: burgerLogo,
      alt: "Burger Icon",
    },
    {
      id: 5,
      name: "Pizza Hut",
      description: "ما پیتزا را از قلب ایتالیا برای شما می‌آوریم.",
      backgroundPic: pizzaBg,
      logo: pizzaLogo,
      alt: "Pizza Icon",
    },
  ];

  useEffect(() => {
    console.log(activeIndex);
    if (sliderRef.current && logoSliderRef.current) {
      sliderRef.current.slickGoTo(activeIndex);
      logoSliderRef.current.slickGoTo(activeIndex);
    }
  }, [activeIndex]);

  return (
    <div
      className="h-[100dvh] w-full transition-all duration-500 relative overflow-hidden"
      style={{
        backgroundImage: `url(${foodcourtList[activeIndex].backgroundPic})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Slider
        {...sliderSettings(1, setActiveIndex)}
        ref={sliderRef}
        className="h-full flex items-center"
      >
        {foodcourtList.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center h-[100dvh]"
          >
            <div className="flex justify-center rounded-3xl p-3">
              <img className="size-56" src={item.logo} alt={item.name} />
            </div>
            <div
              className="mx-10 font-medium text-zinc-200 text-2xl bg-[#ffffff40] text-center rounded-3xl p-3"
              dir="rtl"
            >
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-full flex justify-center">
        <LogoCarousel
          slides={foodcourtList}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          sliderRef={logoSliderRef}
        />
      </div>
    </div>
  );
}

export default App;
