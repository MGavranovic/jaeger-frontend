import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import Button from "../ui/Button";

const StyledPageNotFound = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-zinc-50);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid var(--color-zinc-700);
  padding: 5rem 10rem;
  border-radius: var(--border-radius-md);
  background-color: var(--color-lime-200);
  text-align: center;
  color: var(--color-zinc-700);
`;

const StyledP = styled.p`
  padding-bottom: 1rem;
`;

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <StyledPageNotFound>
      <Container>
        <StyledP>
          Page you are looking for is not found or it doesn't exist
        </StyledP>
        <Button size="large" btnType="main" onClick={() => navigate(-1)}>
          &larr; Back
        </Button>
      </Container>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
