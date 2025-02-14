import styled from "styled-components";
import Button from "../../ui/Button";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useForm } from "react-hook-form";
import { useUserSettings } from "./useUserSettings";

export interface UserData {
  id: string | null;
  fullName: string | null;
  email: string | null;
  password: string | null;
  currentEmail: string | null;
}

const StyledForm = styled.form`
  padding: 3rem;
`;

const StyledFormSection = styled.div`
  display: grid;
  grid-template-columns: 20rem 40rem 30rem;
  align-items: center;
  gap: 3rem;
  padding: 1rem;
`;

const StyledButtonSections = styled.div`
  display: flex;
  gap: 3rem;
  padding-top: 1rem;
  width: 70rem;
  justify-content: space-around;
`;

const StyledP = styled.p`
  color: var(--color-zinc-700);
`;

function UserSettingsForm() {
  const { changeUserSettings, isPending } = useUserSettings();
  const user = useSelector((state: RootState) => state?.user);
  console.log("User dataa in UserSettingsForm", user);

  const { register, formState, handleSubmit, reset, getValues } = useForm();
  const { errors } = formState;

  function onSubmit({
    id = user.id,
    fullName,
    email,
    password,
    currentEmail = user.email,
  }: UserData) {
    console.log("Submitting the updated user data");
    changeUserSettings(
      { id, fullName, email, password, currentEmail },
      {
        onSettled: () => reset(),
      }
    );
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledFormSection>
        <label htmlFor="">Full name</label>
        <StyledP>{user.fullName}</StyledP>
      </StyledFormSection>
      <StyledFormSection>
        <label htmlFor="">New full name</label>
        <input type="text" {...register("fullName")} />
        <p>**new users full name</p>
      </StyledFormSection>

      <StyledFormSection>
        <label htmlFor="">Email address</label>
        <StyledP>{user.email}</StyledP>
      </StyledFormSection>
      <StyledFormSection>
        <label htmlFor="">New email address</label>
        <input type="text" {...register("email")} />
        <p>**new email address name</p>
      </StyledFormSection>

      <StyledFormSection>
        <label htmlFor="">Change password</label>
        <input
          type="password"
          {...register("password", {
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              message:
                "Password must be at least 8 chars in length, wih 1 uppercase letter and 1 special character",
            },
          })}
        />
      </StyledFormSection>
      <StyledFormSection>
        <label htmlFor="">Confirm new password</label>
        <input
          type="password"
          {...register("passwordConfirm", {
            validate: (value) =>
              value === getValues("password") || "Passwords need to match",
          })}
        />
      </StyledFormSection>

      <StyledButtonSections>
        <Button size="large" btnType="main" disabled={isPending}>
          Confirm
        </Button>
        <Button size="large" btnType="delete" disabled={isPending}>
          Cancel
        </Button>
      </StyledButtonSections>
    </StyledForm>
  );
}

export default UserSettingsForm;
