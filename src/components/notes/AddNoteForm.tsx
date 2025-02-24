import styled from "styled-components";
import Button from "../../ui/Button";
import { NoteDetails } from "../../data/data";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useForm } from "react-hook-form";
import FormError from "../../ui/FormError";

type uuid = string;

export interface Note {
  id: number;
  noteId: uuid;
  companyName: string;
  position: string;
  salary: string;
  applicationStatus: string;
  appliedOn: Date;
  updatedAt: Date;
  description: string;
  userId: number;
}

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

function AddNoteForm({ onSubmit }) {
  const { register, formState, handleSubmit, reset, getValues } = useForm();
  const { errors } = formState;
  const user = useSelector((state: RootState) => state?.user);

  return (
    <StyledFrom onSubmit={handleSubmit(onSubmit)}>
      <StyledFormSection>
        <label>Company Name:</label>
        <StyledInput
          type="text"
          {...register("companyName", { required: "This field is required" })}
        />
        {/* <FormError>{errors?.companyName?.message as string}</FormError> */}
      </StyledFormSection>
      <StyledFormSection>
        <label>Position:</label>
        <StyledInput
          type="text"
          {...register("position", { required: "This field is required" })}
        />
      </StyledFormSection>
      <StyledFormSection>
        {/*  NOTE: add parantheses in case salary is not displayed on the add */}
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
  );
}

export default AddNoteForm;
