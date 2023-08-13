import { Box, Button } from '@mui/material';
import React from 'react';
import { usePopup } from '../../../../hooks';
import PostField from './PostField';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import EditIcon from '@mui/icons-material/Edit';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SentimentVerySatisfiedOutlinedIcon from '@mui/icons-material/SentimentVerySatisfiedOutlined';

function CreatePost() {
    const [addPostStatus, toggleAddPost] = usePopup();

    return (
        <>
            <div onClick={toggleAddPost} className="mx-auto mm:w-full md:w-[fit-content] md:min-w-[700px] cursor-pointer rounded-15 mt-5 shadow-md w-[fit-content] p-5 bg-white">
                <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                    <h2 className="text-blue-950 font-bold text-[16px]">Create Post</h2>
                    <EditIcon color='primary' className='hover:bg-gray-200 rounded-[50%]' />
                </Box>
                <hr className="bg-gray-500 my-2" />
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }} mb={2}>
                    <img src="temp_user.jpg" alt="just some image of user" className="w-[50px] rounded-[50%] h-[50px]" />
                    <Button sx={{ textTransform: 'none', color: '#6b6b47' }} className='w-full text-end m-0'>
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
            <PostField status={addPostStatus} setStatus={toggleAddPost} />
        </>
    );
}

export default CreatePost;
