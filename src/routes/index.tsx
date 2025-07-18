import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import MainLayout from "../layout/main/MainLayout";
import AuthLayout from "../layout/auth/AuthLayout";
import AdminLayout from "../layout/admin/AdminLayout";

const HomePage = lazy(() => import("../pages/home/Home"));
const RegisterPage = lazy(() => import("../pages/auth/register/Register"));
const AdminPage = lazy(() => import("../pages/admin/main/Admin"));
const LoginPage = lazy(() => import("../pages/admin/login/Login"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      // Public pages with MainLayout (Header + Footer)
      {
        path: "",
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          // Future public pages can be added here
          // {
          //   path: "about",
          //   element: <AboutPage />,
          // },
          // {
          //   path: "services",
          //   element: <ServicesPage />,
          // },
        ],
      },
      // Auth pages with AuthLayout (no Header/Footer)
      {
        path: "auth",
        element: <AuthLayout />,
        children: [
          {
            path: "register",
            element: <RegisterPage />,
          },
        ],
      },
      // Direct register route for backward compatibility
      {
        path: "register",
        element: <RegisterPage />,
      },
      // Admin pages with AdminLayout (no Header/Footer)
      {
        path: "admin",
        element: <AdminLayout />,
        children: [
          {
            index: true,
            element: <AdminPage />,
          },
          {
            path: "login",
            element: <LoginPage />,
          },
        ],
      },
    ],
  },
]);
