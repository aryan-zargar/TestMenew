export const sliderSettings = (slidesLength, changeAction) => ({
  dots: false,
  infinite: true,
  speed: 500,
  slidesToScroll: 1,
  slidesToShow: slidesLength,
  autoplay: false,
  arrows: false,
  centerMode: true,
  centerPadding: "0px",
  // afterChange: setActiveIndex,
  beforeChange: (current, next) => changeAction(next),
});
