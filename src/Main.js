// libs import
import React from "react";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
// hooks
import { useRouter } from "./hooks";
// components
import ShoppingCart from "@/components/ShoppingCart";
// routers
import mainRoutes from "@/routers/mainRoutes";
import childRoutes from "@/routers/childRoutes";
// interceptors
import { doAxiosRequestIntercept } from "@/https/Interceptors";
// others
import store from "@/store";
import "./styles/main.scss";
import MenuSideNav from "./components/MenuSideNav";

// generate main routes
const mainRouteComponents = () =>
  mainRoutes.map(route =>
    route.path ? (
      <Route
        key={route.path}
        path={route.path}
        exact={route.exact}
        component={route.render()}
      />
    ) : (
      <Route key="/mainNotFound" component={route.render()} />
    )
  );

const childRouteComponents = () =>
  childRoutes.map(
    route =>
      route.path && (
        <Route
          key={route.path}
          path={route.path}
          exact={route.exact}
          component={() => route.render()}
        />
      )
  );

const Main = () => {
  doAxiosRequestIntercept();
  const { location } = useRouter();
  const background = location.state && location.state.background;
  return (
    <Provider store={store}>
      <ShoppingCart />
      <MenuSideNav />
      <div className="main-wrapper">
        <Switch location={background || location}>
          {mainRouteComponents()}
        </Switch>
        {background && <Switch>{childRouteComponents()}</Switch>}
      </div>
    </Provider>
  );
};

export default Main;
