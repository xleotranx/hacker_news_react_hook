import React from "react";
import { mount, route, redirect } from "navi";
import Home from "./page/Home";
import Detail from "./page/Detail";
// Define routes using mount(), route(), and other middleware.
const Routes = mount({
  "/": redirect(_ => "/newest/1"),
  "/:type/:page": route(request => {
    return {
      data: { ...request.params },
      view: <Home />
    };
  }),
  "/:itemId": route(request => {
    return {
      data: { ...request.params },
      view: <Detail />
    };
  })
});

export default Routes;
