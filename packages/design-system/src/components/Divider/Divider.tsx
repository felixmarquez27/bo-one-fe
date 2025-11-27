import React from 'react';
import { Divider as MuiDivider, type DividerProps as MuiDividerProps } from '@mui/material';

export interface DividerProps extends MuiDividerProps {
    // Aquí podemos agregar props personalizadas si es necesario en el futuro
}

/**
 * Componente Divider wrapper de MUI
 * Hereda todas las props de MUI Divider
 */
export const Divider: React.FC<DividerProps> = (props) => {
    return <MuiDivider {...props} />;
};
