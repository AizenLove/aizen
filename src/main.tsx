import { Router, Outlet } from "@tanstack/react-location";
import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import { ServerCheck } from "./components/server-check";
import { MessageProvider } from "./features/message/components/message-provider";
import { location, routes } from "./utils/router";
import "./styles/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <Router routes={routes} location={location}>
      <RecoilRoot>
        <ServerCheck>
          <MessageProvider>
            <Outlet />
          </MessageProvider>
        </ServerCheck>
      </RecoilRoot>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
