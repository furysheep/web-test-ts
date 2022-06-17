import React from 'react';
import styled from 'styled-components';

type PropTypes = {
  results: any;
};

const DefinitionList = ({ results }: PropTypes) => (
  <DefinitionListContainer>
    <h2>Definitions</h2>
    <ul className='dash'>
      {results?.map((result: any) =>
        result.meanings?.map((val: any) =>
          val.definitions?.map((def: any) => (
            <li key={def.definition}>{def.definition}</li>
          ))
        )
      )}
    </ul>
  </DefinitionListContainer>
);

const DefinitionListContainer = styled.div`
  flex: 3 1 0;
  order: -1;
  h2 {
    font-style: italic;
    margin-top: 20px;
  }
`;

export default React.memo(DefinitionList);
