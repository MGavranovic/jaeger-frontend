import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";

import AppLayout from "./ui/AppLayout";
import Dashboard from "./pages/Dashboard";
import Notes from "./pages/Notes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/notes", element: <Notes /> },
    ],
  },
]);

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
