import { Outlet, Navigate } from 'react-router-dom';
import React from 'react';

const PrivateRoutes = () => {
    let auth = {"token": localStorage.getItem("token")}
    return (
            auth.token ? <Outlet /> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes;