import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";

export function useSignup() {
  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupApi,
    onSuccess: (newUser) => {
      console.log("New user successfully created");
      console.log(newUser);
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return { signup, isPending };
}
