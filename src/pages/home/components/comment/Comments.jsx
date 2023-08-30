import { Close } from '@mui/icons-material';
import { Modal } from '@mui/material';
import React from 'react';
import CommentStyle from './CommentStyle';
import { v4 as uuid } from 'uuid';

function Comments({ onClose, open, comments }) {

    return (
        <Modal open={open} onClose={onClose} sx={{border:'none'}}>
            <div className='bg-white w-[700px] border-none overflow-y-scroll h-[90vh] mx-auto mt-5' >
                <div className='justify-between items-start flex w-full'>
                    <p className='my-0'>All comments</p>
                    <div onClick={onClose} className='cursor-pointer w-[fit-content] p-2 hover:bg-slate-200'>
                        <Close />
                    </div>
                </div>
                <hr />
                {[...comments].map(el => <CommentStyle key={uuid()} comment={el} />)}
            </div>
        </Modal>
    );
}

export default Comments;