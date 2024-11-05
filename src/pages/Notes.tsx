import styled from "styled-components";

const NotesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  height: 100%;
`;

const NoteContainer = styled.div`
  border: 1px solid red;
  background-color: white;
`;

function Notes() {
  return (
    <NotesContainer>
      <NoteContainer>
        <p>Note 1</p>
      </NoteContainer>
      <NoteContainer>
        <p>Note 2</p>
      </NoteContainer>
      <NoteContainer>
        <p>Note 3</p>
      </NoteContainer>
      <NoteContainer>
        <p>Note 4</p>
      </NoteContainer>
    </NotesContainer>
  );
}

export default Notes;
