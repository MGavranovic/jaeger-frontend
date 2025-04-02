import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { ApplicationStatus } from "../data/data";

import HeadingContainer from "../ui/HeadingContainer";
import Heading from "../ui/Heading";
import styled from "styled-components";
import {
  HiBanknotes,
  HiCalendarDays,
  HiEnvelope,
  HiIdentification,
} from "react-icons/hi2";
import { HiOfficeBuilding } from "react-icons/hi";
import Button from "../ui/Button";
import { useRef, useState } from "react";
import NoteDetailsModal from "../components/notedetails/NoteDetailsModal";
import { useUpdateNote } from "../components/notedetails/useUpdateNote";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import { useNotes } from "../components/notes/useNotes";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* border: 2px solid var(--color-lime-900); */
  border-radius: var(--border-radius-lg);
`;

const StyledDetailsContainer = styled.div`
  padding: 3rem;
  height: 100%;
  overflow: scroll;
  scrollbar-width: none;
  background-color: white;
  font-size: 2rem;
  border-bottom-left-radius: var(--border-radius-lg);
  border-bottom-right-radius: var(--border-radius-lg);
`;

const StyledDetailsSectionsContainer = styled.div`
  display: flex;
`;

const StyledText = styled.p`
  color: var(--color-zinc-500);
  padding-right: 1rem;
  margin-bottom: 1rem;
  width: 13%;
`;
// NOTE: will think about the separator a bit more as I'm not satisfied with the current look and the implementation/style of the details saction. It seems very barebones which I don't like. I would like to add a little more to it.
const StyledSeparator = styled.p`
  color: var(--color-zinc-500);
  padding-right: 1rem;
  margin-bottom: 1rem;
`;

const StyledHeadingContainer = styled(HeadingContainer)`
  padding: 1rem 3rem;
  border-bottom: 1px solid var(--color-lime-900);
  border-top-left-radius: var(--border-radius-lg);
  border-top-right-radius: var(--border-radius-lg);
  overflow: hidden;
  background-color: var(--color-lime-600);
  color: var(--color-zinc-100);
`;

const StyledHeadingId = styled(Heading)`
  display: flex;
  align-items: center;
  font-weight: 600;
`;

const StyledHeadingStatus = styled(Heading)<{
  applicationStatus: ApplicationStatus;
}>`
  ${({ applicationStatus }) => `
    background-color: ${
      {
        applied: "var(--applied)",
        "got-response": "var(--got-response)",
        interview: "var(--interview)",
        offer: "var(--offer)",
        rejected: "var(--rejected)",
        accepted: "var(--accepted)",
      }[applicationStatus] || "var(--color-zinc-400)"
    };
  `}
  color: white;
  font-weight: 600;
  padding: 1rem;
  border-radius: 10rem;
  border: 1px solid transparent;
`;

const StyledBtnContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

const StyledBtn = styled(Button)`
  margin-right: 1rem;
`;

function NoteDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const { updateNote, isPending } = useUpdateNote();
  const [modalOpen, setModalOpen] = useState(false);
  const user = useSelector((state: RootState) => state?.user);
  // const { data, isLoading, error } = useNotes(user?.id);

  const note = location.state?.note;

  function handleOpenModal() {
    setModalOpen(true);
  }

  function handleCloseModal(e) {
    // e.preventDefault();
    setModalOpen(false);
  }

  function handleSubmit(data) {
    console.log("Edit note data: ", data);
    updateNote(
      {
        ...data,
        userId: user?.id,
        id: note?.id,
      },
      {
        onSuccess: () => {
          console.log(data, user?.id, note?.id);
          setModalOpen(false);
          navigate("/notes", { state: { refetch: true } });
        },
      }
    );
  }

  return (
    <StyledContainer>
      <StyledHeadingContainer>
        <StyledHeadingId as="h3">Note ID# {note?.id}</StyledHeadingId>
        <StyledHeadingStatus
          as="h3"
          applicationStatus={note?.applicationStatus}
        >
          {note?.applicationStatus}
        </StyledHeadingStatus>
      </StyledHeadingContainer>
      <StyledDetailsContainer>
        <StyledDetailsSectionsContainer>
          <HiOfficeBuilding
            style={{
              paddingRight: "1rem",
              fontSize: "30px",
              color: "var(--color-lime-600)",
            }}
          />
          <StyledText>Company name</StyledText>
          <StyledSeparator>&rarr;</StyledSeparator>
          <StyledText>{note?.companyName}</StyledText>
        </StyledDetailsSectionsContainer>

        {/*TODO: later when backend and auth is in, user will be displayed (user/current user)/}

        {/*
          user: string;
        */}

        <StyledDetailsSectionsContainer>
          <HiEnvelope
            style={{
              paddingRight: "1rem",
              fontSize: "30px",
              color: "var(--color-lime-600)",
            }}
          />
          <StyledText>Email address</StyledText>
          <StyledSeparator>&rarr;</StyledSeparator>
          <StyledText>{note?.email}</StyledText>
        </StyledDetailsSectionsContainer>

        <StyledDetailsSectionsContainer>
          <HiIdentification
            style={{
              paddingRight: "1rem",
              fontSize: "30px",
              color: "var(--color-lime-600)",
            }}
          />
          <StyledText>Position</StyledText>
          <StyledSeparator>&rarr;</StyledSeparator>
          <StyledText>{note?.position}</StyledText>
        </StyledDetailsSectionsContainer>

        <StyledDetailsSectionsContainer>
          <HiBanknotes
            style={{
              paddingRight: "1rem",
              fontSize: "30px",
              color: "var(--color-lime-600)",
            }}
          />
          <StyledText>Salary</StyledText>
          <StyledSeparator>&rarr;</StyledSeparator>
          <StyledText>${note?.salary}</StyledText>
        </StyledDetailsSectionsContainer>

        <StyledDetailsSectionsContainer>
          <HiCalendarDays
            style={{
              paddingRight: "1rem",
              fontSize: "30px",
              color: "var(--color-lime-600)",
            }}
          />
          <StyledText>Applied on</StyledText>
          <StyledSeparator>&rarr;</StyledSeparator>
          <StyledText>
            {new Date(note?.appliedOn).toLocaleDateString("en-UK", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </StyledText>
        </StyledDetailsSectionsContainer>
      </StyledDetailsContainer>
      <StyledBtnContainer>
        <StyledBtn onClick={handleOpenModal}>Edit</StyledBtn>
        <StyledBtn btnType="delete">Delete</StyledBtn>
        <StyledBtn btnType="cancel" onClick={() => navigate(-1)}>
          Back
        </StyledBtn>
      </StyledBtnContainer>
      {modalOpen && (
        <NoteDetailsModal
          note={note}
          closeModal={handleCloseModal}
          onSubmit={handleSubmit}
        />
      )}
    </StyledContainer>
  );
}

export default NoteDetails;
