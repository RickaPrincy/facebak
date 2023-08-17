import {
    Comment,
    Notifications,
    PersonAdd,
    Search
} from '@mui/icons-material';

import {
    AppBar,
    Toolbar,
    Typography,
    Box
} from '@mui/material';

import React from 'react';
import InputIcon from '../InputIcon';
import MenuLink from './MenuLink';
import { Link } from 'react-router-dom';

function NavMenu() {

    const menuLinks = [
        { value: 5, to: '/message', icon: <Comment sx={{ color: 'rgba(255,255,255,.8)' }} /> },
        { value: 8, to: '/notification', icon: <Notifications sx={{ color: 'rgba(255,255,255,.8)' }} /> },
        { value: 1, to: '/amis', icon: <PersonAdd sx={{ color: 'rgba(255,255,255,.8)' }} /> }
    ];

    const handlerFindSomething = (values) => {
        console.log(values);
    };

    return (
        <AppBar position='sticky' sx={{ backgroundColor: '#34465d' }}>
            <Toolbar className='flex justify-between w-full'>
                <Box component='div' className='flex items-center gap-5' >
                    <Typography sx={{ fontSize: 20, fontWeight: 'bold' }} variant='h1'>
                        <Link to={'/'}>
                            Facebak
                        </Link>
                    </Typography>
                    <InputIcon
                        icon={<Search sx={{ color: 'rgba(255,255,255,.7)', paddingBottom: 0.4 }} />}
                        onSubmit={handlerFindSomething}
                        placeholder='Find Something'
                    />
                </Box>
                <Box component='div' className='flex items-center gap-5' >
                    <Box component='div' className='flex me-5 items-center gap-5' >
                        {
                            menuLinks.map((el, index) => <MenuLink key={index} to={el.to} icon={el.icon} value={el.value} />)
                        }
                    </Box>
                    <Typography color={'rgba(255,255,255,.9) text-[17px]'}>John Doe</Typography>
                    <Link to={'/profile'}>
                        <img
                            src="temp_user.jpg"
                            alt="Your Profile"
                            className='w-[50px] rounded-[50%] border-[0.5px] border-[rgba(255,255,255,.7)] h-[50px] cursor-pointer'
                        />
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default NavMenu;