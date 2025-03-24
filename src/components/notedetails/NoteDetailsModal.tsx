import styled from "styled-components";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

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

function NoteDetailsModal({ note, closeModal, onSubmit }) {
  const { register, reset, getValues, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const date = new Date(note.appliedOn);
  const correctDate = new Date(date - date.getTimezoneOffset() * 60000)
    .toISOString()
    .split("T")[0];
  console.log(
    "*************************************************Date in modal: ",
    correctDate
  );

  return (
    <Overlay>
      <FormContainer>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <StyledFormSection>
            <label>Company Name:</label>
            <StyledInput
              defaultValue={note?.companyName}
              {...register("companyName")}
            ></StyledInput>
          </StyledFormSection>
          <StyledFormSection>
            <label>Position:</label>
            <StyledInput
              defaultValue={note?.position}
              {...register("position")}
            ></StyledInput>
          </StyledFormSection>
          <StyledFormSection>
            <label>Status:</label>
            <select
              defaultValue={note?.applicationStatus}
              {...register("applicationStatus")}
            >
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
            <StyledInput
              defaultValue={note?.salary}
              {...register("salary")}
            ></StyledInput>
          </StyledFormSection>
          <StyledFormSection>
            <label>Description:</label>
            <StyledTextArea
              defaultValue={note?.description}
              {...register("description")}
            ></StyledTextArea>
          </StyledFormSection>
          <StyledFormSection>
            <label>Applied on:</label>
            <input
              type="date"
              defaultValue={
                note?.appliedOn
                  ? new Date(date - date.getTimezoneOffset() * 60000)
                      .toISOString()
                      .split("T")[0]
                  : ""
              }
              {...register("appliedOn")}
            ></input>
          </StyledFormSection>
          <StyledFormSection>
            <Button btnType="main">Update</Button>
            <Button btnType="delete" onClick={closeModal} type="button">
              Cancel
            </Button>
          </StyledFormSection>
        </StyledForm>
      </FormContainer>
    </Overlay>
  );
}

export default NoteDetailsModal;
