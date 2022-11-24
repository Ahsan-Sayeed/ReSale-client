import {createBrowserRouter} from 'react-router-dom';
import Main from '../Layouts/Main';
import Category from '../Pages/Category/Category';
import Home from '../Pages/Home/Home';
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
        }
    ]
    }
])

export default Route;