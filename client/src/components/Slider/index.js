import React from "react";

import "../../assets/css/slider.css";

import MainPage01 from "../../assets/images/main-page-01.jpg";
import MainPage02 from "../../assets/images/main-page-02.jpg";
import MainPage03 from "../../assets/images/main-page-03.jpg";
import MainPage04 from "../../assets/images/main-page-04.jpg";
import MainPage05 from "../../assets/images/main-page-05.jpg";

const Slider = () => {
  return (
    <div>
      <div id="slider">
        <ul id="slideWrap">
          <li>
            <img id="mainpage01" src={MainPage01} alt="People playing tennis" />
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
            <img id="mainpage04" src={MainPage04} alt="People playing tennis" />
          </li>
          <li>
            <img id="mainpage05" src={MainPage05} alt="People playing tennis" />
          </li>
        </ul>
        <p id="prev"></p>
        <p id="next"></p>
      </div>
    </div>
  );
};
export default Slider;
