import React from 'react';
import { Box as MuiBox, type BoxProps as MuiBoxProps } from '@mui/material';

export interface BoxProps extends MuiBoxProps {
    // Aquí podemos agregar props personalizadas si es necesario en el futuro
}

/**
 * Componente Box wrapper de MUI
 * Hereda todas las props de MUI Box
 */
export const Box: React.FC<BoxProps> = (props) => {
    return <MuiBox {...props} />;
};
