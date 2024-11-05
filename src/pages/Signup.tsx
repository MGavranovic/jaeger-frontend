import styled from "styled-components";

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

const StyledButton = styled.button`
  padding: 10px 20px;
  border: 1px solid var(--color-lime-700);
  border-radius: var(--border-radius-sm);
  background-color: var(--color-lime-500);
  color: white;
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

function Signup() {
  return (
    <Container>
      Logo {/* placeholder */}
      <h1>Jaeger</h1>
      <Form action="">
        <NameContainer>
          <label htmlFor="">First Name</label>
          <Input type="text" />
          <label htmlFor="">Last Name</label>
          <Input type="text" />
        </NameContainer>
        <EmailAndPw>
          <label htmlFor="">Email</label>
          <Input type="text" />
          <label htmlFor="">Password</label>
          <Input type="text" />
        </EmailAndPw>
        <StyledButton>Sign Up</StyledButton>
      </Form>
    </Container>
  );
}

export default Signup;
