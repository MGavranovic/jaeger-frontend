import { useEffect } from "react";
import { store } from "../store/store";
import { loginSuccess } from "../store/userSlice";

function useFetchCurrentUser() {
  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(
          "http://localhost:8080/api/users/current",
          {
            credentials: "include",
          }
        );
        if (response.ok) {
          const user = await response.json();
          store.dispatch(
            loginSuccess({
              id: user.ID,
              fullName: user.FullName,
              email: user.Email,
            })
          );
          console.log("Current user:", user);
        } else {
          console.error("Not authenticated");
        }
      } catch (error) {
        console.error("Error fetching current user:", error);
      }
    }
    fetchUser();
  }, []);
}

export default useFetchCurrentUser;
