import React from 'react';
import { Checkbox as MuiCheckbox, type CheckboxProps as MuiCheckboxProps } from '@mui/material';

export interface CheckboxProps extends MuiCheckboxProps {
    // Aquí podemos agregar props personalizadas si es necesario en el futuro
}

/**
 * Componente Checkbox wrapper de MUI
 * Hereda todas las props de MUI Checkbox
 */
export const Checkbox: React.FC<CheckboxProps> = (props) => {
    return <MuiCheckbox {...props} />;
};
