import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addNote } from "../../services/apiNotes";

export function useAddNote() {
  const queryClient = useQueryClient();

  const { mutate: createNote, isPending: isCreating } = useMutation({
    mutationFn: addNote,
    onSuccess: (data) => {
      console.log("Note data", data);
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
    onError: (err) => console.error(err),
  });

  return { isCreating, createNote };
}
