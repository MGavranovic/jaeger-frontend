import { HiArrowRightStartOnRectangle } from "react-icons/hi2";
import styled from "styled-components";
import { useLogout } from "./useLogout";

const StyledButton = styled.button`
  background-color: white;
  border: none;
  padding: 0;
  margin: 0;
  height: 20px;
  &:hover {
    background-color: var(--color-red-600);
    border-radius: var(--border-radius-sm);
    color: var(--color-zinc-100);
    transition: background-color 1s ease-in-out, color 0.9s;
  }
`;

function Logout() {
  const { logout, isPending } = useLogout();

  function handleLogout() {
    logout();
  }

  return (
    <StyledButton onClick={handleLogout}>
      <HiArrowRightStartOnRectangle />
    </StyledButton>
  );
}

export default Logout;
