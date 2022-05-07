import { ReactLocation } from "@tanstack/react-location";
import type { Route } from "@tanstack/react-location";
import { Home } from "~/pages/home";
import { ResultPage } from "~/pages/result";

export const location = new ReactLocation();

export const routes: Route[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/result",
    element: <ResultPage />,
  }
];
