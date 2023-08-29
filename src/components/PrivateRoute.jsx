import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { ConnectionContext } from '../context/auth';

function PrivateRoute({children}) {
    const connection  = useContext(ConnectionContext);

    return (
        <>
            {!connection.isConnected() ? <Navigate to={'login/connection'}/> : children}
        </>
    );
}

export default PrivateRoute;