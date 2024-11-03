import React, { useState } from 'react';
import styled from 'styled-components';

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Input = styled.input`
  padding: 10px;
  width: 60%;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  margin-left: 10px;
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
      <Input 
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search YouTube videos..."
      />
      <Button onClick={handleSearch}>Search</Button>
    </SearchBarContainer>
  );
};

export default SearchBar;
