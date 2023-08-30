import { Box, Paper, TextField, Button } from '@mui/material';
import React from 'react';

export default function EditProfil() {
    return (
        <div>
            <Box
                component={Paper}
                elevation={4}
                sx={{
                    m: 2,
                    p: 2,
                }}
            >
                <h2 className='m-2 font-bold'>Edit Photo</h2>
                <Box sx={{ display: 'flex' }}>
                    <TextField size='small' fullWidth variant='outlined' id='just-some-text-field' label='name' sx={{ color: 'orange', m: 1 }} />
                    <TextField size='small' fullWidth variant='outlined' id='just-some-text-field' label='email' sx={{ color: 'orange', m: 1 }} />
                </Box>
                <Box sx={{ display: 'flex' }}>
                    <TextField size='small' fullWidth variant='outlined' id='just-some-text-field' label='Password' sx={{ color: 'orange', m: 1 }} />
                    <TextField size='small' fullWidth variant='outlined' id='just-some-text-field' label='Biographie' sx={{ color: 'orange', m: 1 }} />
                </Box>
                <TextField size='small' variant='outlined' id='just-some-text-field' label='URL_profile' sx={{ color: 'orange', m: 1 }} />
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button variant='contained' size='medium' sx={{ m: 1 }}>Save</Button>
                </Box>
            </Box>
        </div>
    );
}
