import React from 'react';
import { InputAdornment as MuiInputAdornment, type InputAdornmentProps as MuiInputAdornmentProps } from '@mui/material';

export interface InputAdornmentProps extends MuiInputAdornmentProps {
    // Aquí podemos agregar props personalizadas si es necesario en el futuro
}

/**
 * Componente InputAdornment wrapper de MUI
 * Hereda todas las props de MUI InputAdornment
 */
export const InputAdornment: React.FC<InputAdornmentProps> = (props) => {
    return <MuiInputAdornment {...props} />;
};
