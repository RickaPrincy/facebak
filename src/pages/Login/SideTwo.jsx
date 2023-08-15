import React from 'react';
import { TextField, Grid, Box, Button, Paper, Checkbox, Typography } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import VpnKeyOffIcon from '@mui/icons-material/VpnKeyOff';

export function SideTwo() {
    return (
        <>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={8} square sx={{ minWidth: 500, mt:6}}>
                <Box sx={{
                    py: 3,
                    px: 8,
                    gap: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <Typography component="h1" variant="h4" sx={{mt:4 , fontWeight:'bold'}}>
                        <VpnKeyOffIcon />
                        Login
                    </Typography>
                    <TextField variant='filled' fullWidth id='just-some-text-field' label='Your Name' sx={{ color: 'orange' }} />
                    <TextField variant='filled' fullWidth id='just-some-password-field' label='Password' sx={{ color: 'orange' }} />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mb: 2 }}
                    >
                        Sign In
                    </Button>
                </Box>
            </Grid>
        </>
    );
}
