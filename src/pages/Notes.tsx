import styled from "styled-components";
import Note from "../components/notes/Note";
import getNotes, { NoteDetails } from "../data/data";
import { useState } from "react";

interface NoteProps {
  color: string;
}

const NotesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  height: 100%;
  gap: 1rem;
`;

const NoteContainer = styled.div`
  border: 1px solid var(--color-zinc-200);
  border-radius: var(--border-radius-sm);
  background-color: white;
  text-align: center;
  overflow: scroll;
  scrollbar-width: none;
`;

const StyledHeading = styled.header`
  position: sticky;
  top: 0;
  border-bottom: 1px solid var(--color-zinc-200);
  padding: 1rem 0;
  background-color: var(--color-lime-100);
  z-index: 1;
`;

/* TODO: 
- this p elements are placeholders
- they will be representing the stages of the job app process
- could add one more note container for the offers were user is rejected
- the note should not move through the sections unless the user changes the current stage in the process
- notes can skip straight to the "pottential" last "rejected" section in case user gets that kind of response during the process
*/
function Notes() {
  // NOTE: I know this generates a new set of data on every render but this is just a temp solution for testing
  const [notes, setNotes] = useState<NoteDetails[]>(getNotes());

  return (
    <NotesContainer>
      <NoteContainer>
        <StyledHeading>Applied</StyledHeading>

        {/*// NOTE: working on notes */}
        {notes.map((note) => (
          <Note key={note.id} note={note}></Note>
        ))}
        {/*// NOTE:*/}
      </NoteContainer>

      <NoteContainer>
        <StyledHeading>Got response</StyledHeading>
      </NoteContainer>

      <NoteContainer>
        <StyledHeading>Interview</StyledHeading>
      </NoteContainer>

      <NoteContainer>
        <StyledHeading>Offer</StyledHeading>
      </NoteContainer>
    </NotesContainer>
  );
}

export default Notes;
