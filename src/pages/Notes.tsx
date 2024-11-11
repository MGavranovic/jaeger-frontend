import styled from "styled-components";
import Note from "../components/notes/Note";

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
`;

const PlaceholderNote = styled.div<NoteProps>`
  background-color: ${(props) => props.color};
  margin: 10px;
`;

const StyledHeading = styled.header`
  border-bottom: 1px solid var(--color-zinc-200);
  padding: 1rem 0;
  background-color: var(--color-lime-100);
`;

/* TODO: 
- this p elements are placeholders
- they will be representing the stages of the job app process
- could add one more note container for the offers were user is rejected
- the note should not move through the sections unless the user changes the current stage in the process
- notes can skip straight to the "pottential" last "rejected" section in case user gets that kind of response during the process
*/
function Notes() {
  return (
    <NotesContainer>
      <NoteContainer>
        <StyledHeading>Applied</StyledHeading>
        <PlaceholderNote color={"var(--color-lime-300)"}>
          test note
        </PlaceholderNote>
        <Note />
        <PlaceholderNote color="red">test note</PlaceholderNote>
        {/* Testing scroll */}
        <PlaceholderNote color={"var(--color-lime-300)"}>
          test note
        </PlaceholderNote>
        <PlaceholderNote color={"var(--color-lime-300)"}>
          test note
        </PlaceholderNote>
        <PlaceholderNote color={"var(--color-lime-300)"}>
          test note
        </PlaceholderNote>
        <PlaceholderNote color={"var(--color-lime-300)"}>
          test note
        </PlaceholderNote>
        <PlaceholderNote color={"var(--color-lime-300)"}>
          test note
        </PlaceholderNote>
        <PlaceholderNote color={"var(--color-lime-300)"}>
          test note
        </PlaceholderNote>
        <PlaceholderNote color={"var(--color-lime-300)"}>
          test note
        </PlaceholderNote>
        <PlaceholderNote color={"var(--color-lime-300)"}>
          test note
        </PlaceholderNote>
        <PlaceholderNote color={"var(--color-lime-300)"}>
          test note
        </PlaceholderNote>
        <PlaceholderNote color={"var(--color-lime-300)"}>
          test note
        </PlaceholderNote>
        <PlaceholderNote color={"var(--color-lime-300)"}>
          test note
        </PlaceholderNote>
        <PlaceholderNote color={"var(--color-lime-300)"}>
          test note
        </PlaceholderNote>
        <PlaceholderNote color={"var(--color-lime-300)"}>
          test note
        </PlaceholderNote>
        <PlaceholderNote color={"var(--color-lime-300)"}>
          test note
        </PlaceholderNote>
        <PlaceholderNote color={"var(--color-lime-300)"}>
          test note
        </PlaceholderNote>
        <PlaceholderNote color={"var(--color-lime-300)"}>
          test note
        </PlaceholderNote>
        <PlaceholderNote color={"var(--color-lime-300)"}>
          test note
        </PlaceholderNote>
        <PlaceholderNote color={"var(--color-lime-300)"}>
          test note
        </PlaceholderNote>
        {/* Testing scroll */}
      </NoteContainer>
      <NoteContainer>
        <StyledHeading>Got response</StyledHeading>
        <PlaceholderNote color="var(--color-amber-600)">
          test note
        </PlaceholderNote>
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
