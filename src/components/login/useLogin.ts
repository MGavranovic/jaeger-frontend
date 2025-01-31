import { useMutation } from "@tanstack/react-query";

import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate();
  const { mutate: login, isPending } = useMutation({
    mutationFn: loginApi,
    onSuccess: () => {
      setTimeout(() => {
        navigate("/dashboard");
        console.log("User successfully logged in");
      }, 100);
    },
    onError: (error) => {
      console.log("Unable to login the user", error);
    },
  });

  return { login, isPending };
}
