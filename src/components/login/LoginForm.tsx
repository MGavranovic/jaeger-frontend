import styled from "styled-components";
import Button from "../../ui/Button";

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
  width: 38rem;
  height: 3.2rem;
  border: 1px solid var(--color-lime-500);
  border-radius: var(--border-radius-tiny);
`;

const BtnContainer = styled.div`
  margin-top: 1.5rem;
`;

function LoginForm() {
  return (
    <LoginSectionContainer>
      <h1>Jaeger</h1>
      <StyledLoginForm>
        <label htmlFor="email">Email</label>
        <input type="text" />
        <label htmlFor="password">Password</label>
        <input type="text" />
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
