import { Link } from "react-router-dom";

import logoUrl from "../../assets/logo.svg";
import NotFountGifUrl from "../../assets/404.gif";
import {
  Content,
  Gif,
  Header,
  LoginButton,
  Logo,
  NotfoundPageWrapper,
  OutLinks,
  Row,
} from "./NotfoundPage.style";

const NotfoundPage = () => {
  return (
    <NotfoundPageWrapper>
      <Header>
        <Link to="/">
          <Logo src={logoUrl} />
        </Link>

        <LoginButton to="/login">Login</LoginButton>
      </Header>
      <Row>
        <Content>
          <h3>WRONG TURN?</h3>
          <p>
            You look lost, stranger. You know what helps when you're lost? A
            piping hot bowl of noodles. Take a seat, we're frantically at work
            here cooking up something good. Oh, you need something to read?
            These might help you:
          </p>

          <OutLinks>
            <li>
              <a target="__blank" href="https://discordstatus.com/">
                Status Page
              </a>
            </li>
            <li>
              <a target="__blank" href="https://twitter.com/discord">
                @Discord
              </a>
            </li>
            <li>
              <a target="__blank" href="https://support.discord.com/hc/en-us">
                Discord Support
              </a>
            </li>
          </OutLinks>
        </Content>

        <Gif src={NotFountGifUrl} />
      </Row>
    </NotfoundPageWrapper>
  );
};

export default NotfoundPage;
