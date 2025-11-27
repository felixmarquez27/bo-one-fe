import React from 'react';
import { Box, Paper, Typography, Stack } from '@bo-one/design-system';

export const Configuracion: React.FC = () => {
    return (
        <Stack spacing={3}>
            <Paper elevation={0} sx={{ p: 3, border: 1, borderColor: 'divider' }}>
                <Typography variant="h5" component="h1" fontWeight="600" gutterBottom>
                    Configuración
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Ajustes y preferencias del sistema
                </Typography>
            </Paper>

            <Paper elevation={0} sx={{ p: 6, border: 1, borderColor: 'divider', textAlign: 'center' }}>
                <Box sx={{ color: 'text.disabled', mb: 2 }}>
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </Box>
                <Typography variant="h6" gutterBottom>
                    Módulo de Configuración
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Este módulo está en construcción
                </Typography>
            </Paper>
        </Stack>
    );
};
