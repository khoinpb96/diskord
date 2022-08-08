import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

import plusIconUrl from "../../assets/plus-btn.svg";

export const Background = styled.div`
  background-color: #202225;
  overflow: hidden;
`;

export const Wrapper = styled(motion.div)`
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

  display: flex;
  align-items: center;

  img {
    margin: 0 8px;
    width: 24px;
    filter: brightness(0.6);
  }

  h3 {
    overflow: hidden;
    white-space: nowrap;
    font-size: 16px;
    font-weight: bold;
    line-height: 20px;

    margin: 0 8px 0 0;
  }
`;

export const Divider = styled.div`
  width: 1px;
  height: 24px;
  margin: 0 8px;
  background-color: #4f545c71;
`;

export const ContentHeaderTabBar = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  margin: 0 1rem;
`;

export const ContentHeaderTabBarItem = styled.div<{ isSelected?: boolean }>`
  display: flex;
  justify-content: center;
  padding: 2px 8px;
  min-width: 40px;
  border-radius: 4px;
  font-size: 16px;

  background-color: ${({ isSelected }) =>
    isSelected ? "#4f545c99" : "transparent"};
  opacity: ${({ isSelected }) => (isSelected ? 1 : 0.8)};
  cursor: pointer;

  &:hover {
    opacity: 1;
    background-color: ${({ isSelected }) =>
      isSelected ? "#4f545c66" : "#4f545c99"};
  }
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

export const FriendsTabWrapper = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const FriendsTabSearchBar = styled.div`
  margin: 16px 20px 8px 30px;
  display: flex;
  border-radius: 4px;

  overflow: hidden;
  position: relative;

  input {
    font-size: 14px;
    font-weight: 400;
    line-height: 32px;

    padding: 1px 8px;
    flex: 1;
    outline: 0;
    border: none;
    resize: none;

    color: #dcddde;
    background: #202225;
  }

  img {
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    cursor: text;
  }
`;

export const FriendTabTitle = styled.h2`
  padding: 16px 20px 8px 30px;

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  text-transform: uppercase;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: #b9bbbe;
`;

export const PeopleList = styled.div`
  overflow-y: scroll;
  margin: 8px 0 4px;
  flex: 1;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #2e3338;
    border-radius: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background: #1b1e22;
  }
`;

export const DirectMessagesContainer = styled.div``;

export const DirectMessage = styled(NavLink)`
  margin: 0 8px;
  padding: 0 8px;

  border-radius: 4px;
  height: 42px;

  display: flex;
  align-items: center;
  gap: 12px;
  color: rgba(255, 255, 255, 0.6);

  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: rgba(255, 255, 255, 1);
    background-color: rgba(79, 84, 92, 0.4);
  }

  img {
    width: 32px;
    border-radius: 50%;
  }

  .username {
    font-size: 14px;
    font-weight: 600;
  }
`;
