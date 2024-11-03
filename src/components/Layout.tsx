import React from 'react';
import styled from 'styled-components';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f2f5;
  min-height: 100vh;
  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const Layout: React.FC = ({ children }) => {
  return (
    <LayoutContainer>
      <Content>{children}</Content>
    </LayoutContainer>
  );
};

export default Layout;
