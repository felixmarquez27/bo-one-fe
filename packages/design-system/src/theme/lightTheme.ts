import { createTheme } from '@mui/material/styles';
import type { BOOneThemeOptions } from './types';
import { typography, components, spacing, breakpoints, shape } from './shared';

/**
 * Paleta de colores para modo claro de BO ONE
 */
const lightColors = {
    primary: {
        main: '#DA291C',       // Rojo corporativo
        light: '#FF5245',
        dark: '#A30000',
        contrastText: '#FFFFFF',
    },

    secondary: {
        main: '#000000',
        contrastText: '#FFFFFF',
    },

    background: {
        default: '#FFFFFF',    // Fondo general claro
        paper: '#F5F5F5',      // Superficies
    },

    text: {
        primary: '#000000',
        secondary: '#424242',
        disabled: 'rgba(0,0,0,0.4)',
    },

    divider: 'rgba(0,0,0,0.12)',
    success: {
        main: '#10b981', // Green 500
        light: '#34d399', // Green 400
        dark: '#059669', // Green 600
        contrastText: '#ffffff',
    },
    error: {
        main: '#ef4444', // Red 500
        light: '#f87171', // Red 400
        dark: '#dc2626', // Red 600
        contrastText: '#ffffff',
    },
    warning: {
        main: '#f59e0b', // Amber 500
        light: '#fbbf24', // Amber 400
        dark: '#d97706', // Amber 600
        contrastText: '#ffffff',
    },
    info: {
        main: '#3b82f6', // Blue 500
        light: '#60a5fa', // Blue 400
        dark: '#2563eb', // Blue 600
        contrastText: '#ffffff',
    }
};

/**
 * Opciones del tema claro de BO ONE
 */
const lightThemeOptions: BOOneThemeOptions = {
};

/**
 * Tema claro predeterminado de BO ONE
 */
export const lightTheme = createTheme(lightThemeOptions);

/**
 * Factory function para crear temas claros personalizados
 * @param options - Opciones de tema personalizadas que se fusionarán con el tema base
 * @returns Tema de Material UI personalizado en modo claro
 */
export function createLightTheme(options?: BOOneThemeOptions) {
    return createTheme({
        ...lightThemeOptions,
        ...options,
        palette: {
            ...lightThemeOptions.palette,
            ...options?.palette,
        },
        typography: {
            ...lightThemeOptions.typography,
            ...options?.typography,
        },
        components: {
            ...lightThemeOptions.components,
            ...options?.components,
        },
    });
}

