import { Alert, Snackbar } from '@mui/material';
import React from 'react';

function Success({ text , open, onClose}) {

    return (
        <Snackbar open={open} autoHideDuration={3000} onClose={onClose}>
            {
                <Alert onClose={onClose} severity='sucess' sx={{ width: '100%' }}>
                    {text}
                </Alert>
            }
        </Snackbar>
    );
}

export default Success;