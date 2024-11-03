import React from 'react';
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

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

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
        <NavLinks style={{ flexDirection: 'column', position: 'absolute', top: '60px', right: '10px', backgroundColor: '#282c34', borderRadius: '5px', padding: '10px' }}>
          <NavLink to="/" onClick={handleMobileMenuToggle}>Home</NavLink>
          <NavLink to="/about" onClick={handleMobileMenuToggle}>About</NavLink>
          <NavLink to="/features" onClick={handleMobileMenuToggle}>Features</NavLink>
          <NavLink to="/faq" onClick={handleMobileMenuToggle}>FAQ</NavLink>
          <NavLink to="/contact" onClick={handleMobileMenuToggle}>Contact</NavLink>
        </NavLinks>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
