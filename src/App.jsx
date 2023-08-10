import React from 'react';
import { Test, Home } from './pages/home';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import { orange, green } from '@mui/material/colors';

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
                <Test />
                <Home />
            </ThemeProvider >
        </>
    );
}

export default App;
