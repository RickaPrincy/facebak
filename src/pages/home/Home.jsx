import React from 'react';
import { PostList } from './components';

function Home() {
    return (
        <>
            <div className='overflow-y-scroll me-4 h-[calc(100vh-65px)] w-full scroll-hidden'>
                <PostList />
            </div>
        </>
    );
}

export default Home;
