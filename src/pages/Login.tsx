import styled from "styled-components";
import LoginForm from "../components/login/LoginForm";
import LoginAppDescription from "../components/login/LoginAppDescription";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: flex;
  /* align-content: center;
  justify-content: space-between; */
  gap: 3.2rem;
  background-color: var(--color-zinc-300);
`;

function Login() {
  return (
    <LoginLayout>
      <LoginForm />
      <LoginAppDescription>Section</LoginAppDescription>
    </LoginLayout>
  );
}

export default Login;
