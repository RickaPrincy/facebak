import { Delete, EditNote } from '@mui/icons-material';
import { Popover } from '@mui/material';
import React, { useRef } from 'react';
import { usePopup } from '../../../../hooks';

function PostOption() {
    const [showOption, toggleShowOption] = usePopup(false);
    const toggleButton = useRef();

    const deletePost = () => {
        alert('I will delete the post');
    };

    const editPost = () => {
        alert('I will edit the post');
    };

    return (
        <>
            <p ref={toggleButton} onClick={toggleShowOption}  className='cursor-pointer font-bold  hover:bg-gray-100 px-2 pb-[5px] rounded-15 text-[18px]'>...</p>
            <Popover
                open={showOption}
                anchorEl={toggleButton.current}
                onClose={toggleShowOption}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <div className='flex gap-4 px-4 py-2 items-center cursor-pointer hover:bg-gray-200' onClick={editPost}>
                    <EditNote color='primary' fontSize='small' />
                    <p className='text-[15px]'>Edit post</p>
                </div>
                <div className='flex gap-4 px-4 py-2 hover:bg-gray-200 items-center cursor-pointer' onClick={deletePost}>
                    <Delete color='error' fontSize='small' />
                    <p className='text-[15px]'>Delete post</p>
                </div>
            </Popover >
        </>
    );
}

export default PostOption;
