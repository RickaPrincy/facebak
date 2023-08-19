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

import { NavMenu } from './components';

function Router() {
    return (
        <>
            <NavMenu/>
            {/* <MenuLeft /> */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile/>} />
                <Route path="*" element={<h1>Page not found</h1>} />
            </Routes>
        </>
    );
}

export default Router;
