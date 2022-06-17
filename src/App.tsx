import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import WordContent from './components/WordContent';

function App() {
  return (
    <div className='App'>
      <TestComponent />
    </div>
  );
}

export const TestComponent: React.FunctionComponent = () => {
  const [word, setWord] = useState<string>('');
  const [wordToSearch, setWordToSearch] = useState<string>('');

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value);
  };

  const onSearchWord = () => {
    setWordToSearch(word);
  };

  return (
    <section>
      <SearchContainer>
        <span>Search a word:</span>
        <input type='text' value={word} onChange={onChangeText} />
        <button onClick={onSearchWord}>Search</button>
      </SearchContainer>
      {!!wordToSearch && <WordContent word={wordToSearch} />}
    </section>
  );
};

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
`;

export default App;
