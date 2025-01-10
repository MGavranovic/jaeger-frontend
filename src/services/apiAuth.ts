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

  try {
    // TODO: when getting the user during signup (login should happen on signup) need to check if the user is_authenticated = true
    // if that's the case, user is to be logged in
    // else the ProtectedRoute will stop the login from happening
    const resLogin = await fetch(
      `http://localhost:8080/api/users/login/${encodeURIComponent(email)}`,
      { method: "GET" }
    );
    if (!resLogin.ok) {
      throw new Error(`HTTP error! Status: ${resLogin.status}`);
    }

    const data = await resLogin.json();
    console.log("Data after signup > login", data);
  } catch (error) {
    console.error("Error signup > login", error);
  }

  // temp error handling
  if (res.ok) {
    console.log("User created successfully");
    // TODO: this will have to navigate to the dashboard
  } else {
    // const error = res.blob
    console.log("Failed to create user");
  }
}
