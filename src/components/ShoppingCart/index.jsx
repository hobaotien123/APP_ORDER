// libs
import React, { useState } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
// hooks
import { useStore } from "@/hooks/useStore";
// components
import DrawerCart from "../DrawerCart";
// others
import "./style.scss";

/**
 * ShoppingCart
 */
const ShoppingCart = () => {
  const [visibleDrawerCart, setVisibleDrawerCart] = useState(false);
  const {
    cartReducer: { priceCart, listCartFood }
  } = useStore("Common");
  return (
    <>
      {!visibleDrawerCart && (
        <div
          onClick={() => setVisibleDrawerCart(true)}
          className="shopping-cart-wrapper"
        >
          <div className="cart">
            <ShoppingCartOutlined className="icon-cart" />
            <div className="count">{`${listCartFood.length} Item`}</div>
          </div>
          <div className="price">{`$${priceCart}.00`}</div>
        </div>
      )}
      <DrawerCart
        visibleDrawerCart={visibleDrawerCart}
        setVisibleDrawerCart={setVisibleDrawerCart}
      />
    </>
  );
};

export default ShoppingCart;
