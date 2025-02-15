import React, { useContext } from 'react';
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
import { ConnectionContext } from '../../context/auth';

function MenuLeft() {
    const connection = useContext(ConnectionContext);

    return (
        <List className='bg-white min-w-[250px] h-[calc(100vh - 65px)] md:block mm:hidden'>
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
            <ListItemButton onClick={connection.logout}>
                <ListItemIcon>
                    <ExitToApp />
                </ListItemIcon>
                <ListItemText primary='Déconnexion' />
            </ListItemButton>
        </List>
    );
}

export default MenuLeft;
