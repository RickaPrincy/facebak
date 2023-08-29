import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Profile from './profile/Profile';
import { MenuLeft, Recommended } from '../components';
import Home from './home/Home';
import NotFound from './NotFound';

function Connected() {
    return (
        <div className='flex items-start gap-4 h-full'>
            <MenuLeft/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/*' element={<NotFound />} />
            </Routes>
            <Recommended/>
        </div>
    );
}

export default Connected;