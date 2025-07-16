import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";




const HomePage = lazy(() => import("../pages/home/Home"));
const RegisterPage = lazy(() => import("../pages/auth/register/Register"));
const AdminPage = lazy(() => import("../pages/admin/main/Admin"));
const LoginPage = lazy(() => import("../pages/admin/login/Login"));


export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path:"/register",
    element:<RegisterPage />
  },
  {
    path:"/admin",
    children:[
        {
            index:true,
            element:<AdminPage />
        },
        {
            path:"login",
            element:<LoginPage />
        }
    ]
  }
]);