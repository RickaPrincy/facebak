import { Delete, EditNote } from '@mui/icons-material';
import { Alert, Popover } from '@mui/material';
import React, { useRef, useState } from 'react';
import { usePopup } from '../../../../hooks';
import PostField from './PostField';
import { axiosPut } from '../../../../api';

function PostOption({ post, refresh }) {
    const [editStatus, setEditStatus] = usePopup();
    const [showOption, toggleShowOption] = usePopup();
    const [error, setError] = useState(null);
    const toggleButton = useRef();

    const deletePost = () => {
        alert('I will delete the post');
    };

    const handlerSubmit = (values) => {
        axiosPut('/posts', values)
            .then(() => {
                refresh();
                setEditStatus();
                toggleShowOption();
            })
            .catch(err => setError(err));
    };


    return (
        <>
            <p ref={toggleButton} onClick={toggleShowOption} className='cursor-pointer font-bold  hover:bg-gray-100 px-2 pb-[5px] rounded-15 text-[18px]'>...</p>
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
                <div className='flex gap-4 px-4 py-2 items-center cursor-pointer hover:bg-gray-200' onClick={setEditStatus}>
                    <EditNote color='primary' fontSize='small' />
                    <p className='text-[15px]'>Edit post</p>
                </div>
                <div className='flex gap-4 px-4 py-2 hover:bg-gray-200 items-center cursor-pointer' onClick={deletePost}>
                    <Delete color='error' fontSize='small' />
                    <p className='text-[15px]'>Delete post</p>
                </div>
            </Popover >
            <PostField
                text='Edit'
                initials={post}
                onSubmit={handlerSubmit}
                setStatus={setEditStatus}
                status={editStatus}
            />
            {error && <Alert>
                {
                    error.code === 'ERR_BAD_REQUEST'
                        ? error.response.data.message
                        : 'One error occurred'
                }
            </Alert>}
        </>
    );
}

export default PostOption;
