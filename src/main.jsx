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
import LoginTwoStep from "./components/loginPage-components/LoginTwoStep.jsx";
import RegisterStepOne from "./components/signUpPage-components/RegisterStepOne.jsx";
import RegisterStepTwo from "./components/signUpPage-components/RegisterStepTwo.jsx";
import RegisterStepThree from "./components/signUpPage-components/RegisterStepThree.jsx";
import Sugesstion from "./components/courseDetail-components/Sugesstion.jsx";
import UserSugesstion from "./components/courseDetail-components/UserSugesstion.jsx";
import NewPassWordForm from "./components/loginPage-components/NewPassWordForm.jsx";
import PanelPage from "./pages/PanelPage.jsx";
import PanelEditProfilePage from "./pages/PanelEditProfilePage.jsx";
import PanelCounterPage from "./pages/PanelCounterPage.jsx";
import PanelMyCoursesPage from "./pages/PanelMyCoursesPage.jsx";
import PanelReservedCourses from "./pages/PanelReservedCoursesPage.jsx";
import PanelFavoritePage from "./pages/PanelFavoritePage.jsx";
import PanelMyOpinionPage from "./pages/PanelMyOpinionPage.jsx";
import PanelChangePassPage from "./pages/PanelChangePassPage.jsx";

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
      },
      {
        path: "/courses/:id",
        element: <CourseDetailPage />,
        children: [
          {
            index: true,
            path: "/courses/:id/sign-opinion",
            element: <Sugesstion />,
          },
          {
            path: "/courses/:id/users-opinion",
            element: <UserSugesstion />,
          },
        ],
      },
      {
        path: "/news",
        element: <NewsPage />,
      },
      {
        path: "/news/:id",
        element: <NewsDetailPage />,
        children: [
          {
            path: "/news/:id/sign-opinion",
            element: <Sugesstion />,
          },
          {
            index: true,
            path: "/news/:id/user-opinion",
            element: <UserSugesstion />,
          },
        ],
      },
      {
        path: "/about-us",
        element: <AboutUsPage />,
      },

      {
        path: "/dashboard",
        element: <DashboardPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/login/two-step",
    element: <LoginTwoStep />,
  },

  {
    path: "/login/forget-password",
    element: <ForgetPassPage />,
  },
  {
    path: "/login/forget-password/new-password",
    element: <NewPassWordForm />,
  },
  {
    path: "/sign-up",
    element: <SignUpPage />,
  },
  {
    index: true,
    path: "/sign-up/step-one",
    element: <RegisterStepOne />,
  },

  {
    path: "/sign-up/step-two",
    element: <RegisterStepTwo />,
  },
  {
    path: "/sign-up/step-three",
    element: <RegisterStepThree />,
  },
  {
    path: "/panel-student",
    element: <PanelPage />,
    children: [
      {
        path: "/panel-student/counter",
        element: <PanelCounterPage />,
      },
      {
        path: "/panel-student/edit-profile",
        element: <PanelEditProfilePage />,
      },
      {
        path: "/panel-student/my-courses",
        element: <PanelMyCoursesPage />,
      },
      {
        path: "/panel-student/reserved-courses",
        element: <PanelReservedCourses />,
      },
      {
        path: "/panel-student/favorites",
        element: <PanelFavoritePage />,
      },
      {
        path: "/panel-student/my-opinion",
        element: <PanelMyOpinionPage />,
      },
      {
        path: "/panel-student/change-pass",
        element: <PanelChangePassPage />,
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
