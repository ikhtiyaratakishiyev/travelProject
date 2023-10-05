<<<<<<< HEAD

import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider } from 'react-router-dom'
 import {routes} from './Routes/router'

// yoxla
import './App.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={routes}/>
)
 




    


=======
import React from "react";
import  ReactDOM  from "react-dom";
import { RouterProvider } from "react-router-dom";
import {routes} from './Routes/router'


// const root = ReactDOM.createRoot(Document.getElementById('root'));


// root.render(


    ReactDOM.createRoot(document.getElementById('root')).render(

        <>
                <RouterProvider router={routes}/>
        </>
    )

  














// import React from 'react';

// import ReactDOM from 'react-dom/client';

// import App from './App';

// const root =ReactDOM.createRoot(document.getElementById
    
//     ('root'))

//     root.render(<App/>)
>>>>>>> 99857844d59d103ca35f2d6bbacb0d5a8057f11f
