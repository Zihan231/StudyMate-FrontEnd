import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/homeLayout/HomeLayout";

const router = createBrowserRouter([{
    path: '/',
    Component: HomeLayout,
    children: [
        {
            
        }
    ]
}])
export default router;