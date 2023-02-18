import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import About from "../Pages/About/About";
import Apply from "../Pages/Apply/Apply";
import Contact from "../Pages/contact/Contact";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../Pages/LogIN/LogIn";
import Allexpriencedjob from "../Pages/SeeAll/Allexpriencedjob";
import Allfresherjob from "../Pages/SeeAll/Allfresherjob";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element:<LogIn></LogIn>
            },
            {
                path: '/signup',
                element:<SignUp></SignUp>
            },
            {
                path: '/contact',
                element:<Contact></Contact>
            },
            {
                path: '/about',
                element:<About></About>
            },
            {
                path: 'allfresherjob',
                element: <Allfresherjob></Allfresherjob>
            },
            {
                path: 'allexpriencedjob',
                element: <Allexpriencedjob></Allexpriencedjob>
            },
            {
                path: '/apply',
                element:<PrivateRoute><Apply></Apply></PrivateRoute>
            },
        ]
    }
])

export default router;