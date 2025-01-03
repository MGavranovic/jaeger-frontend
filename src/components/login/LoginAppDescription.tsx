import { Link } from "react-router-dom";
import styled from "styled-components";

const DescriptionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  background-color: var(--color-lime-100);
  width: 50vw;
  gap: 1.4rem;
`;

const DescriptionSignupRedirect = styled.p`
  font-weight: 500;
  color: var(--color-zinc-700);
`;

const DescriptionSignupLink = styled(Link)`
  text-decoration: underline;
  color: var(--color-amber-700);
`;

function LoginAppDescription() {
  return (
    <DescriptionContainer>
      <p>Lost in the chaos?</p>
      <p>Misplaced your notes?</p>
      <p>Hunt for it and keep track of the application.</p>
      <p>Keep an eye on potential future opportunities using Jaeger.</p>
      <DescriptionSignupRedirect>
        Don't have an account? Signup{" "}
        <DescriptionSignupLink to="/signup">here!</DescriptionSignupLink>
      </DescriptionSignupRedirect>
    </DescriptionContainer>
  );
}

export default LoginAppDescription;
