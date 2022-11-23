import {createBrowserRouter} from 'react-router-dom';
import Main from '../Layouts/Main';
const Route = createBrowserRouter([
    {
        path:'/',
        element:<Main/>
    }
])

export default Route;