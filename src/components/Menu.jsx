import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Menu.css";

function Menu() {
  const [dishes, setDishes] = useState([]);

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

  const vegDishes = dishes.filter((d) => d.type === "veg");
  const nonVegDishes = dishes.filter((d) => d.type === "nonveg");

  const renderDish = (dish) => (
    <div className="menu-card" key={dish._id}>
      <img src={dish.image} alt={dish.name} />

      <div className="menu-info">
        <h3>{dish.name}</h3>
        <p>{dish.category}</p>

        <span className="menu-price">
          ₹{dish.price}
        </span>

        <Link to="/order" className="order-btn">
          Order
        </Link>
      </div>
    </div>
  );

  return (
    <>
      <section className="menu-section" id="menu">
        <h2 className="menu-title">Our Veg Menu</h2>

        <div className="menu-container">
          {vegDishes.map(renderDish)}
        </div>
      </section>

      <section className="menu-section" id="nonveg">
        <h2 className="menu-title">Our Non-Veg Menu</h2>

        <div className="menu-container">
          {nonVegDishes.map(renderDish)}
        </div>
      </section>
    </>
  );
}

export default Menu;