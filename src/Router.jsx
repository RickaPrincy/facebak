import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages';
import { Login } from './pages';

function Router() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Router path="/login" element={<Login/>} />
                <Route path="*" element={<h1>Page not found</h1>} />
            </Routes>
        </>
    );
}

export default Router;
