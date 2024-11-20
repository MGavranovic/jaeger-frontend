import { useQuery } from "@tanstack/react-query";
import { getNotes } from "../../services/apiNotes";
import { dummyNotes } from "../../data/data";

export function useNotes() {
  const {
    isPending,
    data: notes,
    error,
  } = useQuery({
    queryKey: ["notes"],
    queryFn: getNotes,
    initialData: [],
  });

  return { isPending, notes, error };
}
