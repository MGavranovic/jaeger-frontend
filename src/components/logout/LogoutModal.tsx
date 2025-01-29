import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import styled from "styled-components";
import Button from "../../ui/Button";
import { useEffect, useRef } from "react";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-zinc-50);
  border: 1px solid var(--color-zinc-400);
  border-radius: var(--border-radius-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(10px);
  z-index: 1000;
  transition: all 0.5s;
`;

const StyledClose = styled.button`
  border: none;
  background: transparent;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-top: 2rem;
`;

const XContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

function LogoutModal({ onClose, onLogout }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onClose]);

  return createPortal(
    <Overlay>
      <StyledModal ref={modalRef} onClick={(e) => e.stopPropagation()}>
        <XContainer>
          <span></span>
          <StyledClose onClick={onClose}>
            <HiXMark />
          </StyledClose>
        </XContainer>
        <p>Are you sure you want to logout?</p>
        <ButtonContainer>
          <Button btnType="delete" size="small" onClick={onLogout}>
            Logout
          </Button>
          <Button btnType="cancel" size="small" onClick={onClose}>
            Cancel
          </Button>
        </ButtonContainer>
      </StyledModal>
    </Overlay>,
    document.body
  );
}

export default LogoutModal;
