import React, { useEffect } from 'react';
import Post from './Post';
import { useAxiosGet } from '../../../../hooks';

function PostList() {
    const [postList, getPostList] = useAxiosGet('/posts');

    useEffect(() => {
        getPostList();
    }, []);

    return (
        <>
            {postList.map(post => <Post key={post.id} post={post}/>)} 
        </>    
    );
}

export default PostList;