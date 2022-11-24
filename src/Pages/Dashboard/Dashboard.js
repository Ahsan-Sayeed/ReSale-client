import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {

    const buyers = [
        <li><NavLink to="/dashboard/myorders">My Orders</NavLink></li>,
        // <li><NavLink>Sidebar Item 2</NavLink></li>
    ]
    const sellers = [
        <li><NavLink to="/dashboard/addproduct">Add a product</NavLink></li>,
        <li><NavLink to="/dashboard/myproducts">My Products</NavLink></li>,
        <li><NavLink to="/dashboard/mybuyers">My Buyers</NavLink></li>
    ]
    const admin = [
        <li><NavLink to="/dashboard/allsellers">All Sellers</NavLink></li>,
        <li><NavLink to="/dashboard/allbuyers">All Buyers</NavLink></li>
    ]

    return (
<div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* page content */}
     <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden absolute top-20 -left-2">❯</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content border">
      {/* <!-- Sidebar content here --> */}
        {sellers}
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;