import React from 'react';
import { Dialog as MuiDialog, type DialogProps as MuiDialogProps } from '@mui/material';

export interface DialogProps extends MuiDialogProps {
    // Aquí podemos agregar props personalizadas si es necesario en el futuro
}

/**
 * Componente Dialog wrapper de MUI
 * Hereda todas las props de MUI Dialog
 */
export const Dialog: React.FC<DialogProps> = (props) => {
    return <MuiDialog {...props} />;
};
