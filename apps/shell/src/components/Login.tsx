import React, { useState } from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    TextField,
    Button,
    Link,
    Stack,
    Grid,
    InputAdornment,
    IconButton,
    Alert,
    CircularProgress,
    Visibility,
    VisibilityOff,
} from '@bo-one/design-system';

interface LoginProps {
    onLoginSuccess?: () => void;
}

export const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

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
            bgcolor: '#eef2f6', // Light grey background similar to reference
            p: 2
        }}>
            <Card sx={{
                maxWidth: 475,
                width: '100%',
                borderRadius: 3,
                boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
                overflow: 'visible' // Allow content to flow if needed
            }}>
                <CardContent sx={{ p: { xs: 3, sm: 5 } }}>
                    <Grid container spacing={3} direction="column" alignItems="center">
                        {/* Logo */}
                        <Grid>
                            <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
                                <img
                                    src="/assets/claro-tv.png"
                                    alt="Logo"
                                    style={{ height: 70 }}
                                />
                            </Box>
                        </Grid>

                        {/* Welcome Text */}
                        <Grid size={12} sx={{ width: '100%', textAlign: 'center' }}>

                            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                                Ingrese sus credenciales para continuar
                            </Typography>
                        </Grid>

                        {/* Form */}
                        <Grid size={12} sx={{ width: '100%' }}>
                            <form onSubmit={handleSubmit}>
                                <Stack spacing={3}>
                                    <TextField
                                        id="email"
                                        label="Email Address / Username"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        disabled={isLoading}
                                        fullWidth
                                        variant="outlined"
                                        sx={{ bgcolor: '#fafafa' }}
                                    />

                                    <TextField
                                        id="password"
                                        label="Password"
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        disabled={isLoading}
                                        fullWidth
                                        variant="outlined"
                                        sx={{ bgcolor: '#fafafa' }}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                    >
                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                    />

                                    {error && (
                                        <Alert severity="error">
                                            {error}
                                        </Alert>
                                    )}

                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Link href="#" variant="subtitle1" underline="hover" color="primary" fontWeight="bold" fontSize="0.75rem">
                                            ¿Olvidaste tu contraseña?
                                        </Link>
                                    </Box>

                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        size="large"
                                        fullWidth
                                        disabled={isLoading}
                                        sx={{
                                            py: 1.5,
                                            fontSize: '1rem',
                                            textTransform: 'none',
                                            borderRadius: 2,
                                            boxShadow: 'none',
                                            '&:hover': {
                                                boxShadow: 'none'
                                            }
                                        }}
                                        startIcon={isLoading ? <CircularProgress size={20} color="inherit" /> : null}
                                    >
                                        {isLoading ? 'Iniciando Sesión...' : 'Iniciar Sesión'}
                                    </Button>


                                </Stack>
                            </form>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    );
};
