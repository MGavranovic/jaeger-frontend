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

function LoginAppDescription() {
  return (
    <DescriptionContainer>
      <p>Lost in the chaos?</p>
      <p>Misplaced your notes?</p>
      <p>Hunt for it and keep track of the application.</p>
      <p>Keep an eye on potential future opportunities using Jaeger.</p>
    </DescriptionContainer>
  );
}

export default LoginAppDescription;
