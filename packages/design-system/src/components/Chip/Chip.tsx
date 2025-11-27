import React from 'react';
import { Chip as MuiChip, type ChipProps as MuiChipProps } from '@mui/material';

export interface ChipProps extends MuiChipProps {
    // Aquí podemos agregar props personalizadas si es necesario en el futuro
}

/**
 * Componente Chip wrapper de MUI
 * Hereda todas las props de MUI Chip
 */
export const Chip: React.FC<ChipProps> = (props) => {
    return <MuiChip {...props} />;
};
