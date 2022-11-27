import SwiperCore, {
  Autoplay,
  EffectFade,
  Grid,
  Navigation,
  Pagination,
} from "swiper";
SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay, Grid]);

export const testimonialsSlider = {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: false,
  speed: 1000,
  pagination: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
};
