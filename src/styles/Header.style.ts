import styled from "styled-components";
import { UserImgProps } from "../types";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  padding: 24px 18px;
`;

export const UserContainer = styled.div`
  display: flex;
  gap: 12px;
  cursor: pointer;
  align-items: center;
`;

export const UserImg = styled.div<UserImgProps>`
  background: ${(props) => props.src || "black"};
  width: 32px;
  height: 32px;
  border-radius: 8px;
`;

export const UserName = styled.div`
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.035em;
  color: #333333;

  @media (max-width: 576px) {
    display: none;
  }
`;

export const DropdownButton = styled.i`
  @media (max-width: 576px) {
    display: none;
  }
`;
