import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #282c34;
  color: white;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    text-decoration: underline;
  }
`;

const Logo = styled.h1`
  font-size: 24px;
`;

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <Logo>YouTube Downloader</Logo>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/features">Features</NavLink>
        <NavLink to="/faq">FAQ</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
