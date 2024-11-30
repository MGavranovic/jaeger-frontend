import styled from "styled-components";
import UserSettingsForm from "./UserSettingsForm";

const StyledUserSettingsContainer = styled.div`
  margin: 10rem auto;
  background-color: white;
  border: 1px solid var(--color-zinc-200);
  border-radius: var(--border-radius-md);
  color: var(--color-zinc-500);
  width: 100rem;
`;

function UserSettingsContainer() {
  return (
    <StyledUserSettingsContainer>
      <UserSettingsForm />
    </StyledUserSettingsContainer>
  );
}

export default UserSettingsContainer;
