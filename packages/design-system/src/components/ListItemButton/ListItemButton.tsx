import React from 'react';
import { ListItemButton as MuiListItemButton, type ListItemButtonProps as MuiListItemButtonProps } from '@mui/material';

export interface ListItemButtonProps extends MuiListItemButtonProps {
    // Permitir props adicionales para routing (to, href, etc) cuando se usa component
    [key: string]: any;
}

/**
 * Componente ListItemButton wrapper de MUI
 * Hereda todas las props de MUI ListItemButton
 */
export const ListItemButton: React.FC<ListItemButtonProps> = (props) => {
    return <MuiListItemButton {...props} />;
};
