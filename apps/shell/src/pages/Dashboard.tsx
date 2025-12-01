import React from 'react';
import { Box, Grid, Paper, Typography, Stack } from '@bo-one/design-system';

export const Dashboard: React.FC = () => {
    return (
        <Stack spacing={3}>
            {/* Header */}
            <Paper elevation={0} sx={{ p: 3, border: 1, borderColor: 'divider' }}>
                <Typography variant="h5" component="h1" fontWeight="600" gutterBottom>
                    Dashboard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Panel de control y métricas principales
                </Typography>
            </Paper>

            {/* Stats Grid */}
            <Grid container spacing={3}>
                {[
                    { title: 'Total Usuarios', value: '1,284', change: '+12% vs mes anterior', color: 'primary.main', icon: '👥' },
                    { title: 'Productos', value: '456', change: '+8% vs mes anterior', color: 'info.main', icon: '📦' },
                    { title: 'Ventas Hoy', value: '$12,543', change: '-3% vs ayer', color: 'success.main', icon: '💰' },
                    { title: 'Reportes', value: '89', change: 'Pendientes de revisión', color: 'warning.main', icon: '📊' },
                ].map((stat, index) => (
                    <Grid size={{ xs: 12, md: 6, lg: 3 }} key={index}>
                        <Paper elevation={0} sx={{ p: 3, border: 1, borderColor: 'divider', height: '100%' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <Box>
                                    <Typography variant="caption" color="text.secondary" fontWeight="bold" sx={{ textTransform: 'uppercase' }}>
                                        {stat.title}
                                    </Typography>
                                    <Typography variant="h4" fontWeight="600" sx={{ my: 1 }}>
                                        {stat.value}
                                    </Typography>
                                    <Typography variant="caption" color={stat.change.includes('+') ? 'success.main' : stat.change.includes('-') ? 'error.main' : 'text.secondary'}>
                                        {stat.change}
                                    </Typography>
                                </Box>
                                <Box sx={{
                                    width: 48,
                                    height: 48,
                                    borderRadius: 2,
                                    bgcolor: `${stat.color}15`,
                                    color: stat.color,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.5rem'
                                }}>
                                    {stat.icon}
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>
                ))}
            </Grid>

            {/* Recent Activity */}
            <Paper elevation={0} sx={{ p: 3, border: 1, borderColor: 'divider' }}>
                <Typography variant="h6" fontWeight="600" gutterBottom>
                    Actividad Reciente
                </Typography>
                <Stack spacing={0}>
                    {[
                        { accion: 'Nuevo usuario registrado', usuario: 'Juan Pérez', tiempo: 'Hace 5 minutos' },
                        { accion: 'Producto actualizado', usuario: 'María García', tiempo: 'Hace 15 minutos' },
                        { accion: 'Reporte generado', usuario: 'Carlos Rodríguez', tiempo: 'Hace 1 hora' },
                        { accion: 'Configuración modificada', usuario: 'Admin', tiempo: 'Hace 2 horas' },
                    ].map((item, index) => (
                        <Box key={index} sx={{
                            py: 2,
                            borderBottom: index < 3 ? 1 : 0,
                            borderColor: 'divider',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Box sx={{
                                    width: 32,
                                    height: 32,
                                    borderRadius: '50%',
                                    bgcolor: 'action.hover',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '0.75rem',
                                    fontWeight: 'bold'
                                }}>
                                    {item.usuario.charAt(0)}
                                </Box>
                                <Box>
                                    <Typography variant="body2" fontWeight="500">{item.accion}</Typography>
                                    <Typography variant="caption" color="text.secondary">{item.usuario}</Typography>
                                </Box>
                            </Box>
                            <Typography variant="caption" color="text.secondary">{item.tiempo}</Typography>
                        </Box>
                    ))}
                </Stack>
            </Paper>
        </Stack>
    );
};
