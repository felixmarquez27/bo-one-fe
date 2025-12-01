import React from 'react';
import { DialogContent as MuiDialogContent, type DialogContentProps as MuiDialogContentProps } from '@mui/material';

export interface DialogContentProps extends MuiDialogContentProps {
    // Aquí podemos agregar props personalizadas si es necesario en el futuro
}

/**
 * Componente DialogContent wrapper de MUI
 * Hereda todas las props de MUI DialogContent
 */
export const DialogContent: React.FC<DialogContentProps> = (props) => {
    return <MuiDialogContent {...props} />;
};
