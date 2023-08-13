import { Public, ThumbUp, Comment } from '@mui/icons-material';
import { Box } from '@mui/material';
import React from 'react';
import InfoPost from './InfoPost';
import PostOption from './PostOption';

function Post({post}) {
    const userConnected = '1';

    const isUserLikedPage = () => {
        return post.reactions.map(el => el.userId).indexOf(userConnected) !== -1;
    };

    const getColor = (color) => {
        return isUserLikedPage() ? color : '#595959';
    };

    const postInformation = [
        { value: post.reactions.length, icon: <ThumbUp fontSize='small' sx={{color:getColor('primary')}}/> },
        { value: post.comments.length, icon: <Comment fontSize='small' sx={{color:getColor('warning')}}/> }
    ];

    return (
        <div className='shadow-md p-5 w-[fit-content] md:min-w-[700px] max-w-[700px] bg-white mx-auto rounded-15 my-4'>
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
            <div className='flex mt-3 mx-0 p-0'>
                {postInformation.map((info, index) => <InfoPost key={index} info={info} />)}
            </div>
        </div>
    );
}

export default Post;