import styled from "styled-components";
import { ApplicationStatus, NoteDetails } from "../../data/data";

interface NoteProps {
  note: NoteDetails;
  onClick?: () => void;
}

const StyledNote = styled.div`
  background-color: var(--color-zinc-50);
  margin: 10px;
  border: 1px solid var(--color-zinc-300);
  border-radius: var(--border-radius-sm);
`;

const NoteHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid var(--color-zinc-300);
  border-radius: var(--border-radius-sm);
  background-color: var(--color-zinc-200);
`;

const NoteMainContent = styled.div`
  padding: 1rem;
`;

const NoteMainSections = styled.div`
  border-bottom: 1px solid var(--color-zinc-200);
  padding: 1rem;
  border-radius: var(--border-radius-sm);
  display: flex;
  justify-content: space-between;
`;

const NoteFooter = styled.footer`
  border-top: 1px solid var(--color-zinc-300);
  border-radius: var(--border-radius-sm);
  padding: 1rem;
  background-color: var(--color-zinc-200);
`;

const StyledStatus = styled.p<{ applicationStatus: ApplicationStatus }>`
  ${({ applicationStatus }) => `
    background-color: ${
      {
        applied: "var(--color-zinc-500)",
        "got-response": "var(--color-amber-300)",
        interview: "var(--color-cyan-700)",
        offer: "var(--color-lime-500)",
        rejected: "var(--color-red-700)",
        accepted: "var(--color-lime-700)",
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
function Note({ note, onClick }: NoteProps) {
  return (
    <StyledNote onClick={onClick}>
      <NoteHeader>
        <p>Note id#</p>
        <StyledStatus applicationStatus={note.applicationStatus}>
          {note.applicationStatus}
        </StyledStatus>
      </NoteHeader>
      <NoteMainContent>
        <NoteMainSections>
          <p>Company:</p>
          <p>{note.companyName}</p>
        </NoteMainSections>

        <NoteMainSections>
          <p>Position:</p>
          <p>{note.position}</p>
        </NoteMainSections>

        <NoteMainSections>
          <p>Salary:</p>
          <p>${note.salary}</p>
        </NoteMainSections>
        {/* NOTE: potentially, no need for user here */}
        {/* <p>??user: {note.user}</p>
        <p>email: {note.email}</p> */}
      </NoteMainContent>
      <NoteFooter>
        {note.appliedOnDate.toLocaleDateString("en-UK", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })}
      </NoteFooter>
    </StyledNote>
  );
}

export default Note;
