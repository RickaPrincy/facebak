import React from 'react';
import { Box, Container, Button, Divider, Link, Grid  } from '@mui/material';
import { LocationOn, Email } from '@mui/icons-material';
import { useLocation, NavLink } from 'react-router-dom';
import LeftColumn from './LeftColumn';
import CreatePost from '../home/components/post/PostList';


function ProfilPage() {
    const location = useLocation();
    const { pathname } = location;

    const basePath = pathname.replace(/\/[^/]+$/, '');
    return (
        <Container>
            <Box
                sx={{
                    width: '100%',
                    height: '300px',
                    backgroundColor: '#1877f2',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '20px',
                }}
            >
                <Box
                    sx={{
                        backgroundImage: 'url(https://blog.adobe.com/en/publish/2022/11/10/media_1da1a6114eaa72b6bd0961bf3b72d0bc6886cfff2.jpeg?width=750&format=jpeg&optimize=medium)',
                        backgroundSize: 'cover',
                        width: '100%',
                        height: '300px',
                        borderRadius: '8px',
                    }}
                />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    gap: '20px',
                    marginTop: '20px',
                    justifyContent: 'space-between'

                }}
            >
                <Box
                    sx={{
                        width: '150px',
                        height: '150px',
                        borderRadius: '50%',
                        border: '1px solid black',
                        backgroundImage: 'url(data:image/jpeg;base64,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)',
                        backgroundSize: 'cover',
                    }}
                />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                        flex: 1,
                        marginTop: '10px'
                        
                    }}
                >
                    <h2>
                        <LocationOn sx={{ fontSize: 20, marginRight: '5px' }} />
                        Marshmello
                    </h2>
                    <p>
                        <LocationOn sx={{ fontSize: 20, marginRight: '5px' }} />
                       USA
                    </p>
                    <p>
                        <Email sx={{ fontSize: 20, marginRight: '5px' }} />
                        marshmello@gmail.com
                    </p>
                </Box>
                <Button
                    variant="outlined" href="#outlined-buttons"
                    sx={{
                        height: '50px',
                        backgroundColor: '#1877f2',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: '#1565c0',
                        },
                    }}
                >
                    Edit Profile
                </Button>
            </Box>
            <Divider sx={{ my: 2 }} /> 
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    gap: '10px',
                    alignItems: 'center',
                    py: 2,
                    
                }}
            >
                <Link
                    component={NavLink}
                    to={`${basePath}/publications`}
                    underline="hover"
                    sx={{
                        fontWeight: 'bold',
                        color: 'inherit',
                    }}
                >
                    Publications
                </Link>
                <Link
                    component={NavLink}
                    to={`${basePath}/about`}
                    underline="hover"
                    sx={{
                        fontWeight: 'bold',
                        color: 'inherit',
                    }}
                >
                    À propos
                </Link>
                <Link
                    component={NavLink}
                    to={`${basePath}/amis`}
                    underline="hover"
                    sx={{
                        fontWeight: 'bold',
                        color: 'inherit',
                    }}
                >
                    Ami(es)
                </Link>
                <Link
                    component={NavLink}
                    to={`${basePath}/photos`}
                    underline="hover"
                    sx={{
                        fontWeight: 'bold',
                        color: 'inherit',
                    }}
                >
                    Photos
                </Link>
                <Link
                    component={NavLink}
                    to={`${basePath}/videos`}
                    underline="hover"
                    sx={{
                        fontWeight: 'bold',
                        color: 'inherit',
                    }}
                >
                    Vidéos
                </Link>
            </Box>
            <Divider sx={{ my: 2 }} /> 
            <Grid container spacing={2}>
                <Grid item xs={8}> 
                    <LeftColumn />
                </Grid>
                <Grid item xs={8}> 
                    <CreatePost/>
                </Grid>
            </Grid>
        </Container>

    );
}

export default ProfilPage;
