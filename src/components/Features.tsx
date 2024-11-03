import React from 'react';
import styled from 'styled-components';
import { FaSearch, FaDownload, FaVideo } from 'react-icons/fa';

const FeaturesContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const FeatureItem = styled.div`
  margin: 20px;
`;

const FeatureIcon = styled.div`
  font-size: 2em;
  color: #61dafb;
`;

const FeatureText = styled.p`
  font-size: 1.2em;
  color: #282c34;
`;

const Features: React.FC = () => {
  return (
    <FeaturesContainer>
      <h2>Features</h2>
      <FeatureItem>
        <FeatureIcon><FaSearch /></FeatureIcon>
        <FeatureText>Search YouTube Videos</FeatureText>
      </FeatureItem>
      <FeatureItem>
        <FeatureIcon><FaDownload /></FeatureIcon>
        <FeatureText>Download in MP4 & MP3</FeatureText>
      </FeatureItem>
      <FeatureItem>
        <FeatureIcon><FaVideo /></FeatureIcon>
        <FeatureText>High-Quality Video Previews</FeatureText>
      </FeatureItem>
    </FeaturesContainer>
  );
};

export default Features;
