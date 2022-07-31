import { NavLink } from "react-router-dom";
import styled from "styled-components";

import plusIconUrl from "../../assets/plus-btn.svg";

export const Wrapper = styled.main`
  min-height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

export const Base = styled.div`
  flex: 1;
  display: flex;
`;

export const BaseSideBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;
  width: 240px;
  background-color: #2f3136;
`;

export const Channels = styled.div`
  padding: 8px 0;
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

export const Channel = styled(NavLink)`
  position: relative;
  max-width: 224px;
  margin-left: 8px;
  height: 42px;
  border-radius: 4px;

  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 0 12px;
  font-size: 14px;
  color: #96989d;
  gap: 1rem;

  &:hover {
    color: #dcddde;
    background-color: rgba(79, 84, 92, 0.4);

    img {
      filter: brightness(1);
    }
  }

  img {
    width: 24px;
    height: 24px;
    filter: brightness(0.7);
  }
`;

export const SearchBar = styled.div`
  height: 48px;
  padding: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 0 1px 0 rgba(4, 4, 5, 0.2), 0 1.5px 0 rgba(6, 6, 7, 0.05),
    0 2px 0 rgba(4, 4, 5, 0.05);

  button {
    width: 100%;
    height: 28px;
    overflow: hidden;
    border-radius: 4px;
    background-color: #202225;
    color: #a3a6aa;

    padding: 0 6px;
    border: 0;
    outline: 0;
    text-overflow: ellipsis;

    font-size: 12px;
    white-space: nowrap;
    text-align: left;
    cursor: pointer;
  }
`;

export const PrivateChannelsHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 18px 18px 4px;
  height: 40px;

  span {
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    white-space: nowrap;
    letter-spacing: 0.02em;

    color: #96989d;
    transition: 100ms ease-in;
  }

  &:hover span {
    color: #dcddde;
  }
`;

export const InviteButtonIcon = styled.div`
  background-image: url(${plusIconUrl});
  background-size: cover;

  filter: grayscale(1);
  width: 16px;
  height: 16px;
  position: relative;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 1;

  .tooltip {
    position: absolute;
    visibility: hidden;

    background-color: #18191c;
    color: #ffffffeb;
    font-weight: bold;
    font-size: 12px;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 8px 12px;
    border-radius: 8px;

    opacity: 0;
    transform: scale(0.9);
    top: -36px;

    white-space: nowrap;
    transition: 0.1s ease-out;

    &::after {
      content: "";
      width: 0;
      height: 0;

      position: absolute;
      bottom: -6px;

      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 6px solid #18191c;
    }
  }

  &:hover .tooltip {
    opacity: 1;
    transform: scale(1);
    top: -40px;

    z-index: 1;
    visibility: visible;
  }
`;

export const BaseContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ContentHeader = styled.div`
  background: #36393f;
  width: 100%;
  height: 48px;
  padding: 0 8px;
  font-size: 16px;
  color: #dcddde;
`;

export const ContentBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #36393f;
  position: relative;

  flex: 1;

  &::before {
    content: "";
    position: absolute;
    display: block;
    top: -1px;
    left: 0;
    right: 0;
    height: 1px;

    pointer-events: none;
    box-shadow: 0 1px 0 rgba(4, 4, 5, 0.2), 0 1.5px 0 rgba(6, 6, 7, 0.05),
      0 2px 0 rgba(4, 4, 5, 0.05);
  }
`;

export const PeopleCol = styled.div`
  width: 100%;

  header {
    padding: 20px 30px;
    border-bottom: 1px solid rgba(79, 84, 92, 0.48);
    min-width: 450px;

    h2 {
      margin-bottom: 8px;
      color: #fff;

      font-size: 16px;
      font-weight: bold;
      text-transform: uppercase;
    }
  }

  .instrument {
    color: #b9bbbe;
    font-size: 13px;
    letter-spacing: -0.3px;
    font-weight: 400;
  }
`;

export const AddFriendWrapper = styled.div`
  background-color: #202225;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 16px;
  padding: 0 12px;
  position: relative;

  input {
    background-color: unset;
    border: none;
    padding: 0;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.04em;
    white-space: pre;

    height: 40px;
    flex: 1;

    outline: 0;
    color: #dcddde;
    margin: 4px 8px 4px 0;
  }

  button {
    color: #fff;
    background-color: #5865f2;

    cursor: pointer;
    padding: 8px 16px;

    font-size: 12px;
    font-weight: 500;

    outline: 0;
    border: none;
    border-radius: 3px;

    &:disabled {
      background-color: #3c438b;
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
`;

export const FriendsEmpty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 52px;

  width: 100%;
  flex: 1;

  div {
    font-size: 14px;
    text-align: center;
    color: #a3a6aa;
  }
`;
