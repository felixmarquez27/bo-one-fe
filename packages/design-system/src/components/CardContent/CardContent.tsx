import React from 'react';
import { CardContent as MuiCardContent, type CardContentProps as MuiCardContentProps } from '@mui/material';

export interface CardContentProps extends MuiCardContentProps {
    // Aquí podemos agregar props personalizadas si es necesario en el futuro
}

/**
 * Componente CardContent wrapper de MUI
 * Hereda todas las props de MUI CardContent
 */
export const CardContent: React.FC<CardContentProps> = (props) => {
    return <MuiCardContent {...props} />;
};
