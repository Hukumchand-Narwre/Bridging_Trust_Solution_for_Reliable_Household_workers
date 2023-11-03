import { Route, Redirect } from "react-router-dom";

import Sidebar from "../UI/Sidebar";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;
`;

const Container = styled.div`
  max-width: 120rem;
  padding: 2rem 3rem;
  gap: 3.2rem;
`;

function PrivateRoutes({ component: Component, isLoggedIn, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          <StyledAppLayout>
            <Sidebar />
            <Container>
              <Component {...props} />
            </Container>
          </StyledAppLayout>
        ) : (
          <Redirect from={props.match.path} to="/" exact />
        )
      }
    />
  );
}

export default PrivateRoutes;
