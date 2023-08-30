import React, { useContext } from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    TextField,
} from '@mui/material';
import { FormControl } from '@mui/base';
import { Close } from '@mui/icons-material';
import { ConnectionContext } from '../../../../context/auth';
import { useForm } from '../../../../hooks';

function PostField({ status, setStatus,text, onSubmit, initials}) {
    const connection = useContext(ConnectionContext);

    const [newPost,setNewPost] = useForm(initials || {
        title: '',
        content: '',
        userId: connection.me()        
    });

    const handlerSubmit = (event) =>{
        event.preventDefault();
        onSubmit(newPost);
    };

    return (
        <Dialog open={status} onClose={setStatus} >
            <DialogTitle sx={{display:'flex', justifyContent: 'space-between', alignItems:'center'}}>
                <p className='text-center text-gray-700 font-bold md:text-[20px]'>{text + ' Post'}</p>
                <IconButton onClick={setStatus}>
                    <Close sx={{color:'rgba(255,255,255,.6)]'}}/>
                </IconButton> 
            </DialogTitle>
            <DialogContent className='text-center' sx={{ fontWeight: 'bold' }}>
                <FormControl onSubmit={handlerSubmit} className='md:min-w-[400px] mt-1'>
                    <TextField
                        variant='outlined'
                        autoFocus={true}
                        defaultValue={newPost.title}
                        required={true}
                        onChange={setNewPost}
                        label='Your post title'
                        type='text'
                        name='title'
                        size='small'
                        className='w-full'
                        InputProps={{
                            id: 'title'
                        }}
                        sx={{backgroundColor: 'white'}}
                    />
                    <TextField
                        variant='outlined'
                        autoFocus={true}
                        required={true}
                        defaultValue={newPost.content}
                        multiline
                        name='content'
                        onChange={setNewPost}
                        InputProps={{
                            id: 'body'
                        }}
                        rows={5}
                        label='What you wanna say ?'
                        type='text'
                        size='small'
                        className='w-full'
                        sx={{backgroundColor: 'white', marginTop:2}}
                    />
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={setStatus} size='small' variant='outlined' color='error'>
                    Cancel
                </Button>
                <Button autoFocus onClick={handlerSubmit} size='small' variant='contained' color='primary'>
                    {text}
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default PostField;