import {
  AppContainer,
  Button,
  Input,
  InputIcon,
  Label,
  Logo,
  P,
  PLink,
  SocialButton,
  Socials,
  SubTitle,
  Title,
  Main,
} from "../components";
import logo from "../assets/devchallenges-logo.svg";

export default function Register() {
  return (
    <Main>
      <AppContainer>
        <Logo src={logo} />
        <Title mt="22">Welcome to my app!</Title>
        <SubTitle>Now please create a new account</SubTitle>
        <Label>
          <Input placeholder="Email" type="text" />
          <InputIcon className="fa-solid fa-envelope" />
        </Label>
        <Label>
          <Input placeholder="Password" type="password" />
          <InputIcon className="fa-solid fa-lock" />
        </Label>
        <Button>Register</Button>
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
          Adready a member? <PLink to="/login">Login</PLink>
        </P>
      </AppContainer>
    </Main>
  );
}
