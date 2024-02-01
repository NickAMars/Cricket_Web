import React from 'react'
import { createRoot } from 'react-dom/client'
import "./global.css";
import { App } from './app';
import { theme } from './theme';
import { ThemeProvider } from '@mui/material/styles';

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);