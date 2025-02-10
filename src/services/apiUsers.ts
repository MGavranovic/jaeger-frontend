import { UserData } from "../components/usersettings/UserSettingsForm";

export async function getUsers() {
  const res = await fetch("http://localhost:8080/api/users");
  const data = await res.json();
  console.log(data);
}

export function changeUserSettings({
  id,
  fullName,
  email,
  password,
}: UserData) {
  console.log("func changeUserSettings", id, fullName, email, password);
}
