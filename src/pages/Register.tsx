import {
  AppContainer,
  Button,
  Input,
  InputIcon,
  Label,
  Logo,
  P,
  PLink,
  SubTitle,
  Title,
} from "../styles";
import { Main, Socials } from "../components";

import logo from "../assets/devchallenges-logo.svg";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const submitHandler = () => {
    navigate("/profile");
  };
  return (
    <Main>
      <AppContainer>
        <Logo src={logo} />
        <Title mt="22" fontSize="18">
          Welcome to my app!
        </Title>
        <SubTitle>Now please create a new account</SubTitle>
        <Label>
          <Input placeholder="Email" type="text" />
          <InputIcon className="fa-solid fa-envelope" />
        </Label>
        <Label>
          <Input placeholder="Password" type="password" />
          <InputIcon className="fa-solid fa-lock" />
        </Label>
        <Button onClick={submitHandler} mt="8" mb="32">
          Register
        </Button>
        <P textAlign="center">or continue with these social profile</P>
        <Socials />
        <P textAlign="center">
          Adready a member? <PLink to="/login">Login</PLink>
        </P>
      </AppContainer>
    </Main>
  );
}
