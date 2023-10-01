import { Route, Redirect } from "react-router-dom";

import Layout from "../containers/Layout";

const PublicRoutes = ({ component: Component, isLoggedIn, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return !isLoggedIn ? (
          <Layout>
            <Component {...props} />
          </Layout>
        ) : (
          <Redirect from={props.match.path} to="/" exact />
        );
      }}
    />
  );
};

export default PublicRoutes;
