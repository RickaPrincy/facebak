import { Alert, Snackbar } from '@mui/material';
import React from 'react';

function Error({ error, onClose }) {
    const open = !error ? false : true;
    
    if(error) 
        console.log(error);
    
    return (
        <Snackbar 
            open={open} 
            autoHideDuration={3000} 
            onClose={onClose}
            anchorOrigin={{horizontal:'center',vertical:'top'}}
        >
            {
                error &&
                <Alert variant='filled' onClose={onClose} severity='error' sx={{ width: '100%' }}>
                    {
                        error.code === 'ERR_BAD_REQUEST'
                            ? error.response.data.message
                            : 'One error occurred'
                    }
                </Alert>
            }
        </Snackbar>
    );
}

export default Error;