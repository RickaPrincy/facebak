import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { AccountCircle, PeopleAlt, Book, PhotoLibrary, Group, Message, ExitToApp } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function MenuLeft() {
    return (
        <Drawer variant="permanent" anchor="left" sx={{ width: 240 }}>
            <List>
                <ListItem button component={Link} to="/profil" className="text-white">
                    <ListItemIcon>
                        <AccountCircle />
                    </ListItemIcon>
                    <ListItemText primary="Profil" />
                </ListItem>
                <ListItem button component={Link} to="/amis" className="text-white">
                    <ListItemIcon>
                        <PeopleAlt />
                    </ListItemIcon>
                    <ListItemText primary="Amis" />
                </ListItem>
                <ListItem button component={Link} to="/pages" className="text-white">
                    <ListItemIcon>
                        <Book />
                    </ListItemIcon>
                    <ListItemText primary="Pages" />
                </ListItem>
                <ListItem button component={Link} to="/souvenirs" className="text-white">
                    <ListItemIcon>
                        <PhotoLibrary />
                    </ListItemIcon>
                    <ListItemText primary="Souvenirs" />
                </ListItem>
                <ListItem button component={Link} to="/groupes" className="text-white">
                    <ListItemIcon>
                        <Group />
                    </ListItemIcon>
                    <ListItemText primary="Groupes" />
                </ListItem>
                <ListItem button component={Link} to="/messagerie" className="text-white">
                    <ListItemIcon>
                        <Message />
                    </ListItemIcon>
                    <ListItemText primary="Messagerie" />
                </ListItem>
                <ListItem button className="text-white">
                    <ListItemIcon>
                        <ExitToApp />
                    </ListItemIcon>
                    <ListItemText primary="Déconnexion" />
                </ListItem>
            </List>
        </Drawer>
    );
}

export default MenuLeft;
