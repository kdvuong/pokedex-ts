import { lazy } from "react";
import { withDrawerContext } from "contexts/Drawer.context";
import { NATUREDEX_LINK } from "router/drawerNav";

export default withDrawerContext(
  lazy(() => import("./NatureListView")),
  { link: NATUREDEX_LINK, toolbarVisible: true }
);
