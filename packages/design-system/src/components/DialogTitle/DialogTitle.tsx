import React from 'react';
import { DialogTitle as MuiDialogTitle, type DialogTitleProps as MuiDialogTitleProps } from '@mui/material';

export interface DialogTitleProps extends MuiDialogTitleProps {
    // Aquí podemos agregar props personalizadas si es necesario en el futuro
}

/**
 * Componente DialogTitle wrapper de MUI
 * Hereda todas las props de MUI DialogTitle
 */
export const DialogTitle: React.FC<DialogTitleProps> = (props) => {
    return <MuiDialogTitle {...props} />;
};
