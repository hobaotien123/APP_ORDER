// libs
import React from "react";
import { dataCategory } from "@/dataMocks";
// hooks
import { useRouter } from "@/hooks";
// others
import "./style.scss";
import CONSTANTS from "@/constants";

/**
 * MenuSideNav
 */
const MenuSideNav = () => {
  const router = useRouter();

  return (
    router.pathname === CONSTANTS.ROUTERS.ORDER_FOOD && (
      <div className="menu-side-nav-wrapper">
        {dataCategory.map(item => (
          <div
            onClick={() => {
              router.push({
                pathname: CONSTANTS.ROUTERS.ORDER_FOOD,
                state: {
                  ...router.location.state,
                  id: item.id
                }
              });
            }}
            className="item-menu"
            href="#"
            id={`about${item.id}`}
          >
            <div className="txt">{item.title}</div>
            <div className="img">
              <img src={item.image} alt="" />
            </div>
          </div>
        ))}
      </div>
    )
  );
};

export default MenuSideNav;
