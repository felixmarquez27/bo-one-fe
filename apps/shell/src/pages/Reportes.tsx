import React from 'react';
import { Box, Paper, Typography, Stack } from '@bo-one/design-system';

export const Reportes: React.FC = () => {
  return (
    <Stack spacing={3}>
      <Paper elevation={0} sx={{ p: 3, border: 1, borderColor: 'divider' }}>
        <Typography variant="h5" component="h1" fontWeight="600" gutterBottom>
          Reportes
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Generación y análisis de reportes
        </Typography>
      </Paper>

      <Paper elevation={0} sx={{ p: 6, border: 1, borderColor: 'divider', textAlign: 'center' }}>
        <Box sx={{ color: 'text.disabled', mb: 2 }}>
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </Box>
        <Typography variant="h6" gutterBottom>
          Módulo de Reportes
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Este módulo está en construcción
        </Typography>
      </Paper>
    </Stack>
  );
};
