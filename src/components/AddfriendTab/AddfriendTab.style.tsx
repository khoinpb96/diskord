import styled from "styled-components";

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

export const AddFriendWrapper = styled.div<{
  isError: boolean;
  isSuccess: boolean;
}>`
  background-color: #202225;
  border-radius: 8px;
  border: 1px solid
    ${({ isError, isSuccess }) => {
      if (isError) return "#ed4245";
      if (isSuccess) return "#46c46e";
      return "rgba(0, 0, 0, 0.3)";
    }};

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

export const AddFriendErrorMessage = styled.div`
  color: #f38688;
  font-size: 12px;
  margin-top: 8px;
`;

export const AddFriendSuccessMessage = styled.div`
  color: #46c46e;
  font-size: 12px;
  margin-top: 8px;
`;
