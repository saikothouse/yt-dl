import React, { useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import About from './components/About';
import Features from './components/Features';
import FAQ from './components/FAQ';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Layout from './components/Layout';

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

const App: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  const handleSearch = async (query: string) => {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        q: query,
        type: 'video',
        key: 'YOUR_API_KEY'
      }
    });
    setVideos(response.data.items);
  };

  return (
    <div>
      <Header />
      <Navbar />
      <Layout>
        <Hero />
        <SearchBar onSearch={handleSearch} />
        <VideoList videos={videos} />
        <About />
        <Features />
        <FAQ />
        <Contact />
      </Layout>
      <Footer />
    </div>
  );
};

export default App;
