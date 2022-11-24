import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/Context";
import RemoveToken from "../../Utilities/RemoveToken";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert("succesfully logged out");
        RemoveToken();
      })
      .catch((err) => {
        alert("something went wrong");
      });
  };
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          DaysiUI
        </Link>
      </div>
      <div className="flex-none hidden md:block">
        <ul className="menu menu-horizontal p-0">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li tabIndex={0}>
            <NavLink to="/blog">Blogs</NavLink>
          </li>
          <li>
            <NavLink
              to="/service"
              className={`justify-between ${!(user && user.uid) && "hidden"}`}
            >
              Add Service
              <span className="animate-bounce indicator-item badge badge-secondary">
                99+
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/review"
              className={`${!(user && user.uid) && "hidden"}`}
            >
              My Reviews
            </NavLink>
          </li>
          {user === null ? (
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          ) : (
            <li>
              <button className="btn btn-outline" onClick={handleLogOut}>
                LogOut
              </button>
            </li>
          )}
        </ul>
      </div>
      {/* ===Menu bar== */}
      <div className="dropdown dropdown-end md:hidden">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">blog</Link>
          </li>
          <li>
            <Link
              to="/service"
              className={`justify-between ${!(user && user.uid) && "hidden"}`}
            >
              Add Service
              <span className="indicator-item badge badge-secondary">99+</span>
            </Link>
          </li>
          <li>
            <Link to="/review" className={`${!(user && user.uid) && "hidden"}`}>
              My Reviews
            </Link>
          </li>
          {user === null ? (
            <li>
              <NavLink to="/login"> Login</NavLink>
            </li>
          ) : (
            <li>
              <button className="btn btn-outline" onClick={handleLogOut}>
                LogOut
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};



export default NavigationBar;
