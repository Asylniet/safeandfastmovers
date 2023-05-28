import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Layout from "../layouts/Layout.jsx";

const Home = lazy(() => import("../views/Home.jsx"));
const About = lazy(() => import("../views/About.jsx"));
const Services = lazy(() => import("../views/Services.jsx"));
const Medicine = lazy(() => import('../views/Medicine.jsx'));

const Router = [
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <Navigate to="/home" /> },
            {path: '/home', element: <Home />},
            {path: '/about', element: <About />},
            {path: '/services', element: <Services />},
            {path: '/medicals', element: <Medicine />},
        ]
      },
]

export default Router;