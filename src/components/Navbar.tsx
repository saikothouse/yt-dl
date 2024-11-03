import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const NavbarContainer = styled.nav`
  width: 100%;
  background-color: #282c34;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  color: white;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.h1`
  font-size: 1.5em;
  margin: 0;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1em;

  &:hover {
    text-decoration: underline;
  }
`;

const MobileIcon = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    font-size: 1.5em;
    cursor: pointer;
  }
`;

const DropdownMenu = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #282c34;
  position: absolute;
  top: 60px;
  right: 10px;
  width: 150px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const DropdownLink = styled(Link)`
  color: white;
  padding: 10px;
  text-decoration: none;
  font-size: 1em;

  &:hover {
    background-color: #61dafb;
  }
`;

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
      <MobileIcon onClick={handleMobileMenuToggle}>
        <FaBars />
      </MobileIcon>
      {isMobileMenuOpen && (
        <DropdownMenu>
          <DropdownLink to="/" onClick={handleMobileMenuToggle}>Home</DropdownLink>
          <DropdownLink to="/about" onClick={handleMobileMenuToggle}>About</DropdownLink>
          <DropdownLink to="/features" onClick={handleMobileMenuToggle}>Features</DropdownLink>
          <DropdownLink to="/faq" onClick={handleMobileMenuToggle}>FAQ</DropdownLink>
          <DropdownLink to="/contact" onClick={handleMobileMenuToggle}>Contact</DropdownLink>
        </DropdownMenu>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
