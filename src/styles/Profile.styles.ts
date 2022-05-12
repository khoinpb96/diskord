import styled from "styled-components";
import { ProfileContentProps } from "../types";

export const ProfileContainer = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  max-width: 850px;
  width: 100%;
  margin: 0 auto 3rem;

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

export const ProfileContentPhoto = styled(ProfileContent)`
  .photo {
    background: ${(props) => (props.imgUrl ? `url(${props.imgUrl})` : "black")};
    background-repeat: no-repeat;
    background-size: cover;
    width: 72px;
    height: 72px;
    border-radius: 8px;
  }
`;
