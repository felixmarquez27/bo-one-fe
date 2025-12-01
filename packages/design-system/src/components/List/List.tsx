import React from 'react';
import { List as MuiList, type ListProps as MuiListProps } from '@mui/material';

export interface ListProps extends MuiListProps {
    // Aquí podemos agregar props personalizadas si es necesario en el futuro
}

/**
 * Componente List wrapper de MUI
 * Hereda todas las props de MUI List
 */
export const List: React.FC<ListProps> = (props) => {
    return <MuiList {...props} />;
};
