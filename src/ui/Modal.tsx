import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import styled from "styled-components";
import Button from "./Button";
import HeadingContainer from "./HeadingContainer";
import Heading from "./Heading";

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

const StyledButton = styled(Button)`
  border: none;
  color: var(--color-zinc-800);
  font-size: 2.2rem;
`;

const StyledHeadingContainer = styled(HeadingContainer)`
  margin-bottom: 1rem;
`;

function Modal({ children, onClose }) {
  return createPortal(
    <Overlay>
      <StyledModal>
        <StyledHeadingContainer>
          <Heading as="h3">Add Note</Heading>
          <StyledButton size="small" btnType="cancel" onClick={onClose}>
            <HiXMark />
          </StyledButton>
        </StyledHeadingContainer>

        <div>{children}</div>
      </StyledModal>
    </Overlay>,
    document.body
  );
}

export default Modal;
