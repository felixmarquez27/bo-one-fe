import React from 'react';
import { Alert as MuiAlert, type AlertProps as MuiAlertProps } from '@mui/material';

export interface AlertProps extends MuiAlertProps {
    // Aquí podemos agregar props personalizadas si es necesario en el futuro
}

/**
 * Componente Alert wrapper de MUI
 * Hereda todas las props de MUI Alert
 */
export const Alert: React.FC<AlertProps> = (props) => {
    return <MuiAlert {...props} />;
};
