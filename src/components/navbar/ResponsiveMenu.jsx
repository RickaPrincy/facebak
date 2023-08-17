import React from 'react';
import { usePopup } from '../../hooks';
import {
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    SwipeableDrawer
} from '@mui/material';

import { Menu } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function ResponsiveMenu({ listMenu }) {
    const [showBar, setShowBar] = usePopup();

    return (
        <div className='mm:block md:hidden'>
            <IconButton onClick={setShowBar}>
                <Menu sx={{ color: 'rgba(255,255,225,.8)' }} />
            </IconButton>
            <SwipeableDrawer
                anchor='right'
                open={showBar}
                onOpen={setShowBar}
                onClose={setShowBar}
                sx={{ width: 'fit-content' }}
            >
                <List>
                    {listMenu.map((el, index) =>
                        <Link key={index} to={el.to}>
                            <ListItem onClick={setShowBar}>
                                <ListItemButton>
                                    <ListItemIcon>{el.icon}</ListItemIcon>
                                    <ListItemText>{el.text}</ListItemText>
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    )}
                </List>
            </SwipeableDrawer>
        </div>
    );
}

export default ResponsiveMenu;