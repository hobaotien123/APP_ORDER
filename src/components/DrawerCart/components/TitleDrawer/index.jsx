// libs
import React from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
// hooks
import { useStore } from "@/hooks/useStore";
// others
import "./style.scss";

/**
 * TitleDrawer
 */
const TitleDrawer = () => {
  const {
    cartReducer: { listCartFood }
  } = useStore("Common");
  return (
    <div className="title-drawer-wrapper">
      <ShoppingCartOutlined style={{fontSize: 25}} />
      <div style={{marginLeft: 15}}>{`${listCartFood.length} Item`}</div>
    </div>
  );
};

export default TitleDrawer;
