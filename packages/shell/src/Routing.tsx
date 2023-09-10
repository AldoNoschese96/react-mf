import React from 'react';
import {RouterProvider, createBrowserRouter, Route} from "react-router-dom";
import {Switch} from "@mui/material";
import {Home} from "@presentation/container";




const Router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    }
])

const Routing = () => <RouterProvider router={Router} />

export default Routing;