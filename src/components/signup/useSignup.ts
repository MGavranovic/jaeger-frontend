import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { signup as signupApi } from "../../services/apiAuth";

export function useSignup() {
  const navigate = useNavigate();

  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupApi,
    onSuccess: (newUser) => {
      console.log("New user successfully created");
      console.log(newUser);
      // sending the user data
      navigate("/dashboard");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return { signup, isPending };
}
