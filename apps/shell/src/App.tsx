import React, { Suspense, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Box, AppBar, Toolbar, Typography, CircularProgress } from '@bo-one/design-system';
import { Login } from './components/Login';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './pages/Dashboard';
import { Configuracion } from './pages/Configuracion';
import { NotFound } from './pages/NotFound';
import { TestPage } from './pages/TestPage';
import { ErrorBoundary } from './components/ErrorBoundary';
import { RemoteNotAvailable } from './components/RemoteNotAvailable';

// Lazy load con manejo de errores para Module Federation
const UsersApp = React.lazy(() =>
  import('users/UsersApp').catch((error) => {
    console.error('Error al cargar el módulo Users:', error);
    // Retornar un módulo por defecto en caso de error
    return {
      default: () => <RemoteNotAvailable moduleName="Users" />
    };
  })
);

// Componente de ruta protegida
interface ProtectedRouteProps {
  isAuthenticated: boolean;
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

// Layout principal con sidebar
interface MainLayoutProps {
  onLogout: () => void;
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ onLogout, children }) => {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Sidebar */}
      <Sidebar onLogout={onLogout} />

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, ml: { md: '256px' }, transition: 'all 0.3s' }}>
        {/* Header */}
        <AppBar position="sticky" color="default" elevation={0} sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: 'background.paper' }}>
          <Toolbar>
            <Box>
              <Typography variant="h6" component="h1" color="text.primary" fontWeight="600">
                Sistema de Gestión
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Panel de Administración
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Content Area */}
        <Box sx={{ p: 3 }}>
          <Suspense fallback={
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 400 }}>
              <Box sx={{ textAlign: 'center' }}>
                <CircularProgress size={48} sx={{ mb: 2, color: 'primary.main' }} />
                <Typography variant="body2" color="text.secondary" fontWeight="500">
                  Cargando módulo...
                </Typography>
              </Box>
            </Box>
          }>
            {children}
          </Suspense>
        </Box>
      </Box>
    </Box>
  );
};

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta de Login */}
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Login onLoginSuccess={() => setIsAuthenticated(true)} />
            )
          }
        />

        {/* Rutas protegidas */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <MainLayout onLogout={handleLogout}>
                <Dashboard />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/usuarios"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <MainLayout onLogout={handleLogout}>
                <ErrorBoundary
                  fallback={<RemoteNotAvailable moduleName="Users" />}
                >
                  <UsersApp />
                </ErrorBoundary>
              </MainLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/configuracion"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <MainLayout onLogout={handleLogout}>
                <Configuracion />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        {/* Ruta por defecto */}
        <Route
          path="/"
          element={<TestPage />}
        />

        {/* Ruta 404 */}
        <Route
          path="*"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <MainLayout onLogout={handleLogout}>
                <NotFound />
              </MainLayout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

