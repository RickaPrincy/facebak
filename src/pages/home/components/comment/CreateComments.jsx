import React, { useContext, useState } from 'react';
import { Box, Button, FormControl, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { ConnectionContext } from '../../../../context/auth';
import { axiosPut } from '../../../../api';
import Error from '../../../../components/Error';
import Success from '../../../../components/Success';

export default function CreateComments({ postId, refresh }) {
    const connection = useContext(ConnectionContext);
    const [newComments, setNewComments] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess]= useState(false);

    const handlerSubmit = (event) => {
        event.preventDefault();
        axiosPut(`/posts/${postId}/comments`, {
            content: newComments,
            userId: connection.me()
        })
            .then(() => {
                refresh();
                setNewComments('');
                setSuccess(true);
            })
            .catch(err => setError(err));
    };

    return (
        <div>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img src='temp_user.jpg' alt='Some people photo' className='w-[40px] h-[40px] rounded-[50%]' />
                <FormControl
                    component='form'
                    sx={{ display: 'flex', alignItems: 'center', width: '100%', flexDirection: 'row' }}
                    onSubmit={handlerSubmit}
                    fullWidth={true} >
                    <TextField
                        size='small'
                        variant='outlined'
                        fullWidth={true}
                        id='just-some-text-field'
                        onChange={(event) => setNewComments(event.target.value)}
                        label='Comment'
                        sx={{ color: 'orange', m: 1 }}
                    />
                    <Button type='submit' variant='filled'>
                        <SendIcon fontSize='small' color='primary' sx={{ cursor: 'pointer' }} />
                    </Button>
                </FormControl>
            </Box>
            <Error onClose={() => setError(null)} error={error} />
            <Success onClose={()=> setSuccess(false)} open={success} text='Comments added'/>
        </div>
    );
}
