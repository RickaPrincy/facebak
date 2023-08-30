import { Box, Button, IconButton } from '@mui/material';
import React, { useState } from 'react';
import { usePopup } from '../../../../hooks';
import PostField from './PostField';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import EditIcon from '@mui/icons-material/Edit';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SentimentVerySatisfiedOutlinedIcon from '@mui/icons-material/SentimentVerySatisfiedOutlined';
import Error from '../../../../components/Error';
import { axiosPut } from '../../../../api';

function CreatePost({ onAdd }) {
    const [addPostStatus, toggleAddPost] = usePopup();
    const [error, setError] = useState(null);

    const handlerSubmit = (values) => {
        axiosPut('/posts', values)
            .then(() => {
                onAdd();
                toggleAddPost(!addPostStatus);
            })
            .catch(err => setError(err));
    };

    return (
        <>
            <div className="mx-auto w-full cursor-pointer rounded-15 mt-5 shadow-md p-5 bg-white">
                <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                    <h2 className="text-blue-950 font-bold text-[16px]">Create Post</h2>
                    <IconButton onClick={toggleAddPost}>
                        <EditIcon color='primary' />
                    </IconButton>
                </Box>
                <hr className="bg-gray-500 my-2" />
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }} mb={2}>
                    <img src="temp_user.jpg" alt="just some image of user" className="w-[50px] rounded-[50%] h-[50px]" />
                    <Button onClick={toggleAddPost} sx={{ textTransform: 'none', color: '#6b6b47' }} className='w-full text-end m-0'>
                        Share what are thinking
                    </Button>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <div className='flex items-center mm:flex-col md:flex-row mm:gap-1 md:gap-2 text-center'>
                        <AddPhotoAlternateIcon sx={{ color: '#0080ff' }} fontSize='small' className='cursor-pointer' />
                        <p className='text-gray-500 mm:text-[14px] md:text-[15px]'>Post your photo</p>
                    </div>
                    <div className='flex items-center mm:flex-col md:flex-row mm:gap-1 text-center md:gap-2'>
                        <LiveTvIcon sx={{ color: 'red' }} fontSize='small' className='cursor-pointer' />
                        <p className='text-gray-500 md:text-[15px] mm:text-[14px]'>Make a live video</p>
                    </div>
                    <div className='flex items-center mm:flex-col mm:gap-1 md:flex-row text-center md:gap-2'>
                        <SentimentVerySatisfiedOutlinedIcon sx={{ color: '#ff9900' }} fontSize='small' className='cursor-pointer' />
                        <p className='text-gray-500 md:text-[15px] mm:text-[14px]'>How do you feel</p>
                    </div>
                </Box>
            </div >
            <PostField status={addPostStatus} onSubmit={handlerSubmit} setStatus={toggleAddPost} />
            <Error error={error} onClose={() => setError(null)} />
        </>
    );
}

export default CreatePost;
