import React from 'react';
import styled from 'styled-components';
import { FaQuestionCircle, FaInfoCircle } from 'react-icons/fa';

const FAQContainer = styled.div`
  padding: 20px;
  text-align: center;
  background-color: #f9f9f9;
  border-radius: 10px;
  margin: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const FAQItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  max-width: 600px;
  text-align: left;
`;

const IconWrapper = styled.div`
  font-size: 2em;
  color: #61dafb;
`;

const Question = styled.h4`
  font-size: 1.2em;
  margin: 0;
  color: #333;
`;

const Answer = styled.p`
  font-size: 1em;
  color: #666;
`;

const FAQ: React.FC = () => {
  return (
    <FAQContainer>
      <h2>Frequently Asked Questions</h2>
      <FAQList>
        <FAQItem>
          <IconWrapper><FaQuestionCircle /></IconWrapper>
          <div>
            <Question>How do I download videos?</Question>
            <Answer>You can search for your favorite videos using the search bar and click on the download button next to each video to download it in your preferred format.</Answer>
          </div>
        </FAQItem>
        <FAQItem>
          <IconWrapper><FaQuestionCircle /></IconWrapper>
          <div>
            <Question>Can I download only audio?</Question>
            <Answer>Yes, you can download the audio version of a video by selecting the MP3 format from the download options.</Answer>
          </div>
        </FAQItem>
        <FAQItem>
          <IconWrapper><FaQuestionCircle /></IconWrapper>
          <div>
            <Question>Is this service free?</Question>
            <Answer>Yes, our service is completely free to use. You can download as many videos as you like without any cost.</Answer>
          </div>
        </FAQItem>
        <FAQItem>
          <IconWrapper><FaQuestionCircle /></IconWrapper>
          <div>
            <Question>How do I contact support?</Question>
            <Answer>You can reach out to our support team via email at support@youtubedownloader.com or call us at +123 456 7890.</Answer>
          </div>
        </FAQItem>
        <FAQItem>
          <IconWrapper><FaInfoCircle /></IconWrapper>
          <div>
            <Question>Are my downloads secure?</Question>
            <Answer>Yes, we use encrypted connections to ensure that your downloads are secure and your privacy is protected.</Answer>
          </div>
        </FAQItem>
        <FAQItem>
          <IconWrapper><FaInfoCircle /></IconWrapper>
          <div>
            <Question>Can I save videos to cloud storage?</Question>
            <Answer>Yes, you can save downloaded videos directly to your preferred cloud storage services for easy access and sharing.</Answer>
          </div>
        </FAQItem>
      </FAQList>
    </FAQContainer>
  );
};

export default FAQ;
