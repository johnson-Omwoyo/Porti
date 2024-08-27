import App from "../App";
import About from "../routes/About";
import Contacts from "../routes/Contacts";
import Home from "../routes/Home";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: "This is a some'n went wr0ng",
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contacts />,
      },
    ],
  },
];
export default routes;
