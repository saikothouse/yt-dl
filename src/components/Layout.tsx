import React from 'react';
import styled from 'styled-components';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f2f5;
  min-height: 100vh;
`;

const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Layout: React.FC = ({ children }) => {
  return (
    <LayoutContainer>
      <Content>{children}</Content>
    </LayoutContainer>
  );
};

export default Layout;
