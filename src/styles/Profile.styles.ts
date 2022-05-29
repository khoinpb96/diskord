import styled from "styled-components";
import { ProfileContentProps } from "../types";
import { Button } from "./index";

export const ProfileContainer = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  max-width: 850px;
  width: 100%;
  margin: 0 auto 3rem;
  position: relative;

  @media (max-width: 576px) {
    border: none;
    border-radius: unset;
    margin: unset;
  }
`;

export const ProfileRow = styled.div`
  padding: 24px 48px;
  border-bottom: 1px solid #e0e0e0;

  @media (max-width: 576px) {
    padding: 24px;
  }
`;

export const BottomRow = styled(ProfileRow)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 14px;
  }
`;

export const ProfileHeader = styled(ProfileRow)`
  position: relative;
`;

export const EditButton = styled.button`
  position: absolute;
  top: 50%;
  right: 48px;
  transform: translateY(-50%);

  border: 1.5px solid #828282;
  border-radius: 12px;
  padding: 8px 32px;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.035em;
  color: #828282;
  background: white;
  cursor: pointer;
  transition: 200ms;

  @media (max-width: 576px) {
    right: 24px;
  }

  &:hover {
    border: 1.5px solid #464646;
    color: #464646;
  }
`;

export const ProfileContent = styled.div<ProfileContentProps>`
  display: flex;
  align-items: center;

  @media (max-width: 576px) {
    justify-content: space-between;
  }

  .title {
    font-size: 13px;
    line-height: 18px;
    text-transform: uppercase;
    letter-spacing: -0.035em;
    color: #bdbdbd;
    width: 188px;
  }
  .content {
    font-size: 18px;
    line-height: 25px;
    letter-spacing: -0.035em;
    color: #333333;
  }
`;

export const ProfileInputContainer = styled(ProfileContent)`
  align-items: flex-start;
  flex-direction: column;
`;

export const ProfileContentPhoto = styled(ProfileContent)`
  gap: ${(props) => props.editing && "27.5px"};

  .photo {
    background: ${(props) => (props.src ? `url(${props.src})` : "black")};
    background-repeat: no-repeat;
    background-size: cover;
    width: 72px;
    height: 72px;
    position: relative;
    border-radius: 8px;
    cursor: pointer;

    .icon {
      position: absolute;
      color: white;
      top: 50%;
      left: 50%;
      font-size: 22px;
      transform: translate(-50%, -50%);
    }
  }
`;

export const BackButton = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: -0.035em;
  color: #2d9cdb;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  max-width: 850px;
  width: 100%;
  padding: 0 18px;
  margin: 0 auto 1rem;
`;

export const EditInput = styled.input`
  font-size: 13px;
  line-height: 18px;
  letter-spacing: -0.035em;

  padding: 16px;
  border: 1px solid #828282;
  border-radius: 12px;
  flex: 1;

  width: 100%;
  max-width: 416px;

  &::placeholder {
    color: #bdbdbd;
  }
`;

export const SaveButton = styled(Button)`
  padding: 8px 32px;
`;
