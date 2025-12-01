import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Typography, Button, Container } from '@bo-one/design-system';

export const NotFound: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}>
        <Typography variant="h1" fontWeight="bold" sx={{ fontSize: '8rem', color: 'action.disabled' }}>
          404
        </Typography>
        <Typography variant="h4" fontWeight="600" gutterBottom>
          Página no encontrada
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          La página que buscas no existe o ha sido movida.
        </Typography>
        <Button
          component={RouterLink}
          to="/dashboard"
          variant="contained"
          size="large"
        >
          Volver al Dashboard
        </Button>
      </Box>
    </Container>
  );
};
