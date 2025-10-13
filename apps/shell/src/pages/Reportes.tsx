import React from 'react';

export const Reportes: React.FC = () => {
  return (
    <div className="space-y-5">
      <div className="bg-white border border-gray-200 rounded p-6">
        <h1 className="text-2xl font-semibold text-slate-900">Reportes</h1>
        <p className="text-slate-600 mt-1 text-sm">
          Generación y análisis de reportes
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded p-12 text-center">
        <svg className="w-16 h-16 mx-auto text-slate-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <h3 className="text-lg font-medium text-slate-900 mb-2">Módulo de Reportes</h3>
        <p className="text-sm text-slate-600">Este módulo está en construcción</p>
      </div>
    </div>
  );
};

