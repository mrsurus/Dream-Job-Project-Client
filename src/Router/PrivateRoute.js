import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import Spinner from '../Pages/Shared/Spinner/Spinner';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <Spinner></Spinner>
    }

    if(user){
        return children;
    }
    

    return (
        <div>
            <Navigate to='/login' state={{from: location}} replace></Navigate>
        </div>
    );
};

export default PrivateRoute;