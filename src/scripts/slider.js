import Swiper, { Navigation } from "swiper";
import 'swiper/css';

export const initSlider = () => {
  new Swiper('.showcase-slider', {
    modules: [Navigation],
    loop: true,
    slidesPerView: 3,
    speed: 1800,
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
}