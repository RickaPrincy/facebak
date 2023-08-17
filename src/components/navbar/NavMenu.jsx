import React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, InputBase, Grid, Popover, useTheme } from '@mui/material';
import { Search, ChatOutlined, HomeOutlined, OndemandVideoOutlined, CollectionsBookmarkOutlined, PeopleAltOutlined, NotificationsOutlined, AccountCircleOutlined } from '@mui/icons-material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import useMediaQuery from '@mui/material/useMediaQuery';

function NavMenu() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [index, setIndex] = React.useState(null);

    const handlePopoverOpen = (event, index) => {
        setAnchorEl(event.currentTarget);
        setIndex(index);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
        setIndex(null);
    };

    const open = Boolean(anchorEl);
    const icons = [
        {
            icon: <HomeOutlined sx={{ fontSize: '32px' }} />,
            meaning: 'Accueil',
        },
        {
            icon: <OndemandVideoOutlined sx={{ fontSize: '32px' }} />,
            meaning: 'Vidéos',
        },
        {
            icon: <CollectionsBookmarkOutlined sx={{ fontSize: '32px' }} />,
            meaning: 'Pages',
        },
        {
            icon: <PeopleAltOutlined sx={{ fontSize: '32px' }} />,
            meaning: 'Amis',
        },
    ];

    return (
        <Grid container spacing={3}>
            <AppBar position="fixed" sx={{ background: '#64b5f6', width: '87%'}}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h6" noWrap component="div">
                        F
                    </Typography>
                    {!isMobile && (
                        <Box sx={{ display: 'flex', justifyContent: 'center', border: '1px solid black', borderRadius: '20px', mr: '1%' }}>
                            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                <Search />
                            </IconButton>
                            <InputBase
                                placeholder="Rechercher..."
                            />
                        </Box>
                    )}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: isMobile ? '50%' : '40%', mr: isMobile ? '0' : '10%' }}>
                        {icons.map((item, index) => (
                            <IconButton
                                key={index}
                                size="large"
                                color="black"
                                onMouseEnter={(event) => handlePopoverOpen(event, index)}
                                onMouseLeave={handlePopoverClose}
                            >
                                {item.icon}
                            </IconButton>
                        ))}
                    </Box>
                    {!isMobile && (
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <BottomNavigation sx={{ width: 30, background: '#64b5f6' }} >
                                <BottomNavigationAction
                                    label="Messagerie"
                                    value="messagerie"
                                    icon={<ChatOutlined />}
                                />
                            </BottomNavigation>
                            <BottomNavigation sx={{ width: 100, background: '#64b5f6' }} >
                                <BottomNavigationAction
                                    label="Notifications"
                                    value="notifications"
                                    icon={<NotificationsOutlined />}
                                />
                            </BottomNavigation>
                            <BottomNavigation sx={{ width: 100, background: '#64b5f6' }} >
                                <BottomNavigationAction
                                    label="Profil"
                                    value="profil"
                                    icon={<AccountCircleOutlined sx={{ fontSize: '30px' }} />}
                                />
                            </BottomNavigation>
                        </Box>
                    )}
                </Toolbar>
            </AppBar>
            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handlePopoverClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Typography sx={{ p: 2 }}>{icons[index]?.meaning}</Typography>
            </Popover>
        </Grid>
    );
}

export default NavMenu;
