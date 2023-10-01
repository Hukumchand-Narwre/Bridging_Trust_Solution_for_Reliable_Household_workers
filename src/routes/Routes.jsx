import { Switch, Route } from "react-router-dom";

import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import HomeScreen from "../screen/HomeScreen";
import LoginScreen from "../screen/LoginScreen/LoginScreen";
import UserCard from "../components/UserCard/UserCard";

const ROUTES = [
  {
    path: "/",
    key: "HomeScreen",
    component: UserCard,
    isPrivate: false,
    exact: true,
  },
  {
    path: "/Login",
    key: "Login",
    component: LoginScreen,
    isPrivate: false,
    exact: true,
  },
];

export default ROUTES;

export function RenderRoutes({ routes, token }) {
  return (
    <Switch>
      {routes.map((route) => {
        return route.isPrivate ? (
          <PrivateRoutes
            isLoggedIn={!!token}
            path={route.path}
            exact={route.exact}
            component={route.component}
            key={route.key}
            isPrivate={route.isPrivate}
            name={route.key}
          />
        ) : (
          <PublicRoutes
            isLoggedIn={!!token}
            path={route.path}
            exact={route.exact}
            component={route.component}
            key={route.key}
            isPrivate={route.isPrivate}
            name={route.key}
          />
        );
      })}

      <Route component={() => <h1>Not Found!</h1>} />
    </Switch>
  );
}
