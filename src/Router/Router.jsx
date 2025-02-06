import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Banner from "../Components/Banner/Banner";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Banner />,
      },
    ],
  },
]);

export default Router;
