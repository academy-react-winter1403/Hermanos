import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayOutPage from "./pages/LayOutPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import CoursesPage from "./pages/CoursesPage.jsx";
import NewsPage from "./pages/NewsPage.jsx";
import AboutUsPage from "./pages/AboutUsPage.jsx";
import NewsDetailPage from "./pages/NewsDetailPage.jsx";
import CourseDetailPage from "./pages/CourseDetailPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ForgetPassPage from "./pages/ForgetPassPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOutPage />,
    children: [
      {
        index: true,
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/courses",
        element: <CoursesPage />,
        children: [
          {
            path: "/courses/:id",
            element: <CourseDetailPage />,
          },
        ],
      },
      {
        path: "/news",
        element: <NewsPage />,
        children: [
          {
            path: "/news/:id",
            element: <NewsDetailPage />,
          },
        ],
      },
      {
        path: "/about-us",
        element: <AboutUsPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
        children: [
          {
            path: "/login/forget-password",
            element: <ForgetPassPage />,
          },
        ],
      },
      {
        path: "/sign-up",
        element: <SignUpPage />,
      },
      {
        path: "/dashboard",
        element: <DashboardPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
