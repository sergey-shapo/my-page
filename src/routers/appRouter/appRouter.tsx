import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../../components/App/App";

import { Suspense } from "react";
import { LazyContactPage, LazyMainPage } from "../lazyPages/lazyPages";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Suspense>
            <LazyMainPage />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense>
            <LazyContactPage />
          </Suspense>
        ),
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
