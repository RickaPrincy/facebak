import React from 'react';
import { Link } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';

function ProfileMenu() {
    return (
        <BottomNavigation showLabels>
            <BottomNavigationAction
                label="Publications"
                value="publications"
                component={Link}
                to="/profile/publications"
            />
            <BottomNavigationAction
                label="À propos"
                value="about"
                component={Link}
                to="/profile/about"
            />
            <BottomNavigationAction
                label="Amis"
                value="friends"
                component={Link}
                to="/profile/friends"
            />
            <BottomNavigationAction
                label="Photos"
                value="photos"
                component={Link}
                to="/profile/photos"
            />
            <BottomNavigationAction
                label="Vidéos"
                value="videos"
                component={Link}
                to="/profile/videos"
            />
        </BottomNavigation>
    );
}
export default ProfileMenu;