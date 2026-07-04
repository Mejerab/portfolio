import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import Home from "../Pages/Home/Home";
import Works from "../Pages/Works";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
        {
            path: '/',
            element: <Home />
        },
        {
          path: '/works',
          element: <Works />
        }
    ]
  },
]);
export default router;