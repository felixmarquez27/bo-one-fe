import React from 'react';
import { Paper as MuiPaper, type PaperProps as MuiPaperProps } from '@mui/material';

export interface PaperProps extends MuiPaperProps {
    // Aquí podemos agregar props personalizadas si es necesario en el futuro
}

/**
 * Componente Paper wrapper de MUI
 * Hereda todas las props de MUI Paper
 */
export const Paper: React.FC<PaperProps> = (props) => {
    return <MuiPaper {...props} />;
};
