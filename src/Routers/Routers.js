import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Products from "../pages/Shop/Products/Products";
import About from "../pages/Shared/Document/About/About";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/products',
                element:<Products/>
            },
            {
                path:'/about',
                element:<About/>
            }
        ]
    }
])

export default router