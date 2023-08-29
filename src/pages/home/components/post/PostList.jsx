import React, { useEffect } from 'react';
import Post from './Post';
import { useAxiosGet } from '../../../../hooks';
import { Loading } from '../../../../components';

function PostList() {
    const [postList, getPostList, pending] = useAxiosGet('/posts');

    useEffect(() => {
        getPostList();
    }, []);

    return (
        <>
            {postList.map(post => <Post key={post.id} post={post}/>)} 
            {pending && <Loading />}
        </>    
    );
}

export default PostList;