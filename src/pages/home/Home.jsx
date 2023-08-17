import React from 'react';
import { CreatePost, PostList } from './components';

function Home() {
    return (
        <>
            <CreatePost />
            <PostList />
        </>
    );
}

export default Home;
