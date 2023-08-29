import React from 'react';
import PostRList from './PostRList';
import UserRList from './UserRList';
import { useLocation } from 'react-router-dom';

function Recommended() {
    const path = useLocation();

    return (
        <>
            {
                path.pathname === '/home' &&
                <div className='w-[50%] lg:block mm:hidden me-2'>
                    <UserRList />
                    <PostRList />
                </div>
            }
        </>
    );
}

export default Recommended;