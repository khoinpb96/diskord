import styled from "styled-components";

const Button = styled.button`
  background-color: #5865f2;
  color: #fff;

  width: 100%;
  border: none;
  padding: 10px 0;
  cursor: pointer;

  font-weight: bold;
  font-size: 0.9rem;

  transition: background-color 0.17s ease, color 0.17s ease;
  border-radius: 4px;

  &:hover {
    background-color: #4752c4;
  }
`;

export default Button;
