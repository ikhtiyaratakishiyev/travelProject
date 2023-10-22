
import React from 'react'
import { createBrowserRouter } from "react-router-dom";

import HomePage from '../Pages/homePage'
import AboutPage from '../Pages/aboutPage'
import ContactPage from '../Pages/contactPage'
import NewsPage from '../Pages/newsPage'
import PackagesPage from '../Pages/packagesPage'
import ProductsPage from '../Pages/productsPage';





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
    {
        path:"/productsPage",
        element:<ProductsPage/>

    }

])