import React from 'react';
import { FormControlLabel as MuiFormControlLabel, type FormControlLabelProps as MuiFormControlLabelProps } from '@mui/material';

export interface FormControlLabelProps extends MuiFormControlLabelProps {
    // Aquí podemos agregar props personalizadas si es necesario en el futuro
}

/**
 * Componente FormControlLabel wrapper de MUI
 * Hereda todas las props de MUI FormControlLabel
 */
export const FormControlLabel: React.FC<FormControlLabelProps> = (props) => {
    return <MuiFormControlLabel {...props} />;
};
