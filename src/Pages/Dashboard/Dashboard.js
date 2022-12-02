import React, { useContext, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/Context';
import Loading from '../../Shared/Loading/Loading';

const Dashboard = () => {
  const {user,userServer,loading} = useContext(AuthContext);
  let menuItems;
  // console.log(userServer)

    const buyers = [
        <li><NavLink to="/dashboard/myorders">My Orders</NavLink></li>,
    ]
    const sellers = [
        <li><NavLink to="/dashboard/myorders">My Orders</NavLink></li>,
        <li><NavLink to="/dashboard/addproduct">Add a product</NavLink></li>,
        <li><NavLink to="/dashboard/myproducts">My Products</NavLink></li>,
        <li><NavLink to="/dashboard/mybuyers">My Buyers</NavLink></li>
    ]
    const admin = [
        <li><NavLink to="/dashboard/myorders">My Orders</NavLink></li>,
        <li><NavLink to="/dashboard/allsellers">All Sellers</NavLink></li>,
        <li><NavLink to="/dashboard/allbuyers">All Buyers</NavLink></li>,
        <li><NavLink to="/dashboard/report">Reports</NavLink></li>,
        <li><NavLink to="/dashboard/reporteditem">Reported Items</NavLink></li>
    ]


    if(!loading){
      if(userServer?.role==="Buyer"){
        menuItems = buyers;
      }
      else if(userServer?.role==="Seller"){
        menuItems = sellers;
      }
      else if(userServer?.role==="Admin"){
        menuItems = admin;
      }
    }
    else{
      menuItems = <Loading/>
    }

    return (
      <>
      {
     !loading&&    
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center">
        {/* page content */}
        <Outlet></Outlet>
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden absolute top-20 -left-2" style={{zIndex:100}}>❯</label>
      
      </div> 
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
            {menuItems}
        </ul>
      
      </div>
    </div>
  }
  </>
    );
};

export default Dashboard;