<<<<<<< HEAD
import React from 'react'
import { createBrowserRouter } from "react-router-dom";

import HomePage from '../Pages/homePage'
import AboutPage from '../Pages/aboutPage'
import ContactPage from '../Pages/contactPage'
import NewsPage from '../Pages/newsPage'
import PackagesPage from '../Pages/packagesPage'
=======
import { createBrowserRouter } from 'react-router-dom'

import HomePage from '../Pages/HomePage'
import AboutPage from '../Pages/AboutPage'
import ContactPage from '../Pages/ContactPage'
import NewsPage from '../Pages/NewsPage'
import PackagesPage from '../Pages/PackagesPage'
>>>>>>> 99857844d59d103ca35f2d6bbacb0d5a8057f11f


export const routes = createBrowserRouter([
    {
<<<<<<< HEAD
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
=======
        path:"/home",
        element:<HomePage/>
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
>>>>>>> 99857844d59d103ca35f2d6bbacb0d5a8057f11f
    },
])