import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import { NoteDetails } from "../data/data";
import { useDeleteNote } from "../components/notes/useDeleteNote";

interface MenuProps {
  note: NoteDetails;
  handleCloseMenu: () => void;
}

const StyledMenu = styled.div`
  position: absolute;
  top: 1rem;
  right: 2rem;
  background-color: var(--color-zinc-50);
  border: 2px solid var(--color-zinc-300);
  border-radius: var(--border-radius-sm);
  box-shadow: var(--color-zinc-900) 0px 5px 15px;
  z-index: 2;
  padding: 0.5rem;
`;

const MenuButton = styled(Button)`
  display: block;
  margin-bottom: 0.5rem;
  width: 100%;
`;

function Menu({ note, handleCloseMenu }: MenuProps) {
  const { isPending, deleteNote } = useDeleteNote();
  const navigate = useNavigate();

  function handleDeleteNote() {
    deleteNote(note?.id, {
      onSuccess: () => {
        handleCloseMenu();
      },
    });
  }

  return (
    <StyledMenu>
      <MenuButton
        size="small"
        btnType="main"
        onClick={() => navigate(`/notes/${note.id}`, { state: { note } })}
      >
        Details
      </MenuButton>
      <MenuButton
        size="small"
        btnType="delete"
        onClick={() => {
          handleDeleteNote();
        }}
      >
        Delete
      </MenuButton>
      <MenuButton size="small" btnType="cancel" onClick={handleCloseMenu}>
        Close
      </MenuButton>
    </StyledMenu>
  );
}

export default Menu;
