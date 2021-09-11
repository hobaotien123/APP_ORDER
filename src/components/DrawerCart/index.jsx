// libs
import React from "react";
import { Drawer } from "antd";
// components
import DrawerFood from "./components/DrawerFood";
import Checkout from "./components/Checkout";
import TitleDrawer from "./components/TitleDrawer";
// others
import "./style.scss";

/**
 * DrawerCart
 */
const DrawerCart = ({ visibleDrawerCart, setVisibleDrawerCart }) => {
  const onClose = () => {
    setVisibleDrawerCart(false);
  };
  return (
    <div className="drawer-cart-wrapper">
      <Drawer
      footer={<Checkout setVisibleDrawerCart={setVisibleDrawerCart} />}
      width={500}
      zIndex={9999999999999999}
        title={<TitleDrawer />}
        placement="right"
        onClose={onClose}
        visible={visibleDrawerCart}
      >
          <DrawerFood />
      </Drawer>
    </div>
  );
};

export default DrawerCart;
