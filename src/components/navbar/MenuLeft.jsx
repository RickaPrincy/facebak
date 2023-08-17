import React from 'react';
import { 
    Drawer,
    List,
    ListItemIcon,
    ListItemText,
    ListItemButton
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
        <Drawer variant='permanent' anchor='left'>
            <List>
                <ListItemButton component={Link} to='/profil'>
                    <ListItemIcon>
                        <AccountCircle />
                    </ListItemIcon>
                    <ListItemText primary='Profil'/>
                </ListItemButton>
                <ListItemButton component={Link} to='/amis'>
                    <ListItemIcon>
                        <PeopleAlt />
                    </ListItemIcon>
                    <ListItemText primary='Amis'/>
                </ListItemButton>
                <ListItemButton component={Link} to='/pages'>
                    <ListItemIcon>
                        <Book />
                    </ListItemIcon>
                    <ListItemText primary='Pages'/>
                </ListItemButton>
                <ListItemButton component={Link} to='/souvenirs'>
                    <ListItemIcon>
                        <PhotoLibrary />
                    </ListItemIcon>
                    <ListItemText primary='Souvenirs'/>
                </ListItemButton>
                <ListItemButton component={Link} to='/groupes'>
                    <ListItemIcon>
                        <Group />
                    </ListItemIcon>
                    <ListItemText primary='Groupes'/>
                </ListItemButton>
                <ListItemButton component={Link} to='/messagerie'>
                    <ListItemIcon>
                        <Message />
                    </ListItemIcon>
                    <ListItemText primary='Messagerie'/>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <ExitToApp />
                    </ListItemIcon>
                    <ListItemText primary='Déconnexion'/>
                </ListItemButton>
            </List>
        </Drawer>
    );
}

export default MenuLeft;
