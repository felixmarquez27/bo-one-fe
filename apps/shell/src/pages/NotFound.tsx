import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-slate-200">404</h1>
        <h2 className="text-2xl font-semibold text-slate-900 mt-4">Página no encontrada</h2>
        <p className="text-slate-600 mt-2 mb-8">
          La página que buscas no existe o ha sido movida.
        </p>
        <Link
          to="/dashboard"
          className="inline-block px-6 py-3 bg-slate-800 text-white text-sm font-medium rounded hover:bg-slate-900 transition-colors"
        >
          Volver al Dashboard
        </Link>
      </div>
    </div>
  );
};

