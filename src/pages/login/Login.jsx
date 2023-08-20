import React from 'react';
import { Box } from '@mui/material';
import SideOne from './SideOne';
import Signup from './Signup';

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
                    background: 'rgb(243, 242, 242)',
                }}
            >
                <SideOne />
                <Signup />
            </Box>
        </>
    );
}
