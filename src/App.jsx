import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage, Login, Main, NotFound } from "./containers";
import Test from "./pages/Test";

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/errorpage",
      element: <ErrorPage />,
    },

    {
      path: "/",
      element: <Main />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/*",
          element: <Main />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
