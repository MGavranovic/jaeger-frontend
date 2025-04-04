// NOTE:
/*
For the start this going to be a bunch of dummy API calls
Later when I get the backend running, this will be fixed
*/
// TODO: create a dummy array for storing the notes as this approach is genereting new notes every time and overwriting the existing added ones

import { dummyNotes } from "../data/data";

export async function getNotes(userId) {
  const res = await fetch(
    `http://localhost:8080/api/notes/${encodeURIComponent(userId)}`,
    {
      method: "GET",
    }
  );

  if (!res.ok) {
    console.error("Failed retrieveing notes from server");
  }
  const data = await res.json();
  console.log("Notes successfully retrieved!", data);

  return data;
}

// can {id, copmany,......}
export async function addNote(note) {
  const {
    id,
    companyName,
    position,
    salary,
    applicationStatus,
    appliedOn,
    description,
    userId,
  } = note;
  console.log("Note in the services", note);
  console.log("Note id:", note.id);
  console.log("Note company:", note.companyName);
  console.log("Note position:", note.position);
  console.log("Note salary:", note.salary);
  console.log("Note application:", note.applicationStatus);
  console.log("Note appliedOn:", note.appliedOn);
  console.log("Note description:", note.description);

  dummyNotes.push(note);
  const res = await fetch("http://localhost:8080/api/notes/create", {
    method: "POST",
    body: JSON.stringify({
      uuid: id,
      companyName,
      position,
      salary,
      applicationStatus,
      appliedOn,
      description,
      userId,
    }),
  });
  if (res.ok) {
    console.log("Note successfully sent to server!");
  } else {
    console.error("Failed sending note to server");
  }

  // return note;
}

// TODO: structure the json sent to the server since it can't take one big object and decode it properly

export async function updateNote(note) {
  const {
    id,
    companyName,
    position,
    salary,
    applicationStatus,
    appliedOn,
    description,
    userId,
  } = note;

  try {
    const res = await fetch("http://localhost:8080/api/notes/update", {
      method: "POST",
      body: JSON.stringify({
        companyName,
        position,
        salary,
        applicationStatus,
        appliedOn,
        description,
        userId,
        noteId: id,
      }),
    });
    if (!res.ok) {
      console.error("Failed sending updated note data to the server");
    } else {
      console.log("Updated note data sent successfully to the server");

      const updateRes = await fetch(
        `http://localhost:8080/api/notes/current/${encodeURIComponent(
          id
        )}?t=${Date.now()}`,
        { method: "GET", headers: { "Content-Type": "application/json" } }
      );
      if (!updateRes.ok) {
        throw new Error("Failed getting the current note after update");
      }
      const data = await updateRes.json();
      console.log(data);
      return data;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function deleteNote(id) {
  const res = await fetch(
    `http://localhost:8080/api/notes/delete/${encodeURIComponent(id)}`,
    {
      method: "DELETE",
    }
  );
  if (res.ok) {
    console.log("Note successfully deleted");
  } else {
    console.error("Unable to delete note");
  }
}
