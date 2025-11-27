import React from 'react';
import { Box, Paper, Typography, Stack } from '@bo-one/design-system';

export const Productos: React.FC = () => {
  return (
    <Stack spacing={3}>
      <Paper elevation={0} sx={{ p: 3, border: 1, borderColor: 'divider' }}>
        <Typography variant="h5" component="h1" fontWeight="600" gutterBottom>
          Productos
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Gestión de productos y servicios
        </Typography>
      </Paper>

      <Paper elevation={0} sx={{ p: 6, border: 1, borderColor: 'divider', textAlign: 'center' }}>
        <Box sx={{ color: 'text.disabled', mb: 2 }}>
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        </Box>
        <Typography variant="h6" gutterBottom>
          Módulo de Productos
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Este módulo está en construcción
        </Typography>
      </Paper>
    </Stack>
  );
};
