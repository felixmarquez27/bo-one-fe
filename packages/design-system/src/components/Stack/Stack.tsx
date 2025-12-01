import React from 'react';
import { Stack as MuiStack, type StackProps as MuiStackProps } from '@mui/material';

export interface StackProps extends MuiStackProps {
    // Aquí podemos agregar props personalizadas si es necesario en el futuro
}

/**
 * Componente Stack wrapper de MUI
 * Hereda todas las props de MUI Stack
 */
export const Stack: React.FC<StackProps> = (props) => {
    return <MuiStack {...props} />;
};
