import { createBrowserRouter } from "react-router";
import { HomePage } from "@/pages";

const router = createBrowserRouter([
  {
    children: [
      {
        path: "home",
        Component: HomePage,
      },
    ],
  },
]);

export default router;
