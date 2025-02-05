import { LoginData } from "../components/login/LoginForm";
import { SignupData } from "../pages/Signup";
import bcrypt from "bcryptjs";
import { loginSuccess } from "../store/userSlice";
import { store } from "../store/store";

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
    const resLogin = await fetch(
      `http://localhost:8080/api/users/login/${encodeURIComponent(email)}`,
      {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({ password }),
      }
    );
    if (!resLogin.ok) {
      throw new Error(`HTTP error! Status: ${resLogin.status}`);
    }
  } catch (error) {
    console.error("Error signup > login", error);
  }

  // temp error handling
  if (res.ok) {
    console.log("User created successfully");
  } else {
    // const error = res.blob
    console.log("Failed to create user");
  }
}

export async function login({ email, password }: LoginData) {
  console.log(email, password);

  try {
    const res = await fetch(
      `http://localhost:8080/api/users/login/${encodeURIComponent(email)}`,
      {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({ password }),
      }
    );

    if (res.ok) {
      console.log("User successfully logged in");
      const resLoggedInUser = await fetch(
        `http://localhost:8080/api/users/current/${encodeURIComponent(email)}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (!resLoggedInUser.ok) {
        throw new Error("Failed getting the current user");
      }
      const data = await resLoggedInUser.json();
      console.log(data);

      store.dispatch(
        loginSuccess({
          id: data.ID,
          fullName: data.FullName,
          email: data.Email,
        })
      );
    } else {
      console.log("Unable to login user");
    }
  } catch (error) {
    console.error(error);
  }
}

export async function logout() {
  try {
    const res = await fetch("http://localhost:8080/api/users/logout", {
      method: "GET",
      credentials: "include",
    });

    if (res.ok) {
      console.log("User logged out successfully");
    } else {
      console.log("Failed to logout user");
    }
  } catch (error) {
    console.error("Error loging out user", error);
  }
}
