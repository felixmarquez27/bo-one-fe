import React from 'react';
import { MenuItem as MuiMenuItem, type MenuItemProps as MuiMenuItemProps } from '@mui/material';

export interface MenuItemProps extends MuiMenuItemProps {
    // Aquí podemos agregar props personalizadas si es necesario en el futuro
}

/**
 * Componente MenuItem wrapper de MUI
 * Hereda todas las props de MUI MenuItem
 */
export const MenuItem: React.FC<MenuItemProps> = (props) => {
    return <MuiMenuItem {...props} />;
};
