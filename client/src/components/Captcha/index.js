import React from "react";

import "../../assets/css/captcha.css";

// We can add more character to this

const Footer = () => {
  return (
    <div id="captchaBackground">
      <canvas id="captcha">captcha text</canvas>
      <input id="textBox" type="text" name="text" />
      <div id="buttons">
        <button id="submitButton" type="button">
          Submit
        </button>
        <button id="refreshButton" type="button">
          Refresh
        </button>
      </div>
      <span id="output"></span>
    </div>
  );
};

export default Footer;
