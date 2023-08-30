import React from 'react';
import { Box } from '@mui/material';
export default function CommentStyle({ comment }) {
    return (
        <div>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img src='temp_user.jpg' alt='Some people photo' className='w-[35px] rounded-[50%] h-[35px]' />
                <div className='flex flex-col'>
                    <h2 className='font-bold text-[14px]'>{comment.user.username}</h2>
                    <p className='text-[14px]'>{comment.content}</p>
                </div>
            </Box>
        </div>
    );
}

