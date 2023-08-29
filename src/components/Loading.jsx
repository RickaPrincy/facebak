import { CircularProgress } from '@mui/material';
import React from 'react';

function Loading() {
    return (
        <div className='w-screen fixed top-0 left-0 z-[999] items-center flex justify-center backdrop:blur-[5px] bg-white h-screen'>
            <CircularProgress/>
        </div>
    );
}

export default Loading;