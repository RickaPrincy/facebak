import React from 'react';
import { TextField, Grid, Button, Paper, Checkbox, Typography , Link } from '@mui/material';
import { Box } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import VpnKeyOffIcon from '@mui/icons-material/VpnKeyOff';

function SideTwo() {
    return (
        <>
            <Grid component={Paper} elevation={8} square sx={{ minWidth: 400, mt: 6 }}>
                <Box sx={{
                    py: 3,
                    px: 4,
                    gap: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <Typography component="h1" variant="h5" sx={{ mt: 2, fontWeight: 'bold' }}>
                        <VpnKeyOffIcon />
                        Login
                    </Typography>
                    <TextField size='small' fullWidth variant='outlined' id='just-some-text-field' label='Your Name' sx={{ color: 'orange' }} />
                    <TextField size='small' fullWidth variant='outlined' id='just-some-password-field' label='Password' sx={{ color: 'orange' }} />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mb: 2, color: 'white' }}
                    >
                        Login
                    </Button>
                    <Link href="#" variant="body2">
                        Forgot password?
                    </Link>
                    <Button
                        type="submit"
                        variant="contained"
                        color='secondary'
                        sx={{ mb: 2, color: 'white' }}
                    >
                        Sign in
                    </Button>
                </Box>
            </Grid>
        </>
    );
}

export default SideTwo;