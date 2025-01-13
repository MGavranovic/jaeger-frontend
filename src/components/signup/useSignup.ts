import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { signup as signupApi } from "../../services/apiAuth";

export function useSignup() {
  const navigate = useNavigate();

  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      navigate("/dashboard");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return { signup, isPending };
}
