import { SignupData } from "../pages/Signup";

// on signup generate id with crypto
export async function signup({
  firstName,
  lastName,
  email,
  password,
}: SignupData) {
  //   const res = await fetch("http://localhost:8080/api/users");
  //   const data = await res.json();
  //   console.log(data);

  console.log("Data from signup api");
  console.log("****", firstName, lastName, email, password);
}
