import styled from "styled-components";
import { useForm } from "react-hook-form";

import { useSignup } from "../components/signup/useSignup";

import Button from "../ui/Button";
import FormError from "../ui/FormError";

export interface SignupData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 1.4rem;
  background-color: var(--color-zinc-100);
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
`;

const EmailAndPw = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
`;

const StyledButton = styled(Button)`
  padding: 10px 20px;
  margin-top: 1.4rem;
  width: 100%;
`;

const Input = styled.input`
  border: 1px solid var(--color-zinc-400);
  border-radius: var(--border-radius-sm);
  background-color: var(--color-zinc-50);
  padding: 7px;
`;

const Form = styled.form`
  padding: 3rem 3.5rem;
  border: 1px solid var(--color-zinc-400);
  border-radius: var(--border-radius-sm);
  background-color: white;
  overflow: hidden;
`;

// NOTE: regex ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$

function Signup() {
  const { signup, isPending } = useSignup();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ firstName, lastName, email, password }: SignupData) {
    signup(
      { firstName, lastName, email, password },
      { onSettled: () => reset() }
    );
  }

  return (
    <Container>
      Logo {/* placeholder */}
      <h1>Jaeger</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <NameContainer>
          <label htmlFor="">First Name</label>
          <Input
            type="text"
            disabled={isPending}
            {...register("firstName", { required: "This field is required" })}
          />
          <FormError>{errors?.firstName?.message as string}</FormError>
          <label htmlFor="">Last Name</label>
          <Input
            type="text"
            disabled={isPending}
            {...register("lastName", { required: "This field is required" })}
          />
          <FormError>{errors?.lastName?.message as string}</FormError>
        </NameContainer>
        <EmailAndPw>
          <label htmlFor="">Email</label>
          <Input
            type="email"
            disabled={isPending}
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/,
                message: "Please provide a valid email address",
              },
            })}
          />
          <FormError>{errors?.email?.message as string}</FormError>
          <label htmlFor="">Password</label>
          <Input
            type="password"
            disabled={isPending}
            {...register("password", {
              required: "This field is required",
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "Password must be at least 8 chars in length, wih 1 uppercase letter and 1 special character",
              },
            })}
          />
          <FormError>{errors?.password?.message as string}</FormError>
          <label htmlFor="">Confirm password</label>
          <Input
            type="password"
            disabled={isPending}
            {...register("passwordConfirm", {
              required: "This field is required",
              validate: (value) =>
                value === getValues("password") || "Passwords need to match",
            })}
          />
          <FormError>{errors?.passwordConfirm?.message as string}</FormError>
        </EmailAndPw>
        <StyledButton size="large" btnType="main" disabled={isPending}>
          Sign Up
        </StyledButton>
      </Form>
    </Container>
  );
}

export default Signup;
