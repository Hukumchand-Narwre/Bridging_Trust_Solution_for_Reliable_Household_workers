import styled from "styled-components";

import Login from "../../components/Login/Login";
import Logo from "../../UI/Logo";
import Spinner from "../../UI/Spinner";
import Divider from "../../UI/Divider";
import { useAuthStore } from "../../store/Auth";
import { useEffect } from "react";

const LoginLayout = styled.main`
  min-height: 92vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: rgb(245 246 248 / var(--tw-bg-opacity));
  border-color: #e5e7eb;

  @media (max-width: 600px) {
    grid-template-columns: 36rem;
  }
`;

const LoginScreen = () => {
  return (
    <>
      <LoginLayout className="bg-white/50 border-0 border-solid shadow-2xl">
        <Logo />
        <h4 className="text-5xl font-semibold text-center ">Log in to your account</h4>
        <Login />
      </LoginLayout>
    </>
  );
};

export default LoginScreen;
