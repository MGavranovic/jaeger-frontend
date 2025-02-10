import { useMutation } from "@tanstack/react-query";
import { changeUserSettings as changeUserSettingsApi } from "../../services/apiUsers";

export function useUserSettings() {
  const { mutate: changeUserSettings, isPending } = useMutation({
    mutationFn: changeUserSettingsApi,
    onSuccess: (data) => {
      console.log("user settings changed", data);
    },
    onError: (error) => {
      console.error("Failed changing user settings", error);
    },
  });

  return { changeUserSettings, isPending };
}
