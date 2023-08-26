import React from 'react';
import { usePopup } from '../../hooks/usePopup';
import { Button } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import Signup from './SideTwo';

export default function PopExample() {
    const [popup, changePopup] = usePopup(false);
    return (
        <div>
            <Button onClick={changePopup}>Ouvrir le pop-up</Button>

            {popup && (
                <div className="popup">
                    <div className="popup-content">
                    <ClearIcon 
                        size="large" 
                        color="primary" 
                        sx={{ background: 'rgb(255, 255, 255)', borderRadius: 100, cursor: 'pointer' }} 
                        onClick={changePopup} />
                        <Signup />
                    </div>
                </div>
            )}
        </div>
    );
}
