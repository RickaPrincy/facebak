import React from 'react';
import { Box } from '@mui/material';
import SideOne from './SideOne';
import SideTwo from './SideTwo';

export default function Login() {
    return (
        <>
            <Box
                sx={{
                    gap: 15,
                    p: 4,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    background: 'rgb(236, 233, 233)',
                    height: '100vh'
                }}
            >
                <SideOne />
                <SideTwo />
            </Box>
        </>
    );
}
