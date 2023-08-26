import { Button } from '@mui/material';
import React from 'react';

function UserRList() {
    return (
        <div className='text-[rgba(0,0,0,.7)] w-full rounded-[15px] shadow-lg text-[13px] bg-white py-5 px-4 mt-5 me-2'>
            <h2 className='text-[16px] font-bold'>Recommended Friends</h2>
            <p className='text-blue-500 hover:underline w-fit cursor-pointer mb-1'>View more</p>
            <hr className='bg-gray-300 mb-3'/>
            <div className="flex mb-2 justify-between items-center">
                <div className="flex gap-3 items-center">
                    <img src="temp_user.jpg" alt="temp_user" className='w-[35px] h-[35px] rounded-[50%]'/>
                    <p className='font-bold'>Lolita</p>
                </div>
                <Button size='small' variant='contained'>Follow</Button>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                    <img src="temp_user.jpg" alt="temp_user" className='w-[35px] h-[35px] rounded-[50%]'/>
                    <p className='font-bold'>Lolita</p>
                </div>
                <Button size='small' variant='contained'>Follow</Button>
            </div>
        </div>
    );
}

export default UserRList;