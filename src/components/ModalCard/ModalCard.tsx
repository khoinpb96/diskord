import styled from "styled-components";

const ModalCard = styled.div`
  display: flex;
  flex-direction: column;

  width: 440px;
  border-radius: 4px;
  background-color: #36393f;

  opacity: 1;
  transform: scale(1);

  animation: showPopup 200ms ease-in-out;

  @keyframes showPopup {
    from {
      opacity: 0;
      transform: scale(0.8);
    }

    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export default ModalCard;
