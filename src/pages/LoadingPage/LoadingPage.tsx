import React from "react";
import styled from "styled-components";

import iconlogoUrl from "../../assets/icon-logo.svg";

const facts = [
  "Discord was launched in the year 2015.",
  "As of December 2019, there are over 250 million registered Discord users.",
  "As of February 2020, there are over 56 million monthly active Discord users.",
  "Discord has a total of 165 employees as of May 2019.",
  "An average of 25 billion messages are sent monthly on Discord.",
  "Discord was founded by Jason Citron.",
  "Its main headquarters is located in San Francisco, California.",
  "Discord is a proprietary freeware VoIP app.",
  "The app can run on Windows, iOS, Android, Linux, and web browsers.",
  "The app is written with programming languages like Javascript, React, Elixir, and Rust.",
  "As of March 2019, Alexa Rank places discord as the 128th most popular website.",
  "The official website for the app is discord.com.",
  "Discord was developed by Discord Inc. which was originally called Hammer and Chisel.",
  "Jason Citron sold his first social gaming platform to GREE to fund Hammer and Chisel.",
  "Citron made Discord as a solution to user-friendly voice over IP software.",
  "Discord is available in 27 languages.",
  "The app specializes in sending text, image, audio, and video communication between users.",
  "The goal of Discord is to provide an easy way for gamers to communicate using modern technology.",
  "Additional funding for Discord's development was gained from YouWeb's 9+ incubator.",
  "Originally, Discord was introduced to the public as discordapp.com.",
];

const LoadingPage: React.FC = () => {
  return (
    <LoadingPageWrapper>
      <LoadingLogoWrapper data-testid="loading-logo-wrapper">
        <img src={iconlogoUrl} />
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

  img {
    width: 80px;
    animation: loading 1s infinite;

    @keyframes loading {
      from {
        transform: rotateY(0deg);
      }
      to {
        transform: rotateY(360deg);
      }
    }
  }
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

    margin-top: 2rem;
  }
`;

const Fact = styled.article`
  color: #b9bbbe;
  font-size: 12px;
  font-weight: 400;
  margin-top: 0.5rem;
`;

export default LoadingPage;
