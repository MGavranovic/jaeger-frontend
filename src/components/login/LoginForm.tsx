import styled from "styled-components";

const LoginSectionContainer = styled.div`
  display: grid;
  grid-template-rows: 10rem 70rem;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const StyledLoginForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50vw;
`;

const StyledInput = styled.label`
  width: 30rem;
  height: 20px;
  border: 2px solid black;
  background-color: white;
`;

const StyledButton = styled.button`
  padding: 10px 30px;
  border-radius: 5px;
  background-color: var(--color-lime-100);
  border: 2px solid var(--color-lime-300);
  color: var(--color-zinc-900);
  margin-top: 10px;
`;

function LoginForm() {
  return (
    <LoginSectionContainer>
      <h1>Jaeger</h1>
      <StyledLoginForm>
        <label htmlFor="email">Email</label>
        <StyledInput />
        <label htmlFor="password">Password</label>
        <StyledInput />
        <StyledButton>Login</StyledButton>
      </StyledLoginForm>
    </LoginSectionContainer>
  );
}

export default LoginForm;
