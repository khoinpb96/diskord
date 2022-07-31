import { Link } from "react-router-dom";
import styled from "styled-components";

export const NotfoundPageWrapper = styled.main`
  min-height: 100vh;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;

  max-width: 1280px;
  margin: 0 auto;
`;

export const Logo = styled.img`
  filter: invert(1);
`;

export const Row = styled.section`
  display: flex;
  gap: 40px;

  max-width: 1280px;
  padding: 120px 40px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    max-width: 600px;
  }
`;

export const Content = styled.div`
  h3 {
    color: #5865f2;
    font-size: 44px;
    font-family: "Black Han Sans", sans-serif;
  }

  p {
    max-width: 600px;
  }

  @media (max-width: 1024px) {
    order: 2;
  }
`;

export const OutLinks = styled.ul`
  list-style-type: none;
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  a {
    color: #00aff4;
    text-decoration: none;
  }
`;

export const Gif = styled.img`
  width: 350px;

  @media (max-width: 1024px) {
    order: 1;
  }
`;

export const LoginButton = styled(Link)`
  border: 0;
  outline: 0;
  text-decoration: none;
  line-height: 24px;

  cursor: pointer;
  font-weight: 500;
  display: inline-flex;
  align-items: center;

  transition-property: background-color, color, box-shadow, -webkit-box-shadow;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;

  background-color: #5865f2;
  color: #fff;

  border-radius: 40px;
  font-size: 14px;
  padding: 7px 16px;
  white-space: nowrap;

  &:hover {
    background-color: hsl(235, 86.1%, 71.8%);
    box-shadow: 0 8px 15px rgb(0 0 0 / 20%);
  }
`;
