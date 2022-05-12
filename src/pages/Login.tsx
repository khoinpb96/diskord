import {
  AppContainer,
  Button,
  Input,
  InputIcon,
  Label,
  Logo,
  P,
  PLink,
  Title,
} from "../styles";
import { Main, Socials } from "../components";
import logo from "../assets/devchallenges-logo.svg";

import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const submitHandler = () => {
    navigate("/profile");
  };

  return (
    <Main>
      <AppContainer>
        <Logo src={logo} />
        <Title mt="22" mb="22" fontSize="18">
          Login
        </Title>
        <Label>
          <Input placeholder="Email" type="text" />
          <InputIcon className="fa-solid fa-envelope" />
        </Label>
        <Label>
          <Input placeholder="Password" type="password" />
          <InputIcon className="fa-solid fa-lock" />
        </Label>
        <Button onClick={submitHandler}>Login</Button>
        <P textAlign="center">or continue with these social profile</P>
        <Socials />
        <P textAlign="center">
          Don’t have an account yet? <PLink to="/">Register</PLink>
        </P>
      </AppContainer>
    </Main>
  );
}
