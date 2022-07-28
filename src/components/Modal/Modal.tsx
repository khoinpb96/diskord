import styled from "styled-components";

const Modal = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);

  display: flex;
  justify-content: center;
  align-items: center;

  animation: showModal 200ms ease-in-out;

  @keyframes showModal {
    from {
      background: rgba(0, 0, 0, 0);
    }

    to {
      background: rgba(0, 0, 0, 0.85);
    }
  }
`;

export default Modal;
