import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";

import AppLayout from "./ui/AppLayout";
import Dashboard from "./pages/Dashboard";
import Notes from "./pages/Notes";
import PageNotFound from "./pages/PageNotFound";
import UserSettings from "./pages/UserSettings";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import getNotes from "./data/data";
import getDateTime from "./utils/helpers";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import NoteDetails from "./pages/NoteDetails";
import ProtectedRoute from "./ui/ProtectedRoute";
import useFetchCurrentUser from "./hooks/useFetchCurrentUser";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/dashboard" replace />,
  },
  {
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/notes", element: <Notes /> },
      { path: "/notes/:noteId", element: <NoteDetails /> },
      { path: "/user", element: <UserSettings /> },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

function App() {
  // NOTE: testing dummy data generation
  const notes = getNotes();
  console.log(notes);

  // NOTE: testing helpers
  getDateTime();

  // NOTE: testing apiUsers
  // getUsers();

  // NOTE: calling hook for user info
  useFetchCurrentUser();

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />

      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
