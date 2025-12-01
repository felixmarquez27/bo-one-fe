import React from 'react';
import { ListItem as MuiListItem, type ListItemProps as MuiListItemProps } from '@mui/material';

export interface ListItemProps extends MuiListItemProps {
    // Aquí podemos agregar props personalizadas si es necesario en el futuro
}

/**
 * Componente ListItem wrapper de MUI
 * Hereda todas las props de MUI ListItem
 */
export const ListItem: React.FC<ListItemProps> = (props) => {
    return <MuiListItem {...props} />;
};
