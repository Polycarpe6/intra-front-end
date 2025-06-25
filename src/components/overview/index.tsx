// ...existing code...
import React from 'react';

type AlertProps = {
    message: string;
};

const alertStyleBase: React.CSSProperties = {
    position: 'relative',
    zIndex: 9999,
    padding: '12px 16px',
    borderRadius: '4px',
    marginBottom: '12px'
};

export const SuccessAlert: React.FC<AlertProps> = ({ message }) => (
    <div style={{
        ...alertStyleBase,
        backgroundColor: '#d4edda',
        color: '#155724',
        border: '1px solid #c3e6cb'
    }}>
        <strong>Sucesso:</strong> {message}
    </div>
);

export const ErrorAlert: React.FC<AlertProps> = ({ message }) => (
    <div style={{
        ...alertStyleBase,
        backgroundColor: '#f8d7da',
        color: '#721c24',
        border: '1px solid #f5c6cb'
    }}>
        <strong>Erro:</strong> {message}
    </div>
);

export const WarningAlert: React.FC<AlertProps> = ({ message }) => (
    <div style={{
        ...alertStyleBase,
        backgroundColor: '#fff3cd',
        color: '#856404',
        border: '1px solid #ffeeba'
    }}>
        <strong>Atenção:</strong> {message}
    </div>
);