// libs
import React from "react";
import { useRouter } from "@/hooks";
// others
import "./style.scss";
import { dataCategory } from "@/dataMocks";
import CONSTANTS from "@/constants";

/**
 * MenuFood
 */
const MenuFood = () => {
  const router = useRouter();
  return (
    <div className="menu-food-wrapper">
      {dataCategory.map(category => (
        <div
          key={category.id}
          onClick={() => {
            router.push({
              pathname: CONSTANTS.ROUTERS.ORDER_FOOD,
              state: {
                background: router.location,
                id: category.id
              }
            });
          }}
          className="item-menu-food"
        >
          <div className="img">
            <img src={category.image} alt="" />
          </div>
          <div className="title">{category.title}</div>
        </div>
      ))}
    </div>
  );
};

export default MenuFood;
