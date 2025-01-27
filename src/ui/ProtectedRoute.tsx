import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Spinner from "./Spinner";
import { Navigate } from "react-router-dom";

const FullPage = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface ProtectedRouteProps {
  children: React.ReactNode;
}

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/users/login/auth", {
          method: "GET",
          credentials: "include",
        });
        const cookie = document.cookie.match("session-cookie");
        console.log("Printing all cookies", cookie);

        const authCookie = document.cookie
          .split(";")
          .some((item) => item.trim().startsWith("session-cookie="));
        console.log("Checking for our auth cookie", authCookie);

        // DEBUG: cookie not being sent back for some reason
        const text = await res.text();
        console.log("Authorization coming from frontend", res.status, text);
        console.log("Cookies", res.headers.get("set-cookie"));

        if (res.ok) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error("Error validating auth:", error);
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, [setIsAuthenticated]);

  if (isAuthenticated === null) {
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );
  }

  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
