import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const slides = [
  {
    img: "/Images/img1.jpg",
    title: "Gunnu Chinese Corner",
    desc: "Authentic Indian & Chinese fusion delights crafted with fresh ingredients, bold flavors, and a whole lot of love. Experience street-style taste with premium quality – dine in, takeaway & fast home delivery.",
  },
  {
    img: "/Images/img2.jpg",
    title: "Hot, Spicy & Irresistible Chinese",
    desc: "From fiery Hakka noodles and sizzling fried rice to crispy Manchurian and flavorful gravies – every bite delivers pure street-style magic that keeps you coming back for more.",
  },
  {
    img: "/Images/img4.jpg",
    title: "Fresh • Hygienic • Super Tasty",
    desc: "Prepared fresh on every order using high-quality ingredients, hygienic cooking practices, and authentic recipes – delivering unbeatable taste, quick service, and complete satisfaction.",
  },
];
function Hero() {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimate(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % slides.length);
        setAnimate(true);
      }, 300);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">
      <div className="hero-inner">

        {/* TEXT */}
        <div className={`hero-text ${animate ? "slide-left" : ""}`}>
          <div className="ribbon-wrap">
    <div className="ribbon">
      Open Daily <span>9:00 AM – 11:00 PM</span>
    </div>
  </div>
          <h1>{slides[index].title}</h1>
          <p>{slides[index].desc}</p>
          <Link to="/order" className="hero-btn">Order Now</Link>
          <div className="hero-location">
  📍 <span>Blue Berry Apartment, Nalasopara West, Mumbai</span>
</div>
        </div>

        {/* IMAGE CARD */}
        <div className={`hero-card ${animate ? "slide-right" : ""}`}>
          <img src={slides[index].img} alt="food" />
        </div>

      </div>
    </section>
  );
}

export default Hero;