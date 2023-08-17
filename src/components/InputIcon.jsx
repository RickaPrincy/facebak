import { 
    FormControl, 
    Input, 
    InputAdornment 
} from '@mui/material';

import React, { useState } from 'react';

function InputIcon({ onSubmit=()=>{ }, sx = {}, icon, onChange, placeholder =''}) {
    const [word, setWord] = useState('');

    const style = 
        {
            backgroundColor: 'rgba(255,255,255,.1)',
            borderRadius: 15,
            paddingY: 0.7,
            color: 'rgba(255,255,255,.8)',
            paddingLeft: 3,
            paddingBottom: 0,
            ...sx
        };
    
    const handlerChange = (event)=>{
        setWord(event.target.value);
        onChange && onChange(event.target.value);
    };

    const handlerSubmit = (event)=>{
        event.preventDefault();
        onSubmit(word);
    };

    return (
        <FormControl component={'form'} onSubmit={handlerSubmit}>
            <Input
                className='no-border field-rounded'
                size='small'
                type='text'
                value={word}
                onChange={handlerChange}
                placeholder={placeholder}
                endAdornment={
                    <InputAdornment position='start'>
                        { icon }     
                    </InputAdornment>
                }
                sx={style} 
            />
        </FormControl>
    );
}

export default InputIcon;