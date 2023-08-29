import React from 'react';
import {
    Navigate,
    Route,
    Routes
} from 'react-router-dom';
import Signin from './Signin';
import Signup from './Signup';
import { Box } from '@mui/material';
import SideOne from './SideOne';

function Login() {
    return (
        <Box
            sx={{
                gap: 15,
                p: 4,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                minHeight: '100vh',
                background: 'rgb(243, 242, 242)',
            }}
        >
            <SideOne />
            <Routes>
                <Route path='connection' element={<Signin />} />
                <Route path='registration' element={<Signup />} />
                <Route path='*' element={<Navigate to={'/login/connection'}/>} />
            </Routes>
        </Box>
    );
}

export default Login;