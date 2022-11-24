import React, { useContext } from 'react';
import { AuthContext } from '../Context/Context';
import LoadingPage from '../Pages/LoadingPage/LoadingPage';
import {Navigate, useLocation} from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <LoadingPage/>
    }
    else{
        if(user){

            return children;
        }
        else{
            return <Navigate to='/login' state={{from:location.pathname}}></Navigate>
        }
    }
};

export default PrivateRoute;