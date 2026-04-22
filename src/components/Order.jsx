import React, { useState } from "react";
import "./Order.css";

function Order() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    building: "",
    room: "",
    orders: [{ type: "Veg", item: "", quantity: 1 }],
  });

  const menuItems = [
    { type: "Veg", name: "Spring Roll" },
    { type: "Veg", name: "Chilli Paneer" },
    { type: "Veg", name: "Veg Manchurian" },
    { type: "Veg", name: "Hakka Noodles" },
    { type: "Veg", name: "Fried Rice" },
    { type: "Veg", name: "Gobi 65" },
    { type: "Veg", name: "Veg Burger" },
    { type: "Veg", name: "Paneer Butter Masala" },
    { type: "Non-Veg", name: "Chicken Manchurian" },
    { type: "Non-Veg", name: "Mutton Biryani" },
    { type: "Non-Veg", name: "Egg Fried Rice" },
    { type: "Non-Veg", name: "Fish Curry" },
    { type: "Non-Veg", name: "Chicken 65" },
  ];

  const handleChange = (index, e) => {
    const newOrders = [...formData.orders];
    newOrders[index][e.target.name] = e.target.value;
    setFormData({ ...formData, orders: newOrders });
  };

  const addItem = () => {
    setFormData({
      ...formData,
      orders: [...formData.orders, { type: "Veg", item: "", quantity: 1 }],
    });
  };

  const removeItem = (index) => {
    const newOrders = [...formData.orders];
    newOrders.splice(index, 1);
    setFormData({ ...formData, orders: newOrders });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let orderMessage = `Hello! I want to place an order:%0AName: ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0ABuilding: ${formData.building}%0ARoom: ${formData.room}%0AOrders:%0A`;
    formData.orders.forEach((o, i) => {
      orderMessage += `${i + 1}. [${o.type}] ${o.item} - ${o.quantity}%0A`;
    });

    window.open(`https://wa.me/919839621748?text=${orderMessage}`, "_blank");
  };

  return (
    <div className="order-page">
      <div className="order-container">
        <h2>Place Your Order</h2>
        <form className="order-form" onSubmit={handleSubmit}>
          <div className="customer-details">
            <input
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <input
              type="tel"
              placeholder="Phone / WhatsApp"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="Email (optional)"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <input
              type="text"
              placeholder="Building / Apartment"
              value={formData.building}
              onChange={(e) => setFormData({ ...formData, building: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Room / Flat Number"
              value={formData.room}
              onChange={(e) => setFormData({ ...formData, room: e.target.value })}
              required
            />
          </div>

          <h3>Order Details</h3>
          {formData.orders.map((order, index) => (
            <div className="order-item" key={index}>
              {/* Type Selection */}
              <select
                name="type"
                value={order.type}
                onChange={(e) => handleChange(index, e)}
                required
              >
                <option value="Veg">Veg</option>
                <option value="Non-Veg">Non-Veg</option>
              </select>

              {/* Item Selection filtered by type */}
              <select
                name="item"
                value={order.item}
                onChange={(e) => handleChange(index, e)}
                required
              >
                <option value="">Select Item</option>
                {menuItems
                  .filter((i) => i.type === order.type)
                  .map((i, idx) => (
                    <option key={idx} value={i.name}>
                      {i.name}
                    </option>
                  ))}
              </select>

              <input
                type="number"
                name="quantity"
                min="1"
                value={order.quantity}
                onChange={(e) => handleChange(index, e)}
                required
              />
              {formData.orders.length > 1 && (
                <button
                  type="button"
                  className="remove-btn"
                  onClick={() => removeItem(index)}
                >
                  Remove
                </button>
              )}
            </div>
          ))}

          <button type="button" className="add-btn" onClick={addItem}>
            + Add Another Item
          </button>

          <button type="submit" className="submit-btn">
            Place Order via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}

export default Order;
