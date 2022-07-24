import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import authBgUrl from "../../assets/auth-bg.svg";

export default function AuthPage() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") navigate("login");
  }, []);

  return (
    <LoginPageWrapper>
      <Outlet />
    </LoginPageWrapper>
  );
}

const LoginPageWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  background: url(${authBgUrl});
  background-size: cover;

  font-size: 12px;
`;
