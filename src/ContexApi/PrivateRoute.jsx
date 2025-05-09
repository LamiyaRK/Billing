import React, { use} from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loadin from '../Components/Loadin';

const PrivateRoute = ({children}) => {
   const loc=useLocation()
    const {user,load}=use(AuthContext)
    if(load)
        return<Loadin></Loadin>
    if(user&& user?.email)
       {
        return children;
       } 
  return <Navigate state={loc.pathname} to='/login'></Navigate>
};

export default PrivateRoute;