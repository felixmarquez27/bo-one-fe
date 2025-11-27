import React from 'react';
import { DialogActions as MuiDialogActions, type DialogActionsProps as MuiDialogActionsProps } from '@mui/material';

export interface DialogActionsProps extends MuiDialogActionsProps {
    // Aquí podemos agregar props personalizadas si es necesario en el futuro
}

/**
 * Componente DialogActions wrapper de MUI
 * Hereda todas las props de MUI DialogActions
 */
export const DialogActions: React.FC<DialogActionsProps> = (props) => {
    return <MuiDialogActions {...props} />;
};
