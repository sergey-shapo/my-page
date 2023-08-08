import { lazy } from "react";

export const LazyContactPage = lazy(
  () => import("../../pages/ContactPage/ContactPage")
);

export const LazyMainPage = lazy(() => import("../../pages/MainPage/MainPage"));
