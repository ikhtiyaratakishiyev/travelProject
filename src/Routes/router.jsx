
import React from 'react'
import { createBrowserRouter } from "react-router-dom";

import HomePage from '../Pages/HomePage'
import AboutPage from '../Pages/AboutPage'
import ContactPage from '../Pages/ContactPage'
import NewsPage from '../Pages/NewsPage'
import PackagesPage from '../Pages/PackagesPage'





export const routes = createBrowserRouter([
    {

        path: '/',
        element: <HomePage/>
    },
    {
        path:"/about",
        element: <AboutPage/>
    },
    {
        path:"/contact",
        element: <ContactPage/>
    },
    {
        path:"/news",
        element: <NewsPage/>
    },
    {
        path:"/packages",
        element: <PackagesPage/>
    },
    {
        path:"/about",
        element:<AboutPage/>
    },
    {
        path:"/contact",
        element:<ContactPage/>
    },
    {
        path:"/packages",
        element:<PackagesPage/>
    },
    {
        path:"/news",
        element:<NewsPage/>

    },
])