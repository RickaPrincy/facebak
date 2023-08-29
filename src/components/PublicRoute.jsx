import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { ConnectionContext } from '../context/auth';

function PublicRoute({ children }) {
    const connection = useContext(ConnectionContext);

    return (
        <>
            {connection.isConnected() ? <Navigate to={'/home'} /> : children}
        </>
    );
}

export default PublicRoute;