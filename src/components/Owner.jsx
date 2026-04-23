// Owner.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Owner.css";

import {
  FaWhatsapp,
  FaStar,
  FaUtensils,
  FaCrown,
  FaArrowRight,
} from "react-icons/fa";

function Owner() {
  const [ownerData, setOwnerData] = useState(null);
  const [loading, setLoading] = useState(true);

  /* FETCH DATA FROM ADMIN DASHBOARD */
  useEffect(() => {
    fetchOwnerData();
  }, []);

  const fetchOwnerData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/owner");

      setOwnerData(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  /* SCROLL ANIMATION */
  useEffect(() => {
    if (!ownerData) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("owner-show");
          }
        });
      },
      { threshold: 0.2 }
    );

    const el = document.querySelector(".owner-main");

    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, [ownerData]);

  /* LOADING */
  if (loading) {
    return (
      <div className="text-center py-20 text-xl font-semibold">
        Loading...
      </div>
    );
  }

  /* NO DATA */
  if (!ownerData) {
    return (
      <div className="text-center py-20 text-red-500 font-semibold">
        Data Not Found
      </div>
    );
  }

  /* IMAGE URL */
  const imageUrl = ownerData.image
    ? `http://localhost:5000/uploads/${ownerData.image}`
    : "/Images/owner.jpeg";

  return (
    <section className="owner-section" id="about">
      <div className="owner-main owner-show">

        {/* LEFT SIDE */}
        <div className="owner-left">

          <div className="owner-circle"></div>

          <div className="owner-img-box">
            <img
              src={imageUrl}
              alt={ownerData.name}
              onError={(e) => {
                e.target.src = "/Images/owner.jpeg";
              }}
            />
          </div>

          <div className="owner-floating-card">
            <FaStar />
            <span>
              {ownerData.experience || "12+ Years Experience"}
            </span>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="owner-right">

          <span className="owner-small-title">
            {ownerData.smallTitle || "Founder Story"}
          </span>

          <h2>
            {ownerData.heading1 || "The Taste Creator Behind"}
            <br />
            <span>
              {ownerData.heading2 || "Gunnu Chinese Corner"}
            </span>
          </h2>

          <h3>
            {ownerData.name || "Owner Name"}
          </h3>

          <p>
            {ownerData.description ||
              "Description from dashboard"}
          </p>

          {/* FEATURES */}
          <div className="owner-grid">

            <div className="owner-card">
              <FaUtensils />
              <span>
                {ownerData.feature1 || "Premium Food"}
              </span>
            </div>

            <div className="owner-card">
              <FaStar />
              <span>
                {ownerData.feature2 || "Top Rated Taste"}
              </span>
            </div>

            <div className="owner-card">
              <FaCrown />
              <span>
                {ownerData.feature3 || "Luxury Service"}
              </span>
            </div>

          </div>

          {/* BUTTON */}
          <a
            href={`https://wa.me/${
              ownerData.whatsapp || "919999999999"
            }`}
            target="_blank"
            rel="noopener noreferrer"
            className="owner-btn"
          >
            <FaWhatsapp />
            Contact Owner
            <FaArrowRight />
          </a>

        </div>

      </div>
    </section>
  );
}

export default Owner;