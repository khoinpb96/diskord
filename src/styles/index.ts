import { Link } from "react-router-dom";
import styled from "styled-components";

export { default as GlobalStyle } from "./GlobalStyle";

import { ButtonProps, PProps, SubTitleProps, TitleProps } from "./../types";

export const FormContainer = styled.form`
  max-width: 480px;
  width: 100%;
  padding: 44px 58px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @media (max-width: 576px) {
    max-width: unset;
    width: unset;
  }
`;

export const Logo = styled.img`
  width: 130px;
  height: 18px;
  cursor: pointer;
`;

export const Title = styled.div<TitleProps>`
  font-weight: 600;
  font-size: ${(props) => props.fontSize + "px" || ""};
  line-height: 25px;
  color: #333333;
  margin-top: ${(props) => props.mt + "px" || ""};
  margin-bottom: ${(props) => props.mb + "px" || ""};
  letter-spacing: -0.035em;
  text-align: ${(props) => props.textAlign || ""};

  @media (max-width: 576px) {
    font-size: 24px;
  }
`;

export const SubTitle = styled.div<SubTitleProps>`
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.035em;
  color: #333333;
  margin-top: 14px;
  margin-bottom: 34px;
  text-align: ${(props) => props.textAlign || ""};

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

export const Label = styled.label`
  position: relative;
  margin-bottom: 14px;
`;

export const Input = styled.input`
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

export const InputIcon = styled.i`
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: #828282;
`;

export const Button = styled.button<ButtonProps>`
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

  margin-top: ${(props) => props.mt + "px" || ""};
  margin-bottom: ${(props) => props.mb + "px" || ""};

  &:hover {
    background-color: #63a5ff;
  }
`;

export const P = styled.p<PProps>`
  font-size: 14px;
  line-height: 19px;
  letter-spacing: -0.035em;
  color: #828282;
  text-align: ${(props) => props.textAlign || ""};
`;

export const PLink = styled(Link)`
  color: #2d9cdb;
  display: inline-block;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const NPLink = styled.i`
  color: #2d9cdb;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  font-style: normal;

  &:hover {
    text-decoration: underline;
  }
`;

export const SocialsContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 22px;
  margin-bottom: 28px;
  cursor: pointer;
`;

export const SocialButton = styled.div`
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
    color: #464646;
    border: 2px solid #464646;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
`;
