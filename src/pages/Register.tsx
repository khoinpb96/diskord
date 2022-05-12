import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Main } from "../components";
import logo from "../assets/devchallenges-logo.svg";

const AppContainer = styled.div`
  border: 1px solid #bdbdbd;
  border-radius: 24px;
  max-width: 480px;
  width: 100%;
  padding: 44px 58px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const Logo = styled.img`
  width: 130px;
  height: 18px;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  color: #333333;
  margin-top: 24px;
  letter-spacing: -0.035em;
`;

const SubTitle = styled.div`
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.035em;
  color: #333333;
  margin-top: 14px;
  margin-bottom: 34px;
`;

const Label = styled.label`
  position: relative;
  margin-bottom: 14px;
`;

const Input = styled.input`
  padding: 13px 0px 13px 46px;
  border: 1px solid #bdbdbd;
  border-radius: 8px;
  font-size: 16px;
  letter-spacing: -0.035em;
  width: 100%;

  &::placeholder {
    color: #828282;
  }
`;

const InputIcon = styled.i`
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: #828282;
`;

const Button = styled.button`
  background: #2f80ed;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: -0.035em;
  color: #ffffff;
  padding: 8px 0;
  border: none;
  transition: 200ms;
  cursor: pointer;

  margin: 8px 0 32px 0;

  &:hover {
    background-color: #63a5ff;
  }
`;

const P = styled.p`
  font-size: 14px;
  line-height: 19px;
  letter-spacing: -0.035em;
  color: #828282;
`;

const PLink = styled(Link)`
  color: #2d9cdb;
  display: inline-block;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Socials = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  cursor: pointer;
  margin-top: 22px;
  margin-bottom: 28px;
`;

const SocialButton = styled.div`
  color: #828282;
  border: 2px solid #828282;
  width: 42px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 200ms;
  border-radius: 50%;

  &:hover {
    color: #000;
    border: 2px solid #000;
  }
`;

export default function Register() {
  return (
    <Main>
      <AppContainer>
        <Logo src={logo} />
        <Title>Welcome to my app!</Title>
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
