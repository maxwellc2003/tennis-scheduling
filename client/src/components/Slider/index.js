import React, {useEffect} from "react";

import "../../assets/css/slider.css";
import responsiveSlider from "../../assets/js/slider.js";

import MainPage01 from "../../assets/images/main-page-01.jpg";
import MainPage02 from "../../assets/images/main-page-02.jpg";
import MainPage03 from "../../assets/images/main-page-03.jpg";
import MainPage04 from "../../assets/images/main-page-04.jpg";
import MainPage05 from "../../assets/images/main-page-05.jpg";

const Slider = () => {
  useEffect(() => {
    responsiveSlider();
  }, []);
  return (
    <div>
      <div id="slider">
        <ul id="slideWrap">
          <li>
            <img
              id="mainpage01"
              src={MainPage01}
              alt="People playing tennis"
            />
          </li>
          <li>
            <img
              id="mainpage02"
              src={MainPage02}
              alt="Scenic tennis court at Del Norte clubhouse"
            />
          </li>
          <li>
            <img
              id="mainpage03"
              src={MainPage03}
              alt="Scenic tennis court at Del Norte clubhouse"
            />
          </li>
          <li>
            <img
              id="mainpage04"
              src={MainPage04}
              alt="People playing tennis"
            />
          </li>
          <li>
            <img
              id="mainpage05"
              src={MainPage05}
              alt="People playing tennis"
            />
          </li>
        </ul>
        <a id="prev" href="#">
          &#8810;
        </a>
        <a id="next" href="#">
          &#8811;
        </a>
      </div>
    </div>
  );
};
export default Slider;
