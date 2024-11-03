import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const AboutText = styled.p`
  font-size: 1.2em;
  color: #282c34;
`;

const About: React.FC = () => {
  return (
    <AboutContainer>
      <h2>About</h2>
      <AboutText>This application allows you to search and download YouTube videos in various formats including MP4 and MP3.</AboutText>
    </AboutContainer>
  );
};

export default About;
