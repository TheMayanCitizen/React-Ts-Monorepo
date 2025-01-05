import { lazy, FC, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

interface Route {
  to: string,
  path: string,
  Component: FC | LazyExoticComponent<React.FC>
  // Component: () => JSX.Element | React.FC
  name: string
}

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout'))

export const routes: Route[] = [
  {
    to: "/lazyLoad/",
    path: "/lazyLoad/*",
    Component: LazyLayout,
    name: "Lazy Layout"
  },
  {
    to: "/nolazy",
    path: "nolazy",
    Component: NoLazy,
    name: "No Lazy "
  },

]