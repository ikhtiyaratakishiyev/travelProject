import React from 'react'
import { createBrowserRouter } from "react-router-dom";

import HomePage from '../Pages/homePage'
import AboutPage from '../Pages/aboutPage'
import ContactPage from '../Pages/contactPage'
import NewsPage from '../Pages/newsPage'
import PackagesPage from '../Pages/packagesPage'


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
])