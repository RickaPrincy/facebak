import React, { useEffect } from 'react';
import Post from './Post';
import { useAxiosGet } from '../../../../hooks';
import { Loading } from '../../../../components';
import CreatePost from './CreatePost';

function PostList() {
    const [postList, getPostList, pending] = useAxiosGet('/posts');
    const handlerAddPost = ()=>{
        getPostList();
    };

    useEffect(() => {
        getPostList();
    }, []);

    return (
        <>
            <CreatePost onAdd={handlerAddPost}/>
            {[...postList].reverse().map(post => <Post refresh={getPostList} key={post.id} post={post}/>)} 
            {pending && <Loading />}
        </>    
    );
}

export default PostList;