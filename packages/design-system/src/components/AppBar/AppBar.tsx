import React from 'react';
import { AppBar as MuiAppBar, type AppBarProps as MuiAppBarProps } from '@mui/material';

export interface AppBarProps extends MuiAppBarProps {
    // Aquí podemos agregar props personalizadas si es necesario en el futuro
}

/**
 * Componente AppBar wrapper de MUI
 * Hereda todas las props de MUI AppBar
 */
export const AppBar: React.FC<AppBarProps> = (props) => {
    return <MuiAppBar {...props} />;
};
