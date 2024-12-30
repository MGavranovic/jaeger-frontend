import { SignupData } from "../pages/Signup";
import bcrypt from "bcryptjs";

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
  const fullName: string = firstName.concat(" ", lastName);

  // hashing the password
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // sending data to backend

  //Testing if data exists
  console.log("Data from signup api");
  console.log("****", fullName, email, hashedPassword);
}
