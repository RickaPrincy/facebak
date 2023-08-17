import React from 'react';
import { Box } from '@mui/material';
import Signup from './Signup';
import SideOne from './SideOne';

function Login() {
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
                <Signup/>
            </Box>
        </>
    );
}

export default Login;