import { Navigate, createBrowserRouter, redirect } from "react-router-dom"
import LoginForm from "../components/LoginForm"
import Product from "../pages/Product"
import Category from "../pages/Category"
import Dashboard from "../pages/Dashboard"
import RegisterForm from "../components/FormRegister"
import AddProductForm from "../components/FormAddProduct"
import AddCategoryForm from "../components/FormAddCategory"
import Layout from "../components/Layout"
import EditProductForm from "../components/FormEditProduct"



const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginForm/>,
        loader: () => {
            if (localStorage.getItem("access_token")) {
                console.log('masuk sini nih <<<<<<<');
                console.log(localStorage.getItem("access_token"), 'ini didalam router');
               throw redirect("/")  
            } 
            return null
          },
    },
    {
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Product/>
            },
            {
                path: "/dashboard",
                element: <Dashboard/>
            },
            {
                path: "/category",
                element: <Category/>
            },
            {
                path: "/register",
                element: <RegisterForm/>
            },
            {
                path: "/addProduct",
                element: <AddProductForm/>
            },
            {
                path: "/addCategory",
                element: <AddCategoryForm/>
            },
            {
                path: "/editProduct/:id",
                element: <EditProductForm/>
            }
        ]
    }

])


export default router