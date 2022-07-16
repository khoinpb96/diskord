import styled from "styled-components";

const Button = styled.button`
  background-color: #ffd400;
  color: #36393f;

  width: 100%;
  border: none;
  padding: 10px 0;
  cursor: pointer;

  font-weight: bold;
  font-size: 0.9rem;

  transition: background-color 0.17s ease, color 0.17s ease;
  border-radius: 4px;

  &:hover {
    background-color: #ffe566;
  }
`;

export default Button;
