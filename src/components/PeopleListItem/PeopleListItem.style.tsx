import styled from "styled-components";

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

export const PeopleListItemWrapper = styled.div`
  position: relative;
  height: 62px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 20px 0 30px;
  padding: 0 10px;
  border-radius: 8px;

  line-height: 20px;

  cursor: pointer;
  background-color: transparent;
  transition: 150ms ease-out;

  &:hover {
    background-color: rgba(79, 84, 92, 0.4);
  }
`;

export const PeopleListItemUserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

  .text {
    .diskordTag {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      color: #fff;
      font-weight: 600;
      font-size: 14px;
    }
    .subtext {
      color: #b9b9b9;
      font-size: 12px;
    }
  }
`;

export const PeopleListItemActions = styled.div`
  display: flex;
  gap: 10px;

  .action {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #2f3136;
    border-radius: 50%;

    img {
      opacity: 0.7;
      width: 20px;
      height: 20px;
    }

    &:hover img {
      opacity: 1;
    }
  }
`;
