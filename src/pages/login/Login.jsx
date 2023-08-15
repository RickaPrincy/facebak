import React from 'react';
import { Box } from '@mui/material';
import { SideTwo } from './SideTwo';
import SideOne from './SideOne';

export function Login() {
    return (
        <>
            <Box sx={{
                gap: 18,
                p:4,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <SideOne/>
                <SideTwo/>
            </Box>
        </>
    );
}