import React from 'react';
import { TextField as MuiTextField, type TextFieldProps as MuiTextFieldProps } from '@mui/material';

export type TextFieldProps = MuiTextFieldProps & {
    // Aquí podemos agregar props personalizadas si es necesario en el futuro
};

/**
 * Componente TextField wrapper de MUI
 * Hereda todas las props de MUI TextField
 */
export const TextField: React.FC<TextFieldProps> = (props) => {
    return <MuiTextField {...props} />;
};
