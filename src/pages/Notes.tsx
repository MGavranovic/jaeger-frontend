import styled from "styled-components";
import Note from "../components/notes/Note";
import { ApplicationStatus, NoteDetails } from "../data/data";
import { useState } from "react";
import Heading from "../ui/Heading";
import HeadingContainer from "../ui/HeadingContainer";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import AddNoteForm, { Note as NoteType } from "../components/notes/AddNoteForm";
import { useNotes } from "../components/notes/useNotes";
import { useAddNote } from "../components/notes/useAddNote";
import { useNavigate } from "react-router-dom";
import Menu from "../ui/Menu";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export interface ButtonProps {
  size: "small" | "medium" | "large";
  btnType: "main" | "cancel" | "delete";
}

const NotesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  height: 95%;
  gap: 1rem;
  margin-top: 1rem;
`;

const NoteContainer = styled.div`
  border: 1px solid var(--color-zinc-200);
  border-radius: var(--border-radius-sm);
  background-color: white;
  text-align: center;
  overflow: scroll;
  scrollbar-width: none;
`;

const StyledHeading = styled.header`
  position: sticky;
  top: 0;
  border-bottom: 1px solid var(--color-zinc-200);
  padding: 1rem 0;
  background-color: var(--color-lime-100);
  z-index: 1;
`;

/* TODO: 
- this p elements are placeholders
- they will be representing the stages of the job app process
- could add one more note container for the offers were user is rejected
- the note should not move through the sections unless the user changes the current stage in the process
- notes can skip straight to the "pottential" last "rejected" section in case user gets that kind of response during the process


NOTE: I still have to think about how to filter the Notes here
1) I'm not sure if I should have a seperate section for each status 
2) I can use multiple statuses under each section
The problem with 1) is design
The problem with 2) is readability and it seems counterintuitive
*/
function Notes() {
  // NOTE: I know this generates a new set of data on every render but this is just a temp solution for testing
  const { notes, isPending } = useNotes();
  const { createNote, isCreating } = useAddNote();
  const user = useSelector((state: RootState) => state?.user);

  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const [menuForNote, setMenuForNote] = useState<string | null>(null);

  const navigate = useNavigate();

  const notesByStatus = notes.reduce((acc, note) => {
    (acc[note.applicationStatus] ||= []).push(note);
    return acc;
  }, {} as Record<ApplicationStatus, NoteDetails[]>);

  function handleCloseModal() {
    setModalOpen(false);
  }

  function handleAddNote() {
    setModalOpen(true);
  }

  function handleSubmit(data) {
    console.log("new note created", data);
    createNote(
      {
        ...data,
        id: crypto.randomUUID(),
        appliedOn: new Date(data.appliedOn),
        userId: user?.id,
      } as NoteType,
      {
        onSuccess: () => {
          console.log(notes);
          setModalOpen(false);
        },
      }
    );
  }
  console.log("Notes", notes);

  function handleOpenMenu(noteId: string): void {
    setMenuForNote(noteId);
  }

  function handleCloseMenu(): void {
    setMenuForNote(null);
  }

  // TODO: loader component

  return (
    <>
      <HeadingContainer>
        <Heading as="h1">Notes</Heading>
        <Button size="large" btnType="main" onClick={handleAddNote}>
          Add Note
        </Button>
      </HeadingContainer>

      <NotesContainer>
        <NoteContainer>
          <StyledHeading>Applied</StyledHeading>
          {notesByStatus["applied"]?.map((note) => (
            <div style={{ position: "relative" }} key={note.id}>
              <Note
                key={note.id}
                note={note}
                onClick={() =>
                  menuForNote === note.id
                    ? handleCloseMenu()
                    : handleOpenMenu(note.id)
                }
              />
              {menuForNote === note.id && (
                <Menu note={note} handleCloseMenu={handleCloseMenu} />
              )}
            </div>
          ))}
        </NoteContainer>

        <NoteContainer>
          <StyledHeading>Got response</StyledHeading>
          {notesByStatus["got-response"]?.map((note) => (
            <div style={{ position: "relative" }} key={note.id}>
              <Note
                key={note.id}
                note={note}
                onClick={() =>
                  menuForNote === note.id
                    ? handleCloseMenu()
                    : handleOpenMenu(note.id)
                }
              />
              {menuForNote === note.id && (
                <Menu note={note} handleCloseMenu={handleCloseMenu} />
              )}
            </div>
          ))}
        </NoteContainer>

        <NoteContainer>
          <StyledHeading>Interview</StyledHeading>
          {notesByStatus["interview"]?.map((note) => (
            <div style={{ position: "relative" }} key={note.id}>
              <Note
                key={note.id}
                note={note}
                onClick={() =>
                  menuForNote === note.id
                    ? handleCloseMenu()
                    : handleOpenMenu(note.id)
                }
              />
              {menuForNote === note.id && (
                <Menu note={note} handleCloseMenu={handleCloseMenu} />
              )}
            </div>
          ))}
        </NoteContainer>

        <NoteContainer>
          <StyledHeading>Offer</StyledHeading>
          {notesByStatus["offer"]?.map((note) => (
            <div style={{ position: "relative" }} key={note.id}>
              <Note
                key={note.id}
                note={note}
                onClick={() =>
                  menuForNote === note.id
                    ? handleCloseMenu()
                    : handleOpenMenu(note.id)
                }
              />
              {menuForNote === note.id && (
                <Menu note={note} handleCloseMenu={handleCloseMenu} />
              )}
            </div>
          ))}
          {notesByStatus["rejected"]?.map((note) => (
            <div style={{ position: "relative" }} key={note.id}>
              <Note
                key={note.id}
                note={note}
                onClick={() =>
                  menuForNote === note.id
                    ? handleCloseMenu()
                    : handleOpenMenu(note.id)
                }
              />
              {menuForNote === note.id && (
                <Menu note={note} handleCloseMenu={handleCloseMenu} />
              )}
            </div>
          ))}
          {notesByStatus["accepted"]?.map((note) => (
            <div style={{ position: "relative" }} key={note.id}>
              <Note
                key={note.id}
                note={note}
                onClick={() =>
                  menuForNote === note.id
                    ? handleCloseMenu()
                    : handleOpenMenu(note.id)
                }
              />
              {menuForNote === note.id && (
                <Menu note={note} handleCloseMenu={handleCloseMenu} />
              )}
            </div>
          ))}
        </NoteContainer>
        {modalOpen && (
          <Modal onClose={handleCloseModal}>
            <AddNoteForm onSubmit={handleSubmit} />
          </Modal>
        )}
      </NotesContainer>
    </>
  );
}

export default Notes;
