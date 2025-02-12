import { UserData } from "../components/usersettings/UserSettingsForm";

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
}: UserData) {
  console.log("func changeUserSettings", id, fullName, email, password);

  const res = await fetch("http://localhost:8080/api/users/current/update", {
    method: "POST",
    body: JSON.stringify({ id, fullName, email, password }),
  });

  if (!res.ok) {
    console.error("HTTP errro!", res.status);
  } else {
    console.log("Data for updating sent to server!");
  }
}
