import React from 'react';
import { Avatar, Paper, Box, Typography } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';

export default function SideOne() {
    return (
        <>
            <Box sx={{ paddingLeft: 8, borderRight: 1, paddingRight: 15, borderColor: 'GrayText' }}>
                <Typography color="primary" component="h1" variant="h4" sx={{ fontWeight: 'bold' }}>
                    Facebak
                </Typography>
                <Typography component="h1" variant="h5" >
                    Recent Login
                </Typography>
                <Typography sx={{ pb: 5, color: 'GrayText' }} component="h1" variant="body1">
                    click your picture or on add account
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 4
                    }}
                >
                    <Box>
                        <ClearIcon size="large" color="primary" sx={{ background: 'rgb(255, 255, 255)', borderRadius: 100, cursor: 'pointer' }} />
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Avatar sx={{ mt: -2, p: 4 }} alt="Remy sharp" />
                            <Typography component="h5" sx={{ mt: 2 }}>
                                Adam James
                            </Typography>
                        </Box>
                    </Box>
                    <Box>
                        <ClearIcon size="large" color="primary" sx={{ background: 'rgb(255, 255, 255)', borderRadius: 100, cursor: 'pointer' }} />
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Avatar sx={{ mt: -2, p: 4 }} alt="Emma Watson" />
                            <Typography component="h5" sx={{ mt: 2 }}>
                                Emma Watson
                            </Typography>
                        </Box>
                    </Box>
                    <Paper elevation={6} variant="outlined" square sx={{ p: 4 }}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}
                        >
                            <AddIcon color="primary" sx={{ fontSize: 50, cursor: 'pointer' }} />
                            <p>Add Account</p>
                        </Box>
                    </Paper>
                </Box>
            </Box>
        </>
    );
}
