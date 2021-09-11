import React from "react";
// components
import OrderFood from "@/pages/OrderFood";
// others
import CONSTANTS from "@/constants";
import ModalFood from "@/components/ModalFood";

/**
 * define main pages routes
 */
const childRoutes = [
  {
    path: CONSTANTS.ROUTERS.ORDER_FOOD,
    pageName: CONSTANTS.PAGE_NAME.ORDER_FOOD,
    exact: true,
    component: OrderFood
  }
];

const generateChildRoutes = () =>
  childRoutes.map(routeObj => ({
    path: routeObj.path,
    exact: routeObj.exact || false,
    roles: routeObj.roles || null,
    render: () => (<ModalFood>{routeObj.component}</ModalFood>)
  }));

export default [...generateChildRoutes()];
