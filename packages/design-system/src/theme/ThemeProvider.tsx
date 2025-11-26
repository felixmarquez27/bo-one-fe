import React from 'react';
import { ThemeProvider as MuiThemeProvider, Theme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme } from './lightTheme';

export interface BOOneThemeProviderProps {
    children: React.ReactNode;
    theme?: Theme;
}

/**
 * Proveedor de tema para aplicaciones BO ONE.
 * Incluye CssBaseline para normalización de estilos.
 */
export const BOOneThemeProvider: React.FC<BOOneThemeProviderProps> = ({
    children,
    theme = lightTheme
}) => {
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </MuiThemeProvider>
    );
};
