import { createBrowserHistory, ReactLocation } from "@tanstack/react-location";
import type { Route } from "@tanstack/react-location";
import { Home } from "~/pages/home";
import { ResultPage } from "~/pages/result";

const history = createBrowserHistory();
export const location = new ReactLocation({ history });

export const routes: Route[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "result",
    element: <ResultPage />,
  },
];
