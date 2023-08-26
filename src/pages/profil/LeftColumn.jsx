import React from 'react';
import { Box, Button, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import {  Email, Edit, School, Home } from '@mui/icons-material';
import PhotoRecentsProfil from './PhotoRecentsProfil';


function LeftColumn() {
    return (
        <Box>
            <Typography variant="h5" gutterBottom>
                Bio
            </Typography>
            <Typography variant="body1" gutterBottom>
                HardWine dev
            </Typography>
            <Button
                variant="outlined"
                startIcon={<Edit />}
                sx={{ mb: 2 }}
            >
                Edit Bio
            </Button>
            <List sx={{ width: '100%', maxWidth: 360 }}>
                <ListItem disablePadding>
                    <ListItemIcon>
                        <School />
                    </ListItemIcon>
                    <ListItemText primary="Étude à Haute école informatique" />
                </ListItem>
                <ListItem disablePadding>
                    <ListItemIcon>
                        <Home />
                    </ListItemIcon>
                    <ListItemText primary="Habité à USA" />
                </ListItem>
                <ListItem disablePadding>
                    <ListItemIcon>
                        <Email />
                    </ListItemIcon>
                    <ListItemText primary="Email : utilisateur@example.com" />
                </ListItem>
            </List>
            <Button
                variant="outlined"
                startIcon={<Edit />}
                sx={{ mr: 2, mt: 2, mb: 3 }}
            >
                Edit Info
            </Button>
            <Button
                variant="outlined"
                sx={{ mt: 2, mb:3 }}
            >
                Add Infos
            </Button>
            <PhotoRecentsProfil/>
        </Box>
    );
}

export default LeftColumn;
