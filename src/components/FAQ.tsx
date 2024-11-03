import React from 'react';
import styled from 'styled-components';
import { FaQuestionCircle } from 'react-icons/fa';

const FAQContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const FAQItem = styled.div`
  margin: 20px;
`;

const FAQIcon = styled.div`
  font-size: 2em;
  color: #61dafb;
`;

const FAQText = styled.p`
  font-size: 1.2em;
  color: #282c34;
`;

const FAQ: React.FC = () => {
  return (
    <FAQContainer>
      <h2>Frequently Asked Questions</h2>
      <FAQItem>
        <FAQIcon><FaQuestionCircle /></FAQIcon>
        <FAQText>How do I download videos?</FAQText>
      </FAQItem>
      <FAQItem>
        <FAQIcon><FaQuestionCircle /></FAQIcon>
        <FAQText>Can I download only audio?</FAQText>
      </FAQItem>
      <FAQItem>
        <FAQIcon><FaQuestionCircle /></FAQIcon>
        <FAQText>Is this service free?</FAQText>
      </FAQItem>
    </FAQContainer>
  );
};

export default FAQ;
