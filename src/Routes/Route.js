import {createBrowserRouter} from 'react-router-dom';
import Main from '../Layouts/Main';
import Category from '../Pages/Category/Category';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
// dashboard 
import AllBuyers from '../Pages/Dashboard/Admin/AllBuyers/AllBuyers';
import AllSellers from '../Pages/Dashboard/Admin/AllSellers/AllSellers';
import MyOrders from '../Pages/Dashboard/Buyers/MyOrders/MyOrders';
import AddAProduct from '../Pages/Dashboard/Sellers/AddAProduct/AddAProduct';
import MyBuyers from '../Pages/Dashboard/Sellers/MyBuyers/MyBuyers';
import MyProducts from '../Pages/Dashboard/Sellers/MyProducts/MyProducts';
import Payment from '../Shared/Payment/Payment';

const Route = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
            path:'/',
            element:<Home/>
        },
        {
            path:'/category/:id',
            element: <Category/>
        },
        {
            path:'/login',
            element:<Login/>
        },
        {
            path:'/register',
            element:<Register/>
        },
        {
            path:'/dashboard',
            element: <Dashboard/>,
            children:[
                {
                    path:'/dashboard/allbuyers',
                    element:<AllBuyers/>
                },
                {
                    path:'/dashboard/allsellers',
                    element:<AllSellers/>
                },
                {
                    path:'/dashboard/myorders',
                    element:<MyOrders/>
                },
                {
                    path:'/dashboard/addproduct',
                    element:<AddAProduct/>
                },
                {
                    path:'/dashboard/mybuyers',
                    element:<MyBuyers/>
                },
                {
                    path:'/dashboard/myproducts',
                    element:<MyProducts/>
                },
                {
                    path:'/dashboard/allbuyers',
                    element:<AllBuyers/>
                },
                {
                    path:'/dashboard/allbuyers',
                    element:<AllBuyers/>
                },
                {
                    path:'/dashboard/allbuyers',
                    element:<AllBuyers/>
                },
            ]
        },
        {
            path:'/payment',
            element:<Payment/>
        }
    ]
    }

])

export default Route;