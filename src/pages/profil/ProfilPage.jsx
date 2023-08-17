import React from 'react';
import { Container, Card, Typography, Button, Grid, Box } from '@mui/material';
import PhotoRecentsProfil from './PhotoRecentsProfil';

function ProfilPage(){
    return (
        <Container>
            <Grid container justifyContent="center" alignItems="center" sx={{ height: '90vh' }}>
                <Card sx={{ width: '100%' }}>
                    <Box sx={{ backgroundColor: '#424242', height: 200, display: 'flex', alignItems: 'flex-start' }}>
                        <Box sx={{ m: 2, display: 'flex', flexDirection: 'column', width: 150 }}>
                            <img
                                src="https://cdn.wealthygorilla.com/wp-content/uploads/2022/09/Marshmello-Net-Worth.jpg"
                                alt="Profile"
                                className="img-fluid img-thumbnail mt-3 mb-5 w-50"
                            />
                            <Button variant="contained" size="medium"  sx={{ background: '#64b5f6'}}>
                            Modifier Profil
                            </Button>
                        </Box>
                        <Box sx={{ m: 2, marginTop: '130px' }}>
                            <Typography variant="h5">Marshmello</Typography>
                            <Typography variant="body1">Antananarivo</Typography>
                        </Box>
                    </Box>

                    <Box sx={{ p: 2 }}>
                        <Grid container justifyContent="space-between" alignItems="center">
                            <Grid item xs={8}>
                                <Grid container spacing={2} justifyContent="center">
                                    <Grid item>
                                        <Typography variant="body1">
                                            <strong>253</strong> Photos
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="body1">
                                            <strong>1026</strong> Followers
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="body1">
                                            <strong>478</strong> Following
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{ p: 2, marginTop: 8 }}>
                        <Typography variant="h4">Biographie</Typography>
                        <Box sx={{ backgroundColor: '#b0bec5', p: 2, textAlign: 'center' }}>
                            <Typography variant="body1">Web Developer</Typography>
                            <Typography variant="body1">HardWinne Group</Typography>
                            <Typography variant="body1">2023-08-16</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ p: 2, marginTop: 4 }}>
                        <Typography variant="h4">Recent Photos</Typography>
                        <PhotoRecentsProfil/>
                    </Box>
                </Card>
            </Grid>
        </Container>
    );
};

export default ProfilPage;
