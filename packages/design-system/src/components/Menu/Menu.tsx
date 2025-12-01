import React from 'react';
import { Menu as MuiMenu, type MenuProps as MuiMenuProps } from '@mui/material';

export interface MenuProps extends MuiMenuProps {
    // Aquí podemos agregar props personalizadas si es necesario en el futuro
}

/**
 * Componente Menu wrapper de MUI
 * Hereda todas las props de MUI Menu
 */
export const Menu: React.FC<MenuProps> = (props) => {
    return <MuiMenu {...props} />;
};
