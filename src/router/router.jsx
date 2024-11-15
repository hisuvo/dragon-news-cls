import { createBrowserRouter, Navigate } from "react-router-dom"
import Home from "../components/Home"
import About from "../components/About"
import Career from "../components/Career"
import Errorpage from "../components/Errorpage"
import Newsletter from "../pages/Newsletter"
import Auth_layout from "../Auth-Components/Auth_layout"
import Login from "../Auth-Components/Login"
import Register from "../Auth-Components/Register"
import NewsDetails from "../components/NewsDetails"
import PrivateRoute from "./PrivateRoute"

const router = createBrowserRouter([
    {
        path:'/',
        element: <Home/>,
        errorElement: <Errorpage/>,
        children: [
            {
                path:"",
                element: <Navigate to={`/category/01`}></Navigate>
            },
            {
                path:'/category/:id',
                loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
                element:<PrivateRoute><Newsletter/></PrivateRoute>
            },
            {
                path:'/about',
                element: <About/>
            },
            {
                path:"/career",
                element: <Career/>
            },
        ]
    },
    {
        path:'/news/:id',
        loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
        element: <NewsDetails/>
    },
    {
        path:"/auth",
        element: <Auth_layout/>,
        children: [
            {
                path:"/auth/login",
                element: <Login/>
            },
            {
                path:"/auth/register",
                element: <Register/>
            }
        ]
    }
])

export default router
