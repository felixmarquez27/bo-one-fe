import { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Chip,
  IconButton,
  Avatar,
  Button,
  Stack,
  EditIcon,
  DeleteIcon,
  Visibility,
  ChevronLeft,
  ChevronRight,
} from '@bo-one/design-system';

interface User {
  id: number;
  nombre: string;
  email: string;
  rol: string;
  estado: 'Activo' | 'Inactivo';
  fechaRegistro: string;
}

const App = () => {
  const [users] = useState<User[]>([
    {
      id: 1,
      nombre: 'Juan Pérez',
      email: 'juan.perez@ejemplo.com',
      rol: 'Administrador',
      estado: 'Activo',
      fechaRegistro: '2024-01-15',
    },
    {
      id: 2,
      nombre: 'María García',
      email: 'maria.garcia@ejemplo.com',
      rol: 'Usuario',
      estado: 'Activo',
      fechaRegistro: '2024-02-20',
    },
    {
      id: 3,
      nombre: 'Carlos Rodríguez',
      email: 'carlos.rodriguez@ejemplo.com',
      rol: 'Editor',
      estado: 'Activo',
      fechaRegistro: '2024-03-10',
    },
    {
      id: 4,
      nombre: 'Ana Martínez',
      email: 'ana.martinez@ejemplo.com',
      rol: 'Usuario',
      estado: 'Inactivo',
      fechaRegistro: '2024-01-05',
    },
    {
      id: 5,
      nombre: 'Luis López',
      email: 'luis.lopez@ejemplo.com',
      rol: 'Editor',
      estado: 'Activo',
      fechaRegistro: '2024-04-12',
    },
    {
      id: 6,
      nombre: 'Carmen Sánchez',
      email: 'carmen.sanchez@ejemplo.com',
      rol: 'Usuario',
      estado: 'Activo',
      fechaRegistro: '2024-05-08',
    },
  ]);

  const [searchTerm] = useState('');

  const filteredUsers = users.filter(
    (user) =>
      user.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.rol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getRolColor = (rol: string): 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' => {
    switch (rol) {
      case 'Administrador':
        return 'secondary';
      case 'Editor':
        return 'primary';
      default:
        return 'default';
    }
  };

  return (
    <Box sx={{ p: 0 }}>
      {/* Users Table */}
      <Paper
        elevation={0}
        sx={{
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 2,
          overflow: 'hidden'
        }}
      >
        <Box sx={{ overflowX: 'auto' }}>
          <Box component="table" sx={{ width: '100%', borderCollapse: 'collapse' }}>
            {/* Table Head */}
            <Box
              component="thead"
              sx={{
                bgcolor: 'primary.main',
                color: 'primary.contrastText'
              }}
            >
              <Box component="tr">
                <Box
                  component="th"
                  sx={{
                    px: 2.5,
                    py: 1.5,
                    textAlign: 'left',
                    fontWeight: 600,
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                >
                  ID
                </Box>
                <Box
                  component="th"
                  sx={{
                    px: 2.5,
                    py: 1.5,
                    textAlign: 'left',
                    fontWeight: 600,
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                >
                  Nombre
                </Box>
                <Box
                  component="th"
                  sx={{
                    px: 2.5,
                    py: 1.5,
                    textAlign: 'left',
                    fontWeight: 600,
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                >
                  Email
                </Box>
                <Box
                  component="th"
                  sx={{
                    px: 2.5,
                    py: 1.5,
                    textAlign: 'left',
                    fontWeight: 600,
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                >
                  Rol
                </Box>
                <Box
                  component="th"
                  sx={{
                    px: 2.5,
                    py: 1.5,
                    textAlign: 'left',
                    fontWeight: 600,
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                >
                  Estado
                </Box>
                <Box
                  component="th"
                  sx={{
                    px: 2.5,
                    py: 1.5,
                    textAlign: 'left',
                    fontWeight: 600,
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                >
                  Fecha Registro
                </Box>
                <Box
                  component="th"
                  sx={{
                    px: 2.5,
                    py: 1.5,
                    textAlign: 'left',
                    fontWeight: 600,
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                >
                  Acciones
                </Box>
              </Box>
            </Box>

            {/* Table Body */}
            <Box component="tbody" sx={{ '& tr': { borderBottom: '1px solid', borderColor: 'divider' } }}>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <Box
                    component="tr"
                    key={user.id}
                    sx={{
                      '&:hover': {
                        bgcolor: 'action.hover',
                      },
                      transition: 'background-color 0.2s',
                    }}
                  >
                    <Box component="td" sx={{ px: 2.5, py: 2 }}>
                      <Typography variant="body2" color="text.primary">
                        {user.id}
                      </Typography>
                    </Box>
                    <Box component="td" sx={{ px: 2.5, py: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Avatar
                          sx={{
                            width: 32,
                            height: 32,
                            bgcolor: 'primary.light',
                            fontSize: '0.875rem',
                            fontWeight: 600
                          }}
                        >
                          {user.nombre.charAt(0)}
                        </Avatar>
                        <Typography variant="body2" fontWeight={500}>
                          {user.nombre}
                        </Typography>
                      </Box>
                    </Box>
                    <Box component="td" sx={{ px: 2.5, py: 2 }}>
                      <Typography variant="body2" color="text.secondary">
                        {user.email}
                      </Typography>
                    </Box>
                    <Box component="td" sx={{ px: 2.5, py: 2 }}>
                      <Chip
                        label={user.rol}
                        color={getRolColor(user.rol)}
                        size="small"
                        variant="outlined"
                      />
                    </Box>
                    <Box component="td" sx={{ px: 2.5, py: 2 }}>
                      <Chip
                        label={user.estado}
                        color={user.estado === 'Activo' ? 'success' : 'error'}
                        size="small"
                        variant="outlined"
                      />
                    </Box>
                    <Box component="td" sx={{ px: 2.5, py: 2 }}>
                      <Typography variant="body2" color="text.secondary">
                        {new Date(user.fechaRegistro).toLocaleDateString('es-ES', {
                          year: 'numeric',
                          month: '2-digit',
                          day: '2-digit',
                        })}
                      </Typography>
                    </Box>
                    <Box component="td" sx={{ px: 2.5, py: 2 }}>
                      <Stack direction="row" spacing={0.5}>
                        <IconButton
                          size="small"
                          color="primary"
                          title="Ver"
                          sx={{
                            '&:hover': {
                              bgcolor: 'action.hover'
                            }
                          }}
                        >
                          <Visibility fontSize="small" />
                        </IconButton>
                        <IconButton
                          size="small"
                          color="primary"
                          title="Editar"
                          sx={{
                            '&:hover': {
                              bgcolor: 'action.hover'
                            }
                          }}
                        >
                          <EditIcon fontSize="small" />
                        </IconButton>
                        <IconButton
                          size="small"
                          color="error"
                          title="Eliminar"
                          sx={{
                            '&:hover': {
                              bgcolor: 'error.lighter'
                            }
                          }}
                        >
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </Stack>
                    </Box>
                  </Box>
                ))
              ) : (
                <Box component="tr">
                  <Box component="td" sx={{ px: 2.5, py: 12, textAlign: 'center' }}>
                    <Box sx={{ color: 'text.disabled' }}>
                      <svg
                        style={{
                          width: 48,
                          height: 48,
                          margin: '0 auto',
                          marginBottom: 12,
                          display: 'block',
                          color: 'rgba(0, 0, 0, 0.26)',
                        }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                        />
                      </svg>
                      <Typography variant="body1" fontWeight={500} color="text.secondary">
                        No se encontraron usuarios
                      </Typography>
                      <Typography variant="body2" color="text.disabled" sx={{ mt: 0.5 }}>
                        Intenta con otros términos de búsqueda
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        </Box>

        {/* Table Footer */}
        <Box
          sx={{
            bgcolor: 'grey.50',
            px: 2.5,
            py: 1.5,
            borderTop: '1px solid',
            borderColor: 'divider',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Typography variant="caption" color="text.secondary">
            Mostrando <Box component="span" sx={{ fontWeight: 600 }}>{filteredUsers.length}</Box> de{' '}
            <Box component="span" sx={{ fontWeight: 600 }}>{users.length}</Box> registros
          </Typography>
          <Stack direction="row" spacing={1}>
            <Button
              variant="outlined"
              size="small"
              startIcon={<ChevronLeft />}
              sx={{
                fontSize: '0.75rem',
                textTransform: 'none'
              }}
            >
              Anterior
            </Button>
            <Button
              variant="outlined"
              size="small"
              endIcon={<ChevronRight />}
              sx={{
                fontSize: '0.75rem',
                textTransform: 'none'
              }}
            >
              Siguiente
            </Button>
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
};

export default App;
