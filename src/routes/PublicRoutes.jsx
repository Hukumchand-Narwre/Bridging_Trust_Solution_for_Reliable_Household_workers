import { Route, Redirect } from "react-router-dom";

import Layout from "../containers/Layout";
import { useAuthStore } from "../store/Auth";

const PublicRoutes = ({ component: Component, isLoggedIn, ...rest }) => {
  const { userinfo } = useAuthStore();
  console.log(isLoggedIn);
  return (
    <Route
      {...rest}
      render={(props) => {
        return !isLoggedIn ? (
          <Layout>
            <Component {...props} />
          </Layout>
        ) : (
          <Redirect from={props.match.path} to={`/${userinfo.role}`} exact />
        );
      }}
    />
  );
};

export default PublicRoutes;
