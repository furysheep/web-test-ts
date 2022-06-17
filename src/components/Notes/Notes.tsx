import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocalStorage } from '../../hooks/useLocalStorage';

type PropTypes = {
  word: string;
};

const Notes = ({ word }: PropTypes) => {
  const [notes, setNotes] = useLocalStorage(word);
  const [note, setNote] = useState('');

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
  };

  const onAddNote = () => {
    setNotes((prev) => [...prev, note]);
    setNote('');
  };

  const onRemoveNote = (index: number) =>
    setNotes(notes.filter((_, i) => i !== index));

  return (
    <NotesContainer>
      <h2>Notes</h2>
      <div>
        <input type='text' value={note} onChange={onChangeText} />
        <button onClick={onAddNote}>Add Note</button>
      </div>
      <ul className='dash'>
        {notes.map((note: string, i) => (
          <li key={i}>
            {note}
            <button onClick={() => onRemoveNote(i)}>Remove</button>
          </li>
        ))}
      </ul>
    </NotesContainer>
  );
};

// center self on mobile
const NotesContainer = styled.div`
  flex: 1 1 0;
  align-self: center;
  @media (min-width: 992px) {
    align-self: flex-start;
  }
  ul > li > button {
    margin-left: 5px;
  }
`;

export default React.memo(Notes);
