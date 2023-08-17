import { Badge, IconButton } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function MenuLink({ icon, value, to }) {
    return (
        <Link to={to}>
            <IconButton>
                <Badge badgeContent={value} color='error'>
                    {icon}
                </Badge>
            </IconButton>
        </Link>
    );
}

export default MenuLink;