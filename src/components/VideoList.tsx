import React from 'react';
import styled from 'styled-components';
import { FaPlay, FaDownload } from 'react-icons/fa';

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
  @media (max-width: 768px) {
    width: 100%;
    margin: 10px 0;
  }
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

const DownloadButton = styled.button`
  margin: 5px;
  padding: 8px 12px;
  background-color: #61dafb;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const DownloadSection = styled.div`
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

const downloadVideo = async (videoId: string, format: string) => {
  try {
    const response = await axios.get('https://youtube-video-download.p.rapidapi.com/download', {
      params: { id: videoId, format },
      headers: {
        'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY',
        'X-RapidAPI-Host': 'youtube-video-download.p.rapidapi.com'
      }
    });
    const downloadUrl = response.data.download_url;
    window.open(downloadUrl, '_blank');
  } catch (error) {
    console.error('Error downloading video:', error);
    alert('Failed to download the video.');
  }
};

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
          <DownloadSection>
            <DownloadButton onClick={() => downloadVideo(video.id.videoId, 'mp4')}>
              <FaDownload /> Download MP4
            </DownloadButton>
            <DownloadButton onClick={() => downloadVideo(video.id.videoId, 'mp3')}>
              <FaDownload /> Download MP3
            </DownloadButton>
          </DownloadSection>
        </VideoItem>
      ))}
    </VideoListContainer>
  );
};

export default VideoList;
