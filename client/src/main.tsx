import { Router, Outlet } from "@tanstack/react-location";
import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import { Layout } from "~/components/layout";
import { location, routes } from "./utils/router";

import "./styles/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <Router routes={routes} location={location}>
        <Layout>
          <Outlet />
        </Layout>
      </Router>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
