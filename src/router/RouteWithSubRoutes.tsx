import React, { Suspense } from "react";
import { Redirect, Route } from "react-router-dom";
import { IRoute } from "./config";
const RouteWithSubRoutes = (route: IRoute) => {
  /** Authenticated flag */
  const authenticated: boolean = false;

  return (
    <Suspense fallback={route.fallback}>
      <Route
        path={route.path}
        render={(props: any) =>
          route.redirect ? (
            <Redirect to={route.redirect} />
          ) : route.private ? (
            authenticated ? (
              route.component && (
                <route.component {...props} routes={route.routes} />
              )
            ) : (
              <Redirect to="/home/login" />
            )
          ) : (
            route.component && (
              <route.component {...props} routes={route.routes} />
            )
          )
        }
      />
    </Suspense>
  );
};

export default RouteWithSubRoutes;
