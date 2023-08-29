import React, { useState } from 'react';
import {
    Box,
    Button,
    CssBaseline,
    TextField,
    FormControl
} from '@mui/material';
import MoodIcon from '@mui/icons-material/Mood';
import { Link } from 'react-router-dom';

export function Signup() {
    const [data, setData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    
    const handleSubmit = event => {
        event.preventDefault();
        console.log(data);
    };

    const handleChange = event => {
        const { name, value } = event.target;
        setData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <>
            <div className='md:max-w-[400px] mx-auto mm:w-[90%] bg-white py-5 mt-6'>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <CssBaseline />
                    <div>
                        <div className='flex justify-center items-center gap-3'>
                            <MoodIcon color='primary' />
                            <p className='font-bold text-[25px] text-gray-600'>Signup</p>
                        </div>
                        <FormControl component={'form'} className='w-[300px]' onSubmit={handleSubmit}>
                            <TextField
                                variant='outlined'
                                margin='normal'
                                fullWidth
                                InputProps={{
                                    id: '3'
                                }}
                                label='Name'
                                name='username'
                                size='small'
                                required={true}
                                value={data.username}
                                onChange={handleChange}
                            />
                            <TextField
                                variant='outlined'
                                margin='normal'
                                required={true}
                                fullWidth
                                InputProps={{
                                    id: '2'
                                }}
                                label='Email Address'
                                name='email'
                                autoComplete='email'
                                size='small'
                                type='email'
                                value={data.email}
                                onChange={handleChange}
                            />
                            <TextField
                                variant='outlined'
                                margin='normal'
                                fullWidth
                                required={true}
                                name='password'
                                value={data.password}
                                label='Password'
                                type='password'
                                InputProps={{
                                    id: '1'
                                }}
                                autoComplete='current-password'
                                onChange={handleChange}
                                size='small'
                            />
                            <TextField
                                variant='outlined'
                                margin='normal'
                                required={true}
                                fullWidth
                                type='password'
                                InputProps={{
                                    id: '4'
                                }}
                                name='confirmPassword'
                                label='Confirmation Password'
                                value={data.confirmPassword}
                                onChange={handleChange}
                                autoComplete='email'
                                size='small'
                            />
                            {/* {(error && error.response) && <p className='text-red-500 text-[15px]'>{error.response.data.message}</p>} */}
                            <Button type='submit' variant='contained' color='primary' sx={{ color: 'white', fontWeight: 'bold', mt: 3 }}>
                                Signup
                            </Button>
                            <p className='text-blue-500 hover:underline mt-3'>
                                <Link to={'/login/connection'}>I already have an account</Link>
                            </p>
                        </FormControl>
                    </div>
                </Box>
            </div>
        </>
    );
}

export default Signup;