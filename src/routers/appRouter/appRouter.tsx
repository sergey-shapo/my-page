import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../../components/App/App";

import { Suspense } from "react";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Suspense></Suspense>,
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
