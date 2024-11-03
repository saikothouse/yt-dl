import React from 'react';
import styled from 'styled-components';
import { FaSearch, FaDownload, FaVideo, FaHighlighter, FaLock, FaCloud } from 'react-icons/fa';

const FeaturesContainer = styled.div`
  padding: 20px;
  text-align: center;
  background-color: #f9f9f9;
  border-radius: 10px;
  margin: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FeatureItem = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 300px;
`;

const FeatureIcon = styled.div`
  font-size: 3em;
  color: #61dafb;
  margin-bottom: 10px;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5em;
  margin-bottom: 10px;
  color: #333;
`;

const FeatureDescription = styled.p`
  font-size: 1em;
  color: #666;
`;

const Features: React.FC = () => {
  return (
    <FeaturesContainer>
      <h2>Features</h2>
      <FeatureList>
        <FeatureItem>
          <FeatureIcon><FaSearch /></FeatureIcon>
          <FeatureTitle>Search YouTube Videos</FeatureTitle>
          <FeatureDescription>Find your favorite YouTube videos effortlessly with our powerful search feature.</FeatureDescription>
        </FeatureItem>
        <FeatureItem>
          <FeatureIcon><FaDownload /></FeatureIcon>
          <FeatureTitle>Download in MP4 & MP3</FeatureTitle>
          <FeatureDescription>Download videos in high-quality MP4 format or extract audio in MP3 format.</FeatureDescription>
        </FeatureItem>
        <FeatureItem>
          <FeatureIcon><FaVideo /></FeatureIcon>
          <FeatureTitle>High-Quality Video Previews</FeatureTitle>
          <FeatureDescription>Preview videos in high quality before downloading them to ensure they meet your needs.</FeatureDescription>
        </FeatureItem>
        <FeatureItem>
          <FeatureIcon><FaHighlighter /></FeatureIcon>
          <FeatureTitle>User-Friendly Interface</FeatureTitle>
          <FeatureDescription>Enjoy a clean and intuitive interface that makes video downloading a breeze.</FeatureDescription>
        </FeatureItem>
        <FeatureItem>
          <FeatureIcon><FaLock /></FeatureIcon>
          <FeatureTitle>Secure Downloads</FeatureTitle>
          <FeatureDescription>Your downloads are secure with encrypted connections ensuring your privacy.</FeatureDescription>
        </FeatureItem>
        <FeatureItem>
          <FeatureIcon><FaCloud /></FeatureIcon>
          <FeatureTitle>Cloud Integration</FeatureTitle>
          <FeatureDescription>Save downloaded videos directly to your preferred cloud storage services.</FeatureDescription>
        </FeatureItem>
      </FeatureList>
    </FeaturesContainer>
  );
};

export default Features;
