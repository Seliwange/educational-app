import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {ROUTES} from "./components/routes";
import { Layout } from "./components/layout";
import { ErrorPage } from "./components/error.page";
import { Courses } from "./components/courses";
import { WatchLesson } from "./components/watchLesson";
import { fetchAllCourses } from "./fetchAllCourses";
import { fetchCourseByIdRouted } from "./fetchCourseById";

export const router = createBrowserRouter([
  {
    path: ROUTES.courses,
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Courses />,
        loader: fetchAllCourses,
      },
      {
        path: ROUTES.course(),
        element: <WatchLesson />,
        loader: fetchCourseByIdRouted,
      },
    ],
  }
]);

export const App = () => <RouterProvider router={router}></RouterProvider>