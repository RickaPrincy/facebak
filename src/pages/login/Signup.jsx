import React, { useState } from 'react';
import { Box, Button, Paper, CssBaseline, TextField, Typography, Grid, FormControl, Alert } from '@mui/material';
import MoodIcon from '@mui/icons-material/Mood';

export default function Signup() {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Gérer la soumission du formulaire ici
    };
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');


    const handlePasswordChange = (event, setPasswordFunction) => {
        setPasswordFunction(event.target.value);
    };

    const comparePasswords = () => {
        if (password1 != password2) {
            return 'incorrect password';
        }
    };

    return (
        <>
            <Grid component={Paper} elevation={6} square sx={{
                mt: 6,
                p: 4,
                minWidth: 400
            }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <CssBaseline />
                    <div>
                        <Typography component="h1" variant="h5" sx={{ mt: 2, fontWeight: 'bold' }}>
                            <MoodIcon color='primary' />
                            Sign In
                        </Typography>
                        <FormControl onSubmit={handleSubmit} >
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                InputProps={{
                                    id: '3'
                                }}
                                label='Name'
                                size='small'
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
                                size='small'
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                value={password1}
                                label="Password"
                                type="password"
                                InputProps={{
                                    id: '1'
                                }}
                                autoComplete="current-password"
                                onChange={(e) => handlePasswordChange(e, setPassword1)}
                                size='small'
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
                                value={password2}
                                onChange={(e) => handlePasswordChange(e, setPassword2)}
                                autoComplete="email"
                                size='small'
                            />
                            <Alert severity="error" size>{comparePasswords()}</Alert>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                sx={{ color: 'white', fontWeight: 'bold', mt: 3 }}
                            >
                                Sign In
                            </Button>
                        </FormControl>
                    </div>
                </Box>
            </Grid>
        </>
    );
}
