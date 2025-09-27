import { createBrowserRouter } from "react-router";
import { HomePage, SplashPage } from "@/pages";
import { AuthLayout } from "./components/layout";

const router = createBrowserRouter([
  {
    index: true,
    Component: SplashPage
  },
  {
    Component: AuthLayout,
    children: [
      {
        path: "home", Component: HomePage
      }
    ]
  }
]);


export default router;