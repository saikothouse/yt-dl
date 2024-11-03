import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #282c34;
  padding: 10px 20px;
  color: white;
  text-align: center;
  position: fixed;
  width: 100%;
  bottom: 0;
  @media (max-width: 768px) {
    padding: 8px 15px;
  }
`;

const FooterText = styled.p`
  font-size: 1em;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 0.8em;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterText>&copy; 2024 YouTube Downloader | All Rights Reserved</FooterText>
    </FooterContainer>
  );
};

export default Footer;
