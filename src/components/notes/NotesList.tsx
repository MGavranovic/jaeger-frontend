import { useState } from "react";
import getNotes from "../../data/data";

function NotesList() {
  const [notes, setNotes] = useState<Note[]>(getNotes());
  return <div></div>;
}

export default NotesList;
