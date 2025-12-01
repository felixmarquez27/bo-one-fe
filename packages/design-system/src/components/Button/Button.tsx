import React from 'react';
import { Button as MuiButton, type ButtonProps as MuiButtonProps } from '@mui/material';

export interface ButtonProps extends MuiButtonProps {
    // Aquí podemos agregar props personalizadas si es necesario en el futuro
}

/**
 * Componente Button wrapper de MUI
 * Hereda todas las props de MUI Button
 */
export const Button: React.FC<ButtonProps> = (props) => {
    return <MuiButton {...props} />;
};
