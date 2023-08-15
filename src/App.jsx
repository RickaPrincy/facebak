import React from 'react';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import { orange, green } from '@mui/material/colors';
import { Login } from './pages/Login/Login';

const theme = createTheme({
    palette: {
        primary: {
            main: orange[500],
        },
        secondary: {
            main: green[500]
        },
    },
});

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Login />
            </ThemeProvider >
        </>
    );
}

export default App;
