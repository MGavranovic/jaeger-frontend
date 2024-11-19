import styled from "styled-components";
import Button from "../../ui/Button";

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

function AddNoteForm() {
  return (
    <StyledFrom onSubmit={(e) => e.preventDefault()}>
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
        <select>
          <option value="" selected>
            Applied
          </option>
          <option value="">Got response</option>
          <option value="">Interview</option>
          <option value="">Offer</option>
          <option value="">Acceoted</option>
          <option value="">Rejected</option>
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
