import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface MenuItem {
  id: string;
  name: string;
  path: string;
}

interface SidebarProps {
  onLogout: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onLogout }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  const menuItems: MenuItem[] = [
    { id: 'dashboard', name: 'Dashboard', path: '/dashboard' },
    { id: 'usuarios', name: 'Usuarios', path: '/usuarios' },
    { id: 'configuracion', name: 'Configuración', path: '/configuracion' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Toggle button para mobile */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-4 left-4 z-50 md:hidden bg-slate-800 text-white p-2 rounded shadow"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isSidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Overlay para mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full bg-slate-900 text-gray-100 w-64 transform transition-transform duration-300 ease-in-out z-40 border-r border-slate-700 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        {/* Logo/Header */}
        <div className="px-6 py-5 border-b border-slate-700 bg-slate-950">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-slate-700 rounded flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-gray-300 rounded-sm"></div>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white">BO-ONE</h2>
              <p className="text-xs text-gray-400">Enterprise System</p>
            </div>
          </div>
        </div>

        {/* User Info */}
        <div className="px-6 py-4 border-b border-slate-700 bg-slate-850">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 bg-slate-700 rounded flex items-center justify-center">
              <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">Administrator</p>
              <p className="text-xs text-gray-400 truncate">admin@bo-one.com</p>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-3">
            {menuItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.path}
                  onClick={() => setIsSidebarOpen(false)}
                  className={`block w-full text-left px-4 py-2.5 text-sm font-medium transition-colors duration-150 ${
                    isActive(item.path)
                      ? 'bg-slate-700 text-white border-l-4 border-blue-500'
                      : 'text-gray-300 hover:bg-slate-800 hover:text-white border-l-4 border-transparent'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer with Logout */}
        <div className="p-4 border-t border-slate-700">
          <button
            onClick={onLogout}
            className="w-full px-4 py-2.5 text-sm font-medium text-left text-gray-300 hover:bg-slate-800 hover:text-white transition-colors duration-150 border-l-4 border-transparent hover:border-red-500"
          >
            Cerrar Sesión
          </button>
        </div>
      </aside>
    </>
  );
};

