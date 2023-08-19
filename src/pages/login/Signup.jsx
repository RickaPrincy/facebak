import React, { useState } from 'react';
import { Box, Button, Paper, CssBaseline, TextField, Typography, Grid, FormControl } from '@mui/material';
import MoodIcon from '@mui/icons-material/Mood';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const [data, setData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();

        // Vérifier si les mots de passe correspondent
        if (data.password !== data.confirmPassword) {
            alert('Les mots de passe ne correspondent pas ou sont vides.');
            return;
        }

        // Envoyer la demande POST au backend
        axios.post('/signup', data)
            .then(() => {
                alert('Inscription réussie. Redirection vers la page d accueil.');
                navigate('/home');
            })
            .catch(() => {
                alert('Erreur lors de l inscription.');
            });
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
            <Grid
                component={Paper}
                elevation={6}
                square
                sx={{
                    mt: 6,
                    p: 4,
                    minWidth: 400
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >

                    <CssBaseline />
                    <div>
                        <Typography component="h1" variant="h5" sx={{ mt: 2, fontWeight: 'bold', display: 'flex', justifyContent: 'center' }}>
                            <MoodIcon color="primary" />
                            Sign In
                        </Typography>
                        <FormControl onSubmit={handleSubmit}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                InputProps={{
                                    id: '3'
                                }}
                                label="Name"
                                size="small"
                                value={data.username}
                                onChange={handleChange}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                InputProps={{
                                    id: '2'
                                }}
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                size="small"
                                value={data.email}
                                onChange={handleChange}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                value={data.password}
                                label="Password"
                                type="password"
                                InputProps={{
                                    id: '1'
                                }}
                                autoComplete="current-password"
                                onChange={handleChange}
                                size="small"
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                type="password"
                                InputProps={{
                                    id: '4'
                                }}
                                label="Confirmation Password"
                                value={data.confirmPassword}
                                onChange={handleChange}
                                autoComplete="email"
                                size="small"
                            />
                            <Button type="submit" fullWidth variant="contained" color="primary" sx={{ color: 'white', fontWeight: 'bold', mt: 3 }}>
                                Sign In
                            </Button>
                        </FormControl>
                    </div>

                </Box>
            </Grid>
        </>
    );
}
