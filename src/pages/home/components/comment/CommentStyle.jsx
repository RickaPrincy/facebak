import React from 'react';
import { Box, Grid } from '@mui/material';
export default function CommentStyle() {
    return (
        <div>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img src='temp_user.jpg' alt='Some people photo' className='profil_img' />
                <Grid sx={{ display: 'flex', alignItems: 'center', p: 1, m: 2, background: 'rgb(230, 230, 230)', borderRadius: '15%' }}>
                    <div className='flex flex-col'>
                        <h2 className='font-bold text-[15px]'>Phill idnakil</h2>
                        <p className='text-[15px]'>salut beauté</p>
                    </div>
                </Grid>
            </Box>
        </div>
    );
}

