import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import axios from "axios";
import "../App.css";
import logo from "../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [dishes, setDishes] = useState([]);

  const handleLinkClick = () => setMenuOpen(false);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/menu");
      setDishes(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  /* SAFE SEARCH FILTER */
  const filteredDishes = dishes.filter((dish) =>
    (dish.name || "")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <div className="nav-logo">
          <img src={logo} alt="Gunnu Logo" className="logo-img" />
        </div>

        {/* Mobile Menu */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        {/* Links */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

          <li>
            <a href="#home" onClick={handleLinkClick}>
              Home
            </a>
          </li>

          <li>
            <a href="#about" onClick={handleLinkClick}>
              About
            </a>
          </li>

          <li>
            <a href="#gallery" onClick={handleLinkClick}>
              Gallery
            </a>
          </li>

          <li>
            <RouterLink
              to="/order"
              className="whatsapp-btn"
              onClick={handleLinkClick}
            >
              Order Now
            </RouterLink>
          </li>

          {/* Search */}
          <li className="search-bar">
            <input
              type="text"
              placeholder="Search your dish..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                padding: "8px 16px",
                borderRadius: "50px",
                border: "1px solid #ddd",
                outline: "none",
                width: "220px",
              }}
            />

            {/* Search Results */}
            {search && filteredDishes.length > 0 && (
              <ul className="search-results">

                {filteredDishes.map((dish) => (
                  <li
                    key={dish._id}
                    style={{ listStyle: "none" }}
                  >
                    <RouterLink
                      to={`/order/${dish._id}`}
                      onClick={() => setSearch("")}
                      style={{
                        textDecoration: "none",
                        color: "#333",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        padding: "10px",
                      }}
                    >
                      <img
                        src={dish.image}
                        alt={dish.name}
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "8px",
                          objectFit: "cover",
                        }}
                      />

                      <span>
                        {dish.name}
                      </span>

                      <span
                        style={{
                          marginLeft: "auto",
                          fontWeight: "600",
                        }}
                      >
                        ₹{dish.price}
                      </span>
                    </RouterLink>
                  </li>
                ))}

              </ul>
            )}

            {/* No Result */}
            {search && filteredDishes.length === 0 && (
              <ul className="search-results">
                <li>No dishes found</li>
              </ul>
            )}
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;