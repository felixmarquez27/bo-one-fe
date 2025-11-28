import React from 'react';

export const TestPage: React.FC = () => {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            backgroundColor: '#f5f5f5',
            fontFamily: 'Arial, sans-serif',
        }}>
            <h1 style={{
                fontSize: '2.5rem',
                color: '#1976d2',
                margin: 0,
            }}>
                Página de Prueba - Shell App
            </h1>
        </div>
    );
};

