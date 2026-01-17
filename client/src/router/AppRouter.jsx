import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { LandingPage,Login,SignUp,Dashboard,InterviewPrep} from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/signup",
    element: <SignUp/>,
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,
  },
  {
    path: "/interview-prep/:sessionId",
    element: <InterviewPrep/>,
  }

]);

const root = document.getElementById("root");

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};