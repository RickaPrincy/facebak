import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Post from './Post';

function PostList() {
    const [postList, setPostList] = useState([]);

    const fetchPostList = () => {
        axios.get('http://localhost:8080/posts')
            .then(response => setPostList(response.data))
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(() => {
        fetchPostList();
    }, []);

    return (
        <>
            {postList.map(post => <Post key={post.id} post={post}/>)} 
        </>    
    );
}

export default PostList;