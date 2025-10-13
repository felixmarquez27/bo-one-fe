import React from 'react';

export const Productos: React.FC = () => {
  return (
    <div className="space-y-5">
      <div className="bg-white border border-gray-200 rounded p-6">
        <h1 className="text-2xl font-semibold text-slate-900">Productos</h1>
        <p className="text-slate-600 mt-1 text-sm">
          Gestión de productos y servicios
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded p-12 text-center">
        <svg className="w-16 h-16 mx-auto text-slate-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
        <h3 className="text-lg font-medium text-slate-900 mb-2">Módulo de Productos</h3>
        <p className="text-sm text-slate-600">Este módulo está en construcción</p>
      </div>
    </div>
  );
};

