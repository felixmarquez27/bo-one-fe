import React from 'react';

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="bg-white border border-gray-200 rounded p-6">
        <h1 className="text-2xl font-semibold text-slate-900">Dashboard</h1>
        <p className="text-slate-600 mt-1 text-sm">
          Panel de control y métricas principales 2
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white border border-gray-200 rounded p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-600 text-xs font-medium uppercase tracking-wide">Total Usuarios</p>
              <p className="text-3xl font-semibold text-slate-900 mt-2">1,284</p>
              <p className="text-xs text-green-600 mt-1">+12% vs mes anterior</p>
            </div>
            <div className="w-12 h-12 bg-slate-100 rounded flex items-center justify-center">
              <svg className="w-6 h-6 text-slate-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-600 text-xs font-medium uppercase tracking-wide">Productos</p>
              <p className="text-3xl font-semibold text-slate-900 mt-2">456</p>
              <p className="text-xs text-green-600 mt-1">+8% vs mes anterior</p>
            </div>
            <div className="w-12 h-12 bg-blue-50 rounded flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-600 text-xs font-medium uppercase tracking-wide">Ventas Hoy</p>
              <p className="text-3xl font-semibold text-slate-900 mt-2">$12,543</p>
              <p className="text-xs text-red-600 mt-1">-3% vs ayer</p>
            </div>
            <div className="w-12 h-12 bg-green-50 rounded flex items-center justify-center">
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-600 text-xs font-medium uppercase tracking-wide">Reportes</p>
              <p className="text-3xl font-semibold text-slate-900 mt-2">89</p>
              <p className="text-xs text-slate-500 mt-1">Pendientes de revisión</p>
            </div>
            <div className="w-12 h-12 bg-amber-50 rounded flex items-center justify-center">
              <svg className="w-6 h-6 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white border border-gray-200 rounded p-6">
        <h2 className="text-lg font-semibold text-slate-900 mb-4">Actividad Reciente</h2>
        <div className="space-y-4">
          {[
            { accion: 'Nuevo usuario registrado', usuario: 'Juan Pérez', tiempo: 'Hace 5 minutos' },
            { accion: 'Producto actualizado', usuario: 'María García', tiempo: 'Hace 15 minutos' },
            { accion: 'Reporte generado', usuario: 'Carlos Rodríguez', tiempo: 'Hace 1 hora' },
            { accion: 'Configuración modificada', usuario: 'Admin', tiempo: 'Hace 2 horas' },
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
                  <span className="text-xs font-medium text-slate-700">{item.usuario.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900">{item.accion}</p>
                  <p className="text-xs text-slate-500">{item.usuario}</p>
                </div>
              </div>
              <span className="text-xs text-slate-400">{item.tiempo}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

