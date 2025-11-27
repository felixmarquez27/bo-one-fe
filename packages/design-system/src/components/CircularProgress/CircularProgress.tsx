import React from 'react';
import { CircularProgress as MuiCircularProgress, type CircularProgressProps as MuiCircularProgressProps } from '@mui/material';

export interface CircularProgressProps extends MuiCircularProgressProps {
    // Aquí podemos agregar props personalizadas si es necesario en el futuro
}

/**
 * Componente CircularProgress wrapper de MUI
 * Hereda todas las props de MUI CircularProgress
 */
export const CircularProgress: React.FC<CircularProgressProps> = (props) => {
    return <MuiCircularProgress {...props} />;
};
