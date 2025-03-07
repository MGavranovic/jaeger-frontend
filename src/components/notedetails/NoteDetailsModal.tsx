import styled from "styled-components";
import Button from "../../ui/Button";

const FormContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-zinc-50);
  border: 1px solid var(--color-zinc-400);
  border-radius: var(--border-radius-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(10px);
  z-index: 1000;
  transition: all 0.5s;
`;

const StyledFormSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
  border-bottom: 1px solid var(--color-zinc-300);
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  width: 60%;
`;

const StyledTextArea = styled.textarea`
  width: 60%;
`;

function NoteDetailsModal({ note }) {
  return (
    <Overlay>
      <FormContainer>
        <StyledForm>
          <StyledFormSection>
            <label>Company Name:</label>
            <StyledInput value={note?.companyName}></StyledInput>
          </StyledFormSection>
          <StyledFormSection>
            <label>Position:</label>
            <StyledInput value={note?.position}></StyledInput>
          </StyledFormSection>
          <StyledFormSection>
            <label>Status:</label>
            <select value={note?.applicationStatus}>
              <option value="applied">Applied</option>
              <option value="got-response">Got response</option>
              <option value="interview">Interview</option>
              <option value="offer">Offer</option>
              <option value="accepted">Accepted</option>
              <option value="rejected">Rejected</option>
            </select>
          </StyledFormSection>
          <StyledFormSection>
            <label>Salary:</label>
            <StyledInput value={note?.salary}></StyledInput>
          </StyledFormSection>
          <StyledFormSection>
            <label>Description:</label>
            <StyledTextArea value={note?.description}></StyledTextArea>
          </StyledFormSection>
          <StyledFormSection>
            <label>Applied on:</label>
            <input
              type="date"
              value={
                note?.appliedOn
                  ? new Date(note.appliedOn).toISOString().split("T")[0]
                  : ""
              }
            ></input>
          </StyledFormSection>
          <StyledFormSection>
            <Button btnType="main">Update</Button>
            <Button btnType="delete">Cancel</Button>
          </StyledFormSection>
        </StyledForm>
      </FormContainer>
    </Overlay>
  );
}

export default NoteDetailsModal;

/*
<StyledFrom onSubmit={handleSubmit(onSubmit)}>
      <StyledFormSection>
        <label>Company Name:</label>
        <StyledInput
          type="text"
          {...register("companyName", { required: "This field is required" })}
        />
        </StyledFormSection>
        <StyledFormSection>
          <label>Position:</label>
          <StyledInput
            type="text"
            {...register("position", { required: "This field is required" })}
          />
        </StyledFormSection>
        <StyledFormSection>
          <label>Salary ?? add parentheses:</label>
          <StyledInput type="text" {...register("salary")} />
        </StyledFormSection>
  
        <StyledFormSection>
          <label>Status:</label>
          <select {...register("applicationStatus")}>
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
          <textarea {...register("description")} />
        </StyledFormSection>
  
        <StyledFormSection>
          <label>Applied On:</label>
          <input type="date" {...register("appliedOn")} />
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
*/
