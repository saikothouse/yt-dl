import React from 'react';
import styled from 'styled-components';
import { FaYoutube } from 'react-icons/fa';

const HeaderContainer = styled.header`
  background-color: #282c34;
  padding: 20px;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LogoIcon = styled(FaYoutube)`
  font-size: 2.5em;
  color: #61dafb;
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin: 0;
`;

const Subtitle = styled.h2`
  font-size: 1.5em;
  color: #61dafb;
  margin: 10px 0 0;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo>
        <LogoIcon />
        <Title>YouTube Downloader</Title>
      </Logo>
      <Subtitle>Search and download your favorite videos</Subtitle>
    </HeaderContainer>
  );
};

export default Header;
