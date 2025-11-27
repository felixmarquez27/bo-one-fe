import React from 'react';
import { ListItemText as MuiListItemText, type ListItemTextProps as MuiListItemTextProps } from '@mui/material';

export interface ListItemTextProps extends MuiListItemTextProps {
    // Aquí podemos agregar props personalizadas si es necesario en el futuro
}

/**
 * Componente ListItemText wrapper de MUI
 * Hereda todas las props de MUI ListItemText
 */
export const ListItemText: React.FC<ListItemTextProps> = (props) => {
    return <MuiListItemText {...props} />;
};
