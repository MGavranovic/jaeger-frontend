import styled from "styled-components";

const StyledNote = styled.div`
  background-color: var(--color-amber-200);
  margin: 10px;
  border: 1px solid var(--color-amber-400);
  border-radius: var(--border-radius-sm);
`;

// TODO: add border radius to header and footer borders
const NoteHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid red;
`;

const NoteMainContent = styled.div`
  padding: 1rem;
`;

const NoteFooter = styled.footer`
  border-top: 1px solid red;
  padding: 1rem;
`;

// TODO:
/*
p elem as placeholders
Will be replaced by actual values
*/
function Note() {
  return (
    <StyledNote>
      <NoteHeader>
        <p>Note id#</p>
        <p>status</p>
      </NoteHeader>
      <NoteMainContent>
        <p>Company</p>
        <p>Position</p>
        <p>Salary</p>
        {/* NOTE: potentially, no need for user here */}
        <p>??user</p>
        <p>email</p>
      </NoteMainContent>
      <NoteFooter>Applied On: Date</NoteFooter>
    </StyledNote>
  );
}

export default Note;
