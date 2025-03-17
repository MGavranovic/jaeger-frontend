import { useMutation } from "@tanstack/react-query";
import { updateNote as updateNoteApi } from "../../services/apiNotes";

export function useUpdateNote() {
  const { mutate: updateNote, isPending } = useMutation({
    mutationFn: updateNoteApi,
    onSuccess(data) {
      console.log("Data after update", data);
    },
    onError: (error) => {
      console.error("Error updating note", error);
    },
  });

  return { updateNote, isPending };
}
