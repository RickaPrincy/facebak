import {
    Comment,
    Home,
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

import React, { useContext } from 'react';
import InputIcon from '../InputIcon';
import MenuLink from './MenuLink';
import { Link } from 'react-router-dom';
import ResponsiveMenu from './ResponsiveMenu';
import { ConnectionContext } from '../../context/auth';

function NavMenu() {
    const connection = useContext(ConnectionContext);

    const menuLinks = [
        {
            value: 0,
            to: '/home',
            icon: <Home className='md:text-[rgba(255,255,255,.8)]' />,
            text: 'Home'
        },
        {
            value: 1,
            to: '/amis',
            icon: <PersonAdd className='md:text-[rgba(255,255,255,.8)]' />,
            text: 'Amis'
        },
        {
            value: 5,
            to: '/message',
            icon: <Comment className='md:text-[rgba(255,255,255,.8)]' />,
            text: 'Messages'
        },
        {
            value: 8,
            to: '/notification',
            icon: <Notifications className='md:text-[rgba(255,255,255,.8)]' />,
            text: 'Notifications'
        }
    ];

    const handlerFindSomething = (values) => {
        console.log(values);
    };

    return (
        <>
            {
                connection.isConnected() &&
                <AppBar position='sticky' sx={{ backgroundColor: '#34465d', width: '100% !important'}}>
                    <Toolbar className='flex justify-between w-full'>
                        <Box component='div' className='flex items-center gap-5' >
                            <Typography sx={{ fontSize: 20, fontWeight: 'bold' }} variant='h1'>
                                <Link to={'/'}>
                                    Facebak
                                </Link>
                            </Typography>
                            <InputIcon
                                className={'force-hidden'}
                                icon={<Search sx={{ color: 'rgba(255,255,255,.7)', paddingBottom: 0.4 }} />}
                                onSubmit={handlerFindSomething}
                                placeholder='Find Something'
                            />
                        </Box>
                        <div className='mm:hidden md:flex items-center gap-5' >
                            <Box component='div' className='flex me-5 items-center gap-5' >
                                {
                                    menuLinks.map((el, index) => <MenuLink key={index} to={el.to} icon={el.icon} value={el.value} />)
                                }
                            </Box>
                            <h1 className={'text-[rgba(255,255,255,.9)] text-[17px] mm:hidden md:block'}>
                                {connection.user.username}
                            </h1>
                            <Link to={'/home/profile'}>
                                <img
                                    src='temp_user.jpg'
                                    alt='Your Profile'
                                    className='w-[50px] rounded-[50%] border-[0.5px] border-[rgba(255,255,255,.7)] h-[50px] cursor-pointer'
                                />
                            </Link>
                        </div>
                        <ResponsiveMenu listMenu={menuLinks} />
                    </Toolbar>
                </AppBar>
            }
        </>
    );
}

export default NavMenu;