import { Route, Redirect } from "react-router-dom";

import Layout from "../containers/Layout";

function PrivateRoutes({ component: Component, isLoggedIn, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          <Layout>
            <Component {...props} />
          </Layout>
        ) : (
          <Redirect from={props.match.path} to="/" exact />
        )
      }
    />
  );
}

export default PrivateRoutes;
