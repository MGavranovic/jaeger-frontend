import { UserData } from "../components/usersettings/UserSettingsForm";
import { store } from "../store/store";
import { loginSuccess } from "../store/userSlice";

export async function getUsers() {
  const res = await fetch("http://localhost:8080/api/users");
  const data = await res.json();
  console.log(data);
}

export async function changeUserSettings({
  id,
  fullName,
  email,
  password,
  currentEmail,
}: UserData) {
  console.log("func changeUserSettings", id, fullName, email, password);

  try {
    const res = await fetch("http://localhost:8080/api/users/current/update", {
      method: "POST",
      body: JSON.stringify({ id, fullName, email, password }),
    });

    if (!res.ok) {
      console.error("HTTP errro!", res.status);
    } else {
      console.log("Data for updating sent to server!");

      const resUpdated = await fetch(
        `http://localhost:8080/api/users/current/${encodeURIComponent(
          currentEmail
        )}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (!resUpdated.ok) {
        throw new Error("Failed getting the current user after update");
      }
      const data = await resUpdated.json();
      console.log(data);

      store.dispatch(
        loginSuccess({
          id: data.ID,
          fullName: data.FullName,
          email: data.Email,
        })
      );
    }
  } catch (error) {
    console.error(error);
  }
}
