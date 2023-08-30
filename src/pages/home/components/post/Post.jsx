import { Public, ThumbUp, Comment, ThumbDown } from '@mui/icons-material';
import { Box } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import InfoPost from './InfoPost';
import PostOption from './PostOption';
import CreateComments from '../comment/CreateComments';
import { useAxiosGet, usePopup } from '../../../../hooks';
import { v4 as uuid} from 'uuid';
import { ConnectionContext } from '../../../../context/auth';
import Comments from '../comment/Comments';

function Post({post}){
    const connection = useContext(ConnectionContext);
    const [comments,getComments] = useAxiosGet(`/posts/${post.id}/comments`) ;
    const [reactions,getReactions] = useAxiosGet(`/posts/${post.id}/reactions`) ;
    const [showComments,setShowComments] = usePopup();
    
    useEffect(()=>{
        getComments();
        getReactions();
    },[]);

    const isLiked = (type)=>{
        return reactions.find(el => el.type === type && el.user.id === connection.me());
    };

    return (
        <div className='shadow-md p-5 w-full bg-white mx-auto rounded-15 my-4'>
            <Box display='flex' alignItems='flex-start' justifyContent='space-between' marginY={1}>
                <div className='flex items-center'>
                    <img src='temp_user.jpg' alt='Some people photo' className='profil_img' />
                    <div className='ms-4'>
                        <p className='text-red-500 text-[15px]'>{post.user.username}</p>
                        <p className='text-gray-500 flex items-end gap-1 text-[12px] font-bold'>
                            <Public fontSize='small' />
                            Published:
                            <span className='font-normal ml-1'> {post.createdAt.split('T')[0]}</span>
                        </p>
                    </div>
                </div>
                <PostOption />
            </Box>
            <h2 className='font-bold text-gray-700 my-1 text-[15px]'>{post.title}</h2>
            <p className='text-gray-600 text-[15px]'> {post.content} </p>
            <hr className='bg-gray-300 my-3 h-[2px]'/>
            <div className='flex mt-3 mx-0 mb-2 gap-2 p-0'>
                <InfoPost 
                    key={uuid()} 
                    info={{
                        value: [...reactions].filter(el => el.type === 'LIKE').length + ' likes',
                        icon: <ThumbUp sx={{color: isLiked('LIKE') ? '#2261e0' : 'rgba(0,0,0,.7)'}}/>
                    }} 
                />
                <InfoPost 
                    key={uuid()} 
                    info={{
                        value: [...reactions].filter(el => el.type === 'DISLIKE').length + ' dislikes',
                        icon: <ThumbDown sx={{color: isLiked('DISLIKE') ? '#ed4532' : 'rgba(0,0,0,.7)'}}/>
                    }} 
                />
                <InfoPost 
                    key={uuid()} 
                    onClick={setShowComments}
                    info={{
                        value: comments.length + ' comments',
                        icon: <Comment sx={{color: 'rgba(0,0,0,.7)'}}/>
                    }} 
                />
            </div>
            <hr />
            <Comments comments={comments} onClose={setShowComments} open={showComments}/>
            <CreateComments refresh={getComments} postId={post.id}/>
        </div>
    );
}

export default Post;