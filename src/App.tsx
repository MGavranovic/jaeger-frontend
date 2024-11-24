import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
    element: <AppLayout />,
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/notes", element: <Notes /> },
      { path: "/notes/:noteId" },
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

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
