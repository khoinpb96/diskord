import styled from "styled-components";

const Button = styled.button`
  background-color: ${({ disabled }) => (disabled ? "#e1e8ec" : "#5865f2")};
  color: ${({ disabled }) => (disabled ? "#b7b7b7" : "#fff")};

  width: 100%;
  min-height: 40px;

  border: none;
  padding: 10px 0;
  cursor: pointer;

  font-weight: bold;
  font-size: 0.9rem;

  transition: background-color 0.17s ease, color 0.17s ease;
  border-radius: 4px;

  &:disabled {
    cursor: unset;
  }

  &:hover:not(:disabled) {
    background-color: #4752c4;
  }
`;

export default Button;
