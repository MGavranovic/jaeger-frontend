import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateNote as updateNoteApi } from "../../services/apiNotes";

export function useUpdateNote() {
  const queryClient = useQueryClient();

  const { mutate: updateNote, isPending } = useMutation({
    mutationFn: updateNoteApi,
    onSuccess(data) {
      console.log("Data after update", data);
      queryClient.setQueryData(["note", data.id], data);
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
    onError: (error) => {
      console.error("Error updating note", error);
    },
  });

  return { updateNote, isPending };
}
