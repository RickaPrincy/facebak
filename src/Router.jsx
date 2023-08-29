import React from 'react';
import {
    Route,
    Routes
} from 'react-router-dom';

import {
    Home,
    Login,
    Profile
} from './pages';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

function Router() {
    return (
        <>
            <Routes>
                <Route path='/' element={
                    <PrivateRoute>
                        <Home />
                    </PrivateRoute>
                } />
                <Route path='/profile' element={
                    <PrivateRoute>
                        <Profile />
                    </PrivateRoute>
                } />
                <Route path='/login/*' element={
                    <PublicRoute>
                        <Login />
                    </PublicRoute>
                } />
                <Route path='*' element={<h1 className='text-[20px] fontt-bold'>Page not found</h1>} />
            </Routes>
        </>
    );
}

export default Router;
