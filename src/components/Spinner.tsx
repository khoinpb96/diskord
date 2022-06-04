import styled from "styled-components";

const Spinner = styled.div`
  border: 4px solid #8bb7f3;
  border-top: 4px solid #ffffff;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Spinner;
