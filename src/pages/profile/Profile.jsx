import React from 'react';
import { Container, Card, Typography, Button, Grid, Box,Paper } from '@mui/material';
import PhotoRecentsProfil from './PhotoRecentsProfil';
import EditProfil from './EditProfil';

function Profile() {
    return (
        <Container className='overflow-y-scroll scroll-hidden'>
            <Grid container justifyContent="center" alignItems="center" sx={{ height: '90vh' }}>
                <Card sx={{ width: '100%' }}>
                    <Box sx={{ backgroundColor: '#424242', height: 200, display: 'flex', alignItems: 'flex-start' }}>
                        <Box sx={{ m: 2, display: 'flex', flexDirection: 'column', width: 150 }}>
                            <img
                                src="https://cdn.wealthygorilla.com/wp-content/uploads/2022/09/Marshmello-Net-Worth.jpg"
                                alt="Profile"
                                className="img-fluid img-thumbnail mt-3 mb-5 w-50"
                            />
                        </Box>
                        <Box sx={{ m: 2, marginTop: '130px', color:'white' }}>
                            <Typography variant="h5">Marshmello</Typography>
                            <Typography variant="body1">Antananarivo</Typography>
                        </Box>
                    </Box>

                    <Box sx={{ p: 2 }}>
                        <Grid container item xs={8} justifyContent="space-between" alignItems="center">
                            <Grid container
                                component={Paper}
                                elevation={3}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: 2,
                                    p: 1,
                                    m: 2,
                                    
                                }}>
                                <Grid sx={{borderRight:1 , paddingRight:2}}>
                                    <Typography variant="body1">
                                        <strong>20</strong> Photos
                                    </Typography>
                                </Grid>
                                <Grid sx={{borderRight:1 , paddingRight:2}}>
                                    <Typography variant="body1">
                                        <strong>50</strong> Followers
                                    </Typography>
                                </Grid>
                                <Grid>
                                    <Typography variant="body1">
                                        <strong>25</strong> Following
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Button variant="contained" size="medium" sx={{ background: '#64b5f6' }}>
                            Modifier Profil
                        </Button>
                    </Box>
                    <EditProfil/>
                    <Box sx={{ p: 2, marginTop: 8 }}>
                        <Typography variant="h4" sx={{display:'flex', justifyContent:'center', borderBottom:1, m:2}}>Biographie</Typography>
                        <Box sx={{ backgroundColor: '#b0bec5', p: 2, textAlign: 'center' }}>
                            <Typography variant="body1">Web Developer</Typography>
                            <Typography variant="body1">HardWinne Group</Typography>
                            <Typography variant="body1">2023-08-16</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ p: 2, marginTop: 4 }}>
                        <Typography variant="h4">Recent Photos</Typography>
                        <PhotoRecentsProfil />
                    </Box>
                </Card>
            </Grid>
        </Container>
    );
};

export default Profile;