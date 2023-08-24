import React from 'react';
import PostRList from './PostRList';
import UserRList from './UserRList';

function Recommended() {
    return (
        <div>
            <UserRList />
            <PostRList />
        </div>
    );
}

export default Recommended;