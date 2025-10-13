import React from 'react';

export const Configuracion: React.FC = () => {
  return (
    <div className="space-y-5">
      <div className="bg-white border border-gray-200 rounded p-6">
        <h1 className="text-2xl font-semibold text-slate-900">Configuración</h1>
        <p className="text-slate-600 mt-1 text-sm">
          Ajustes y preferencias del sistema
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded p-12 text-center">
        <svg className="w-16 h-16 mx-auto text-slate-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <h3 className="text-lg font-medium text-slate-900 mb-2">Módulo de Configuración</h3>
        <p className="text-sm text-slate-600">Este módulo está en construcción</p>
      </div>
    </div>
  );
};

