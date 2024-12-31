import { SignupData } from "../pages/Signup";
import bcrypt from "bcryptjs";

// on signup generate id with crypto
export async function signup({
  firstName,
  lastName,
  email,
  password,
}: SignupData) {
  const fullName: string = firstName.concat(" ", lastName);

  // hashing the password
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Testing if data exists // TODO: delete later
  console.log("Data from signup api");
  console.log("****", fullName, email, hashedPassword);

  // sending data to backend
  const res = await fetch("http://localhost:8080/api/users/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ fullName, email, password: hashedPassword }),
  });

  // temp error handling
  if (res.ok) {
    console.log("User created successfully");
    // TODO: this will have to navigate to the dashboard
  } else {
    // const error = res.blob
    console.log("Failed to create user");
  }
}
