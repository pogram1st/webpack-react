import {createRoot} from 'react-dom/client';
import {AppLayout} from "@/layouts/AppLayout";
import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Posts} from "@/pages/Posts/Posts";
import {Home} from "@/pages/Home/Home";
import {About} from "@/pages/About/About";
import {Shop} from "@/pages/Shop/Shop";

const root = document.getElementById('root');

if (!root) {
    throw new Error('Root not found!');
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '',
                index: true,
                element: <Home />,
            },
            {
                path: 'posts',
                element: <Posts />,
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'shop',
                element: <Shop />,
            },
        ]
    },
]);

const container = createRoot(root);

container.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);