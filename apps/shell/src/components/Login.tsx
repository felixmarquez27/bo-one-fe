import React, { useState } from 'react';

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
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4 py-8">
      <div className="w-full max-w-md">
        {/* Logo o Título Principal */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-800 rounded mb-4">
            <div className="w-8 h-8 border-4 border-gray-300 rounded"></div>
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-1">BO-ONE</h1>
          <p className="text-slate-600 text-sm">Enterprise Management System</p>
        </div>

        {/* Card de Login */}
        <div className="bg-white rounded shadow-sm border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-slate-800 px-8 py-5 border-b border-slate-700">
            <h2 className="text-xl font-semibold text-white text-center">
              Inicio de Sesión
            </h2>
            <p className="text-slate-300 text-center mt-1 text-sm">
              Ingrese sus credenciales corporativas
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="px-8 py-8">
            <div className="space-y-5">
              {/* Email Input */}
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Usuario / Correo Corporativo 2
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="usuario@empresa.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isLoading}
                  className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-slate-500 focus:border-slate-500 outline-none transition-colors disabled:bg-gray-50 disabled:cursor-not-allowed"
                />
              </div>

              {/* Password Input */}
              <div>
                <label 
                  htmlFor="password" 
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Contraseña
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={isLoading}
                  className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-slate-500 focus:border-slate-500 outline-none transition-colors disabled:bg-gray-50 disabled:cursor-not-allowed"
                />
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-3 py-2.5 rounded text-sm">
                  {error}
                </div>
              )}

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-slate-600 border-gray-300 rounded focus:ring-slate-500"
                  />
                  <span className="ml-2 text-gray-600">
                    Mantener sesión activa
                  </span>
                </label>
                <a 
                  href="#" 
                  className="text-slate-700 hover:text-slate-900 font-medium"
                >
                  Recuperar acceso
                </a>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-slate-800 text-white py-2.5 px-4 rounded text-sm font-medium hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg 
                      className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24"
                    >
                      <circle 
                        className="opacity-25" 
                        cx="12" 
                        cy="12" 
                        r="10" 
                        stroke="currentColor" 
                        strokeWidth="4"
                      />
                      <path 
                        className="opacity-75" 
                        fill="currentColor" 
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Verificando credenciales...
                  </span>
                ) : (
                  'Iniciar Sesión'
                )}
              </button>
            </div>
          </form>

          {/* Footer */}
          <div className="px-8 py-4 bg-gray-50 border-t border-gray-200">
            <p className="text-center text-xs text-gray-500">
              Acceso restringido solo para personal autorizado
            </p>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-6 text-center text-xs text-gray-500">
          <p>© 2025 BO-ONE Enterprise System. Todos los derechos reservados.</p>
        </div>
      </div>
    </div>
  );
};

