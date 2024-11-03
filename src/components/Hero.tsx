import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  background: linear-gradient(135deg, #61dafb, #282c34);
  color: white;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 10px;
    height: 50vh;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3em;

  @media (max-width: 600px) {
    font-size: 2em;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5em;
  margin-top: 10px;

  @media (max-width: 600px) {
    font-size: 1.2em;
    margin-top: 5px;
  }
`;

const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <HeroTitle>YouTube Downloader</HeroTitle>
      <HeroSubtitle>Search and download your favorite YouTube videos with ease</HeroSubtitle>
    </HeroContainer>
  );
};

export default Hero;
