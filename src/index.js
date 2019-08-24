// jsx-a11y/anchor-is-valid

import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import Layout from "./Layout";
import { Router, View } from "react-navi";
import Routes from "./Routes";

import "./dark.min.css";
import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router routes={Routes}>
    <Layout>
      <Suspense fallback={null}>
        <View />
      </Suspense>
    </Layout>
  </Router>,
  rootElement
);
