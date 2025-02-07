import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/main/main";
import Home from "../Home/Home";
import Details from "../Components/Details/Details";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/details/:id",
        element: <Details />,
      },
    ],
  },
]);

export default Router;
