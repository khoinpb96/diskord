import config from "../config";
import { SocialButton, SocialsContainer } from "../styles";

export default function Socials({ setIsLoading }: any) {
  const githubHandler = async () => {
    setIsLoading(true);
    const clientId = config.GITHUB.CLIENT_ID;
    window.open(
      `https://github.com/login/oauth/authorize?client_id=${clientId}`,
      "_self"
    );
  };

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
      <SocialButton onClick={githubHandler}>
        <i className="fa-brands fa-github" />
      </SocialButton>
    </SocialsContainer>
  );
}
