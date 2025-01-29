import { HiArrowRightStartOnRectangle } from "react-icons/hi2";
import styled from "styled-components";
import { useLogout } from "./useLogout";
import { useState } from "react";
import LogoutModal from "./LogoutModal";

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
  const [modalOpen, setModalOpen] = useState(false);

  function handleCloseModal() {
    setModalOpen(false);
    // logout();
  }

  function handleOpenModal() {
    setModalOpen(true);
  }

  function handleLogout() {
    setModalOpen(false);
    logout();
  }

  return (
    <>
      {modalOpen && (
        <LogoutModal onClose={handleCloseModal} onLogout={handleLogout} />
      )}
      <StyledButton onClick={handleOpenModal}>
        <HiArrowRightStartOnRectangle />
      </StyledButton>
    </>
  );
}

export default Logout;
