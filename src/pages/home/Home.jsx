import React from 'react';
import { CreatePost, PostList } from './components';
import { MenuLeft, NavMenu } from '../../components';

function Home() {
    return (
        <>
            <NavMenu/>
            <MenuLeft/>
            <CreatePost />
            <PostList />
        </>
    );
}

export default Home;
