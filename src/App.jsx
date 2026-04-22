 import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Owner from "./components/Owner";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Order from "./components/Order"; 
import Qr from "./components/Qr";

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Owner />
              <Menu />
               
            </>
          }
        />

        {/* Order Page */}
        <Route path="/order" element={<Order />} />
        <Route path="/qr" element={<Qr />} />
         <Route path="/order/:id" element={<Order />} /> 
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
