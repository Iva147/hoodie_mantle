import "core-js";
import "../index.html"
import { speedVideo } from "./video";
import { initSlider } from "./slider";
import '../style/index.scss'


document.addEventListener("DOMContentLoaded", () => {
  speedVideo()
  initSlider()
})