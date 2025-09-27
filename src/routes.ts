import { createBrowserRouter } from "react-router";
import { SplashPage } from "@/pages";

const router = createBrowserRouter([
  {
    index: true,
    Component: SplashPage
  },
]);


export default router;