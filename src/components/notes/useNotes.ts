import { useQuery } from "@tanstack/react-query";
import { getNotes } from "../../services/apiNotes";

export function useNotes(userId) {
  return useQuery({
    queryKey: ["notes", userId],
    queryFn: () => getNotes(userId),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
}
