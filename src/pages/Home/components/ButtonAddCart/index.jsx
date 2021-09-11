// libs
import React from "react";
// others
import "./style.scss";

/**
 * ButtonAddCart
 * @param {string} countFood
 * @param {Function} setCountFood
 * @param {Function} handleUpdateCart
 * @param {Function} handleRemoveCart
 */
const ButtonAddCart = ({
  countFood,
  handleUpdateCart,
  handleRemoveCart
}) => (
  <div className="button-add-cart-wrapper">
    <div onClick={() => {
      handleRemoveCart();
    }} className="subtract">
      -
    </div>
    <div className="count">{countFood}</div>
    <div onClick={() =>{
       handleUpdateCart();
    }} className="add">
      +
    </div>
  </div>
);

export default ButtonAddCart;
