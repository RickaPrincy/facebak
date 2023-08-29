import React, { useContext, useState } from 'react';
import {
    TextField,
    Grid,
    Button,
    Paper,
    FormControl
} from '@mui/material';
import { Box } from '@mui/material';
import { MoodOutlined } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks';
import { axiosPost } from '../../api';
import { ConnectionContext } from '../../context/auth';
import Error from '../../components/Error';
import { login } from '../../api';

export function Signin() {
    const connection = useContext(ConnectionContext);
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [data, handlerChange] = useForm({
        username: '',
        email: '',
        password: ''
    });

    const handlerSubmit = (event) => {
        event.preventDefault();
        axiosPost('/users/login', data)
            .then(response => {
                const info = login(response);
                connection.login(info.user, info.token);
                navigate('/');
            })
            .catch(error => {
                setError(error);
            });
    };

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
                        <FormControl component='form' onSubmit={handlerSubmit}>
                            <TextField
                                size='small'
                                onChange={handlerChange}
                                name='username'
                                required={true}
                                fullWidth={true}
                                variant='outlined'
                                id='username'
                                label='Username'
                                sx={{ color: 'orange', mb: 2 }}
                            />
                            <TextField
                                required={true}
                                size='small'
                                name='email'
                                onChange={handlerChange}
                                type='email'
                                fullWidth={true}
                                variant='outlined'
                                id='email'
                                label='Email'
                                sx={{ color: 'orange', mb: 2 }}
                            />
                            <TextField
                                size='small'
                                name='password'
                                required={true}
                                type='password'
                                fullWidth={true}
                                onChange={handlerChange}
                                variant='outlined'
                                id='password'
                                label='Password'
                                sx={{ color: 'orange', mb: 2 }}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ color: 'white' }}
                            >
                                Signin
                            </Button>
                        </FormControl>
                        <p className='text-blue-500 hover:underline mt-3'>
                            <Link to={'/login/registration'}>I dont have an account</Link>
                        </p>
                    </Box>
                </Grid>
            </div>
            <Error error={error} onClose={()=>setError(null)}/>
        </>
    );
}

export default Signin;