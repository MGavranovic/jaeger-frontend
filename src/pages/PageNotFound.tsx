import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledPageNotFound = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-amber-50);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  padding: 5rem 10rem;
  border-radius: 5px;
  background-color: var(--color-amber-200);
  text-align: center;
  color: var(--color-zinc-700);
`;

const StyledButton = styled.button`
  width: 20rem;
  padding: 1rem 2rem;
  justify-content: center;
  margin-top: 10px;
  border-radius: 5px;
`;

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <StyledPageNotFound>
      <Container>
        Page you are looking for is not found or it doesn't exist
        <StyledButton onClick={() => navigate(-1)}>&larr; Back</StyledButton>
      </Container>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
