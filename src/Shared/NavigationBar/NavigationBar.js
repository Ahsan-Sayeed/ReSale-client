import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/Context";
import toast, { Toaster } from 'react-hot-toast';

const NavigationBar = () => {
  const { user,userServer, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("succesfully logged out");
        ////	Start				
							localStorage.setItem("accessToken",'');
              navigate('/login',{replace:true});
        /// End
      })
      .catch((err) => {
        alert("something went wrong");
      });
  };

  const menuItems = [
    <li>
    <NavLink to="/" className='rounded-xl'>Home</NavLink>
  </li>,
  <li tabIndex={0}>
    <NavLink to="/blog" className='rounded-xl'>Blogs</NavLink>
  </li>,
  <li>
    <NavLink
      to="/dashboard/myorders"
      className={`justify-between ${!(user && user.uid) && "hidden"} rounded-xl`}
    >
      Dashboard
    </NavLink>
  </li>,
  <>
    {user === null ? (
      <li>
        <NavLink to="/login"  className='rounded-xl'>Login</NavLink>
      </li>
    ) : (
      <li>
        <button className="btn btn-outline rounded-xl" onClick={handleLogOut}>
          LogOut
        </button>
      </li>
    )}
  </>
  ]

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Aurora
        </Link>
      </div>
      <div className="flex-none hidden md:block">
        <ul className="menu menu-horizontal p-0">
          {menuItems}
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
           {menuItems}
        </ul>
      </div>
      <Toaster />
    </div>
  );
};



export default NavigationBar;
