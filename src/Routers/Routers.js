import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Products from "../pages/Shop/Products/Products";
import About from "../pages/Shared/Document/About/About";
import Contact from "../pages/Shared/Document/Contact/Contact";
import SignInForm from "../pages/Shared/From/SignInForm";
import SignUpForm from "../pages/Shared/From/SignUpForm";
import ForgetPasswordForm from "../pages/Shared/From/ForgetPasswordForm";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/products',
                element: <Products />
            },
            {
                path: '/about',
                element: <About />
            },
            {
               path:'/contact',
               element:<Contact/>
            },
            {
                path:'/signin',
                element:<SignInForm/>
            },
            {
                path:'/signup',
                element:<SignUpForm/>
            },
            {
                path:'/forgetpassword',
                element:<ForgetPasswordForm/>
            }
        ]
    }
])

export default router