import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import Personal from "../Pages/Home/Personal";
import Skills from "../Pages/Home/Skills";
import Projects from "../Pages/Home/Projects";
import Contact from "../Pages/Home/Contact";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path : '/',
            element : <Home></Home>
        },
        {
          path: "/about",
          element: <Personal></Personal>
        },
        {
          path: "/skills",
          element: <Skills></Skills>
        },
        {
          path: "/projects",
          element: <Projects></Projects>
        },
        {
          path: "/contact",
          element: <Contact></Contact>
        }
      ]
    }
  ]);

export default router
