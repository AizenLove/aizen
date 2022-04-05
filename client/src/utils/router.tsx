import { ReactLocation } from "@tanstack/react-location";
import type { Route } from "@tanstack/react-location";
import { Home } from "~/pages/home";
import { HomeV2 } from "~/pages/home_v2";

export const location = new ReactLocation();

export const routes: Route[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home_v2",
    element: <HomeV2 />,
  },
];
