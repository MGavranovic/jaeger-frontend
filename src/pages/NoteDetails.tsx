import { useLocation } from "react-router-dom";
import {
  ApplicationStatus,
  NoteDetails as NoteDetailsType,
} from "../data/data";

import HeadingContainer from "../ui/HeadingContainer";
import Heading from "../ui/Heading";
import styled from "styled-components";

const StyledHeadingContainer = styled(HeadingContainer)`
  padding: 1rem;
  border: 1px solid var(--color-zinc-900);
`;

const StyledHeadingId = styled(Heading)`
  display: flex;
  align-items: center;
`;

const StyledHeadingStatus = styled(Heading)<{
  applicationStatus: ApplicationStatus;
}>`
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
  padding: 1rem;
  border-radius: 10rem;
`;

function NoteDetails() {
  const location = useLocation();
  const note = location.state?.note as NoteDetailsType;
  return (
    <StyledHeadingContainer>
      <StyledHeadingId as="h3">Note ID# {note.id}</StyledHeadingId>
      <StyledHeadingStatus as="h3" applicationStatus={note.applicationStatus}>
        {note.applicationStatus}
      </StyledHeadingStatus>
    </StyledHeadingContainer>
  );
}

export default NoteDetails;
