import { createBrowserRouter } from "react-router";
import { HomePage } from "@/pages";

const router = createBrowserRouter([
  {
    index: true,
    Component: HomePage,
  },
]);


export default router;