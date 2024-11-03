import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #282c34;
  padding: 10px;
  color: white;
  text-align: center;
  position: fixed;
  width: 100%;
  bottom: 0;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 YouTube Downloader</p>
    </FooterContainer>
  );
};

export default Footer;
