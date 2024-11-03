import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  padding: 0 20px;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
`;

const SearchIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  color: #aaa;
`;

const Input = styled.input`
  padding: 10px 40px 10px 30px;
  width: 100%;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 30px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    padding: 10px 30px 10px 30px;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  margin-top: 10px;
  background-color: #61dafb;
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    padding: 10px 15px;
    font-size: 14px;
    margin-top: 5px;
  }
`;

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>('');

  const handleSearch = () => {
    if (query) onSearch(query);
  };

  return (
    <SearchBarContainer>
      <InputWrapper>
        <SearchIcon>
          <FaSearch />
        </SearchIcon>
        <Input 
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search YouTube videos..."
        />
      </InputWrapper>
      <Button onClick={handleSearch}>Search</Button>
    </SearchBarContainer>
  );
};

export default SearchBar;
