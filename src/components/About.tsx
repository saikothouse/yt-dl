import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: 40px;
  text-align: center;
  background-color: #f9f9f9;
  border-radius: 10px;
  margin: 20px auto;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const AboutTitle = styled.h2`
  font-size: 2em;
  color: #282c34;
  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const AboutText = styled.p`
  font-size: 1.2em;
  color: #666;
  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const About: React.FC = () => {
  return (
    <AboutContainer>
      <AboutTitle>About</AboutTitle>
      <AboutText>This application allows you to search and download YouTube videos in various formats including MP4 and MP3.</AboutText>
    </AboutContainer>
  );
};

export default About;
