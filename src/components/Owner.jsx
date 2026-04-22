import React, { useEffect } from "react";
import "./Owner.css";

function Owner() {
  // Optional: simple scroll animation using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(".owner-container");
    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <section className="owner-section" id="about">
      <div className="owner-container">
        <div className="owner-image">
         <img src="/Images/owner.jpeg" alt="Owner" />

        </div>
        <div className="owner-info">
          <h2>Meet the Mastermind</h2>
          <h3>Mr. Rakesh Saini</h3>
          <p>
            Mr. Rakesh Saini is the visionary behind <strong>Gunnu Chinese Corner</strong>.  
            With over 12 years of experience in Indian & Chinese pure veg cuisine, he ensures each dish is crafted with love, flavor, and perfection.  
            His mission: to provide delectable meals online & offline with unparalleled service.
          </p>
          <a 
            href="https://wa.me/919839621748" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-btn"
          >
            Contact Owner
          </a>
        </div>
      </div>
    </section>
  );
}

export default Owner;
