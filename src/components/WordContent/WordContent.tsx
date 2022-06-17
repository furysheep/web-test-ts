import styled from 'styled-components';
import useFetch from '../../hooks/useFetch';
import DefinitionList from '../DefinitionList';
import Notes from '../Notes';

type PropTypes = {
  word: string;
};

const WordContent = ({ word }: PropTypes) => {
  const { data, error } = useFetch<any>(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  );

  if (error) {
    return <p>No definition found</p>;
  }

  if (!data) {
    return <p>Loading...</p>;
  }

  // filter out other phonetics like audio
  const phonetic = data
    .map((result: any) => result.phonetics)
    .flat()
    .filter((ph: any) => !!ph.text)[0]?.text;

  return (
    <div>
      <h1>
        {`${word} - `}
        <span>{phonetic || 'No phonetic'}</span>
      </h1>
      <DetailsContainer>
        <DefinitionList results={data} />
        <Notes word={word} />
      </DetailsContainer>
    </div>
  );
};

const DetailsContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  &:before {
    content: '';
    border: 1px solid #d3d3d3;
  }
  @media (min-width: 992px) {
    flex-direction: row;
  }
  h1 > span {
    font-style: italic;
  }
`;

export default WordContent;
