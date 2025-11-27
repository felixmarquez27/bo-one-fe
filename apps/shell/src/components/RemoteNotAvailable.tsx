import React from 'react';
import { Box, Typography, Button, Paper, Stack, Alert, Divider } from '@bo-one/design-system';

interface RemoteNotAvailableProps {
    moduleName: string;
    onRetry?: () => void;
}

export const RemoteNotAvailable: React.FC<RemoteNotAvailableProps> = ({
    moduleName,
    onRetry
}) => {
    return (
        <Stack spacing={3}>
            <Paper elevation={0} sx={{ p: 3, border: 1, borderColor: 'divider' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                    <Typography variant="h5" component="h1" fontWeight="600">
                        Módulo No Disponible
                    </Typography>
                    {onRetry && (
                        <Button variant="contained" onClick={onRetry}>
                            Reintentar
                        </Button>
                    )}
                </Box>
                <Typography variant="body2" color="text.secondary">
                    El módulo <Box component="span" fontWeight="bold">{moduleName}</Box> no está disponible en este momento.
                </Typography>
            </Paper>

            <Alert severity="warning" variant="outlined">
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                    Servicio Temporalmente No Disponible
                </Typography>
                <Typography variant="body2" paragraph>
                    Este módulo puede no estar disponible por las siguientes razones:
                </Typography>
                <Box component="ul" sx={{ pl: 2, m: 0 }}>
                    <li>El servicio está en mantenimiento</li>
                    <li>Hay problemas de conectividad de red</li>
                    <li>El contenedor del módulo no está iniciado</li>
                    <li>Error en la configuración de Module Federation</li>
                </Box>
            </Alert>

            <Paper elevation={0} sx={{ p: 3, bgcolor: 'background.default', border: 1, borderColor: 'divider' }}>
                <Typography variant="subtitle2" gutterBottom>
                    Información Técnica
                </Typography>
                <Stack spacing={1} sx={{ mb: 2 }}>
                    <Typography variant="body2"><Box component="span" fontWeight="medium">Módulo:</Box> {moduleName}</Typography>
                    <Typography variant="body2"><Box component="span" fontWeight="medium">Estado:</Box> Desconectado</Typography>
                    <Typography variant="body2"><Box component="span" fontWeight="medium">Tipo:</Box> Module Federation Remote</Typography>
                </Stack>

                <Divider sx={{ my: 2 }} />

                <Typography variant="caption" display="block" color="text.secondary" gutterBottom>
                    ¿Eres administrador? Verifica el servicio:
                </Typography>
                <Box component="pre" sx={{
                    p: 2,
                    bgcolor: 'grey.900',
                    color: 'grey.100',
                    borderRadius: 1,
                    fontSize: '0.75rem',
                    overflowX: 'auto'
                }}>
                    docker ps | grep bo-one-{moduleName.toLowerCase()}
                </Box>
            </Paper>
        </Stack>
    );
};
