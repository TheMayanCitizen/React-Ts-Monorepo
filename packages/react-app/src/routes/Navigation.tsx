import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router";
import logo from "../assets/react.svg";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/home" className={({ isActive }) =>
                isActive ? "nav-active" : ""
              } >Home</NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink to="/about" className={({ isActive }) =>
                isActive ? "nav-active" : ""
              }>About</NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink to="/users" className={({ isActive }) =>
                isActive ? "nav-active" : ""
              }>Users</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="home" element={<h1>Hello from Home</h1>} />
          <Route path="about" element={<h1>It's Tim from About</h1>} />
          <Route path="users" element={<h1>Hello it's Tim from Users</h1>} />
          <Route path="/*" element={<Navigate to="/home" replace />} />
          {/* El replace es para qeu no pueda regresar */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};
