import styled from "styled-components";

const DotsLoading = () => {
  return (
    <StyledLoading>
      <div className="dot1 dot" />
      <div className="dot2 dot" />
      <div className="dot3 dot" />
    </StyledLoading>
  );
};

const StyledLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  .dot {
    border-radius: 50%;
    background-color: #fff;
    width: 8px;
    height: 8px;

    animation: loading 800ms infinite ease-in;
    animation-direction: alternate;

    @keyframes loading {
      from {
        opacity: 0;
        transform: scale(0.8);
      }
      to {
        opacity: 1;
        transform: scale(1.2);
      }
    }
  }

  .dot1 {
    animation-delay: 200ms;
  }
  .dot2 {
    animation-delay: 400ms;
  }
  .dot3 {
    animation-delay: 600ms;
  }
`;

export default DotsLoading;
