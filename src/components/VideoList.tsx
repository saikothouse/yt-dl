import React from 'react';
import styled from 'styled-components';

const VideoListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;

const VideoItem = styled.div`
  width: 300px;
  margin: 10px;
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
          <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
          <h3>{video.snippet.title}</h3>
          <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noopener noreferrer">Watch</a>
        </VideoItem>
      ))}
    </VideoListContainer>
  );
};

export default VideoList;
