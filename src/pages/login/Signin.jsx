import React from 'react';
import {
    TextField,
    Grid,
    Button,
    Paper
} from '@mui/material';
import { Box } from '@mui/material';
import { MoodOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export function Signin() {
    return (
        <>
            <div className='md:min-w-[400px] sm-hidden mt-6'>
                <Grid component={Paper} elevation={8}>
                    <Box sx={{
                        py: 3,
                        px: 4,
                        gap: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                        <div className='flex justify-center items-center gap-3'>
                            <MoodOutlined color='primary' />
                            <p className='font-bold text-[25px] text-gray-600'>Signin</p>
                        </div>
                        <TextField size='small' fullWidth variant='outlined' id='just-some-text-field' label='Your Name' sx={{ color: 'orange' }} />
                        <TextField size='small' type='password' fullWidth variant='outlined' id='just-some-password-field' label='Password' sx={{ color: 'orange' }} />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ color: 'white' }}
                        >
                            Signin
                        </Button>
                        <p className='text-blue-500 hover:underline mt-3'>
                            <Link to={'/login/registration'}>I dont have an account</Link>
                        </p>
                    </Box>
                </Grid>
            </div>
        </>
    );
}

export default Signin;