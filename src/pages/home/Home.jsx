import React from 'react';
import { TextField } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

export function Home() {
    return (
        <>
            <AccountCircle/>
            <TextField variant='filled' id='just-some-text-field' label='Your Name' sx={
                {
                    color: 'orange'
                }
            } />;
        </>
    );
}

