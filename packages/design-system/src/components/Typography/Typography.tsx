import React from 'react';
import { Typography as MuiTypography, type TypographyProps as MuiTypographyProps } from '@mui/material';

export interface TypographyProps extends MuiTypographyProps {
    // Aquí podemos agregar props personalizadas si es necesario en el futuro
}

/**
 * Componente Typography wrapper de MUI
 * Hereda todas las props de MUI Typography
 */
export const Typography: React.FC<TypographyProps> = (props) => {
    return <MuiTypography {...props} />;
};
