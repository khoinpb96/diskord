import {
  AppContainer,
  Button,
  Input,
  InputIcon,
  Label,
  Logo,
  Main,
  P,
  PLink,
  SocialButton,
  Socials,
  Title,
} from "../components";
import logo from "../assets/devchallenges-logo.svg";

export default function Login() {
  return (
    <Main>
      <AppContainer>
        <Logo src={logo} />
        <Title mt="22" mb="22">
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
        <Button>Login</Button>
        <P>or continue with these social profile</P>
        <Socials>
          <SocialButton>
            <i className="fa-brands fa-google" />
          </SocialButton>
          <SocialButton>
            <i className="fa-brands fa-facebook-square" />
          </SocialButton>
          <SocialButton>
            <i className="fa-brands fa-twitter" />
          </SocialButton>
          <SocialButton>
            <i className="fa-brands fa-github" />
          </SocialButton>
        </Socials>
        <P>
          Don’t have an account yet? <PLink to="/">Register</PLink>
        </P>
      </AppContainer>
    </Main>
  );
}
