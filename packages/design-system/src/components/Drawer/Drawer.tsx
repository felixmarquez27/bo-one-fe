import React from 'react';
import { Drawer as MuiDrawer, type DrawerProps as MuiDrawerProps } from '@mui/material';

export interface DrawerProps extends MuiDrawerProps {
    // Aquí podemos agregar props personalizadas si es necesario en el futuro
}

/**
 * Componente Drawer wrapper de MUI
 * Hereda todas las props de MUI Drawer
 */
export const Drawer: React.FC<DrawerProps> = (props) => {
    return <MuiDrawer {...props} />;
};
