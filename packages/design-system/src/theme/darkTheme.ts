import { createTheme } from '@mui/material/styles';
import type { BOOneThemeOptions } from './types';
import { typography, components, spacing, breakpoints, shape } from './shared';

/**
 * Paleta de colores para modo oscuro de BO ONE
 */
const darkColors = {
    primary: {
        main: '#60a5fa', // Blue 400 (más brillante para dark mode)
        light: '#93c5fd', // Blue 300
        dark: '#3b82f6', // Blue 500
        contrastText: '#0f172a',
    },
    secondary: {
        main: '#818cf8', // Indigo 400
        light: '#a5b4fc', // Indigo 300
        dark: '#6366f1', // Indigo 500
        contrastText: '#0f172a',
    },
    success: {
        main: '#34d399', // Green 400
        light: '#6ee7b7', // Green 300
        dark: '#10b981', // Green 500
        contrastText: '#0f172a',
    },
    error: {
        main: '#f87171', // Red 400
        light: '#fca5a5', // Red 300
        dark: '#ef4444', // Red 500
        contrastText: '#0f172a',
    },
    warning: {
        main: '#fbbf24', // Amber 400
        light: '#fcd34d', // Amber 300
        dark: '#f59e0b', // Amber 500
        contrastText: '#0f172a',
    },
    info: {
        main: '#60a5fa', // Blue 400
        light: '#93c5fd', // Blue 300
        dark: '#3b82f6', // Blue 500
        contrastText: '#0f172a',
    },
    background: {
        default: '#0f172a', // Slate 900
        paper: '#1e293b', // Slate 800
    },
    text: {
        primary: '#f1f5f9', // Slate 100
        secondary: '#cbd5e1', // Slate 300
        disabled: '#64748b', // Slate 500
    },
    divider: '#334155', // Slate 700
};

/**
 * Opciones del tema oscuro de BO ONE
 */
const darkThemeOptions: BOOneThemeOptions = {
    palette: {
        mode: 'dark',
        ...darkColors,
    },
    typography,
    components,
    spacing,
    breakpoints,
    shape,
};

/**
 * Tema oscuro predeterminado de BO ONE
 */
export const darkTheme = createTheme(darkThemeOptions);

/**
 * Factory function para crear temas oscuros personalizados
 * @param options - Opciones de tema personalizadas que se fusionarán con el tema dark
 * @returns Tema de Material UI personalizado en modo oscuro
 */
export function createDarkTheme(options?: BOOneThemeOptions) {
    return createTheme({
        ...darkThemeOptions,
        ...options,
        palette: {
            mode: 'dark',
            ...darkThemeOptions.palette,
            ...options?.palette,
        },
        typography: {
            ...darkThemeOptions.typography,
            ...options?.typography,
        },
        components: {
            ...darkThemeOptions.components,
            ...options?.components,
        },
    });
}
