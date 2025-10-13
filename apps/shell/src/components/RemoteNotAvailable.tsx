import React from 'react';

interface RemoteNotAvailableProps {
  moduleName: string;
  onRetry?: () => void;
}

export const RemoteNotAvailable: React.FC<RemoteNotAvailableProps> = ({ 
  moduleName, 
  onRetry 
}) => {
  return (
    <div className="space-y-5">
      <div className="bg-white border border-gray-200 rounded p-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-semibold text-slate-900">
            Módulo No Disponible
          </h1>
          {onRetry && (
            <button
              onClick={onRetry}
              className="px-4 py-2 bg-slate-800 text-white text-sm font-medium rounded hover:bg-slate-900 transition-colors"
            >
              Reintentar
            </button>
          )}
        </div>
        <p className="text-slate-600 text-sm">
          El módulo <span className="font-semibold">{moduleName}</span> no está disponible en este momento.
        </p>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded p-8">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <svg 
              className="w-12 h-12 text-amber-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
              />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-amber-900 mb-2">
              Servicio Temporalmente No Disponible
            </h3>
            <p className="text-amber-800 text-sm mb-4">
              Este módulo puede no estar disponible por las siguientes razones:
            </p>
            <ul className="list-disc list-inside space-y-2 text-amber-700 text-sm">
              <li>El servicio está en mantenimiento</li>
              <li>Hay problemas de conectividad de red</li>
              <li>El contenedor del módulo no está iniciado</li>
              <li>Error en la configuración de Module Federation</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded p-6">
        <h3 className="text-base font-semibold text-slate-900 mb-3">
          Información Técnica
        </h3>
        <div className="space-y-2 text-sm text-slate-600">
          <p><span className="font-medium">Módulo:</span> {moduleName}</p>
          <p><span className="font-medium">Estado:</span> Desconectado</p>
          <p><span className="font-medium">Tipo:</span> Module Federation Remote</p>
        </div>
        
        <div className="mt-4 pt-4 border-t border-slate-200">
          <h4 className="text-sm font-medium text-slate-700 mb-2">
            ¿Eres administrador?
          </h4>
          <p className="text-xs text-slate-600 mb-3">
            Verifica que el servicio esté corriendo:
          </p>
          <pre className="bg-slate-800 text-slate-100 p-3 rounded text-xs overflow-x-auto">
            docker ps | grep bo-one-{moduleName.toLowerCase()}
          </pre>
          <p className="text-xs text-slate-600 mt-2">
            O inicia el servicio:
          </p>
          <pre className="bg-slate-800 text-slate-100 p-3 rounded text-xs overflow-x-auto">
            docker compose up -d {moduleName.toLowerCase()}-dev
          </pre>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-4 text-sm text-slate-500">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
        <span>La aplicación principal sigue funcionando normalmente</span>
      </div>
    </div>
  );
};

