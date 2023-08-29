import React from 'react';
import { CreatePost, PostList } from './components';

function Home() {
    return (
        <>
            <div className='overflow-y-scroll me-4 h-[calc(100vh-65px)] w-full scroll-hidden'>
                <CreatePost />
                <PostList />
            </div>
        </>
    );
}

export default Home;
