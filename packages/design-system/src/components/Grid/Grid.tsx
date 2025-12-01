import React from 'react';
import { Grid as MuiGrid, type GridProps as MuiGridProps } from '@mui/material';

export interface GridProps extends MuiGridProps {
    // Aquí podemos agregar props personalizadas si es necesario en el futuro
}

/**
 * Componente Grid wrapper de MUI
 * Hereda todas las props de MUI Grid
 */
export const Grid: React.FC<GridProps> = (props) => {
    return <MuiGrid {...props} />;
};
