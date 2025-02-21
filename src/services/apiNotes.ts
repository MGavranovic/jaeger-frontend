// NOTE:
/*
For the start this going to be a bunch of dummy API calls
Later when I get the backend running, this will be fixed
*/
// TODO: create a dummy array for storing the notes as this approach is genereting new notes every time and overwriting the existing added ones

import { dummyNotes } from "../data/data";

export function getNotes() {
  return dummyNotes;
}

export function addNote(note) {
  dummyNotes.push(note);
  return note;
}
