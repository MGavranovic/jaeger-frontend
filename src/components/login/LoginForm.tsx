import styled from "styled-components";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import FormError from "../../ui/FormError";
import { useLogin } from "./useLogin";

export interface LoginData {
  email: string;
  password: string;
}

const LoginSectionContainer = styled.div`
  display: grid;
  grid-template-rows: 10rem 70rem;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 50vw;
`;

const StyledLoginForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 22vw;
  height: 30vh;
  border: 1px solid var(--color-zinc-400);
  border-radius: var(--border-radius-sm);
  background-color: white;
`;

const BtnContainer = styled.div`
  margin-top: 1.5rem;
`;

function LoginForm() {
  const { login, isPending } = useLogin();
  const { register, formState, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ email, password }: LoginData): void {
    login({ email, password }, { onSettled: () => reset() });
  }

  return (
    <LoginSectionContainer>
      <h1>Jaeger</h1>
      <StyledLoginForm onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email</label>
        <input type="text" {...register("email")} />
        <FormError>{errors?.email?.message as string}</FormError>
        <label htmlFor="password">Password</label>
        <input type="text" {...register("password")} />
        <FormError>{errors?.password?.message as string}</FormError>
        <BtnContainer>
          <Button size="medium" btnType="main">
            Login
          </Button>
        </BtnContainer>
      </StyledLoginForm>
    </LoginSectionContainer>
  );
}

export default LoginForm;
