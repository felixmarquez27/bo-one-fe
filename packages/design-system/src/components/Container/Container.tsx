import React from 'react';
import { Container as MuiContainer, type ContainerProps as MuiContainerProps } from '@mui/material';

export interface ContainerProps extends MuiContainerProps {
    // Aquí podemos agregar props personalizadas si es necesario en el futuro
}

/**
 * Componente Container wrapper de MUI
 * Hereda todas las props de MUI Container
 */
export const Container: React.FC<ContainerProps> = (props) => {
    return <MuiContainer {...props} />;
};
