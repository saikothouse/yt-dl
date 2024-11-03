import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const ContactItem = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const ContactText = styled.p`
  font-size: 1.2em;
`;

const Contact: React.FC = () => {
  return (
    <ContactContainer>
      <h2>Contact Us</h2>
      <ContactItem>
        <FaEnvelope />
        <ContactText>contact@youtubedownloader.com</ContactText>
      </ContactItem>
      <ContactItem>
        <FaPhone />
        <ContactText>+123 456 7890</ContactText>
      </ContactItem>
    </ContactContainer>
  );
};

export default Contact;
