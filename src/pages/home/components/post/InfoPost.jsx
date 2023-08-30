import React from 'react';

function InfoPost({ info }) {
    return (
        <div className='flex items-start text-[15px] gap-1 mr-5 cursor-pointer'>
            {info.icon} 
            <p className='text-gray-700'>{info.value}</p>     
        </div> 
    );
}

export default InfoPost;