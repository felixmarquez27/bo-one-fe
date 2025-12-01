import React from 'react';
import { Toolbar as MuiToolbar, type ToolbarProps as MuiToolbarProps } from '@mui/material';

export interface ToolbarProps extends MuiToolbarProps {
    // Aquí podemos agregar props personalizadas si es necesario en el futuro
}

/**
 * Componente Toolbar wrapper de MUI
 * Hereda todas las props de MUI Toolbar
 */
export const Toolbar: React.FC<ToolbarProps> = (props) => {
    return <MuiToolbar {...props} />;
};
