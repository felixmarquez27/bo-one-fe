import React from 'react';
import { Avatar as MuiAvatar, type AvatarProps as MuiAvatarProps } from '@mui/material';

export interface AvatarProps extends MuiAvatarProps {
    // Aquí podemos agregar props personalizadas si es necesario en el futuro
}

/**
 * Componente Avatar wrapper de MUI
 * Hereda todas las props de MUI Avatar
 */
export const Avatar: React.FC<AvatarProps> = (props) => {
    return <MuiAvatar {...props} />;
};
