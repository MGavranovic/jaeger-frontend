import styled from "styled-components";
import { ApplicationStatus, NoteDetails } from "../../data/data";

interface NoteProps {
  note: NoteDetails;
}

const StyledNote = styled.div`
  background-color: var(--color-zinc-50);
  margin: 10px;
  border: 1px solid var(--color-zinc-300);
  border-radius: var(--border-radius-sm);
`;

// TODO: add border radius to header and footer borders
const NoteHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid var(--color-zinc-300);
  border-radius: var(--border-radius-sm);
  background-color: var(--color-zinc-100);
`;

const NoteMainContent = styled.div`
  padding: 1rem;
`;

const NoteFooter = styled.footer`
  border-top: 1px solid var(--color-zinc-300);
  border-radius: var(--border-radius-sm);
  padding: 1rem;
  background-color: var(--color-zinc-100);
`;

const StyledStatus = styled.p<{ applicationStatus: ApplicationStatus }>`
  ${({ applicationStatus }) => `
    background-color: ${
      {
        applied: "var(--color-zinc-500)",
        "got-response": "var(--color-amber-300)",
        interview: "var(--color-lime-300)",
        offer: "var(--color-lime-600)",
        rejected: "var(--color-red-700)",
      }[applicationStatus] || "var(--color-zinc-400)"
    };
  `}
  padding: 0 10px;
  border-radius: var(--border-radius-lg);
`;

// TODO:
/*
p elem as placeholders
Will be replaced by actual values
*/
function Note({ note }: NoteProps) {
  return (
    <StyledNote>
      <NoteHeader>
        <p>Note id#</p>
        <StyledStatus applicationStatus={note.applicationStatus}>
          {note.applicationStatus}
        </StyledStatus>
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
