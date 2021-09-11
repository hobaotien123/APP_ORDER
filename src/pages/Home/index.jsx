// libs
import React from "react";
// components
import MenuFood from "./components/MenuFood";
// others
import "./style.scss";

const Home = () => (
  <div className="home-wrapper">
    <div className="title">
      <h2>Groceries Delivered in 90 Minute</h2>
      <p>
        Get your healthy foods & snacks delivered at your doorsteps all day
        everyday
      </p>
    </div>
    <MenuFood />
  </div>
);

export default Home;
