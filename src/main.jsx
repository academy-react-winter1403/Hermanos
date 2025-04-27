import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayOutPage from "./pages/LayOutPage.jsx";
import HomePage from "./pages/Landing/HomePage.jsx";
import CoursesPage from "./pages/Courses/CoursesPage.jsx";
import NewsPage from "./pages/News/NewsPage.jsx";
import AboutUsPage from "./pages/AboutUs/AboutUsPage.jsx";
import NewsDetailPage from "./pages/NewsDetail/NewsDetailPage.jsx";
import CourseDetailPage from "./pages/CourseDetail/CourseDetailPage.jsx";
import LoginPage from "./pages/Login/LoginPage.jsx";
import ForgetPassPage from "./pages/Login/loginPage-components/ForgetPassPage.jsx";
import SignUpPage from "./pages/SignUp/SignUpPage.jsx";
import NotFoundPage from "./pages/NotFound/NotFoundPage.jsx";
import LoginTwoStep from "./pages/Login/loginPage-components/LoginTwoStep.jsx";
import RegisterStepOne from "./pages/SignUp/signUpPage-components/RegisterStepOne.jsx";
import RegisterStepTwo from "./pages/SignUp/signUpPage-components/RegisterStepTwo.jsx";
import RegisterStepThree from "./pages/SignUp/signUpPage-components/RegisterStepThree.jsx";
import Sugesstion from "./pages/CourseDetail//courseDetail-components/Sugesstion.jsx";
import UserSugesstion from "./pages/CourseDetail/courseDetail-components/UserSugesstion.jsx";
import NewPassWordForm from "./pages/Login/loginPage-components/NewPassWordForm.jsx";
import PanelPage from "./pages/PanelStudent/PanelLayout/PanelPage.jsx";
import PanelEditProfilePage from "./pages/PanelStudent/EditProfilePage/PanelEditProfilePage.jsx";
import PanelCounterPage from "./pages/PanelStudent/CounterPage/PanelCounterPage.jsx";
import PanelMyCoursesPage from "./pages/PanelStudent/MyCoursesPage/PanelMyCoursesPage.jsx";
import PanelReservedCourses from "./pages/PanelStudent/ReservedCoursesPage/PanelReservedCoursesPage.jsx";
import PanelFavoritePage from "./pages/PanelStudent/FavoritePage/PanelFavoritePage.jsx";
import PanelMyOpinionPage from "./pages/PanelStudent/MyOpinionPage/PanelMyOpinionPage.jsx";
import PanelChangePassPage from "./pages/PanelStudent/ChangePasswordPage/PanelChangePassPage.jsx";

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
        index: true,
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
