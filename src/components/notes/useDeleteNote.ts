import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteNote as deleteNoteApi } from "../../services/apiNotes";
import { useNavigate } from "react-router-dom";

export function useDeleteNote() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: deleteNote, isPending } = useMutation({
    mutationFn: deleteNoteApi,
    onSuccess: (data) => {
      console.log(`Note ${data} got deleted`);
      queryClient.invalidateQueries(["notes"]);
      navigate("/notes");
    },
    onError: (err) => console.error(err),
  });

  return { deleteNote, isPending };
}
