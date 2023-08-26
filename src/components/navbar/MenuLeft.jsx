import React from 'react';
import {
    List,
    ListItemIcon,
    ListItemText,
    ListItemButton,
} from '@mui/material';

import {
    AccountCircle,
    PeopleAlt,
    Book,
    PhotoLibrary,
    Group,
    Message,
    ExitToApp
} from '@mui/icons-material';

import { Link } from 'react-router-dom';

function MenuLeft() {
    return (
        <List className='h-full bg-white w-[250px] md:block mm:hidden'>
            <ListItemButton component={Link} to='/profile'>
                <ListItemIcon>
                    <AccountCircle />
                </ListItemIcon>
                <ListItemText primary='Profile' />
            </ListItemButton>
            <ListItemButton component={Link} to='/amis'>
                <ListItemIcon>
                    <PeopleAlt />
                </ListItemIcon>
                <ListItemText primary='Amis' />
            </ListItemButton>
            <ListItemButton component={Link} to='/pages'>
                <ListItemIcon>
                    <Book />
                </ListItemIcon>
                <ListItemText primary='Pages' />
            </ListItemButton>
            <ListItemButton component={Link} to='/souvenirs'>
                <ListItemIcon>
                    <PhotoLibrary />
                </ListItemIcon>
                <ListItemText primary='Souvenirs' />
            </ListItemButton>
            <ListItemButton component={Link} to='/groupes'>
                <ListItemIcon>
                    <Group />
                </ListItemIcon>
                <ListItemText primary='Groupes' />
            </ListItemButton>
            <ListItemButton component={Link} to='/messagerie'>
                <ListItemIcon>
                    <Message />
                </ListItemIcon>
                <ListItemText primary='Messagerie' />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <ExitToApp />
                </ListItemIcon>
                <ListItemText primary='Déconnexion' />
            </ListItemButton>
        </List>
    );
}

export default MenuLeft;
