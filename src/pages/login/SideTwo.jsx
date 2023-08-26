import React from 'react';
import { TextField, Grid, Button, Paper, Checkbox, Typography, Link } from '@mui/material';
import { Box } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import VpnKeyOffIcon from '@mui/icons-material/VpnKeyOff';
import { usePopup } from '../../hooks/usePopup';
import Signup from './Signup';


export default function SideTwo() {
    const [popup, changePopup] = usePopup(false);
    return (
        <>
            {popup && (
                <div className="popup">
                    <div className="popup-content">
                        <Signup />
                    </div>
                </div>
            )}
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
                        <Typography component="h1" variant="h5" sx={{ mt: 2, fontWeight: 'bold' }}>
                            <VpnKeyOffIcon />
                            Sign up
                        </Typography>
                        <TextField size='small' fullWidth variant='outlined' id='just-some-text-field' label='Your Name' sx={{ color: 'orange' }} />
                        <TextField size='small' type='password' fullWidth variant='outlined' id='just-some-password-field' label='Password' sx={{ color: 'orange' }} />
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
                            Sign up
                        </Button>
                        <Link href="#" variant="body2">
                            Forgot password?
                        </Link>
                        <Button
                            type="submit"
                            variant="contained"
                            color='secondary'
                            sx={{ mb: 2, color: 'white' }}
                            onClick={changePopup}
                        >
                            Sign in
                        </Button>
                    </Box>
                </Grid>
            </div>
        </>
    );
}