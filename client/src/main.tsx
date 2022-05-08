import { Router, Outlet } from "@tanstack/react-location";
import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import { ServerCheck } from "./components/server-check";
import { location, routes } from "./utils/router";

import "./styles/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <Router routes={routes} location={location}>
        <ServerCheck>
          <Outlet />
        </ServerCheck>
      </Router>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
