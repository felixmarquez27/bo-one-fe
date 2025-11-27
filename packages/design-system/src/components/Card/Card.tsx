import React from 'react';
import { Card as MuiCard, type CardProps as MuiCardProps } from '@mui/material';

export interface CardProps extends MuiCardProps {
    // Aquí podemos agregar props personalizadas si es necesario en el futuro
}

/**
 * Componente Card wrapper de MUI
 * Hereda todas las props de MUI Card
 */
export const Card: React.FC<CardProps> = (props) => {
    return <MuiCard {...props} />;
};
