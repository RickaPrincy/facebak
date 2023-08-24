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

import { MenuLeft, NavMenu, Recommended } from './components';

function Router() {
    return (
        <>
            <NavMenu />
            <div className='h-[calc(100vh-64px)] flex items-start gap-4 overflow-hidden'>
                <MenuLeft />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="*" element={<h1>Page not found</h1>} />
                </Routes>
                <Recommended/>
            </div>
        </>
    );
}

export default Router;
