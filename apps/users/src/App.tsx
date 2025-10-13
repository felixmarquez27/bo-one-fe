import { useState } from 'react';
import '../../../styles/globals.css';

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

  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = users.filter(
    (user) =>
      user.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.rol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-5">

      {/* Users Table */}
      <div className="bg-white border border-gray-200 rounded overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-800 text-white">
              <tr>
                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider">ID</th>
                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider">Nombre</th>
                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider">Email</th>
                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider">Rol</th>
                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider">Estado</th>
                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider">Fecha Registro</th>
                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <tr
                    key={user.id}
                    className="hover:bg-slate-50 transition-colors"
                  >
                    <td className="px-5 py-3.5 text-sm text-slate-900">
                      {user.id}
                    </td>
                    <td className="px-5 py-3.5">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-slate-200 rounded flex items-center justify-center mr-3">
                          <span className="text-slate-700 font-medium text-xs uppercase">
                            {user.nombre.charAt(0)}
                          </span>
                        </div>
                        <span className="text-sm font-medium text-slate-900">
                          {user.nombre}
                        </span>
                      </div>
                    </td>
                    <td className="px-5 py-3.5 text-sm text-slate-600">{user.email}</td>
                    <td className="px-5 py-3.5">
                      <span
                        className={`px-2.5 py-1 rounded text-xs font-medium ${
                          user.rol === 'Administrador'
                            ? 'bg-slate-100 text-slate-700 border border-slate-300'
                            : user.rol === 'Editor'
                            ? 'bg-blue-50 text-blue-700 border border-blue-200'
                            : 'bg-gray-100 text-gray-700 border border-gray-300'
                        }`}
                      >
                        {user.rol}
                      </span>
                    </td>
                    <td className="px-5 py-3.5">
                      <span
                        className={`px-2.5 py-1 rounded text-xs font-medium ${
                          user.estado === 'Activo'
                            ? 'bg-green-50 text-green-700 border border-green-200'
                            : 'bg-red-50 text-red-700 border border-red-200'
                        }`}
                      >
                        {user.estado}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-sm text-slate-600">
                      {new Date(user.fechaRegistro).toLocaleDateString('es-ES', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                      })}
                    </td>
                    <td className="px-5 py-3.5">
                      <div className="flex space-x-1">
                        <button className="p-1.5 text-slate-600 hover:bg-slate-100 rounded transition-colors" title="Editar">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </button>
                        <button className="p-1.5 text-slate-600 hover:bg-slate-100 rounded transition-colors" title="Ver">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </button>
                        <button className="p-1.5 text-red-600 hover:bg-red-50 rounded transition-colors" title="Eliminar">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="px-5 py-12 text-center">
                    <div className="text-slate-400">
                      <svg className="w-12 h-12 mx-auto mb-3 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                      </svg>
                      <p className="text-base font-medium text-slate-600">No se encontraron usuarios</p>
                      <p className="text-sm text-slate-500 mt-1">Intenta con otros términos de búsqueda</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Table Footer */}
        <div className="bg-slate-50 px-5 py-3 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <p className="text-xs text-slate-600">
              Mostrando <span className="font-semibold">{filteredUsers.length}</span> de{' '}
              <span className="font-semibold">{users.length}</span> registros
            </p>
            <div className="flex space-x-2">
              <button className="px-3 py-1.5 border border-gray-300 rounded text-xs font-medium text-slate-700 hover:bg-slate-100 transition-colors">
                Anterior
              </button>
              <button className="px-3 py-1.5 border border-gray-300 rounded text-xs font-medium text-slate-700 hover:bg-slate-100 transition-colors">
                Siguiente
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
