import React, { useState } from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    TextField,
    Button,
    Checkbox,
    FormControlLabel,
    Link,
    Stack,
    Divider,
    CircularProgress,
    Alert
} from '@bo-one/design-system';

interface LoginProps {
    onLoginSuccess?: () => void;
}

export const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            // Simulación de autenticación
            await new Promise((resolve) => setTimeout(resolve, 1000));

            if (email && password) {
                console.log('Inicio de sesión exitoso:', { email });
                onLoginSuccess?.();
            } else {
                setError('Por favor, completa todos los campos');
            }
        } catch (err) {
            setError('Error al iniciar sesión. Por favor, intenta de nuevo.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Box sx={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'background.default',
            px: 2,
            py: 4
        }}>
            <Box sx={{ width: '100%', maxWidth: 450 }}>
                {/* Logo o Título Principal */}
                <Box sx={{ textAlign: 'center', mb: 4 }}>
                    <Box sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 64,
                        height: 64,
                        bgcolor: 'primary.main',
                        borderRadius: 1,
                        mb: 2
                    }}>
                        <Box sx={{ width: 32, height: 32, border: 4, borderColor: 'white', borderRadius: 0.5 }} />
                    </Box>
                    <Typography variant="h4" component="h1" fontWeight="bold" color="text.primary" gutterBottom>
                        BO-ONE
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Enterprise Management System
                    </Typography>
                </Box>

                {/* Card de Login */}
                <Card elevation={2}>
                    {/* Header */}
                    <Box sx={{ bgcolor: 'primary.main', px: 4, py: 3, borderBottom: 1, borderColor: 'divider' }}>
                        <Typography variant="h6" align="center" sx={{ color: 'white', fontWeight: 600 }}>
                            Inicio de Sesión
                        </Typography>
                        <Typography variant="body2" align="center" sx={{ color: 'rgba(255,255,255,0.8)', mt: 0.5 }}>
                            Ingrese sus credenciales corporativas
                        </Typography>
                    </Box>

                    <CardContent sx={{ p: 4 }}>
                        <form onSubmit={handleSubmit}>
                            <Stack spacing={3}>
                                <TextField
                                    id="email"
                                    label="Usuario / Correo Corporativo"
                                    type="email"
                                    placeholder="usuario@empresa.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    disabled={isLoading}
                                    fullWidth
                                    variant="outlined"
                                />

                                <TextField
                                    id="password"
                                    label="Contraseña"
                                    type="password"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    disabled={isLoading}
                                    fullWidth
                                    variant="outlined"
                                />

                                {error && (
                                    <Alert severity="error" sx={{ width: '100%' }}>
                                        {error}
                                    </Alert>
                                )}

                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <FormControlLabel
                                        control={<Checkbox defaultChecked />}
                                        label={<Typography variant="body2" color="text.secondary">Mantener sesión activa</Typography>}
                                    />
                                    <Link href="#" variant="body2" underline="hover" color="primary">
                                        Recuperar acceso
                                    </Link>
                                </Box>

                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    fullWidth
                                    disabled={isLoading}
                                    startIcon={isLoading ? <CircularProgress size={20} color="inherit" /> : null}
                                >
                                    {isLoading ? 'Verificando...' : 'Iniciar Sesión'}
                                </Button>

                                <Divider>
                                    <Typography variant="caption" color="text.secondary">
                                        O continúa con
                                    </Typography>
                                </Divider>

                                <Button
                                    variant="outlined"
                                    color="inherit"
                                    fullWidth
                                    onClick={() => window.location.href = 'http://localhost:8000/api/auth/azure'}
                                    startIcon={
                                        <svg width="20" height="20" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zM24 11.4H12.6V0H24v11.4z" />
                                        </svg>
                                    }
                                >
                                    Iniciar sesión con Microsoft
                                </Button>
                            </Stack>
                        </form>
                    </CardContent>

                    <Box sx={{ px: 4, py: 2, bgcolor: 'action.hover', borderTop: 1, borderColor: 'divider' }}>
                        <Typography variant="caption" display="block" align="center" color="text.secondary">
                            Acceso restringido solo para personal autorizado
                        </Typography>
                    </Box>
                </Card>

                {/* Footer Info */}
                <Box sx={{ mt: 3, textAlign: 'center' }}>
                    <Typography variant="caption" color="text.secondary">
                        © 2025 BO-ONE Enterprise System. Todos los derechos reservados.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};
