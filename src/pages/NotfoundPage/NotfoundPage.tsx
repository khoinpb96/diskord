import { Link } from "react-router-dom";
import styled from "styled-components";

const NotfoundPage = () => {
  return (
    <NotfoundPageWrapper>
      <Header>
        <Link to="/">
          <img src="/assets/logo.svg" />
        </Link>

        <LoginButton to="/login">Login</LoginButton>
      </Header>
      <Row>
        <Content>
          <h3>WRONG TURN?</h3>
          <p>
            You look lost, stranger. You know what helps when you're lost? A
            piping hot bowl of noodles. Take a seat, we're frantically at work
            here cooking up something good.
          </p>
        </Content>

        <Gif src="/assets/404.gif" />
      </Row>
    </NotfoundPageWrapper>
  );
};

export default NotfoundPage;

const NotfoundPageWrapper = styled.main`
  background: #5865f2;
  min-height: 100vh;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;

  max-width: 1280px;
  margin: 0 auto;
`;
const Row = styled.section`
  color: white;

  display: flex;
  gap: 1rem;

  padding: 120px 40px;

  max-width: 1280px;
  margin: 0 auto;
`;

const Content = styled.div`
  h3 {
    font-size: 44px;
    font-family: "Black Han Sans", sans-serif;
  }
`;
const Gif = styled.img`
  width: 350px;
`;

const LoginButton = styled(Link)`
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

  background-color: #ffd400;
  color: #000;

  border-radius: 40px;
  font-size: 14px;
  padding: 7px 16px;
  white-space: nowrap;
`;
