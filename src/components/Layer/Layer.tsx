import styled from "styled-components";

const Layer = styled.div<{ index?: number }>`
  inset: 0;
  position: absolute;
  transition: 100ms ease-out;
  overflow: hidden;

  z-index: ${({ index }) => index};
`;

export default Layer;
