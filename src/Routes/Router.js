import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Layout from "../layouts/Layout.jsx";
import Services from "../views/Services.jsx";

const Home = lazy(() => import("../views/Home.jsx"));
const About = lazy(() => import("../views/About.jsx"));

const Router = [
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <Navigate to="/home" /> },
            {path: '/home', element: <Home />},
            {path: '/about', element: <About />},
            {path: '/service', element: <Services />},
        ]
      },
]

export default Router;