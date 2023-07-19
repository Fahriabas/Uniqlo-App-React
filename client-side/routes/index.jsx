import { createBrowserRouter } from "react-router-dom";
import Home from "../src/pages/HomePage";
import Layout from "../src/components/Layout";
import LoginPage from "../src/pages/LoginPage";
import RegisterPage from "../src/pages/RegisterPage";
import Product from "../src/pages/ProductPage";
import DetailPage from "../src/pages/DetailPage";




const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/login",
                element: <LoginPage/>
            },
            {
                path: "/register",
                element: <RegisterPage/>
            },
            {
                path: "/product",
                element: <Product/>
            },
            {
                path: "/product/:id",
                element: <DetailPage/>
            }
        ]
    }
])


export default router