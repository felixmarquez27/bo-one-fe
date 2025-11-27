import React from 'react';
import { Link as MuiLink, type LinkProps as MuiLinkProps } from '@mui/material';

export interface LinkProps extends MuiLinkProps {
    // Aquí podemos agregar props personalizadas si es necesario en el futuro
}

/**
 * Componente Link wrapper de MUI
 * Hereda todas las props de MUI Link
 */
export const Link: React.FC<LinkProps> = (props) => {
    return <MuiLink {...props} />;
};
