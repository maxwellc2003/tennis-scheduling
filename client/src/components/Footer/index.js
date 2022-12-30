import React from "react";

import "../../assets/css/footer.css"

// We can add more character to this

const Footer = () => {
  return (
  <footer>
    <div><a className="footer-btn">Contact Us</a></div>
    <div><a className="footer-btn">Support Us</a></div>
    <div><a className="footer-btn">News</a><a> | </a><a className="footer-btn">Team</a></div>
    <div><a href="/privacypolicy" className="footer-btn">Privacy Terms</a></div>
  </footer>
  );
};

export default Footer;
