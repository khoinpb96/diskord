import React from "react";
import styled from "styled-components";

import loadingLogoVideoUrl from "../../assets/loading-logo.webm";
import { facts } from "./LoadingPage.mocks";

const LoadingPage: React.FC = () => {
  return (
    <LoadingPageWrapper>
      <LoadingLogoWrapper data-testid="loading-logo-wrapper">
        <video src={loadingLogoVideoUrl} muted autoPlay loop width={240} />
        <div>Did you know</div>
        <Fact>{facts[Math.floor(Math.random() * facts.length)]}</Fact>
      </LoadingLogoWrapper>
    </LoadingPageWrapper>
  );
};

const LoadingPageWrapper = styled.main`
  min-height: 100vh;
  background-color: #303136;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  div {
    color: #5865f2;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
  }
`;

const Fact = styled.article`
  color: #b9bbbe;
  font-size: 12px;
  font-weight: 400;
  margin-top: 0.5rem;
`;

export default LoadingPage;
