import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* About */}
        <div className="footer-about">
          <h2>Gunnu Chinese Corner</h2>
          <p>
            Serving delicious pure veg Indian & Chinese dishes online and offline<br></br>.    
            Quality food, love in every bite, and top-notch service is our promise .
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#owner">Owner</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>WhatsApp: <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer">+91 99999 99999</a></p>
          <p>Email: info@gunnuchinesecorner.com</p>
          <div className="footer-social">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-whatsapp"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Gunnu Chinese Corner. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
