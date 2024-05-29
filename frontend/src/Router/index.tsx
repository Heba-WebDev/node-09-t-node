import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import { RegisterView } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    loader: () => ({ message: "Hello Data Router!" }),
    Component() {
      return <App />;
    },
  },
  {
    path: "/register",
    loader: () => ({ message: "Hello Register!" }),
    Component() {
      return <RegisterView />;
    },
  },
]);

export default function Router() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}