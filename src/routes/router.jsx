import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/homeLayout/HomeLayout";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import UserProfile from "../components/UserProfile/UserProfile";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([{
    path: '/',
    Component: HomeLayout,
    children: [
        {
            index: true,
            Component: Home
        },
        {
            path: '/login',
            Component: Login
        },
        {
            path: '/register',
            Component: Register
        },
        {
            path: '/profile',
            element: <UserProfile></UserProfile>

        }
    ]
}])
export default router;