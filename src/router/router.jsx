import { createBrowserRouter, Navigate } from "react-router-dom"
import Home from "../components/Home"
import News from "../components/News"
import About from "../components/About"
import Career from "../components/Career"
import Errorpage from "../components/Errorpage"
import Newsletter from "../pages/Newsletter"

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
                element:<Newsletter/>
            },
            {
                path:'/news',
                element: <News/>
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
])

export default router
