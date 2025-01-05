import { Navigate, NavLink, Route, Routes } from "react-router"
import { LazyPage1, LazyPage2, LazyPage3 } from "../pages"
import { routes } from "../../routes/routes"


export const LazyLayout = () => {
  return (
    <div>
      <h1>LazyLayout Page</h1>

      <ul>
        <li>
          {/* <NavLink to="/lazyload/lazy1">Lazy 1</NavLink> */}
          <NavLink to={`${routes[0].to}lazy1`}>Lazy 1</NavLink>
          {/* <NavLink to={routes[0].to.concat('lazy1')}>Lazy 1</NavLink> */}
        </li>
        <li>
          <NavLink to="/lazyload/lazy2">Lazy 2</NavLink>
          {/* <NavLink to={routes[0].to.concat('lazy2')}>Lazy 2</NavLink> */}
        </li>
        <li>
          <NavLink to="/lazyload/lazy3">Lazy 3</NavLink>
          {/* <NavLink to={routes[0].to.concat('lazy3')}>Lazy 3</NavLink> */}
        </li>
      </ul>

      <Routes>
        <Route path="lazy1" element={<LazyPage1 />} />
        <Route path="lazy2" element={<LazyPage2 />} />
        <Route path="lazy3" element={<LazyPage3 />} />
        {/* <Route path="*" element={<div>Not Found</div>} /> */}
        <Route path="*" element={<Navigate replace to={"lazy1"} />} />
      </Routes>

    </div>
  )
}

export default LazyLayout