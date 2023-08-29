import React from 'react';
import { Box, FormControl, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export default function CreateComments() {
    return (
        <div>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img src='temp_user.jpg' alt='Some people photo' className='profil_img' />
                <FormControl fullWidth >
                    <TextField size='small' variant='outlined' id='just-some-text-field' label='Comment' sx={{ color: 'orange', m: 1 }} />
                </FormControl>
                <SendIcon fontSize='small' color='secondary' sx={{ cursor: 'pointer' }} />
            </Box>
        </div>
    );
}
