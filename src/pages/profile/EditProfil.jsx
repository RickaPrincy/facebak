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
                    <TextField size='small' fullWidth variant='outlined' id='just-some-text-field' label='prenom' sx={{ color: 'orange', m: 1 }} />
                </Box>
                <Box sx={{ display: 'flex' }}>
                    <TextField size='small' fullWidth variant='outlined' id='just-some-text-field' label='Password' sx={{ color: 'orange', m: 1 }} />
                    <TextField size='small' fullWidth variant='outlined' id='just-some-text-field' label='Confirm Password' sx={{ color: 'orange', m: 1 }} />
                </Box>
                <Box sx={{ display: 'flex' }}>
                    <TextField size='small' variant='outlined' id='just-some-text-field' label='Biographie' sx={{ color: 'orange', m: 1 }} />
                    <label className="block">
                        <input type="file" className="block w-full text-sm text-slate-500
                            mr-4 py-2 px-4
                            border-0
                            text-sm font-semibold
                            bg-violet-50 text-violet-700
                            hover:file:bg-violet-100
                            "/>
                    </label>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button variant='outlined' sx={{ m: 1 }}>change</Button>
                    <Button variant='outlined' sx={{ m: 1 }}>Save Change</Button>
                </Box>
            </Box>
        </div>
    );
}
