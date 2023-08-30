import React, { useContext, useState } from 'react';
import {
    Box,
    Button,
    CssBaseline,
    TextField,
    FormControl
} from '@mui/material';
import MoodIcon from '@mui/icons-material/Mood';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks';
import Error from '../../components/Error';
import { axiosPost, login } from '../../api';
import { ConnectionContext } from '../../context/auth';

export function Signup() {
    const connection = useContext(ConnectionContext);
    const navigate = useNavigate();
    const [data, handlerChange] = useForm({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [error, setError] = useState(null);

    const handlerSubmit = event => {
        event.preventDefault();
        axiosPost('/users', data).then(() => {
            axiosPost('/users/login', { ...data }).then(res => {
                const info = login(res);
                console.log(info);
                connection.login(info.user, info.token);
                navigate('/');
            })
                .catch(err => setError(err));
        })
            .catch(error => setError(error));
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
                        <FormControl component={'form'} className='w-[300px]' onSubmit={handlerSubmit}>
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
                                onChange={handlerChange}
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
                                onChange={handlerChange}
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
                                onChange={handlerChange}
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
                                onChange={handlerChange}
                                autoComplete='email'
                                size='small'
                            />
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
            <Error error={error} onClose={() => setError(null)} />
        </>
    );
}

export default Signup;