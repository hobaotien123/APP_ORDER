// libs
import React from "react";
// components
import MenuFood from "./components/MenuFood";
// others
import "./style.scss";

const Home = () => (
  <div className="home-wrapper">
    <div className="title">
      <h2>Get Your Items Delivered</h2>
      <p>
        Get your favorite items baked and delivered to your doorsteps at
        any time
      </p>
    </div>
    <MenuFood />
  </div>
);

export default Home;
