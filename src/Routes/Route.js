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
import Reports from '../Pages/Dashboard/Admin/Reports/Reports';
import ReportedItem from '../Pages/Dashboard/Admin/ReportedItem/ReportedItem';
import ErrorPage from '../Shared/ErrorPage/ErrorPage';
import PrivateRoute from './PrivateRoute';
import Blog from '../Pages/Blog/Blog';

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
            element:<PrivateRoute><Category/></PrivateRoute>
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
            path:'/blog',
            element:<Blog/>
        },
        {
            path:'/dashboard',
            element: <PrivateRoute><Dashboard/></PrivateRoute>,
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
                {
                    path:'/dashboard/report',
                    element:<Reports/>
                },
                {
                    path:'/dashboard/reporteditem',
                    element:<ReportedItem/>
                }
            ]
        },
        {
            path:'/payment',
            element:<PrivateRoute><Payment/></PrivateRoute>
        }
    ]
    },
    {
        path:'*',
        element: <ErrorPage/>
    }

])

export default Route;