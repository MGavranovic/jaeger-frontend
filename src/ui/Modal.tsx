import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import styled from "styled-components";
import Button from "./Button";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-zinc-50);
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
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

function Modal({ children, onClose }) {
  return createPortal(
    <Overlay>
      <StyledModal>
        <Button size="small" btnType="cancel" onClick={onClose}>
          <HiXMark />
        </Button>

        <div>{children}</div>
      </StyledModal>
    </Overlay>,
    document.body
  );
}

export default Modal;
