import React from 'react';
import { IconButton as MuiIconButton, type IconButtonProps as MuiIconButtonProps } from '@mui/material';

export interface IconButtonProps extends MuiIconButtonProps {
    // Aquí podemos agregar props personalizadas si es necesario en el futuro
}

/**
 * Componente IconButton wrapper de MUI
 * Hereda todas las props de MUI IconButton
 */
export const IconButton: React.FC<IconButtonProps> = (props) => {
    return <MuiIconButton {...props} />;
};
