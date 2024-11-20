import styled from "styled-components";
import Button from "../../ui/Button";
import { ApplicationStatus, NoteDetails } from "../../data/data";
import { useState } from "react";

const StyledFrom = styled.form`
  display: flex;
  flex-direction: column;
  width: 50rem;
  gap: 1rem;
`;

const StyledFormSection = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  border-bottom: 1px solid var(--color-zinc-300);
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  margin: 1rem;
`;

const StyledInput = styled.input`
  width: 50%;
`;

// TODO: form is still in progress

function AddNoteForm({
  onSubmit,
}: {
  onSubmit: (note: Partial<NoteDetails>) => void;
}) {
  const [notes, setNotes] = useState<NoteDetails[]>([]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const newNote: Partial<NoteDetails> = {
      companyName: formData.get("company") as string,
      position: formData.get("position") as string,
      salary: formData.get("title") as string,
      applicationStatus: formData.get("applicationStatus") as ApplicationStatus,
      appliedOnDate: new Date(),
      id: Math.random().toString(36).substring(2, 9),
      user: "Test User",
      email: "test@example.com",
    };

    setNotes((prev) => [...prev, newNote]);
    onSubmit(newNote);
  }

  return (
    <StyledFrom onSubmit={handleSubmit}>
      <StyledFormSection>
        <label>Company Name:</label>
        <StyledInput type="text" name="company" required />
      </StyledFormSection>
      <StyledFormSection>
        <label>Position:</label>
        <StyledInput type="text" name="position" required />
      </StyledFormSection>
      <StyledFormSection>
        {/*  NOTE: add parantheses in case salary is not displayed on the add */}
        <label>Salary ?? add parentheses:</label>
        <StyledInput type="text" name="title" required />
      </StyledFormSection>

      <StyledFormSection>
        <label>Status:</label>
        <select name="applicationStatus">
          <option value="applied">Applied</option>
          <option value="got-response">Got response</option>
          <option value="interview">Interview</option>
          <option value="offer">Offer</option>
          <option value="accepted">Accepted</option>
          <option value="rejected">Rejected</option>
        </select>
      </StyledFormSection>

      <StyledFormSection>
        <label>Description:</label>
        <textarea name="description" required />
      </StyledFormSection>

      <StyledButtonContainer>
        <Button size="medium" btnType="main">
          Submit
        </Button>
        <Button size="medium" btnType="cancel">
          Cancel
        </Button>
      </StyledButtonContainer>
    </StyledFrom>
  );
}

export default AddNoteForm;
