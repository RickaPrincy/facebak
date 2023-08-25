import React from 'react';
import PostRList from './PostRList';
import UserRList from './UserRList';

function Recommended() {
    return (
        <div className='w-[50%] lg:block mm:hidden me-2'>
            <UserRList />
            <PostRList />
        </div>
    );
}

export default Recommended;