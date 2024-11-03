import React from 'react';
import styled from 'styled-components';
import { FaPlay } from 'react-icons/fa';

const VideoListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;

const VideoItem = styled.div`
  width: 300px;
  margin: 10px;
  background-color: white;
  padding: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  text-align: center;
`;

const Thumbnail = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const VideoTitle = styled.h3`
  font-size: 1.2em;
  margin: 10px 0;
  color: #282c34;
`;

const VideoLink = styled.a`
  color: #61dafb;
  display: inline-block;
  margin-top: 10px;
`;

interface Video {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    thumbnails: {
      default: {
        url: string;
      };
    };
  };
}

interface VideoListProps {
  videos: Video[];
}

const VideoList: React.FC<VideoListProps> = ({ videos }) => {
  return (
    <VideoListContainer>
      {videos.map(video => (
        <VideoItem key={video.id.videoId}>
          <Thumbnail src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
          <VideoTitle>{video.snippet.title}</VideoTitle>
          <VideoLink href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noopener noreferrer">
            <FaPlay /> Watch
          </VideoLink>
        </VideoItem>
      ))}
    </VideoListContainer>
  );
};

export default VideoList;
