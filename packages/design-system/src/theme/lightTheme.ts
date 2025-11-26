import { createTheme } from '@mui/material/styles';
import type { BOOneThemeOptions } from './types';
import { typography, components, spacing, breakpoints, shape } from './shared';

/**
 * Paleta de colores para modo claro de BO ONE
 */
const lightColors = {
    primary: {
        main: '#0f172a', // Slate 900
        light: '#334155', // Slate 700
        dark: '#020617', // Slate 950
        contrastText: '#ffffff',
    },
    secondary: {
        main: '#3b82f6', // Blue 500
        light: '#60a5fa', // Blue 400
        dark: '#2563eb', // Blue 600
        contrastText: '#ffffff',
    },
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
    },
    background: {
        default: '#f8fafc', // Slate 50
        paper: '#ffffff',
    },
    text: {
        primary: '#0f172a', // Slate 900
        secondary: '#475569', // Slate 600
        disabled: '#94a3b8', // Slate 400
    },
    divider: '#e2e8f0', // Slate 200
};

/**
 * Opciones del tema claro de BO ONE
 */
const lightThemeOptions: BOOneThemeOptions = {
    palette: lightColors,
    typography,
    components,
    spacing,
    breakpoints,
    shape,
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

