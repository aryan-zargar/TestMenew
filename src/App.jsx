import { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import LogoCarousel from "./components/LogoCarousel";
import steakBg from "./assets/steakBackground.avif";
import ramenBg from "./assets/ramenBackground.avif";
import lobsterBg from "./assets/lobsterBackground.png";
import SteakLogo from "./assets/SteakHouseLogo.png";
import ramenLogo from "./assets/ramenLogo.png";
import lobsterLogo from "./assets/lobsterLogo.png";
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
      description: "طعمی جذاب و فضایی دلنشین را در خانه استیک با ما تجربه کنید!",
      backgroundPic: steakBg,
      Logo: SteakLogo,
    },
    {
      id: 2,
      name: "Japan Ramen Lounge",
      description: "تو این رستوران ما بهت یاد می‌دیم که چجوری با چاپستیک نودل رو حرفه‌ای‌تر از چینی‌ها بخوری!",
      backgroundPic: ramenBg,
      Logo: ramenLogo,
    },
    {
      id: 3,
      name: "Jack's Seafood",
      description: "ما از دریا تا سر میز شما میزبانتان هستیم.",
      backgroundPic: lobsterBg,
      Logo: lobsterLogo,
    },
    {
      id: 4,
      name: "Burger King",
      description: "مزه‌ها را با ما تجربه کنید.",
      backgroundPic: burgerBg,
      Logo: burgerLogo,
    },
    {
      id: 5,
      name: "Pizza Hut",
      description: "ما پیتزا را از قلب ایتالیا برای شما می‌آوریم.",
      backgroundPic: pizzaBg,
      Logo: pizzaLogo,
    },
  ];

  useEffect(() => {
    if (sliderRef.current && logoSliderRef.current) {
      sliderRef.current.slickGoTo(activeIndex);
      logoSliderRef.current.slickGoTo(activeIndex);
    }
  }, [activeIndex]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
    afterChange: setActiveIndex,
  };

  return (
    <div
      className="h-[100dvh] w-full transition-all duration-500 relative overflow-hidden"
      style={{
        backgroundImage: `url(${foodcourtList[activeIndex].backgroundPic})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Slider {...settings} ref={sliderRef} className="h-full flex items-center">
        {foodcourtList.map((item) => (
          <div key={item.id} className="flex flex-col items-center justify-center h-[100dvh]">
            <div className="flex justify-center rounded-3xl p-3">
              <img className="size-56" src={item.Logo} alt={item.name} />
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
        <LogoCarousel activeIndex={activeIndex} setActiveIndex={setActiveIndex} sliderRef={logoSliderRef} />
      </div>
    </div>
  );
}

export default App;