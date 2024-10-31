import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";

import AppLayout from "./ui/AppLayout";
import Dashboard from "./components/dashboard/Dashboard";
import Notes from "./components/notes/Notes";

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
    <div>
      <GlobalStyles />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
