import React from 'react';
import {
    Navigate,
    Route,
    Routes
} from 'react-router-dom';

import {
    Login
} from './pages';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import NavMenu from './components/navbar/NavMenu';
import Connected from './pages/Connected';
import NotFound from './pages/NotFound';

function Router() {
    return (
        <>
            <NavMenu/>
            <Routes>
                <Route path='/' element={<Navigate to={'/home'}/>}/>
                <Route index path='/home/*' element={
                    <PrivateRoute>
                        <Connected />
                    </PrivateRoute>
                } />
                <Route path='/login/*' element={
                    <PublicRoute>
                        <Login />
                    </PublicRoute>
                } />
                <Route path='*' element={<NotFound/>} />
            </Routes>
        </>
    );
}

export default Router;
