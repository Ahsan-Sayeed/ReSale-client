import React, { useContext } from 'react';
import { AuthContext } from '../Context/Context';
import {Navigate, useLocation} from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <Loading/>
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