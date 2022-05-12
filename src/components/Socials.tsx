import { SocialButton, SocialsContainer } from "../styles";

export default function Socials() {
  return (
    <SocialsContainer>
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
    </SocialsContainer>
  );
}
