import { CircularProgress } from '@mui/material';
import React from 'react';

function Loading() {
    return (
        <div className='w-full items-center flex justify-center backdrop:blur-[5px] bg-white h-full'>
            <CircularProgress/>
        </div>
    );
}

export default Loading;